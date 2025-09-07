'use client'
import { use } from 'react'

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  console.log('slug', slug)

  return (
    <div>
      <h1>Ayo</h1>
      <p className='text-xl'>Slug: {slug}</p>
    </div>
  )
}
