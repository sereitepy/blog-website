import Image from 'next/image'

interface Articles {
  id: number
  title: string
  description: string
  date: string
  image: string
}

interface NewsProp {
  news: Articles[]
  searchInput: string
}

export function SmallCards({ news, searchInput }: NewsProp) {
  return (
    <div className='grid grid-cols-3 gap-4'>
      {news.map(item => {
        return (
          <div key={item.id}>
            <div className='flex gap-4 rounded-xl overflow-hidden hover:shadow-lg dark:shadow-md dark:hover:shadow-gray-700/80 transition-all duration-200 cursor-pointer'>
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className='object-cover w-30 h-auto'
              />
              <div className='p-2 flex flex-col gap-2 line-clamp-3'>
                <p className='text-xs/3 text-foreground'>{item.date}</p>
                <h2 className='font-semibold line-clamp-3'>{item.title}</h2>
              </div>
            </div>
          </div>
        )
      })}
      <p>{searchInput}</p>
    </div>
  )
}
