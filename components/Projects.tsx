import { projectsdata } from '../data/projects'
import ProjectCard from './ProjectCard'
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
  Rust,
} from './Icons'

function Projects() {
  return (
    <section className="mt-24 flex w-full flex-col justify-center gap-y-4 px-8 md:px-16 ">
      <div className="flex flex-col items-start justify-center">
        <h2 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Projects
        </h2>
        <p className="text-md mb-8 font-medium text-gray-600 dark:text-gray-400 ">
          All my projects are listed here
        </p>
      </div>

      <div className="mb-4 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
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
        <FeaturedProjectsCard
          title="rsmdp"
          image="/projects/rsmdp.png"
          source="https://github.com/triyanox/rsmdp"
          id={4}
          description="A markdown to HTML parser written in Rust."
          stack={[<Rust />]}
        />
        <FeaturedProjectsCard
          title="Portfolio"
          image="/projects/achaqcodes.png"
          preview="https://achaq.codes"
          source="https://github.com/triyanox/portfolio"
          id={5}
          description="My portfolio website to showcase my work !"
          stack={[
            <Nextdotjs />,
            <Reactdotjs />,
            <Tailwindcss />,
            <Typescript />,
          ]}
        />
        <FeaturedProjectsCard
          title="Shortify"
          image="/projects/shortify.png"
          preview="https://shortify.achaq.codes"
          source="https://github.com/triyanox/shortify-client"
          id={6}
          description="URL shortener platform !"
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
      <div className="mt-16 flex flex-col items-start justify-center">
        <h2 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Other Projects
        </h2>
        <p className="text-md mb-8 font-medium text-gray-600 dark:text-gray-400 ">
          Some of my other projects and experiments
        </p>
      </div>

      <div className=" mb-12 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {projectsdata.map((project, i) => (
          <ProjectCard
            key={i}
            id={project.id}
            title={project.title}
            description={project.description}
            stack={project.stack}
            source={project.source}
            preview={project.preview}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
