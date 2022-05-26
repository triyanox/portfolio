import {
  Express,
  Mongodb,
  Nextdotjs,
  Nodedotjs,
  Reactdotjs,
  SocketIo,
  Tailwindcss,
  Typescript,
} from './Icons'

const Resume = () => {
  return (
    <section className="flex min-h-screen w-full items-center justify-center px-12">
      <div className="mt-12 flex h-screen w-2/3 flex-col items-center justify-start bg-white dark:bg-black">
        <div className="flex w-full flex-col items-start justify-center gap-2 py-8">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 md:text-3xl">
            Mohamed Achaq
          </h1>
          <h2 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Software Developer / UI and UX designer
          </h2>
          <p className="mb-8 text-lg font-medium text-gray-700 dark:text-gray-300">
            || Perfection is my law !
          </p>
          <p className="mb-4 text-xl font-normal text-gray-600 dark:text-gray-400 ">
            I'm Mohamed Achaq, I'm a Software devloper and UI/UX designer. I'm
            passionate about building web applications with beautiful user
            interfaces, great user experience and highly optimized backend
            services. As a software developer, I love to discover and learn new
            technologies and learning new design patterns and best practices, to
            enhance my skills and knowledge, and bring value to the projects I'm
            working on.
          </p>
        </div>
        <div className="mt-4 flex w-full flex-col items-start justify-center gap-2 py-8">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 md:text-3xl">
            Projects
          </h1>
          <p className="mb-2 text-xl font-normal text-gray-600 dark:text-gray-400 ">
            Here are some awesome projects I've worked on. All these projects
            are open-source and available on my Github, and all of them are live
            to check out.
            <br />
            You can check my portfolio for live versions or check my other
            open-source projects and libraries.
          </p>
          <div className=" flex w-full flex-col items-start justify-center gap-2 py-8">
            <h2 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Conversa
            </h2>
            <p className="mb-4 text-xl font-normal text-gray-600 dark:text-gray-400 ">
              Conversa is WebSockets based text messaging web application.
              <br />I have learned lot of techniques and patterns while working
              on this awesome project, especially the event driven architecture
              in WebSockets with socket.io which is a great tool for building
              realtime applications.
            </p>
            <h4 className="mb-2 text-xl font-semibold text-gray-700 dark:text-gray-300">
              Technologies :
            </h4>
            <div className="flex w-full flex-row items-center justify-start gap-4 text-3xl">
              <Nextdotjs />
              <Reactdotjs />
              <Tailwindcss />
              <Typescript />
              <Nodedotjs />
              <SocketIo />
              <Express />
              <Mongodb />
            </div>
          </div>
          <div className=" flex w-full flex-col items-start justify-center gap-2 py-8">
            <h2 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Omoide
            </h2>
            <p className="mb-4 text-xl font-normal text-gray-600 dark:text-gray-400 ">
              Omoide in japanese means a memorie, and Omoide is a platform to
              share memories and exeriences with the world.
              <br />
              In the process of building this project, I learned a lot of new
              techniques and patterns for modeling realationships with the
              referencing and embeding methods in MongoDB database. Also I was
              focusing on making the platform user friendly by proving beautiful
              UI and great UX.
            </p>
            <h4 className="mb-2 text-xl font-semibold text-gray-700 dark:text-gray-300">
              Technologies :
            </h4>
            <div className="flex w-full flex-row items-center justify-start gap-4 text-3xl">
              <Nextdotjs />
              <Reactdotjs />
              <Tailwindcss />
              <Typescript />
              <Nodedotjs />
              <Express />
              <Mongodb />
            </div>
          </div>
          <div className=" flex w-full flex-col items-start justify-center gap-2 py-8">
            <h2 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Shortify
            </h2>
            <p className="mb-4 text-xl font-normal text-gray-600 dark:text-gray-400 ">
              Shortify is URL shortening platform, when I was working on this
              project I was focusing more on the frontend because the backend
              was very easy to impliment. In this project I have tried some cool
              loading patterns and optimistic UI methods to make the user
              experience better.
            </p>
            <h4 className=" text-xl font-semibold text-gray-700 dark:text-gray-300">
              Technologies :
            </h4>
            <div className="flex w-full flex-row items-center justify-start gap-4 text-3xl">
              <Nextdotjs />
              <Reactdotjs />
              <Tailwindcss />
              <Typescript />
              <Nodedotjs />
              <Express />
              <Mongodb />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 flex h-screen w-1/3 flex-col items-center justify-start bg-white px-8 dark:bg-black">
        <div className="flex w-full flex-col items-start justify-center gap-2 py-4">
          <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 md:text-2xl">
            Personal Information
          </h1>
          <h2 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
            All you need to get in touch with me
          </h2>
          <div className="text-md flex w-full flex-col items-start justify-start gap-1">
            <p>
              <span className=" font-bold text-gray-700 dark:text-gray-300">
                Full Name :
              </span>{' '}
              <span className="text-gray-800 dark:text-gray-200">
                Mohamed Achaq
              </span>
            </p>
            <p>
              <span className=" font-bold text-gray-700 dark:text-gray-300">
                Email :
              </span>{' '}
              <span className="text-gray-800 dark:text-gray-200">
                contact@achaq.codes
              </span>
            </p>
            <p>
              <span className=" font-bold text-gray-700 dark:text-gray-300">
                Phone :
              </span>{' '}
              <span className="text-gray-800 dark:text-gray-200">
                06-999-66-142
              </span>
            </p>
            <p>
              <span className=" font-bold text-gray-700 dark:text-gray-300">
                Address :
              </span>{' '}
              <span className="text-gray-800 dark:text-gray-200">
                Meknes, Morocco
              </span>
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2 py-4">
          <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 md:text-2xl">
            Social
          </h1>
          <h2 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
            Where I'm active
          </h2>
          <div className="text-md flex w-full flex-col items-start justify-start gap-1">
            <p>
              <span className=" font-bold text-gray-700 dark:text-gray-300">
                Portfolio :
              </span>{' '}
              <span className="text-gray-800 dark:text-gray-200">
                https://achaq.codes
              </span>
            </p>
            <p>
              <span className=" font-bold text-gray-700 dark:text-gray-300">
                Github :
              </span>{' '}
              <span className="text-gray-800 dark:text-gray-200">
                @triyanox
              </span>
            </p>
            <p>
              <span className=" font-bold text-gray-700 dark:text-gray-300">
                Twitter :
              </span>{' '}
              <span className="text-gray-800 dark:text-gray-200">@ac__haq</span>
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2 py-4">
          <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 md:text-2xl">
            Skills
          </h1>
          <h2 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
            Tools and technologies I use
          </h2>
          <div className="grid w-full grid-cols-3 gap-2 text-sm">
            <button className="rounded-md bg-zinc-900 py-2 px-4 font-bold text-white shadow-md hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black">
              TypeScript
            </button>
            <button className="rounded-md bg-zinc-900 py-2 px-4 font-bold text-white shadow-md hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black">
              Javascript
            </button>
            <button className="rounded-md bg-zinc-900 py-2 px-4 font-bold text-white shadow-md hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black">
              Go
            </button>
            <button className="rounded-md bg-zinc-900 py-2 px-4 font-bold text-white shadow-md hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black">
              Python
            </button>
            <button className="rounded-md bg-zinc-900 py-2 px-4 font-bold text-white shadow-md hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black">
              Rust
            </button>
            <button className="rounded-md bg-zinc-900 py-2 px-4 font-bold text-white shadow-md hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black">
              Node.js
            </button>
            <button className="rounded-md bg-zinc-900 py-2 px-4 font-bold text-white shadow-md hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black">
              Express
            </button>
            <button className="rounded-md bg-zinc-900 py-2 px-4 font-bold text-white shadow-md hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black">
              React
            </button>
            <button className="rounded-md bg-zinc-900 py-2 px-4 font-bold text-white shadow-md hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black">
              Next.js
            </button>
            <button className="rounded-md bg-zinc-900 py-2 px-4 font-bold text-white shadow-md hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black">
              Remix
            </button>
            <button className="rounded-md bg-zinc-900 py-2 px-4 font-bold text-white shadow-md hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black">
              MongoDB
            </button>
            <button className="rounded-md bg-zinc-900 py-2 px-4 font-bold text-white shadow-md hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black">
              PostgreSQL
            </button>
            <button className="rounded-md bg-zinc-900 py-2 px-4 font-bold text-white shadow-md hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black">
              GraphQL
            </button>
            <button className="rounded-md bg-zinc-900 py-2 px-4 font-bold text-white shadow-md hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black">
              Git
            </button>
            <button className="rounded-md bg-zinc-900 py-2 px-4 font-bold text-white shadow-md hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black">
              Docker
            </button>
            <button className="rounded-md bg-zinc-900 py-2 px-4 font-bold text-white shadow-md hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black">
              Css
            </button>
            <button className="rounded-md bg-zinc-900 py-2 px-4 font-bold text-white shadow-md hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black">
              Tailwindcss
            </button>
            <button className="rounded-md bg-zinc-900 py-2 px-4 font-bold text-white shadow-md hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black">
              Sass
            </button>
            <button className="rounded-md bg-zinc-900 py-2 px-4 font-bold text-white shadow-md hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black">
              UI Design
            </button>
            <button className="rounded-md bg-zinc-900 py-2 px-4 font-bold text-white shadow-md hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black">
              UX Design
            </button>
            <button className="rounded-md bg-zinc-900 py-2 px-4 font-bold text-white shadow-md hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black">
              Agile
            </button>
            <button className="rounded-md bg-zinc-900 py-2 px-4 font-bold text-white shadow-md hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black">
              Kanban
            </button>
            <button className="rounded-md bg-zinc-900 py-2 px-4 font-bold text-white shadow-md hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black">
              Scrum
            </button>
          </div>
        </div>
        <div className="mt-2 flex w-full flex-col items-start justify-center gap-2 py-4">
          <h2 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Education
          </h2>
          <p className="mb-4 text-xl font-normal text-gray-600 dark:text-gray-400 ">
            Actually I have a degree in applied mathematics, but my passion for
            software development and my curiosity led me to study computer
            science online, and get very good at it. I have lot of
            certifications from great companies and organizations like IBM,
            FreeCodeCamp also I'm currently taking the CS50x course by Harvard
            University.
          </p>
        </div>
        <div className="mt-2 flex w-full flex-col items-start justify-center gap-2 py-4">
          <h2 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Why you should hire me?
          </h2>
          <p className="mb-4 text-xl font-normal text-gray-600 dark:text-gray-400 ">
            I can bring a lot of value to the projects I'm working on, by
            finding great approches to solve problems and create new patterns
            and best practices depending on the project architecture.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Resume
