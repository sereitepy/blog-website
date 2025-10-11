'use client'

import { useEffect, useState } from 'react'
import { SearchInput } from './search'
import { SmallCards } from './small-cards'

interface Articles {
  id: number | string
  title?: string
  description?: string
  body?: string
  published?: boolean
  updatedAt?: string
  image?: string
}

export const HomePage = () => {
  const [searchInput, setSearchInput] = useState('')

  const [posts, setPosts] = useState<Articles[] | undefined>()
  const [loading, setLoading] = useState('')

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`)
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => setLoading(`Failed: ${err.message}`))
  }, [])

  const data = posts?.filter(
    item =>
      item.title?.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchInput.toLowerCase())
  )

  const videoData = posts?.filter(
    item =>
      item.title?.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchInput.toLowerCase())
  )
  return (
    <div className='flex flex-col gap-10 items-center justify-center max-w-[2050px] mx-auto'>
      <SearchInput input={searchInput} setInput={setSearchInput} />
      <div className='flex flex-col gap-5 w-full'>
        <h3 className='font-bold text-xl hover:underline hover:underline-offset-4 cursor-pointer w-fit flex items-baseline'>
          Recent Articles
        </h3>
        <SmallCards data={data} />
      </div>
      <div className='flex flex-col gap-5 w-full'>
        <h3 className='font-bold text-xl hover:underline hover:underline-offset-4 cursor-pointer w-fit flex items-baseline'>
          Videography Articles
        </h3>
        <SmallCards data={videoData} />
      </div>
    </div>
  )
}
