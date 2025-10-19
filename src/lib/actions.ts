'use server'

import { revalidatePath, revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

// create article
export async function createArticle(formData: FormData) {
  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const body = formData.get('body') as string
  const image = formData.get('image') as string
  const published = formData.has('published')

  // validation
  if (!title || !description || !body || !image) {
    return { error: 'All fields are required' }
  }

  try {
    const res = await fetch(`${API_URL}/articles`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, body, image, published }),
    })

    if (!res.ok) {
      const error = await res.json()
      return { error: error.message || 'Failed to create Article' }
    }

    // revalidate the articles list cache
    revalidateTag('articles')
  } catch (error) {
    return { error: 'Something went wrong' }
  }
  redirect('/')
}

// update article
export async function updateArticle(id: string, formData: FormData) {
  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const body = formData.get('body') as string
  const image = formData.get('image') as string
  const published = formData.has('published')

  // validation
  if (!title || !description || !body || !image) {
    return { error: 'All fields are required' }
  }

  try {
    const res = await fetch(`${API_URL}/articles/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, body, image, published }),
    })
    if (!res.ok) {
      const error = await res.json()
      return { error: error.message || 'Failed to update Article' }
    }
    revalidateTag('articles')
    revalidateTag(`articles/${id}`)
  } catch (error) {
    return { error: 'Something went wrong' }
  }
  redirect('/')
}

// delete article
export async function deleteArticle(id: string) {
  try {
    const res = await fetch(`${API_URL}/articles/${id}`, {
      method: 'DELETE',
    })
    if (!res.ok) {
      const error = await res.json()
      return { error: error.message || 'Failed to delete Article' }
    }
    revalidateTag('articles')
    revalidatePath('/articles')
  } catch (error) {
    return { error: 'Something went wrong' }
  }
  redirect('/')
}
