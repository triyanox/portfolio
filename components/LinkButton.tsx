import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const LinkButton = (props: Props) => {
  return (
    <button className="flex flex-row items-center justify-center gap-2 text-lg text-black dark:text-white">
      {props.children}
    </button>
  )
}

export default LinkButton
