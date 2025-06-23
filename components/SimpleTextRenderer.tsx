"use client"

interface SimpleTextRendererProps {
  children?: string
  text?: string
  className?: string
}

export default function SimpleTextRenderer({ 
  children, 
  text, 
  className = "" 
}: SimpleTextRendererProps) {
  const content = text || children || ""

  const processedContent = content
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
    .replace(/\n\n/g, '</p><p class="mt-3">')
    .replace(/\n/g, '<br/>')
    .replace(/•/g, '<span class="text-indigo-400">•</span>')

  return (
    <div 
      className={`${className} leading-relaxed`}
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  )
} 
