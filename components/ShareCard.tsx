import { ShareButton } from './EmailButton'
import { SiTwitter, SiFacebook, SiLinkedin, SiInstagram } from 'react-icons/si'
import Link from 'next/link'
type Props = {
  link: string
}

const ShareCard = (props: Props) => {
  return (
    <div className="mt-12 flex flex-col  items-center justify-center gap-2 rounded-xl bg-gray-200 py-8 dark:bg-zinc-800 md:flex-row md:gap-8">
      <p className="dark:text-blueGray-500  text-xl font-medium text-gray-600 dark:text-gray-400">
        Spread the word
      </p>

      <Link
        href={`https://twitter.com/intent/tweet?url=https://achaq.codes/${props.link}`}
        passHref
      >
        <a target="_blank">
          <ShareButton elements={['Share on Twitter', <SiTwitter />]} />
        </a>
      </Link>
    </div>
  )
}

export default ShareCard
