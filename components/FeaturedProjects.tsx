import Link from 'next/link'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Button } from './EmailButton'
import FeaturedProjectsCard from './FeaturedProjectCard'
import {
  Firebase,
  Adobephotoshop,
  Adobexd,
  Git,
  Graphql,
  Tensorflow,
  Mongodb,
  Express,
  Html5,
  Css3,
  Javascript,
  Typescript,
  Python,
  Nodedotjs,
  Reactdotjs,
  Nextdotjs,
  Sass,
  Tailwindcss,
  SocketIo,
  Prisma,
  MySql,
} from './Icons'
const FeaturedProjects = () => {
  return (
    <section className="mt-36 flex w-full flex-col justify-center gap-y-4 px-8 md:px-16 ">
      <div className="flex flex-col items-start justify-center">
        <h2 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Featured Projects
        </h2>
        <p className="mb-8 text-lg font-medium text-gray-600 dark:text-gray-400 ">
          Projects I have worked on
        </p>
      </div>
      <div className="-full mb-4 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <FeaturedProjectsCard
          title="Plana"
          image="/projects/plana.png"
          preview="https://plana.achaq.codes"
          source="https://github.com/triyanox/plana"
          id={1}
          description="An application for managing tasks and staying on track."
          stack={[
            <Nextdotjs />,
            <Reactdotjs />,
            <Tailwindcss />,
            <Typescript />,
            <Nodedotjs />,
            <Prisma />,
            <MySql />,
          ]}
        />

        <FeaturedProjectsCard
          title="Conversa"
          image="/projects/conversa.png"
          preview="https://conversa.achaq.codes"
          source="https://github.com/triyanox/conversa-client"
          id={2}
          description="A WebSockets based text messaging app !"
          stack={[
            <Nextdotjs />,
            <Reactdotjs />,
            <Tailwindcss />,
            <Typescript />,
            <Nodedotjs />,
            <SocketIo />,
            <Express />,
            <Mongodb />,
          ]}
        />
        <FeaturedProjectsCard
          title="Omoide"
          image="/projects/omoide.png"
          preview="https://omoide.achaq.codes"
          source="https://github.com/triyanox/omoide-client"
          id={3}
          description="A platform for sharing memories and experiences with the world."
          stack={[
            <Nextdotjs />,
            <Reactdotjs />,
            <Tailwindcss />,
            <Typescript />,
            <Nodedotjs />,
            <Express />,
            <Mongodb />,
          ]}
        />
      </div>
      <div className="mt-8 flex w-full flex-col items-end justify-center">
        <Link href="/projects" passHref>
          <a>
            <Button text="View More Projects" />
          </a>
        </Link>
      </div>
    </section>
  )
}

export default FeaturedProjects
