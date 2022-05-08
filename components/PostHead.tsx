type Props = {
  title: string
  date: string | number | Date
  readTime: number
}

export function PostHead({ title, date, readTime }: Props) {
  return (
    <div className="flex flex-col items-start pt-14 pb-14">
      <div className="col-span-full lg:col-span-8 lg:col-start-3">
        <h2 className="text-3xl leading-tight bg-gradient-to-r dark:from-cyan-400 dark:to-green-300 text-transparent bg-clip-text from-cyan-400 to-blue-600 md:text-4xl">
          {title}
        </h2>
        <p className="dark:text-blueGray-500 mt-2 text-lg font-medium text-gray-400">
          {date} — {readTime} min read
        </p>
      </div>
    </div>
  )
}
