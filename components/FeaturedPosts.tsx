import Link from 'next/link'
import BlogPrev from './BlogPrev'
import { Button } from './EmailButton'

type PostsProps = {
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

const FeaturedPosts = (props: PostsProps) => {
  return (
    <section className="mt-36 flex w-full flex-col justify-center gap-y-4 px-8 md:px-16 ">
      <div className="flex flex-col items-start justify-center">
        <h2 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Featured Posts
        </h2>
        <p className="mb-8 text-lg font-medium text-gray-600 dark:text-gray-400 ">
          Posts I have written
        </p>
      </div>
      <div className="mb-4 grid w-full grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {props.posts
          .sort(
            (
              a: { frontMatter: { date: string | number | Date } },
              b: { frontMatter: { date: string | number | Date } }
            ) =>
              Number(new Date(b.frontMatter.date)) -
              Number(new Date(a.frontMatter.date))
          )
          .slice(0, 3)
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
              <Link href={`/blog/${post.slug}`} key={index}>
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

      <div className="mt-8 flex w-full flex-col items-end justify-center">
        <Link href="/blog" passHref>
          <a>
            <Button text="View All Posts" />
          </a>
        </Link>
      </div>
    </section>
  )
}

export default FeaturedPosts
