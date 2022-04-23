import { Button, ButtonWhite } from './EmailButton'
import achaq from '../assets/achaq.jpg'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import Link from 'next/link'
const Intro = () => {
  return (
    <section className="relative flex w-full flex-col-reverse items-center  justify-center overflow-hidden px-8 pb-8   md:h-screen md:flex-row md:px-16  md:pb-0">
      <div className="mt-24 flex w-full flex-col items-start justify-center gap-2 md:mt-0">
        <h1 className="text-4xl font-semibold text-black dark:text-white">
          Mohamed Achaq
        </h1>
        <h2 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Full stack developer / UI and UX designer
        </h2>
        <p className="mb-8 text-xl font-normal text-gray-600 dark:text-gray-400 ">
          I am building web applications with with beautiful user interfaces,
          great user experience and highly optimized backend services. And I
          love to discover and learn new technologies.
        </p>
        <div className="flex flex-row items-center justify-center gap-8">
          <Link href="mailto:contact@achaq.codes" passHref>
            <a>
              <Button text="Mail Me" />
            </a>
          </Link>
          <Link href="/blog" passHref>
            <a>
              <ButtonWhite text="The Blog" />
            </a>
          </Link>
        </div>
      </div>
      <div className="mt-24 hidden w-full flex-col items-center justify-center gap-2 md:mt-0 md:flex">
        <Image
          src={achaq}
          width={400}
          className="rounded-full"
          height={400}
          alt="Achaq"
        />
      </div>
    </section>
  )
}

export default Intro
