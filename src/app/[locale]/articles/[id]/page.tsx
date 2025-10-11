'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeftIcon } from '@phosphor-icons/react/ssr'
import { useEffect, useState } from 'react'

interface Articles {
  id: number | string
  title?: string
  description?: string
  body?: string
  published?: boolean
  updatedAt?: string
  image?: string
}

export default function BlogPostPage() {
  const params = useParams<{ id: string }>()
  const [posts, setPosts] = useState<Articles>()
  const [loading, setLoading] = useState('')

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/${params.id}`)
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => setLoading(`Failed: ${err.message}`))
  }, [])

  return (
    <div className='max-w-5xl mx-auto'>
      {posts ? (
        <div className='flex sm:items-center justify-center flex-col gap-4 w-full'>
          <Link href={'/'} className='self-start'>
            <div className='py-1 flex gap-2 items-center p-3 hover:bg-gray-100 border-1 dark:hover:bg-gray-800 rounded-full w-fit cursor-pointer '>
              <ArrowLeftIcon size={16} />
              <p className='text-sm'>Go Back</p>
            </div>
          </Link>
          <h1 className='text-2xl font-bold sm:text-center'>{posts.title}</h1>
          <p className='text-sm'>Published Date: {posts.updatedAt}</p>
          <Image
            src={
              posts.image ??
              'https://app.requestly.io/delay/5000/https://heroui.com/images/hero-card-complete.jpeg'
            }
            alt={posts.title ?? 'Fall-back image'}
            width={500}
            height={300}
            className='rounded-lg max-h-100 w-auto object-contain'
          />
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <h2 className='font-semibold text-xl'>Description</h2>
              <h3>{posts.description}</h3>
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='font-semibold text-xl'>Body</h2>
              <h3>{posts.body}</h3>
            </div>
          </div>
        </div>
      ) : (
        <div>{loading}</div>
      )}
    </div>
  )
}
