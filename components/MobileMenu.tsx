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
      <a className={cn(isActive ? 'font-bold bg-gradient-to-r dark:from-cyan-400 dark:to-green-300 text-transparent bg-clip-text from-cyan-400 to-blue-600' : '', 'mb-4 p-2 font-semibold')}>
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
              borderRadius: '9999px',
            }}
            animate={{
              scale: 1,
              opacity: 1,
              borderRadius: '0px',
              transformOrigin: 'bottom',
            }}
            exit={{
              scale: 0,
              opacity: 0,
              borderRadius: '999px',
            }}
            transition={{
              duration: 0.4,
              dump: 0.8,
              ease: 'easeInOut',
              stiffness: 100,
              elapsed: 1,
            }}
            className="fixed top-0 bottom-0 z-40 m-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden   pt-12 text-4xl font-light text-black  dark:text-white bg-white dark:bg-black"
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
