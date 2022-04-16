import { ShareButton } from './EmailButton'
import { SiTwitter, SiFacebook, SiLinkedin, SiInstagram } from 'react-icons/si'
import Link from 'next/link'
type Props = {
  link: string
}

const ShareCard = (props: Props) => {
  return (
    <div className="mt-12 flex flex-row items-center justify-center gap-12 rounded-xl bg-gray-200 p-6 dark:bg-zinc-800">
      <div className="flex flex-row items-center justify-start ">
        <p className="dark:text-blueGray-500 mt-2 text-lg font-medium text-gray-600 dark:text-gray-400">
          Spread the word
        </p>
      </div>
      <div className="flex flex-row items-center justify-end gap-4">
        <Link
          href={`https://twitter.com/intent/tweet?url=https://achaq.codes/${props.link}`}
          passHref
        >
          <a target="_blank">
            <ShareButton elements={['Share on Twitter', <SiTwitter />]} />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default ShareCard
