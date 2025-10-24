import { ReactNode } from 'react'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

export interface Article {
  id: string
  title: string
  description: string
  body: string
  image: string
  published: boolean
  createdAt: ReactNode
  updatedAt: ReactNode
}

// get all articles
export async function getArticles(): Promise<Article[]> {
  const res = await fetch(`${API_URL}/articles`, {
    next: { tags: ['articles'] },
  })
  if (!res.ok) {
    throw new Error('Failed to fetch articles')
  }
  return res.json()
}

// get one article
export async function getArticle(id: string): Promise<Article> {
  const res = await fetch(`${API_URL}/articles/${id}`, {
    next: { tags: [`article-${id}`] },
  })
  if (!res.ok) throw new Error('Failed to fetch article...')
  return res.json()
}
