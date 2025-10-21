'use client'

import { Article } from '@/lib/api'
import { useState } from 'react'
import { CreateArticle } from './article-form-field/create-article'
import { SearchInput } from './search'
import { SmallCards } from './small-cards'


export const HomePage = ({ articles }: {articles: Article[]}) => {
  const [searchInput, setSearchInput] = useState('')

  const data = articles?.filter(
    item =>
      item.title?.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchInput.toLowerCase())
  )

  const videoData = articles?.filter(
    item =>
      item.title?.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchInput.toLowerCase())
  )
  return (
    <div className='flex flex-col gap-10 items-center justify-center max-w-[2050px] mx-auto z-1'>
      <div className='flex items-center justify-center w-full gap-5 max-[770px]:gap-2'>
        <SearchInput input={searchInput} setInput={setSearchInput} />
        <CreateArticle />
      </div>
      <div className='flex flex-col gap-5 w-full'>
        <h3 className='font-bold text-xl hover:underline hover:underline-offset-4 cursor-pointer w-fit flex items-baseline'>
          Recent Articles
        </h3>
        <SmallCards data={data} />
      </div>
      {/* <div className='flex flex-col gap-5 w-full'>
        <h3 className='font-bold text-xl hover:underline hover:underline-offset-4 cursor-pointer w-fit flex items-baseline'>
          Videography Articles
        </h3>
        <SmallCards data={videoData} />
      </div> */}
    </div>
  )
}
