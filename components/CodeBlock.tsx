import { useRef, useState } from 'react'
import { BsCheck2Circle } from 'react-icons/bs'
import { HiClipboardCopy } from 'react-icons/hi'
interface CodeBlockProps {
  children: React.ReactNode
}

export default function CodeBlock({ children }: CodeBlockProps) {
  const preRef = useRef<HTMLPreElement>(null)
  const [isCopied, setIsCopied] = useState<boolean>(false)

  function copy() {
    const content = preRef.current?.textContent ?? ''
    navigator.clipboard.writeText(content)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="code-block">
      <button
        onClick={copy}
        className="copy z-20 transition-all duration-200 hover:scale-125"
      >
        {isCopied ? (
          <span className="group text-2xl text-green-600 transition-all duration-200 active:text-[#6E44FF] dark:text-green-500 active:dark:text-[#EB5160]">
            <BsCheck2Circle />
            <span
              className="absolute -right-8 m-2 w-auto min-w-max origin-top scale-0 rounded-md
                    bg-black p-2  text-xs font-bold 
    text-white shadow-md 
    transition-all duration-100 group-hover:scale-100 dark:bg-white dark:text-black"
            >
              Copied 🎉
            </span>
          </span>
        ) : (
          <span className="group text-2xl text-black transition-all duration-200 active:text-[#6E44FF] dark:text-white active:dark:text-[#EB5160]">
            <HiClipboardCopy />
            <span
              className="absolute -right-8 m-2 w-auto min-w-max origin-top scale-0 rounded-md
                    bg-black p-2  text-xs font-bold 
    text-white shadow-md 
    transition-all duration-100 group-hover:scale-100 dark:bg-white dark:text-black"
            >
              Copy Me 🚀
            </span>
          </span>
        )}
      </button>
      <pre ref={preRef}>{children}</pre>

      <style jsx>
        {`
          .code-block {
            position: relative;
          }
          .copy {
            cursor: pointer;
            position: absolute;
            top: 24px;
            right: 12px;
            font-size: 1rem;
            background: none;
            border-radius: var(--border-base);
            border: none;
            transition: transform 0.1s ease;
          }
          .copy:active {
            transform: scale(0.9);
          }
        `}
      </style>
    </div>
  )
}
