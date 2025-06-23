const fs = require('fs');
const path = require('path');

function fixSpecificIssues() {
  console.log('🎯 Correction des problèmes spécifiques restants...\n');
  
  const files = [
    'lib/questions.ts',
    'lib/evaluation-questions.ts',
    'lib/lambda-calculus-questions.ts'
  ];
  
  files.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (fs.existsSync(filePath)) {
      console.log(`📁 ${path.basename(file)}...`);
      
      let content = fs.readFileSync(filePath, 'utf8');
      let fixes = 0;
      
      // 1. Corriger "A $ ee eg A$" et variantes (problème vu dans capture)
      const before1 = content;
      content = content.replace(
        /\$([A-Za-z\s]*?)\\?\$\s*ee\s+eg\s+([A-Za-z]+)\s*\$/g,
        (match, before, after) => {
          fixes++;
          return `$${before.trim()}$ \\text{e.g. } ${after}`;
        }
      );
      
      // 2. Corriger les expressions avec "ee eg" à l'intérieur
      content = content.replace(
        /\$([^$]*?)ee\s+eg\s+([^$]*?)\$/g,
        (match, before, after) => {
          fixes++;
          return `$${before.trim()} \\text{e.g. } ${after.trim()}$`;
        }
      );
      
      // 3. Corriger "op ee ot$" et variantes
      content = content.replace(
        /\$([^$]*?)op\s+ee\s+ot\s*([^$]*?)\$/g,
        (match, before, after) => {
          fixes++;
          return `$${before.trim()} \\text{op} ${after.trim()}$`;
        }
      );
      
      // 4. Corriger les patterns spécifiques vus dans les screenshots
      content = content.replace(
        /\$([^$]*?)\s*ee\s*\$/g,
        (match, content_inner) => {
          fixes++;
          return `$${content_inner.trim()}$`;
        }
      );
      
      // 5. Corriger les espaces étranges autour des symboles
      content = content.replace(
        /\$([^$]*?)\s*\$([^$]*?)\s*\$/g,
        (match, part1, part2) => {
          if (part1.trim() && part2.trim()) {
            fixes++;
            return `$${part1.trim()}$ $${part2.trim()}$`;
          }
          return match;
        }
      );
      
      // 6. Corriger les valeurs de vérité mal écrites
      content = content.replace(
        /\$([^$]*?)\\?(top|bot)\s+\\?(vee|wedge)\s+\\?(bot|top)([^$]*?)\$/g,
        (match, before, val1, op, val2, after) => {
          fixes++;
          return `$${before}\\${val1} \\${op} \\${val2}${after}$`;
        }
      );
      
      // 7. Réparer les formules de logique propositionnelle cassées
      content = content.replace(
        /\(A\s+\$([^$]*?)\$/g,
        (match, inner) => {
          fixes++;
          return `(A $${inner}$`;
        }
      );
      
      if (fixes > 0) {
        fs.writeFileSync(filePath, content);
        console.log(`  ✅ ${fixes} corrections appliquées`);
      } else {
        console.log(`  ✨ Aucune correction nécessaire`);
      }
    }
  });
  
  console.log('\n🎯 Corrections spécifiques terminées !');
}

fixSpecificIssues(); 
