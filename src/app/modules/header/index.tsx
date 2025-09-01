import { Link } from '@/i18n/navigation'
import { LanguageSwitcher } from '../language-switch'
import { ThemeSwitcher } from '../theme-switch'
import Image from 'next/image'

interface HeaderProps {
  locale: string | 'en' | 'km'
}

export const Header = ({ locale }: HeaderProps) => {
  return (
    <header className='flex justify-between items-center mb-5 shadow-sm px-10 py-5 dark:border-b-1'>
      <div>
        <Link href='/' className='h-30 w-30'>
          <Image
            src='/logo.png'
            alt="Len's Pro Media Logo"
            width={65}
            height={55}
          />
        </Link>
      </div>
      <div>Some list</div>

      <div className='flex items-center gap-4'>
        <LanguageSwitcher locale={locale} />
        <ThemeSwitcher />
      </div>
    </header>
  )
}
