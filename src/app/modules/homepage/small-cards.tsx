import { SpinnerGapIcon } from '@phosphor-icons/react/ssr'
import { SearchX } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Article } from '@/lib/api'

export function SmallCards({ data }: { data: Article[] }) {
  const [loading, setLoading] = useState('Loading...')
  const [imageStatus, setImageStatus] = useState('loading')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (imageStatus === 'loading') {
        setImageStatus('noImage')
      }
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [])
  return (
    <div>
      {data && data?.length > 0 ? (
        <div className='grid 2xl:grid-cols-3 gap-8 sm:grid-cols-2 grid-cols-1'>
          {data?.map(item => {
            return (
              <div key={item.id}>
                <Link href={`/articles/${item.id}`}>
                  <div className='min-[770px]:max-h-30 min-[770px]:min-h-30 w-full flex sm:gap-4 gap-2 rounded-xl overflow-hidden hover:shadow-lg dark:shadow-md dark:hover:shadow-gray-700/80 dark:shadow-gray-800/50 shadow-sm sm:dark:shadow-inner-background sm:shadow-none transition-all duration-200 cursor-pointer'>
                    {item?.image && (
                      <Image
                        src={item.image}
                        alt={item.title ?? ''}
                        width={100}
                        height={100}
                        className='object-cover lg:w-30 w-25 h-auto'
                      />
                    )}
                    {imageStatus === 'loading' && !item?.image && (
                      <div className='flex items-center justify-center lg:w-30 w-100 h-auto dark:bg-gray-500 bg-gray-300'>
                        <div className='w-100 flex items-center justify-center'>
                          <motion.div
                            className='spinner'
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                          >
                            <SpinnerGapIcon
                              size={20}
                              className='text-gray-500 dark:text-black z-4'
                            />
                          </motion.div>
                        </div>
                      </div>
                    )}
                    {imageStatus === 'noImage' && !item?.image && (
                      <Image
                        src='/image-not-found.jpg'
                        alt='Image Not Found'
                        width={100}
                        height={100}
                        className='object-cover lg:w-30 w-25 h-auto max-h-100'
                      />
                    )}
                    <div className='p-2 flex flex-col gap-2 line-clamp-3 py-2'>
                      <p className='lg:text-[10px] text-[9px] text-foreground'>
                        {item.updatedAt}
                      </p>
                      <h2 className='font-semibold line-clamp-2 lg:text-base text-sm'>
                        {item.title}
                      </h2>
                      <p className='lg:text-sm text-xs line-clamp-2'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      ) : (
        <div className='flex items-center justify-center gap-2'>
          <SearchX size={20} />
          <p>No results found</p>
          {loading}
        </div>
      )}
    </div>
  )
}
