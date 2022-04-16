import {
  SiLinkedin,
  SiInstagram,
  SiGithub,
  SiTwitter,
  SiYoutube,
} from 'react-icons/si/index.js'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="mt-24 mb-16 flex w-full flex-col  items-center justify-center  gap-y-4 px-8 md:px-16 lg:flex-row">
      <div className="flex w-full flex-col items-center ">
        <div className="flex w-full flex-col items-start justify-center gap-2 text-2xl ">
          <h2 className=" text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Mohamed Achaq
          </h2>
          <p className="text-md   text-gray-600 dark:text-gray-400 ">
            Full stack developer / UI and UX designer
          </p>
          <div className=" mt-4 flex w-full flex-row items-center gap-4 ">
            <Link href="https://www.linkedin.com/in/achaqdev/" passHref>
              <a aria-label="Linkedin" target="_blank">
                <h1 className="text-2xl text-gray-800 hover:text-blue-600 dark:text-gray-200 hover:dark:text-blue-600 ">
                  <SiLinkedin />
                </h1>
              </a>
            </Link>
            <Link href="https://instagram.com/ac.haq/" passHref>
              <a aria-label="Instagram" target="_blank">
                <h1 className="text-2xl text-gray-800 hover:text-pink-700 dark:text-gray-200 hover:dark:text-pink-700">
                  <SiInstagram />
                </h1>
              </a>
            </Link>
            <Link href="https://youtube.com/c/triyanox/" passHref>
              <a aria-label="YouTube" target="_blank">
                <h1 className="text-2xl text-gray-800 hover:text-red-700 dark:text-gray-200 hover:dark:text-red-700">
                  <SiYoutube />
                </h1>
              </a>
            </Link>
            <Link href="https://github.com/triyanox" passHref>
              <a aria-label="Github" target="_blank">
                <h1 className="text-2xl text-gray-800 hover:text-gray-900 dark:text-gray-200 hover:dark:text-gray-300">
                  <SiGithub />
                </h1>
              </a>
            </Link>
            <Link href="https://twitter.com/ac__haq" passHref>
              <a aria-label="Twitter" target="_blank">
                <h1 className="text-2xl text-gray-800 hover:text-blue-500 dark:text-gray-200 hover:dark:text-blue-500">
                  <SiTwitter />
                </h1>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
