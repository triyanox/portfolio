import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  readTime: number
  date: string
  description: string
  title: string
  image: string
}
const BlogPrev = (props: Props) => {
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
          transformOrigin: 'center',
        }}
        exit={{
          scale: 0,
          opacity: 0,
        }}
        transition={{
          duration: 0.6,
          dump: 0.8,
          ease: 'easeInOut',
          stiffness: 100,
          elapsed: 1,
        }}
        className="relative flex h-full w-full flex-col justify-center  rounded-[12px] bg-gray-200 p-8   transition-all duration-300 hover:scale-105  dark:bg-zinc-800"
      >
        <div className="flex flex-col gap-4 ">
          {/* <div>
          <Image
            src={props.image}
            width={1920}
            height={1080}
            alt={props.title}
            className="rounded-xl "
            property="cover"
          />
        </div> */}

          <h1 className="text-xl font-semibold text-black dark:text-white  md:text-2xl">
            {props.title}
          </h1>
          <div className="flex flex-row justify-between text-gray-600 dark:text-gray-400  ">
            <div className="text-md ">{props.date}</div>
            <div className="text-md ">{props.readTime + ' min read'}</div>
          </div>
          <div className="mb-1 flex flex-col  justify-start text-lg   text-gray-600 dark:text-gray-400 md:text-xl">
            {props.description}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default BlogPrev