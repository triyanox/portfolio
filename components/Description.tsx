import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'

export type Description = {
  text: String
  tools?: ReactNode[]
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
        className="flex flex-col items-start justify-center rounded-[30px] bg-gray-50 p-8 dark:bg-zinc-900 "
      >
        <p className="text-2xl font-medium text-gray-600 dark:text-gray-400 ">
          {props.text}
        </p>
        {props.tools !== undefined && (
          <div>
            <p className="mt-4 text-2xl font-medium text-gray-600 dark:text-gray-400 ">
              Tools I'm using :
            </p>
            <div className=" mt-4 flex flex-row justify-start gap-3  text-3xl text-gray-600 dark:text-gray-400 md:text-3xl">
              {props.tools.map((item) => item)}
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
