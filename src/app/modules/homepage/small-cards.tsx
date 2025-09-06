import { SearchX } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface Articles {
  id: number | string
  title: string
  description: string
  date?: string
  image?: string
}

interface NewsProp {
  data: Articles[]
}

export function SmallCards({ data }: NewsProp) {
  const [view, setView] = useState(true)
  return (
    <div>
      {data.length > 0 ? (
        <div className='grid 2xl:grid-cols-3 gap-8 sm:grid-cols-2 grid-cols-1'>
          {data.map(item => {
            return (
              <div key={item.id}>
                <div className='w-full flex sm:gap-4 gap-2 rounded-xl overflow-hidden hover:shadow-lg dark:shadow-md dark:hover:shadow-gray-700/80 dark:shadow-gray-800/50 shadow-sm sm:dark:shadow-inner-background sm:shadow-none transition-all duration-200 cursor-pointer'>
                  <Image
                    src={
                      item?.image ??
                      'https://app.requestly.io/delay/5000/https://heroui.com/images/hero-card-complete.jpeg'
                    }
                    alt={item.title}
                    width={100}
                    height={100}
                    className='object-cover lg:w-30 w-25 h-auto'
                  />
                  <div className='p-2 flex flex-col gap-2 line-clamp-3 py-2'>
                    <p className='lg:text-[10px] text-[9px] text-foreground'>
                      {item.date}
                    </p>
                    <h2 className='font-semibold line-clamp-2 lg:text-base text-sm'>
                      {item.title}
                    </h2>
                    <p className='lg:text-sm text-xs line-clamp-2'>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className='flex items-center justify-center gap-2'>
          <SearchX size={20} />
          <p>No results found</p>
        </div>
      )}
    </div>
  )
}
