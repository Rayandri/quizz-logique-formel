export default function Footer() {
  return (
    <footer className="bg-gray-800/50 border-t border-gray-700 mt-auto">
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <span className="text-amber-400">⚠️</span>
            <span>Questions générées par IA et relues rapidement - des erreurs peuvent subsister</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sm">
            <span className="text-gray-500">Créé par</span>
            <span className="text-indigo-400 font-medium">Rayan Drissi</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-500">Quiz Logique Formel</span>
          </div>
        </div>
      </div>
    </footer>
  )
} 
