const fs = require('fs');
const path = require('path');

// Fonction pour extraire les expressions LaTeX d'un texte
function extractLatexExpressions(text) {
  const expressions = [];
  const regex = /\$([^$]+)\$/g;
  let match;
  
  while ((match = regex.exec(text)) !== null) {
    expressions.push(match[1]);
  }
  
  return expressions;
}

// Fonction pour vérifier si une expression LaTeX est potentiellement problématique
function checkLatexExpression(expr) {
  const issues = [];
  
  // Vérifier les parenthèses non équilibrées
  const openParens = (expr.match(/\(/g) || []).length;
  const closeParens = (expr.match(/\)/g) || []).length;
  if (openParens !== closeParens) {
    issues.push('Parenthèses non équilibrées');
  }
  
  // Vérifier les accolades non équilibrées
  const openBraces = (expr.match(/\{/g) || []).length;
  const closeBraces = (expr.match(/\}/g) || []).length;
  if (openBraces !== closeBraces) {
    issues.push('Accolades non équilibrées');
  }
  
  // Vérifier les commandes potentiellement problématiques
  const problematicCommands = [
    /\\[a-zA-Z]+\s*\{[^}]*$/,  // Commande avec accolade non fermée
    /\$\s*$/,                   // Dollar suivi d'espaces en fin
    /^\s*\$/,                   // Dollar précédé d'espaces en début
    /\\\\/,                     // Double backslash
  ];
  
  problematicCommands.forEach((pattern, index) => {
    if (pattern.test(expr)) {
      issues.push(`Pattern problématique ${index + 1}`);
    }
  });
  
  return issues;
}

// Fonction pour analyser un fichier de questions
function analyzeQuestionFile(filePath) {
  console.log(`\n📁 Analyse de ${path.basename(filePath)}...`);
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extraire les questions (recherche de patterns JSON-like)
    const questionMatches = content.match(/\{[\s\S]*?\}/g) || [];
    
    let totalQuestions = 0;
    let questionsWithLatex = 0;
    let totalLatexExpressions = 0;
    let problematicExpressions = [];
    
    questionMatches.forEach((questionStr, index) => {
      try {
        // Essayer de nettoyer et analyser comme du pseudo-JSON
        const lines = questionStr.split('\n');
        const questionData = {};
        
        lines.forEach(line => {
          const trimmed = line.trim();
          if (trimmed.includes('question:') || trimmed.includes('explanation:')) {
            const colonIndex = trimmed.indexOf(':');
            if (colonIndex > -1) {
              const value = trimmed.substring(colonIndex + 1).trim();
              if (value.startsWith('"') && value.endsWith('",')) {
                const content = value.slice(1, -2); // Enlever les guillemets
                
                const latexExpressions = extractLatexExpressions(content);
                if (latexExpressions.length > 0) {
                  questionsWithLatex++;
                  totalLatexExpressions += latexExpressions.length;
                  
                  latexExpressions.forEach(expr => {
                    const issues = checkLatexExpression(expr);
                    if (issues.length > 0) {
                      problematicExpressions.push({
                        file: path.basename(filePath),
                        questionIndex: index,
                        expression: expr,
                        issues: issues
                      });
                    }
                  });
                }
              }
            }
          }
          
          // Vérifier aussi les options
          if (trimmed.startsWith('"$') && trimmed.endsWith('",')) {
            const content = trimmed.slice(1, -2);
            const latexExpressions = extractLatexExpressions(content);
            
            latexExpressions.forEach(expr => {
              const issues = checkLatexExpression(expr);
              if (issues.length > 0) {
                problematicExpressions.push({
                  file: path.basename(filePath),
                  questionIndex: index,
                  expression: expr,
                  issues: issues
                });
              }
            });
          }
        });
        
        totalQuestions++;
      } catch (e) {
        // Ignorer les erreurs de parsing pour les objets non-question
      }
    });
    
    console.log(`  📊 ${totalQuestions} questions trouvées`);
    console.log(`  📝 ${questionsWithLatex} questions avec LaTeX`);
    console.log(`  🔢 ${totalLatexExpressions} expressions LaTeX au total`);
    
    if (problematicExpressions.length > 0) {
      console.log(`  ⚠️  ${problematicExpressions.length} expressions potentiellement problématiques`);
      
      problematicExpressions.forEach(prob => {
        console.log(`    🔴 "${prob.expression}"`);
        console.log(`       Issues: ${prob.issues.join(', ')}`);
      });
    } else {
      console.log(`  ✅ Aucun problème détecté`);
    }
    
    return {
      file: path.basename(filePath),
      totalQuestions,
      questionsWithLatex,
      totalLatexExpressions,
      problematicExpressions
    };
    
  } catch (error) {
    console.error(`❌ Erreur lors de l'analyse de ${filePath}:`, error.message);
    return null;
  }
}

// Script principal
function main() {
  console.log('🔍 VÉRIFICATION DU LATEX DANS TOUTES LES QUESTIONS\n');
  
  const questionFiles = [
    'lib/questions.ts',
    'lib/deduction-questions.ts',
    'lib/lambda-calculus-questions.ts',
    'lib/evaluation-questions.ts',
    'lib/advanced-logic-questions.ts',
    'lib/probability-questions.ts',
    'lib/copyright-questions.ts',
    'lib/risk-management-questions.ts'
  ];
  
  const results = [];
  
  questionFiles.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (fs.existsSync(filePath)) {
      const result = analyzeQuestionFile(filePath);
      if (result) {
        results.push(result);
      }
    } else {
      console.log(`⚠️  Fichier non trouvé: ${file}`);
    }
  });
  
  // Résumé global
  console.log('\n📋 RÉSUMÉ GLOBAL:');
  console.log('================');
  
  const totals = results.reduce((acc, result) => {
    acc.totalQuestions += result.totalQuestions;
    acc.questionsWithLatex += result.questionsWithLatex;
    acc.totalLatexExpressions += result.totalLatexExpressions;
    acc.totalProblematicExpressions += result.problematicExpressions.length;
    return acc;
  }, {
    totalQuestions: 0,
    questionsWithLatex: 0,
    totalLatexExpressions: 0,
    totalProblematicExpressions: 0
  });
  
  console.log(`📚 Total questions: ${totals.totalQuestions}`);
  console.log(`📝 Questions avec LaTeX: ${totals.questionsWithLatex}`);
  console.log(`🔢 Expressions LaTeX: ${totals.totalLatexExpressions}`);
  
  if (totals.totalProblematicExpressions > 0) {
    console.log(`❌ Expressions problématiques: ${totals.totalProblematicExpressions}`);
    console.log('\n🔧 RECOMMANDATIONS:');
    console.log('- Vérifier les expressions signalées');
    console.log('- Équilibrer les parenthèses/accolades');
    console.log('- Éviter les doubles backslashes');
    console.log('- Nettoyer les espaces autour des $');
  } else {
    console.log('✅ Aucune expression problématique détectée !');
  }
  
  // Fichiers avec le plus de LaTeX
  console.log('\n📊 FICHIERS AVEC LE PLUS DE LATEX:');
  results
    .filter(r => r.questionsWithLatex > 0)
    .sort((a, b) => b.totalLatexExpressions - a.totalLatexExpressions)
    .forEach(result => {
      console.log(`  ${result.file}: ${result.totalLatexExpressions} expressions`);
    });
}

if (require.main === module) {
  main();
}

module.exports = { analyzeQuestionFile, extractLatexExpressions, checkLatexExpression }; 
