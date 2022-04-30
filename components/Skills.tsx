import { Description } from './Description'
import { Option, OptionSelected } from './Option'
import { useState } from 'react'

const Skills = () => {
  const [skill, setSkill] = useState('UI')

  return (
    <section className="mt-24 flex w-full flex-col justify-center gap-y-4 px-8 md:px-16 ">
      <div className="flex flex-col items-start justify-center">
        <h2 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Skills
        </h2>
        <p className="mb-8 text-lg font-medium text-gray-600 dark:text-gray-400 ">
          My skill set
        </p>
      </div>
      <div className="flex w-full flex-col justify-center  gap-4 md:flex-row">
        <div className="mb-4 flex w-full flex-row items-start justify-start gap-2 gap-x-4 overflow-scroll md:overflow-none md:mb-0 md:flex-col ">
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
          {skill === 'Backend' ? (
            <OptionSelected
              text="Backend"
              handleClick={() => setSkill('Backend')}
            />
          ) : (
            <Option text="Backend" handleClick={() => setSkill('Backend')} />
          )}
          {skill === 'Frontend' ? (
            <OptionSelected
              text="Frontend"
              handleClick={() => setSkill('Frontend')}
            />
          ) : (
            <Option text="Frontend" handleClick={() => setSkill('Frontend')} />
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
          {skill === 'UI' && (
            <Description
              text="
          I love creating beautiful user interfaces, and everytime I am designing a new one, I am always thinking about delivering an intuitive and easy to use experience."
            />
          )}

          {skill === 'UX' && (
            <Description
              text="
          User exerience is the most important thing when it comes to designing a web application, and my main focus are accessibility, usability and performance."
            />
          )}
          {skill === 'Backend' && (
            <Description
              text="
            I love building backend services, and I am always thinking about how to make them better and more efficient."
            />
          )}
          {skill === 'Frontend' && (
            <Description
              text="
          when I am working on a new project, I am always thinking about how to make it look and feel better, and how to make it work better."
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
      </div>
    </section>
  )
}

export default Skills
