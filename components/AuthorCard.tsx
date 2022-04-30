import Image from 'next/image'
import achaq from '../assets/achaq.jpg'

const AuthorCard = () => {
  return (
    <div className="mt-24 flex flex-col items-center justify-center gap-4 rounded-xl bg-gray-100 p-6 dark:bg-zinc-900 sm:flex-row sm:gap-12">
      <div className="justify-cente flex w-1/2 flex-col items-center md:w-full">
        <Image
          src={achaq}
          alt="Achaq"
          width={512}
          height={512}
          quality={100}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-1">
        <h3 className="text-lg font-semibold  text-black dark:text-white  md:text-xl">
          Mohamed Achaq
        </h3>
        <p className="text-md font-normal text-gray-600 dark:text-gray-400 ">
          Full Stack Developer, UI/UX Designer, and a passionate learner. Making
          the web a better place by building great products.
        </p>
      </div>
    </div>
  )
}
export default AuthorCard
