const fs = require('fs');
const path = require('path');

function cleanLatexSyntax(text) {
  return text
    // Fix broken patterns like "$ $text$", "$text$ $", "$ $text"
    .replace(/\$\s+\$/g, '$')
    .replace(/\$([^$]*?)\$\s+\$/g, '$$$1$$')
    .replace(/\$\s+([^$]*?)\$/g, '$$$1$$')
    
    // Fix patterns like "$(A \vee B) \wedge (\neg C \vee D)$ $"
    .replace(/\$([^$]*?)\$\s+\$/g, '$$$1$$')
    
    // Fix patterns like "$ $A \vee (B \wedge C)$"
    .replace(/\$\s+\$([^$]*?)\$/g, '$$$1$$')
    
    // Fix isolated $ signs that should be removed
    .replace(/\$\s*\$/g, '')
    
    // Fix double backslashes that should be single
    .replace(/\\\\neg/g, '\\neg')
    .replace(/\\\\wedge/g, '\\wedge')
    .replace(/\\\\vee/g, '\\vee')
    .replace(/\\\\Rightarrow/g, '\\Rightarrow')
    .replace(/\\\\equiv/g, '\\equiv')
    .replace(/\\\\forall/g, '\\forall')
    .replace(/\\\\exists/g, '\\exists')
    .replace(/\\\\mapsto/g, '\\mapsto')
    .replace(/\\\\to/g, '\\to')
    .replace(/\\\\sigma/g, '\\sigma')
    .replace(/\\\\tau/g, '\\tau')
    .replace(/\\\\lambda/g, '\\lambda')
    .replace(/\\\\alpha/g, '\\alpha')
    .replace(/\\\\beta/g, '\\beta')
    .replace(/\\\\gamma/g, '\\gamma')
    .replace(/\\\\delta/g, '\\delta')
    
    // Clean up text mixed with latex like "$A \Rightarrow B$équivaut à :"
    .replace(/\$([^$]*?)\$([a-zA-Zàáâäçéèêëïîôöùúûüÿ])/g, '$$$1$$ $2')
    
    // Fix space issues in explanations
    .replace(/A\$\\wedge \\neg A\$/g, '$A \\wedge \\neg A$')
    .replace(/A\$ \$\\vee \\neg A\$ \$/g, '$A \\vee \\neg A$')
    .replace(/\$\\neg \$A/g, '$\\neg A$')
    .replace(/B\$ \$\\Rightarrow \\neg\$A/g, '$B \\Rightarrow \\neg A$')
    .replace(/A ⇒ B\$ \$\\equiv \\neg\$ \$B\$\\Rightarrow \\neg\$A/g, '$A \\Rightarrow B \\equiv \\neg B \\Rightarrow \\neg A$')
    .replace(/A ⇒ B\$ \$\\equiv \\neg\$A ∨ B/g, '$A \\Rightarrow B \\equiv \\neg A \\vee B$')
    .replace(/\\Rightarrow\$lors/g, '\\Rightarrow$ lors')
    .replace(/\$ \$\\neg\$, \$\\wedge\$ \$et\$\\v\$/g, '$\\neg$, $\\wedge$ et $\\vee$')
    
    // Fix patterns in explanations with broken spaces
    .replace(/C\$ \$\\wedge \\neg D\$ \$/g, '$C \\wedge \\neg D$')
    .replace(/\\wedge \\neg A\$est/g, '\\wedge \\neg A$ est')
    .replace(/A\$ \$\\vee \\neg A\$ \$/g, '$A \\vee \\neg A$')
    .replace(/=\$ \$\\top \\vee \\bot\$/g, '= $\\top \\vee \\bot$')
    .replace(/=\$\\bot \\vee \\top\$/g, '= $\\bot \\vee \\top$')
    .replace(/A\$\\vee \\neg A\$/g, '$A \\vee \\neg A$')
    .replace(/A\$ \$\\wedge \\neg A\$ \$/g, '$A \\wedge \\neg A$')
    .replace(/=\$\\top \\wedge \\bot\$/g, '= $\\top \\wedge \\bot$')
    .replace(/=\$ \$\\bot \\wedge \\top\$ \$/g, '= $\\bot \\wedge \\top$')
    .replace(/A\$ \$\\wedge \\neg A\$/g, '$A \\wedge \\neg A$')
    .replace(/P ⇒ Q\$ \$\\equiv \\neg P \\vee Q\$/g, '$P \\Rightarrow Q \\equiv \\neg P \\vee Q$')
    .replace(/= \$\\bot \\vee \\bot\$ \$/g, '= $\\bot \\vee \\bot$')
    .replace(/\\psi \\to \\phi\$/g, '$\\psi \\to \\phi$')
    .replace(/=\$ \$\\neg \\bot\$/g, '= $\\neg \\bot$')
    .replace(/=\$ \$\\neg \\top\$ \$/g, '= $\\neg \\top$')
    .replace(/A\$\\wedge \\neg B\$/g, '$A \\wedge \\neg B$')
    .replace(/\\text\{I\}\$ \$/g, '\\text{I}$')
    .replace(/\\to \\sigma\$ \$/g, '\\to \\sigma$')
    .replace(/\$\\alpha\$\\text\{\$.\$\\alpha \\to \\alpha\$ \$/g, '$\\alpha$.$\\alpha \\to \\alpha$')
    .replace(/A\$\\vee \\neg B\$/g, '$A \\vee \\neg B$')
    .replace(/\$\\wedge\\text\{I\}\$ \$/g, '$\\wedge\\text{I}$')
    .replace(/\$A \\wedge B\$/g, '$A \\wedge B$')
    .replace(/\$ \$A \\wedge B\$/g, '$A \\wedge B$')
    .replace(/\$\\Rightarrow\\text\{E\}\$/g, '$\\Rightarrow\\text{E}$')
    .replace(/\$ \$A \\Rightarrow B\$ \$/g, '$A \\Rightarrow B$')
    .replace(/\$A \\Rightarrow B\$ \$/g, '$A \\Rightarrow B$')
    .replace(/\$\\vee\\text\{E\}\$ \$/g, '$\\vee\\text{E}$')
    .replace(/\\neg\\text\{I\}\$/g, '$\\neg\\text{I}$')
    .replace(/\\phi \\equiv \\phi\$/g, '$\\phi \\equiv \\phi$')
    .replace(/\$ \$\\phi \\equiv \\psi \\Rightarrow \\psi \\equiv \\phi\$/g, '$\\phi \\equiv \\psi \\Rightarrow \\psi \\equiv \\phi$')
    .replace(/\$\\phi \\equiv \\psi \\wedge \\psi \\equiv \\chi \\Rightarrow \\phi \\equiv \\chi\$/g, '$\\phi \\equiv \\psi \\wedge \\psi \\equiv \\chi \\Rightarrow \\phi \\equiv \\chi$')
    
    // Remove multiple spaces
    .replace(/  +/g, ' ')
    
    // Fix common broken patterns
    .replace(/\$ \$/g, '$')
    .replace(/\$\$/g, '$');
}

function processFile(filePath) {
  console.log(`Processing ${filePath}...`);
  
  const content = fs.readFileSync(filePath, 'utf8');
  const cleanedContent = cleanLatexSyntax(content);
  
  if (content !== cleanedContent) {
    fs.writeFileSync(filePath, cleanedContent, 'utf8');
    console.log(`✅ Fixed ${filePath}`);
  } else {
    console.log(`⚪ No changes needed for ${filePath}`);
  }
}

// Process all question files
const libDir = path.join(__dirname, '..', 'lib');
const questionFiles = [
  'questions.ts',
  'deduction-questions.ts',
  'lambda-calculus-questions.ts',
  'evaluation-questions.ts',
  'advanced-logic-questions.ts',
  'probability-questions.ts',
  'copyright-questions.ts',
  'risk-management-questions.ts'
];

console.log('🧹 Cleaning LaTeX syntax in all question files...\n');

questionFiles.forEach(file => {
  const filePath = path.join(libDir, file);
  if (fs.existsSync(filePath)) {
    processFile(filePath);
  } else {
    console.log(`⚠️  File not found: ${filePath}`);
  }
});

console.log('\n✨ LaTeX cleanup complete!'); 
