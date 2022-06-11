import Image from 'next/image'
import {  useEffect } from 'react'
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
interface Props {
  readTime: number
  date: string
  description: string
  title: string
  image: string
}
const BlogPrev = (props: Props) => {
 const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: {
            translateY:0,
            scale: 1,
            opacity: 1,
            transformOrigin: "bottom",
            transition: {
              duration: 0.2,
              dump: 0.3,
              stiffness: 100,
              ease: "easeIn",
            },
          },
          hidden: {
            translateY: 50,
            scale: 0.6,
            opacity: 0.2,
            transformOrigin: "bottom",
            transition: {
              duration: 0.2,
              dump: 0.3,
              stiffness: 100,
              ease: "easeOut",

            },
          },
        }}
        className="relative focus:outline-none focus-within:outline-none ring-zinc-900 dark:ring-zinc-50 ring-offset-4 ring-offset-white  transition duration-300 focus-within:ring-2 focus-within:ring-zinc-900 dark:focus-within:ring-zinc-50 hover:ring-2 hover:ring-zinc-900 dark:hover:ring-zinc-50 focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 group-hover:ring-2 group-hover:ring-zinc-900 dark:group-hover:ring-zinc-50 group-focus:ring-2 group-focus:ring-zinc-900 dark:group-focus:ring-zinc-50 dark:ring-offset-gray-900 flex h-full w-full flex-col justify-center  rounded-[30px] bg-gray-50 p-8  hover:scale-105  dark:bg-zinc-900"
      >
        <div className="flex flex-col gap-4 ">
          {/* <div>
          <Image
            src={props.image}
            width={1920}
            height={1080}
            alt={props.title}
            className="rounded-xl"
            property="cover"
            quality={100}
          />
        </div> */}

          <h1 className="text-xl font-semibold bg-gradient-to-r dark:from-cyan-400 dark:to-green-300 text-transparent bg-clip-text from-cyan-400 to-blue-600  md:text-2xl">
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
  )
}

export default BlogPrev
