import { getArticles } from '@/lib/api'
import { HomePage } from '../modules/homepage'

export default async function Home() {
  const articles = await getArticles()
  return (
    <div className='font-sans'>
      <main>
        <HomePage articles={articles}/>
      </main>
    </div>
  )
}
