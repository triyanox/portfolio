import type { NextPage, GetStaticProps } from 'next'
import React, { useState } from 'react'
import Main from '../Layouts/Main'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import BlogPrev from '../components/BlogPrev'

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

const Blog: NextPage<PostsProps> = ({ posts }) => {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((post) =>
    post.frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
  )
  return (
    <Main
      pageTitle="Blog - Mohamed Achaq"
      siteName="achaq.codes"
      description="Full Stack Developer"
      preview="blog"
    >
      {' '}
      <section className="mt-24 flex w-full flex-col justify-center gap-y-4 px-8 md:px-16 ">
        <div className="flex flex-col items-start justify-center">
          <h2 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Blog
          </h2>
          <p className="text-md mb-8 font-medium text-gray-600 dark:text-gray-400 ">
            My thoughts on software development
          </p>
          <input
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            className=" w-full rounded-lg bg-zinc-100 px-11 py-8 text-lg font-medium text-black placeholder-gray-500 ring-gray-500 ring-offset-4 ring-offset-white transition duration-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-gray-500 hover:ring-2 hover:ring-gray-500  focus:outline-none  focus:ring-2 focus:ring-gray-500 disabled:text-gray-400 disabled:ring-0 group-hover:ring-2  group-hover:ring-gray-500 group-focus:ring-2 group-focus:ring-gray-800 dark:bg-zinc-900 dark:text-white  dark:ring-offset-gray-900 dark:disabled:text-gray-500"
            placeholder="Search"
          />
        </div>
        {!filteredBlogPosts.length && (
          <p className="mb-4 mt-16 text-xl text-gray-600 dark:text-gray-400 md:text-2xl">
            No posts found.
          </p>
        )}{' '}
        <div className="mb-4 mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredBlogPosts
            .sort(
              (
                a: { frontMatter: { date: string | number | Date } },
                b: { frontMatter: { date: string | number | Date } }
              ) =>
                Number(new Date(b.frontMatter.date)) -
                Number(new Date(a.frontMatter.date))
            )
            .map(
              (
                post: {
                  slug: string
                  frontMatter: {
                    title: string
                    description: string
                    thumbnailUrl: string
                    date: string
                    readTime: number
                  }
                },
                index: React.Key | null | undefined
              ) => (
                <Link href={'/blog/' + post.slug} passHref key={index}>
                  <a>
                    <BlogPrev
                      title={post.frontMatter.title}
                      description={post.frontMatter.description}
                      image={post.frontMatter.thumbnailUrl}
                      date={post.frontMatter.date}
                      readTime={post.frontMatter.readTime}
                    />
                  </a>
                </Link>
              )
            )}
        </div>
      </section>
    </Main>
  )
}

export default Blog

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
