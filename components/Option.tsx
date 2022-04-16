import { motion } from 'framer-motion'

export type Option = {
  text: string
  handleClick: () => void
}

export const Option = (props: Option) => {
  return (
    <motion.button
      whileTap={{
        scale: 0.9,
        transition: {
          duration: 0.2,
          stiffness: 100,
          type: 'spring',
          damping: 10,
        },
      }}
      onClick={props.handleClick}
      className="rounded-full bg-black px-4 py-1 text-2xl font-semibold text-gray-200 dark:bg-white dark:text-gray-800"
    >
      {props.text}
    </motion.button>
  )
}
