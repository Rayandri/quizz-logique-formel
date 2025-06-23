const fs = require('fs');
const path = require('path');

function fixSpecificLatexIssues() {
  console.log('🔧 CORRECTION MANUELLE DES PROBLÈMES LATEX SPÉCIFIQUES\n');
  
  // Fix advanced logic questions - mixed single/double backslash patterns
  const advancedFile = path.join(__dirname, '..', 'lib', 'advanced-logic-questions.ts');
  if (fs.existsSync(advancedFile)) {
    let content = fs.readFileSync(advancedFile, 'utf8');
    let fixes = 0;
    
    // Fix mixed tau patterns
    const originalContent = content;
    content = content.replace(/\$\(\\sigma \\to \\\\tau\)/g, '$(\sigma \\to \\tau)');
    content = content.replace(/\$\\sigma \\to \\\\tau \\to \\sigma\$/g, '$\sigma \\to \\tau \\to \sigma$');
    
    if (content !== originalContent) {
      fs.writeFileSync(advancedFile, content);
      fixes++;
      console.log(`✅ Corrigé advanced-logic-questions.ts - patterns tau mixtes`);
    }
  }
  
  // Check for any remaining double backslash issues in LaTeX expressions
  const files = [
    'lib/questions.ts',
    'lib/lambda-calculus-questions.ts',
    'lib/advanced-logic-questions.ts',
    'lib/evaluation-questions.ts',
    'lib/deduction-questions.ts',
    'lib/probability-questions.ts'
  ];
  
  files.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      let fileFixed = false;
      
      // Fix any instances of mixed backslash patterns in LaTeX expressions
      content = content.replace(/\$([^$]*?)\\\\(lambda|sigma|tau|mu|gamma|delta|alpha|beta|omega|Omega|vee|wedge|neg|to|times|cup|emptyset|frac|overline|quad|vdash|in|Gamma|Pi|varepsilon|oplus|cdot)([^$]*?)\$/g, 
        (match, before, command, after) => {
          fileFixed = true;
          return `$${before}\\${command}${after}$`;
        });
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        console.log(`✅ Corrigé ${path.basename(file)} - patterns de backslash mixtes`);
      }
    }
  });
  
  console.log('\n🎯 Correction ciblée terminée');
}

if (require.main === module) {
  fixSpecificLatexIssues();
} 
