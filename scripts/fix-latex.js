const fs = require('fs');
const path = require('path');

// Fonction pour corriger les doubles backslashes dans les expressions LaTeX
function fixLatexInContent(content) {
  let fixes = 0;
  
  // Remplacer les doubles backslashes par des simples dans les expressions LaTeX
  const fixedContent = content.replace(/\$([^$]+)\$/g, (match, latexContent) => {
    const originalContent = latexContent;
    
    // Corriger les doubles backslashes pour les commandes LaTeX courantes
    let fixedLatex = latexContent
      // Connecteurs logiques
      .replace(/\\\\vee/g, '\\vee')
      .replace(/\\\\wedge/g, '\\wedge')
      .replace(/\\\\neg/g, '\\neg')
      .replace(/\\\\Rightarrow/g, '\\Rightarrow')
      .replace(/\\\\Leftrightarrow/g, '\\Leftrightarrow')
      .replace(/\\\\equiv/g, '\\equiv')
      .replace(/\\\\models/g, '\\models')
      .replace(/\\\\vdash/g, '\\vdash')
      .replace(/\\\\mapsto/g, '\\mapsto')
      .replace(/\\\\to/g, '\\to')
      
      // Symboles mathématiques
      .replace(/\\\\lambda/g, '\\lambda')
      .replace(/\\\\sigma/g, '\\sigma')
      .replace(/\\\\mu/g, '\\mu')
      .replace(/\\\\chi/g, '\\chi')
      .replace(/\\\\alpha/g, '\\alpha')
      .replace(/\\\\beta/g, '\\beta')
      .replace(/\\\\gamma/g, '\\gamma')
      .replace(/\\\\delta/g, '\\delta')
      .replace(/\\\\epsilon/g, '\\epsilon')
      .replace(/\\\\theta/g, '\\theta')
      .replace(/\\\\pi/g, '\\pi')
      .replace(/\\\\phi/g, '\\phi')
      .replace(/\\\\psi/g, '\\psi')
      .replace(/\\\\omega/g, '\\omega')
      .replace(/\\\\Gamma/g, '\\Gamma')
      .replace(/\\\\Delta/g, '\\Delta')
      .replace(/\\\\Theta/g, '\\Theta')
      .replace(/\\\\Lambda/g, '\\Lambda')
      .replace(/\\\\Pi/g, '\\Pi')
      .replace(/\\\\Sigma/g, '\\Sigma')
      .replace(/\\\\Phi/g, '\\Phi')
      .replace(/\\\\Psi/g, '\\Psi')
      .replace(/\\\\Omega/g, '\\Omega')
      
      // Opérateurs mathématiques
      .replace(/\\\\exp/g, '\\exp')
      .replace(/\\\\sin/g, '\\sin')
      .replace(/\\\\cos/g, '\\cos')
      .replace(/\\\\tan/g, '\\tan')
      .replace(/\\\\log/g, '\\log')
      .replace(/\\\\ln/g, '\\ln')
      .replace(/\\\\sqrt/g, '\\sqrt')
      .replace(/\\\\frac/g, '\\frac')
      .replace(/\\\\sum/g, '\\sum')
      .replace(/\\\\prod/g, '\\prod')
      .replace(/\\\\int/g, '\\int')
      .replace(/\\\\lim/g, '\\lim')
      .replace(/\\\\partial/g, '\\partial')
      
      // Relations
      .replace(/\\\\leq/g, '\\leq')
      .replace(/\\\\geq/g, '\\geq')
      .replace(/\\\\neq/g, '\\neq')
      .replace(/\\\\approx/g, '\\approx')
      .replace(/\\\\equiv/g, '\\equiv')
      .replace(/\\\\sim/g, '\\sim')
      
      // Symboles spéciaux
      .replace(/\\\\infty/g, '\\infty')
      .replace(/\\\\cdot/g, '\\cdot')
      .replace(/\\\\times/g, '\\times')
      .replace(/\\\\pm/g, '\\pm')
      .replace(/\\\\top/g, '\\top')
      .replace(/\\\\bot/g, '\\bot')
      .replace(/\\\\perp/g, '\\perp')
      .replace(/\\\\oplus/g, '\\oplus')
      
      // Ensembles
      .replace(/\\\\mathbb/g, '\\mathbb')
      .replace(/\\\\text/g, '\\text')
      .replace(/\\\\Cov/g, '\\text{Cov}');
    
    if (fixedLatex !== originalContent) {
      fixes++;
      console.log(`  🔧 Corrigé: "${originalContent}" → "${fixedLatex}"`);
    }
    
    return `$${fixedLatex}$`;
  });
  
  return { content: fixedContent, fixes };
}

// Fonction pour corriger un fichier
function fixLatexInFile(filePath) {
  console.log(`\n📝 Correction de ${path.basename(filePath)}...`);
  
  try {
    const originalContent = fs.readFileSync(filePath, 'utf8');
    const { content: fixedContent, fixes } = fixLatexInContent(originalContent);
    
    if (fixes > 0) {
      // Créer une sauvegarde
      const backupPath = filePath + '.backup';
      fs.writeFileSync(backupPath, originalContent);
      console.log(`  💾 Sauvegarde créée: ${path.basename(backupPath)}`);
      
      // Écrire le contenu corrigé
      fs.writeFileSync(filePath, fixedContent);
      console.log(`  ✅ ${fixes} corrections appliquées`);
    } else {
      console.log(`  ✅ Aucune correction nécessaire`);
    }
    
    return fixes;
    
  } catch (error) {
    console.error(`❌ Erreur lors de la correction de ${filePath}:`, error.message);
    return 0;
  }
}

// Script principal
function main() {
  console.log('🔧 CORRECTION AUTOMATIQUE DU LATEX\n');
  
  const questionFiles = [
    'lib/questions.ts',
    'lib/deduction-questions.ts',
    'lib/lambda-calculus-questions.ts',
    'lib/evaluation-questions.ts',
    'lib/advanced-logic-questions.ts',
    'lib/probability-questions.ts'
  ];
  
  let totalFixes = 0;
  
  questionFiles.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (fs.existsSync(filePath)) {
      const fixes = fixLatexInFile(filePath);
      totalFixes += fixes;
    } else {
      console.log(`⚠️  Fichier non trouvé: ${file}`);
    }
  });
  
  console.log('\n📋 RÉSUMÉ:');
  console.log('===========');
  console.log(`🔧 Total corrections: ${totalFixes}`);
  
  if (totalFixes > 0) {
    console.log('\n✅ SUCCÈS!');
    console.log('- Les doubles backslashes ont été corrigés');
    console.log('- Des sauvegardes (.backup) ont été créées');
    console.log('- Testez maintenant le rendu LaTeX');
    console.log('\n💡 CONSEIL:');
    console.log('- Lancez `npm run build` pour vérifier la compilation');
    console.log('- Lancez `node scripts/test-latex.js` pour re-tester');
  } else {
    console.log('ℹ️  Aucune correction nécessaire');
  }
}

if (require.main === module) {
  main();
}

module.exports = { fixLatexInContent, fixLatexInFile }; 
