import { ReactNode } from 'react'
import { ActiveProvider } from '../components/ActiveContext'
import MobileMenu from '../components/MobileMenu'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'
interface Props {
  pageTitle: string
  siteName: string
  description: string
  children: ReactNode
  preview: string
}

const Main = (props: Props) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="follow, index" />
        <title>{props.pageTitle}</title>
        <meta
          name="description"
          content="Mohamed Achaq - Developer, UI/UX designer and Artist"
        />
        <meta name="author" content="Mohamed Achaq" />
        <meta
          property="og:site_name"
          content={props.siteName}
          key="ogsitename"
        />
        <meta property="og:title" content={props.pageTitle} key="ogtitle" />
        <meta
          property="og:description"
          content={props.description}
          key="ogdesc"
        />
        <meta
          name="keywords"
          content="Mohamed Achaq, HTML, CSS, JavaScript, React, Typescript, NodeJs, Python"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://achaq.codes/" />
        <meta
          property="og:title"
          content="Mohamed Achaq - Developer, UI/UX designer and Artist"
        />
        <meta
          property="og:description"
          content="Full Stack Developer Based In Morocco"
        />
        <meta
          property="og:image"
          content={`https://achaq.codes/previews/${props.preview}.png`}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://achaq.codes/" />
        <meta
          property="twitter:title"
          content="Mohamed Achaq - Developer, UI/UX designer and Artist"
        />
        <meta property="twitter:site" content="@ac__haq" />
        <meta
          property="twitter:description"
          content="Mohamed Achaq - Developer, UI/UX designer and Artist"
        />
        <meta
          property="twitter:image"
          content={`https://achaq.codes/previews/${props.preview}.png`}
        />
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

export default Main
