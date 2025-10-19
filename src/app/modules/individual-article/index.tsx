import { Article } from '@/lib/api'
import DeleteArticle from '../delete-article'
import { ArrowLeftIcon } from '@phosphor-icons/react/ssr'
import Link from 'next/link'
import Image from 'next/image'

interface IndividualArticleProp {
  id: string
  article: Article
}

export function IndividualArticle({ article, id }: IndividualArticleProp) {
  return (
    <div className='max-w-5xl mx-auto'>
      {article ? (
        <div className='flex sm:items-center justify-center flex-col gap-4 w-full'>
          <div className='flex items-center justify-between w-full'>
            <Link href={'/'} className='self-start'>
              <div className='py-1 flex gap-2 items-center p-3 hover:bg-gray-100 border-1 dark:hover:bg-gray-800 rounded-full w-fit cursor-pointer '>
                <ArrowLeftIcon size={16} />
                <p className='text-sm'>Go Back</p>
              </div>
            </Link>
            <DeleteArticle id={id} />
          </div>
          <h1 className='text-2xl font-bold sm:text-center'>{article.title}</h1>
          <p className='text-sm'>Published Date: {article.updatedAt}</p>
          <Image
            src={
              article.image ??
              'https://app.requestly.io/delay/5000/https://heroui.com/images/hero-card-complete.jpeg'
            }
            alt={article.title ?? 'Fall-back image'}
            width={500}
            height={300}
            className='rounded-lg max-h-100 w-auto object-contain'
          />
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <h2 className='font-semibold text-xl'>Description</h2>
              <h3>{article.description}</h3>
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='font-semibold text-xl'>Body</h2>
              <h3>{article.body}</h3>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}
