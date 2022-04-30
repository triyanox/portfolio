import { BsFolderFill } from 'react-icons/bs/index.js'
import { SiGithub } from 'react-icons/si/index.js'
import { SiOpenlayers } from 'react-icons/si/index.js'
import Link from 'next/link'

interface Props {
  title: string
  id: string
  source: string
  preview: string
  stack: string[]
  description: string
}

const ProjectCard = (props: Props) => {
  return (
    <div className=" flex w-full items-center justify-start gap-4 rounded-[30px] bg-zinc-100 dark:bg-zinc-900">
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
          <h1 className="text-md  text-black dark:text-white  md:text-lg">
            {props.title}
          </h1>

          <div className="flex flex-row items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            {props.stack.map((tech, i) => (
              <p key={i}>{tech}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
