import Head from 'next/head'
import MobileMenu from '../components/MobileMenu'
import Navbar from '../components/Navbar'
import { ActiveProvider } from '../components/ActiveContext'
import Footer from '../components/Footer'
import { ReactNode } from 'react'

interface Props {
  pageTitle: string
  siteName: string
  description: string
  children: ReactNode
  author: string
  tags: string
  title: string
  link: string
  date: string
  thumbnailUrl: string
}
const Article = (props: Props) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Mohamed Achaq - Developer, UI/UX designer and Artist"
        />
        <meta name="author" content={props.author} />
        <meta
          property="og:site_name"
          content={props.siteName}
          key="ogsitename"
        />
        <meta name="keywords" content={props.tags} />
        <meta name="title" content={props.title} />
        <meta name="description" content={props.description} />

        <meta property="og:type" content="article" />
        <meta property="og:url" content={props.link} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta
          property="og:image"
          content={`https://achaq.codes${props.thumbnailUrl}`}
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ac__haq" />
        <meta name="twitter:url" content={props.link} />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <meta property="article:published_time" content={props.date} />
        <meta
          name="twitter:image"
          content={`https://achaq.codes${props.thumbnailUrl}`}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />

        <title>{props.pageTitle}</title>
      </Head>
      <ActiveProvider>
        <Navbar />
        {props.children}
        <MobileMenu />
        <Footer />
      </ActiveProvider>
    </>
  )
}

export default Article
