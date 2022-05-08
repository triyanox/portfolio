import { useContext } from 'react'
import { ActiveContext } from '../components/ActiveContext'
import Toggle from './ThemeToggle'
import { CgMenuRight } from 'react-icons/cg'
import { VscChromeClose } from 'react-icons/vsc'
import { motion } from 'framer-motion'
const Navbar = () => {
  const { active, setActive } = useContext(ActiveContext)
  return (
    <section className="fixed top-0 z-50 flex w-full flex-row items-center justify-between bg-white px-8 py-4 dark:bg-black md:px-16 bg-opacity-70 backdrop-blur-xl dark:bg-opacity-70 dark:backdrop-blur-xl">
      <motion.button
        whileTap={{ scale: 0.9, rotate: -30, elevation: 10 }}
        transition={{ duration: 0.3, damping: 10 }}
        aria-label="Menu Switch"
        onClick={() => setActive(active === false ? true : false)}
        className=" text-3xl text-black dark:text-white "
      >
        {!active ? <CgMenuRight /> : <VscChromeClose />}
      </motion.button>
      <Toggle />
    </section>
  )
}

export default Navbar
