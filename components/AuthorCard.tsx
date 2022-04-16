import Image from 'next/image'
import achaq from '../assets/achaq.jpg'

const AuthorCard = () => {
  return (
    <div className="mt-24 flex flex-row items-center justify-center gap-12 rounded-xl bg-gray-200 p-6 dark:bg-zinc-800">
      <div className="justify-cente flex flex-col items-center">
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
