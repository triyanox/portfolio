import Link from 'next/link'
import { useContext } from 'react'
import { ActiveContext } from './ActiveContext'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import cn from 'classnames'

interface NavItems {
  href: string
  text: string
}

function NavItem({ href, text }: NavItems) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text font-bold text-transparent dark:from-cyan-400 dark:to-green-300 '
            : '',
          'mb-4 p-2 font-semibold'
        )}
      >
        <span>{text}</span>
      </a>
    </NextLink>
  )
}

function MobileMenu() {
  const { active, setActive } = useContext(ActiveContext)
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {active && (
          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
              borderRadius: '999px',
            }}
            animate={{
              scale: 1,
              opacity: 1,
              borderRadius: '0px',
              transformOrigin: 'center',
            }}
            exit={{
              scale: 0,
              opacity: 0,
              borderRadius: '999px',
            }}
            transition={{
              duration: 0.2,
              dump: 0.8,
              ease: 'easeInOut',
              stiffness: 100,
              elapsed: 1,
            }}
            className="fixed top-0  bottom-0 z-40 m-0 flex h-screen w-full flex-col items-center justify-center bg-white bg-opacity-70 pt-12 text-4xl    font-light text-black backdrop-blur-xl dark:bg-black  dark:bg-opacity-70 dark:text-white dark:backdrop-blur-xl"
          >
            <NavItem href="/" text="Home" />
            <NavItem href="/projects" text="Projects" />
            <NavItem href="/blog" text="Blog" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileMenu
