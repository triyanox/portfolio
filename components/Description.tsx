import { motion, AnimatePresence } from 'framer-motion'

export type Description = {
  text: string
}
export const Description = (props: Description) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          transformOrigin: 'left',
        }}
        exit={{
          scale: 0,
          opacity: 0,
        }}
        transition={{
          duration: 0.4,
          dump: 0.8,
          ease: 'easeInOut',
          stiffness: 100,
          elapsed: 1,
        }}
        className="justify-cente flex items-center rounded-xl bg-gray-200 p-8 dark:bg-zinc-800"
      >
        <p className="text-2xl font-medium text-gray-600 dark:text-gray-400 ">
          {props.text}
        </p>
      </motion.div>
    </AnimatePresence>
  )
}
