import { ReactNode } from 'react'
import { FiSend } from 'react-icons/fi'
type Props = {
  text: string
}

export const Button = (props: Props) => {
  return (
    <button className="flex flex-row items-center justify-center gap-2 rounded-full bg-black px-6 py-2 text-xl text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_35px_60px_-15px] active:scale-95 dark:bg-white dark:text-black">
      {props.text}{' '}
    </button>
  )
}

export const ButtonWhite = (props: Props) => {
  return (
    <button className="flex flex-row items-center justify-center gap-2 rounded-full  px-6 py-2  text-xl text-black outline-4 outline-offset-2 outline-gray-600 transition-all duration-200 hover:scale-110 hover:outline  active:scale-95    dark:text-white  dark:outline-gray-400 ">
      {props.text}{' '}
    </button>
  )
}

export const ShareButton = (props: { elements: ReactNode[] }) => {
  return (
    <button className="flex flex-row items-center justify-center gap-2 rounded-full bg-black px-6 py-2 text-xl text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_35px_60px_-15px] active:scale-95 dark:bg-white dark:text-black">
      {props.elements}
    </button>
  )
}
