import { Description } from './Description'
import { Option, OptionSelected } from './Option'
import { useEffect, useState } from 'react'
import {
  Figma,
  Adobeillustrator,
  Adobephotoshop,
  Nodedotjs,
  Express,
  Mongodb,
  Javascript,
  Typescript,
  Graphql,
  Reactdotjs,
  Css3,
  Tailwindcss,
  Html5,
  Nextdotjs,
  Sass,
  Postgresql,
  Go,
} from './Icons'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const Skills = () => {
  const [skill, setSkill] = useState('Frontend')
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <section className="mt-24 flex w-full flex-col justify-center gap-y-4 px-8 md:px-16 ">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: {
            translateX: 0,
            opacity: 1,
            transformOrigin: 'bottom',
            transition: {
              duration: 0.5,
              dump: 0.8,
              stiffness: 100,
              ease: 'easeInOut',
            },
          },
          hidden: {
            translateX: -100,
            opacity: 0,
            transformOrigin: 'bottom',
            transition: {
              duration: 0.5,
              dump: 0.8,
              stiffness: 100,
              ease: 'easeInOut',
            },
          },
        }}
        className="flex flex-col items-start justify-center"
      >
        <h2 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Skills
        </h2>
        <p className="mb-8 text-lg font-medium text-gray-600 dark:text-gray-400 ">
          My skill set
        </p>
      </motion.div>
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
              duration: 0.5,
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
              duration: 0.5,
              dump: 0.8,
              stiffness: 100,
              ease: 'easeInOut',
            },
          },
        }}
        className="flex w-full flex-col justify-center  gap-4 md:flex-row"
      >
        <div className="mb-4 flex w-full flex-row items-start justify-start gap-2 gap-x-4 overflow-scroll md:mb-0 md:flex-col md:overflow-hidden ">
          {skill === 'Frontend' ? (
            <OptionSelected
              text="Frontend"
              handleClick={() => setSkill('Frontend')}
            />
          ) : (
            <Option text="Frontend" handleClick={() => setSkill('Frontend')} />
          )}
          {skill === 'Backend' ? (
            <OptionSelected
              text="Backend"
              handleClick={() => setSkill('Backend')}
            />
          ) : (
            <Option text="Backend" handleClick={() => setSkill('Backend')} />
          )}
          {skill === 'UI' ? (
            <OptionSelected text="UI" handleClick={() => setSkill('UI')} />
          ) : (
            <Option text="UI" handleClick={() => setSkill('UI')} />
          )}
          {skill === 'UX' ? (
            <OptionSelected text="UX" handleClick={() => setSkill('UX')} />
          ) : (
            <Option text="UX" handleClick={() => setSkill('UX')} />
          )}

          {skill === 'Softskills' ? (
            <OptionSelected
              text="SoftSkills"
              handleClick={() => setSkill('Softskills')}
            />
          ) : (
            <Option
              text="Softskills"
              handleClick={() => setSkill('Softskills')}
            />
          )}
        </div>
        <div className="   flex w-full flex-col items-start justify-center gap-2 md:mt-0">
          {skill === 'Frontend' && (
            <Description
              tools={[
                <Html5 />,
                <Css3 />,
                <Sass />,
                <Javascript />,
                <Reactdotjs />,
                <Nextdotjs />,
                <Typescript />,
                <Tailwindcss />,
              ]}
              text="
          when I am working on a new project, I am always thinking about how to make it look and feel better, and how to make it work better."
            />
          )}
          {skill === 'Backend' && (
            <Description
              tools={[
                <Javascript />,
                <Typescript />,
                <Go />,
                <Nodedotjs />,
                <Express />,
                <Mongodb />,
                <Postgresql />,
                <Graphql />,
              ]}
              text="
            I love building backend services, and I am always thinking about how to make them better and more efficient."
            />
          )}
          {skill === 'UI' && (
            <Description
              tools={[<Figma />, <Adobeillustrator />, <Adobephotoshop />]}
              text="
         I am always thinking about delivering an intuitive and easy to use interface."
            />
          )}

          {skill === 'UX' && (
            <Description
              text="
          User exerience is the most important thing when it comes to designing a web application, and my main focus are accessibility, usability and performance."
            />
          )}

          {skill === 'Softskills' && (
            <Description
              text="
          In addition to my technical skills, I also have a lot of soft skills, such as communication, teamwork, and leadership.
          Also I love Agile methodologies."
            />
          )}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
