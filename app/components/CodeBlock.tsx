'use client'

import { useState, useRef } from 'react'
import { CheckIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline'

export default function CodeBlock({ children, className, ...props }: any) {
  const [copied, setCopied] = useState(false)
  const preRef = useRef<HTMLPreElement>(null)

  const handleCopy = async () => {
    // Get the actual text content from the pre element
    const codeElement = preRef.current?.querySelector('code')
    if (codeElement) {
      const code = codeElement.textContent || ''
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="relative group">
      <pre ref={preRef} className={className} {...props}>
        {children}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 px-3 py-1.5 rounded-md border transition-all duration-200 
                   bg-white/95 border-gray-300 hover:bg-sky-500 hover:border-sky-500 hover:scale-105 active:scale-95
                   dark:bg-slate-900/95 dark:border-slate-600 dark:hover:bg-sky-500 dark:hover:border-sky-400
                   shadow-sm hover:shadow-md"
        aria-label="Copy code"
      >
        {copied ? (
          <CheckIcon className="w-4 h-4 text-green-500" />
        ) : (
          <DocumentDuplicateIcon className="w-4 h-4 text-slate-600 dark:text-slate-400 hover:text-white transition-colors" />
        )}
      </button>
    </div>
  )
}
