import { BsFolderFill } from 'react-icons/bs/index.js'
import { SiGithub } from 'react-icons/si/index.js'
import { SiOpenlayers } from 'react-icons/si/index.js'
import Link from 'next/link'
import {  useEffect } from 'react'
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

interface Props {
  title: string
  id: string
  source: string
  preview: string
  stack: string[]
  description: string
}

const ProjectCard = (props: Props) => {
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
              duration: 0.5,
              dump: 0.8,
              stiffness: 100,
              ease: "easeInOut",
            },
          },
          hidden: {
            translateY: 100,
            scale: 0.6,
            opacity: 0.2,
            transformOrigin: "bottom",
            transition: {
              duration: 0.5,
              dump: 0.8,
              stiffness: 100,
              ease: "easeInOut",

            },
          },
        }} className=" flex w-full items-center justify-start gap-4 rounded-[30px] bg-gray-50 dark:bg-zinc-900">
      <div className=" flex  w-full flex-col justify-center gap-4 rounded-[12px]  p-4 px-6   ">
        <div className=" mt-2 grid grid-cols-2 items-start justify-between">
          <div className="text-2xl ">
            <BsFolderFill />
          </div>
          <div className="flex w-full flex-row justify-end gap-4 text-2xl text-black dark:text-white">
            <Link key={props.id} href={`${props.source}`} passHref>
              <a target="_blank">
                <button
                  aria-label="Source Code"
                  className="  transition duration-300  hover:text-gray-600 active:skew-y-3 active:scale-90
                  dark:hover:text-gray-400"
                >
                  <SiGithub />
                </button>
              </a>
            </Link>
            <Link key={props.id} href={`${props.preview}`} passHref>
              <a target="_blank">
                <button
                  aria-label="Preview"
                  className="  transition duration-300  hover:text-gray-600 active:skew-y-3 active:scale-90
                  dark:hover:text-gray-400"
                >
                  <SiOpenlayers />
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className="grid w-full grid-rows-3 items-start justify-start gap-2">
          <h1 className="text-sm  text-black dark:text-white  md:text-md font-bold">
            {props.title}
          </h1>

          <div className="flex flex-row items-center gap-2 font-semibold text-xs md:text-sm text-gray-600 dark:text-gray-400">
            {props.stack.map((tech, i) => (
              <p key={i}>{tech}</p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
