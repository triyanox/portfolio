import { SiGithub, SiOpenlayers } from 'react-icons/si'
import Link from 'next/link'
import { ReactNode, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type Props = {
  source: string
  id: number
  preview?: string
  title: string
  image: string
  stack: ReactNode[]
  description: string
}

const FeaturedProjectsCard = (props: Props) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: {
          translateY: 0,
          scale: 1,
          opacity: 1,
          transformOrigin: 'bottom',
          transition: {
            duration: 0.2,
            dump: 0.8,
            stiffness: 100,
            ease: 'easeInOut',
          },
        },
        hidden: {
          translateY: 100,
          scale: 0.6,
          opacity: 0.2,
          transformOrigin: 'bottom',
          transition: {
            duration: 0.2,
            dump: 0.8,
            stiffness: 100,
            ease: 'easeInOut',
          },
        },
      }}
      className="flex  w-full  items-center justify-start gap-4 rounded-[30px] bg-gray-50  dark:bg-zinc-900 "
    >
      <div className="relative flex h-full w-full flex-col justify-center gap-2 rounded-[12px]  p-8    ">
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
          <div className="grid grid-cols-2 items-start justify-between">
            <h1 className="bg-gradient-to-r from-cyan-400  to-blue-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-cyan-400 dark:to-green-300 md:text-2xl ">
              {props.title}
            </h1>

            <div className="flex w-full flex-row items-center justify-end gap-4 px-2 text-2xl text-black dark:text-white">
              <Link key={props.id} href={`${props.source}`} passHref>
                <a target="_blank">
                  <button
                    aria-label="Source Code"
                    className="group relative transition duration-300  hover:text-gray-600 active:skew-y-3 active:scale-90 dark:hover:text-gray-400"
                  >
                    <SiGithub />
                    <span
                      className="absolute -right-9 m-2 w-auto min-w-max origin-top scale-0 rounded-md
                    bg-black p-2  text-xs font-bold 
    text-white shadow-md 
    transition-all duration-100 group-hover:scale-100 dark:bg-white dark:text-black"
                    >
                      Source Code
                    </span>
                  </button>
                </a>
              </Link>
              {props.preview && (
                <Link key={props.id} href={`${props.preview}`} passHref>
                  <a target="_blank">
                    <button
                      aria-label="Preview"
                      className="group relative transition duration-300  hover:text-gray-600 active:skew-y-3 active:scale-90 dark:hover:text-gray-400"
                    >
                      <SiOpenlayers />
                      <span
                        className="absolute -right-6 m-2 w-auto min-w-max origin-top scale-0 rounded-md
                    bg-black p-2  text-xs font-bold 
    text-white shadow-md 
    transition-all duration-100 group-hover:scale-100 dark:bg-white dark:text-black"
                      >
                        Preview
                      </span>
                    </button>
                  </a>
                </Link>
              )}
            </div>
          </div>
          <div className="mb-1 flex flex-col  justify-start text-lg   text-gray-600 dark:text-gray-400 md:text-xl">
            {props.description}
          </div>
          <div className="flex flex-row justify-start gap-3  text-2xl text-gray-600 dark:text-gray-400 md:text-3xl">
            {props.stack.map((item) => item)}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default FeaturedProjectsCard
