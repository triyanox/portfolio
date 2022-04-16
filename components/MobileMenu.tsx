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
      <a className={cn(isActive ? 'font-semibold' : '', 'mb-4 p-2')}>
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
            className="fixed top-0 bottom-0 z-40 m-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-zinc-50  pt-12 text-4xl font-light text-black dark:bg-zinc-900 dark:text-white "
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
