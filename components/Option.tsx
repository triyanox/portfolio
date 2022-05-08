import { AnimatePresence, motion } from 'framer-motion'

export type Option = {
  text: string
  handleClick: () => void
}

export const Option = (props: Option) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transformOrigin: 'left' }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.8,
          stiffness: 100,
          type: 'spring',
          damping: 15,
        }}
        onClick={props.handleClick}
        className="rounded-full bg-black px-4 py-1 text-2xl font-semibold text-gray-200 dark:bg-white dark:text-gray-800"
      >
        {props.text}
      </motion.button>
    </AnimatePresence>
  )
}

export const OptionSelected = (props: Option) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 100, transformOrigin: 'left' }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.4,
          stiffness: 100,
          type: 'spring',
          damping: 15,
        }}
        onClick={props.handleClick}
        className="rounded-full  px-4 py-1 text-2xl font-semibold bg-gradient-to-r dark:from-cyan-400 dark:to-green-300 text-transparent bg-clip-text from-cyan-400 to-blue-600 "
      >
        {props.text}
      </motion.button>
    </AnimatePresence>
  )
}
