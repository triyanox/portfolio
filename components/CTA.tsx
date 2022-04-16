import Link from 'next/link'
import { ButtonWhite, Button } from './EmailButton'

const CTA = () => {
  return (
    <section className="mt-36 flex w-full flex-col items-center justify-center gap-y-4 px-8 md:px-16 ">
      <div className="mx-24 flex w-full flex-col  items-center justify-center rounded-xl ">
        <h1 className="mb-8 text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Want to work together ?
        </h1>
        <Link href="mailto:contact@achaq.codes" passHref>
          <a>
            <Button text="Get in touch !" />
          </a>
        </Link>
      </div>
    </section>
  )
}

export default CTA
