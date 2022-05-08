import Image from 'next/image'
import achaq from '../assets/achaq.png'

const AuthorCard = () => {
  return (
    <div className="mt-24 flex flex-col items-center justify-center gap-4 rounded-xl bg-gray-50 p-6 dark:bg-zinc-900 sm:flex-row sm:gap-12">
      <div className="justify-cente  w-1/2 hidden sm:flex md:w-2/3 flex-col items-center lg:w-full">
        <Image
          src={achaq}
          alt="Achaq"
          width={512}
          height={512}
          quality={100}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col items-start justify-center ">
        <h3 className="text-2xl font-bold  bg-gradient-to-r dark:from-cyan-400 dark:to-green-300 text-transparent bg-clip-text from-cyan-400 to-blue-600  md:text-2xl">
          Mohamed Achaq
        </h3>
        <p className="text-md text-gray-600 dark:text-gray-400 ">
          Full Stack Developer, UI/UX Designer, and a passionate learner. Making
          the web a better place by building great products.
        </p>
      </div>
    </div>
  )
}
export default AuthorCard
