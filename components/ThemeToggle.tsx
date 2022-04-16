import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { WiMoonFull } from 'react-icons/wi'

const Toggle = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <motion.div
      whileTap={{ scale: 0.7, rotate: -30, elevation: 10 }}
      transition={{ duration: 0.3, damping: 10 }}
    >
      {mounted && (
        <button
          aria-label="Light Theme"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          className="cursor-pointer text-2xl text-black transition-all duration-500 active:rotate-90 dark:text-white"
        >
          <WiMoonFull />
        </button>
      )}
    </motion.div>
  )
}

export default Toggle
