const fs = require('fs');
const path = require('path');

function fixAdvancedLatexIssues() {
  console.log('🔧 Correction avancée des problèmes LaTeX restants...\n');
  
  const questionFiles = [
    'lib/questions.ts',
    'lib/evaluation-questions.ts',
    'lib/probability-questions.ts',
    'lib/lambda-calculus-questions.ts',
    'lib/deduction-questions.ts',
    'lib/advanced-logic-questions.ts'
  ];
  
  let totalFixes = 0;
  
  questionFiles.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (fs.existsSync(filePath)) {
      console.log(`📁 Traitement de ${path.basename(file)}...`);
      
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      let fileFixes = 0;
      
      // 1. Corriger les expressions avec des symboles $ visibles dans le texte
      const beforeSymbolFix = content;
      content = content.replace(
        /\$\\?(top|bot|vee|wedge|neg|Rightarrow|Leftrightarrow)\s+\\?(vee|wedge|neg|bot|top)\$\s*=/g,
        (match, sym1, sym2) => {
          fileFixes++;
          return `$\\${sym1} \\${sym2}$ =`;
        }
      );
      
      // 2. Corriger les expressions mixtes avec $ et symboles
      content = content.replace(
        /v\(A\s+\$([^$]*?)\$\)/g,
        (match, inner) => {
          fileFixes++;
          return `v(A $${inner}$)`;
        }
      );
      
      // 3. Corriger les expressions incomplètes comme "ee eg"
      content = content.replace(
        /\$([^$]*?)\\?ee\s+(eg|op)\s*([^$]*?)\$/g,
        (match, before, middle, after) => {
          fileFixes++;
          const corrected = middle === 'eg' ? '\\text{e.g.}' : '\\text{op}';
          return `$${before}${corrected}${after}$`;
        }
      );
      
      // 4. Corriger les doubles négations mal formatées
      content = content.replace(
        /\$\\?neg\s+\\?neg\s+([A-Za-z]+)\$/g,
        (match, variable) => {
          fileFixes++;
          return `$\\neg \\neg ${variable}$`;
        }
      );
      
      // 5. Corriger les équivalences mal formatées
      content = content.replace(
        /\$([A-Za-z]+)\s+\\?equiv\s+([^$]+)\$/g,
        (match, left, right) => {
          fileFixes++;
          return `$${left} \\equiv ${right}$`;
        }
      );
      
      // 6. Corriger les implications mal formatées avec espaces
      content = content.replace(
        /\$([^$]*?)\\?Rightarrow\s+\\?neg\s*([A-Za-z])\$/g,
        (match, before, variable) => {
          fileFixes++;
          return `$${before.trim()} \\Rightarrow \\neg ${variable}$`;
        }
      );
      
      // 7. Corriger les valeurs de vérité mal formatées
      content = content.replace(
        /\$\\?(top|bot)\s+\\?(vee|wedge)\s+\\?(bot|top)\$/g,
        (match, val1, op, val2) => {
          fileFixes++;
          return `$\\${val1} \\${op} \\${val2}$`;
        }
      );
      
      // 8. Corriger les expressions avec parenthèses et connecteurs
      content = content.replace(
        /\$\(([^)]+)\)\s+\\?(wedge|vee)\s+\(([^)]+)\)\$/g,
        (match, expr1, op, expr2) => {
          fileFixes++;
          return `$(${expr1}) \\${op} (${expr2})$`;
        }
      );
      
      // 9. Nettoyer les espaces multiples dans les expressions LaTeX
      content = content.replace(
        /\$([^$]*?)\$/g,
        (match, inner) => {
          const cleaned = inner.replace(/\s+/g, ' ').trim();
          if (cleaned !== inner) {
            fileFixes++;
          }
          return `$${cleaned}$`;
        }
      );
      
      // 10. Corriger les symboles de logique propositionnelle mal écrits
      content = content.replace(
        /\$([^$]*?)\\?(vee|wedge|neg|Rightarrow|Leftrightarrow|equiv)([^$]*?)\$/g,
        (match, before, op, after) => {
          const fixedOp = op.startsWith('\\') ? op : `\\${op}`;
          const needsFix = !op.startsWith('\\');
          if (needsFix) fileFixes++;
          return `$${before}${fixedOp}${after}$`;
        }
      );
      
      // 11. Corriger les expressions de type "A $ B $" qui sont cassées
      content = content.replace(
        /([A-Za-z]+)\s+\$\s+([^$]*?)\s+\$/g,
        (match, variable, expression) => {
          fileFixes++;
          return `${variable} $${expression}$`;
        }
      );
      
      // 12. Corriger les expressions malformées dans les explications
      content = content.replace(
        /explanation:\s*"([^"]*?)([A-Za-z]+)\s+\$([^$]*?)\$([^"]*?)"/g,
        (match, before, variable, expr, after) => {
          // Vérifier si c'est vraiment une erreur
          if (before.endsWith(' ') || after.startsWith(' ')) {
            fileFixes++;
            return `explanation: "${before}${variable} $${expr}$${after}"`;
          }
          return match;
        }
      );
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        console.log(`  ✅ ${fileFixes} corrections appliquées`);
        totalFixes += fileFixes;
      } else {
        console.log(`  ✨ Aucune correction nécessaire`);
      }
    }
  });
  
  console.log(`\n🎯 Correction avancée terminée: ${totalFixes} corrections au total`);
  
  // Vérification post-correction
  console.log('\n🔍 Vérification post-correction...');
  questionFiles.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Détecter les expressions potentiellement problématiques restantes
      const suspiciousPatterns = [
        /\$[^$]*?[A-Za-z]+\s+\$[^$]*?\$/g,  // Variables suivies de $ isolé
        /\$[^$]*?\s{3,}[^$]*?\$/g,           // Espaces multiples
        /\$[^$]*?\\[a-z]+[^A-Za-z\\][^$]*?\$/g, // Commandes sans backslash approprié
      ];
      
      let issues = 0;
      suspiciousPatterns.forEach(pattern => {
        const matches = content.match(pattern);
        if (matches) {
          issues += matches.length;
        }
      });
      
      if (issues > 0) {
        console.log(`  ⚠️  ${path.basename(file)}: ${issues} expressions potentiellement problématiques restantes`);
      } else {
        console.log(`  ✅ ${path.basename(file)}: Aucun problème détecté`);
      }
    }
  });
}

if (require.main === module) {
  fixAdvancedLatexIssues();
}

module.exports = { fixAdvancedLatexIssues }; 
