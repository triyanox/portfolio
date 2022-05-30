import { PostHead } from './../../components/PostHead'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Article from '../../Layouts/Article'
import AuthorCard from '../../components/AuthorCard'
import ShareCard from '../../components/ShareCard'

import rehypeHighlight from 'rehype-highlight'
import rehypeCodeTitles from 'rehype-code-titles'
import remarkGfm from 'remark-gfm'
import remarkHeadings from 'remark-autolink-headings'
import remarkSlug from 'remark-slug'
import remarkSmartypants from '@silvenon/remark-smartypants'
import remarkTableofContents from 'remark-toc'
import remarkUnwrapImages from 'remark-unwrap-images'

import Imagecomponent from '../../components/ImageComponent'
import CodeBlock from '../../components/CodeBlock'
import CustomLink from '../../components/CustomLink'
import rehypeAutolinkHeadings from 'remark-autolink-headings'

const components = {
  pre: CodeBlock,
  Imagecomponent,
  a: CustomLink,
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

type Params = {
  params: {
    slug: string
  }
}
export const getStaticProps = async ({ params: { slug } }: Params) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.mdx'),
    'utf-8'
  )

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkGfm,
        remarkHeadings,
        remarkSlug,
        remarkSmartypants,
        [remarkTableofContents, { tight: true }],
        remarkUnwrapImages,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor'],
            },
          },
        ],
      ],
      rehypePlugins: [rehypeCodeTitles, rehypeHighlight],
    },
  })

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  }
}

interface PostProps {
  frontMatter: {
    link: string
    tags: string
    thumbnailUrl: string
    title: string
    description: string
    date: string | number | Date
    author: string
    readTime: number
  }
  params: {
    slug: string
  }
  mdxSource: MDXRemoteSerializeResult
}

const PostPage: React.FC<PostProps> = ({
  frontMatter: {
    link,
    tags,
    thumbnailUrl,
    title,
    description,
    date,
    author,
    readTime,
  },
  mdxSource,
}) => {
  return (
    <Article
      pageTitle={title}
      description={description}
      siteName="Achaq Codes"
      thumbnailUrl={thumbnailUrl}
      title={title}
      author={author}
      tags={tags}
      link={`https://achaq.codes/blog/${link}`}
      date={new Date(date).toISOString()}
    >
      <article className="prose-lg prose mx-auto mt-8 w-full px-8 pb-24 prose-code:rounded-lg prose-code:text-gray-600 prose-pre:rounded-xl   prose-pre:bg-gray-100 dark:prose-invert dark:prose-code:text-gray-400  dark:prose-pre:bg-zinc-900  md:px-16 lg:prose-xl ">
        <PostHead title={title} date={date} readTime={readTime} />
        <MDXRemote {...mdxSource} components={components as any} />
        <AuthorCard />
        <ShareCard link={link} />
      </article>
    </Article>
  )
}

export default PostPage
