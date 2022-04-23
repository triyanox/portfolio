import type { NextPage } from 'next'
import FeaturedProjects from '../components/FeaturedProjects'
import Intro from '../components/Intro'
import Main from '../Layouts/Main'
import Skills from '../components/Skills'
import CTA from '../components/CTA'
import FeaturedPosts from '../components/FeaturedPosts'
import type { GetStaticProps } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { ParallaxProvider } from 'react-scroll-parallax'

interface PostsProps {
  posts: {
    slug: string
    frontMatter: {
      title: string
      description: string
      thumbnailUrl: string
      date: string
      readTime: number
    }
  }[]
}

const Home: NextPage<PostsProps> = ({ posts }) => {
  return (
    <Main
      pageTitle="Mohamed Achaq - Developer, Designer, Artist"
      siteName="achaq.codes"
      description="Full Stack Developer"
      preview="home"
    >
      <Intro />
      <Skills />
      <FeaturedProjects />
      <FeaturedPosts posts={posts} />
      <CTA />
    </Main>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )
    const { data: frontMatter } = matter(markdownWithMeta)
    return {
      frontMatter,
      slug: filename.split('.')[0],
    }
  })
  return {
    props: {
      posts,
    },
  }
}
