'use client'

import { Link, usePathname } from '@/i18n/navigation'
import Image from 'next/image'
import { LanguageSwitcher } from '../language-switch'
import { ThemeSwitcher } from '../theme-switch'

interface HeaderProps {
  locale: string | 'en' | 'km'
}

export const Header = ({ locale }: HeaderProps) => {
  const pathName = usePathname()
  return (
    <header className='flex justify-between bg-inner-background items-center px-10 py-4 border-b-1 dark:border-white/20'>
      <div className='w-20'>
        <Link href='/'>
          <Image
            src='/logo.png'
            alt="Len's Pro Media Logo"
            width={65}
            height={55}
            className='h-10 w-auto'
          />
        </Link>
      </div>
      <div className='flex items-center justify-center gap-6 text-sm font-semibold'>
        <p
          className={`hover:underline hover:underline-offset-4 ${
            pathName === '/' && 'underline underline-offset-4'
          }`}
        >
          <Link href='/'>Home</Link>
        </p>
        <p
          className={`hover:underline hover:underline-offset-4 ${
            pathName === '/news' && 'underline underline-offset-4'
          }`}
        >
          <Link href='/news'>News</Link>
        </p>
        <p
          className={`hover:underline hover:underline-offset-4 ${
            pathName === '/history' && 'underline underline-offset-4'
          }`}
        >
          <Link href='/history'>History</Link>
        </p>
        <p
          className={`hover:underline hover:underline-offset-4 ${
            pathName === '/school' && 'underline underline-offset-4'
          }`}
        >
          <Link href='/school'>School</Link>
        </p>
        <p
          className={`hover:underline hover:underline-offset-4 ${
            pathName === '/about' && 'underline underline-offset-4'
          }`}
        >
          <Link href='/about'>About</Link>
        </p>
      </div>

      <div className='flex items-center gap-4 w-20'>
        <LanguageSwitcher locale={locale} />
        <ThemeSwitcher />
      </div>
    </header>
  )
}
