import { useContext } from 'react'
import { ActiveContext } from '../components/ActiveContext'
import Toggle from './ThemeToggle'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { VscChromeClose } from 'react-icons/vsc'
import { motion } from 'framer-motion'
const Navbar = () => {
  const { active, setActive } = useContext(ActiveContext)
  return (
    <section className="fixed top-0 z-50 flex w-full flex-row items-center justify-between bg-white px-8 py-4 dark:bg-black md:px-16">
      <motion.button
        whileTap={{ scale: 0.9, rotate: -30, elevation: 10 }}
        transition={{ duration: 0.3, damping: 10 }}
        aria-label="Menu Switch"
        onClick={() => setActive(active === false ? true : false)}
        className=" text-2xl text-black dark:text-white "
      >
        {!active ? <HiOutlineMenuAlt4 /> : <VscChromeClose />}
      </motion.button>
      <Toggle />
    </section>
  )
}

export default Navbar
