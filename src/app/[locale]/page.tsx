import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { HomePage } from '../modules/homepage'

export default function Home() {
  const t = useTranslations('homePage')
  return (
    <div className='font-sans'>
      <main>
        <HomePage />
      </main>
      <footer></footer>
    </div>
  )
}
