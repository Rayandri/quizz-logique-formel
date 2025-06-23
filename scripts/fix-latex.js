const fs = require('fs')
const path = require('path')

const unicodeToLatex = {
  '⇒': '\\Rightarrow',
  '⇔': '\\Leftrightarrow', 
  '∧': '\\wedge',
  '∨': '\\vee',
  '¬': '\\neg',
  '≡': '\\equiv',
  '≢': '\\not\\equiv',
  '⊤': '\\top',
  '⊥': '\\perp',
  '∀': '\\forall',
  '∃': '\\exists',
  '→': '\\to',
  '←': '\\leftarrow',
  '↔': '\\leftrightarrow',
  '×': '\\times',
  '∪': '\\cup',
  '∩': '\\cap',
  '⊆': '\\subseteq',
  '⊇': '\\supseteq',
  '∈': '\\in',
  '∉': '\\notin',
  '∅': '\\emptyset',
  'φ': '\\phi',
  'ψ': '\\psi',
  'χ': '\\chi',
  'α': '\\alpha',
  'β': '\\beta',
  'γ': '\\gamma',
  'δ': '\\delta',
  'ε': '\\epsilon',
  'λ': '\\lambda',
  'μ': '\\mu',
  'π': '\\pi',
  'ρ': '\\rho',
  'σ': '\\sigma',
  'τ': '\\tau',
  'ω': '\\omega',
  'Γ': '\\Gamma',
  'Δ': '\\Delta',
  'Λ': '\\Lambda',
  'Π': '\\Pi',
  'Σ': '\\Sigma',
  'Ω': '\\Omega'
}

function convertUnicodeToLatex(text) {
  let result = text
  
  for (const [unicode, latex] of Object.entries(unicodeToLatex)) {
    result = result.replace(new RegExp(unicode, 'g'), `$${latex}$`)
  }
  
  // Clean up double dollars and spaces
  result = result.replace(/\$\$+/g, '$')
  result = result.replace(/\$ \$/g, ' ')
  result = result.replace(/\$\s+\$/g, ' ')
  
  return result
}

function fixLatexInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  
  // Replace Unicode in explanations only (between quotes after "explanation:")
  const result = content.replace(
    /(explanation:\s*")([\s\S]*?)(")/g,
    (match, prefix, explanation, suffix) => {
      const converted = convertUnicodeToLatex(explanation)
      return prefix + converted + suffix
    }
  )
  
  if (result !== content) {
    fs.writeFileSync(filePath, result)
    console.log(`Fixed LaTeX in ${filePath}`)
  } else {
    console.log(`No changes needed in ${filePath}`)
  }
}

// Fix all question files
const questionFiles = [
  'lib/questions.ts',
  'lib/deduction-questions.ts',
  'lib/lambda-calculus-questions.ts'
]

questionFiles.forEach(file => {
  const fullPath = path.join(__dirname, '..', file)
  if (fs.existsSync(fullPath)) {
    fixLatexInFile(fullPath)
  } else {
    console.log(`File not found: ${fullPath}`)
  }
})

console.log('LaTeX conversion completed!') 
