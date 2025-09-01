import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('homePage')
  return (
    <div className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <main>
        <h1>{t('title')}</h1>
        <Button variant='outline'>
          <Link href='/articles'>Go to Articles</Link>
        </Button>
      </main>
      <footer></footer>
    </div>
  )
}
