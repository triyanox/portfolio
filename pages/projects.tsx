import type { NextPage } from 'next'
import Projects from '../components/Projects'
import Main from '../Layouts/Main'

const ProjectsPage: NextPage = () => {
  return (
    <Main
      pageTitle="Projects - Mohamed Achaq"
      siteName="achaq.codes"
      description="Full Stack Developer"
      preview="projects"
    >
      <Projects />
    </Main>
  )
}

export default ProjectsPage
