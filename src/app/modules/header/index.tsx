'use client'

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Link, usePathname } from '@/i18n/navigation'
import { ListIcon } from '@phosphor-icons/react/ssr'
import Image from 'next/image'
import { LanguageSwitcher } from '../language-switch'
import { ThemeSwitcher } from '../theme-switch'

interface HeaderProps {
  locale: string | 'en' | 'km'
}

export const Header = ({ locale }: HeaderProps) => {
  const pathName = usePathname()
  return (
    <div className='z-10'>
      {/* Full Header */}
      <div className='hidden min-[770px]:block z-7'>
        <header className='flex justify-between bg-inner-background items-center px-20 py-4 max-w-[2050px] mx-auto'>
          <div className='lg:w-20'>
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
          <div className='flex justify-center items-center gap-6 lg:text-sm text-xs font-semibold'>
            <p
              className={`hover:underline hover:underline-offset-4 ${
                pathName === '/' && 'underline underline-offset-4'
              }`}
            >
              <Link href='/'>Home</Link>
            </p>
            <p
              className={`hover:underline hover:underline-offset-4 ${
                pathName === '/general' && 'underline underline-offset-4'
              }`}
            >
              <Link href='/general'>General Media</Link>
            </p>
            <p
              className={`hover:underline hover:underline-offset-4 ${
                pathName === '/photography' && 'underline underline-offset-4'
              }`}
            >
              <Link href='/photography'>Photography</Link>
            </p>
            <p
              className={`hover:underline hover:underline-offset-4 ${
                pathName === '/videography' && 'underline underline-offset-4'
              }`}
            >
              <Link href='/videography'>Videography</Link>
            </p>
            <p
              className={`hover:underline hover:underline-offset-4 ${
                pathName === '/about' && 'underline underline-offset-4'
              }`}
            >
              <Link href='/about'>About</Link>
            </p>
          </div>

          <div className='flex items-center gap-4 lg:w-20'>
            <LanguageSwitcher locale={locale} />
            <ThemeSwitcher align='end' />
          </div>
        </header>
      </div>
      {/* Side Sheet Header for Mobile Screen */}
      <div className='min-[770px]:hidden max-[770px]:flex z-7'>
        <div className='flex justify-between items-center px-9 py-4 max-w-[2050px] mx-auto w-full'>
          <div>
            <Sheet>
              <SheetTrigger>
                <ListIcon size={20} />
              </SheetTrigger>
              <SheetContent side='left'>
                <div className='px-5 py-10'>
                  <SheetTitle className='py-5'>Navigation Menu</SheetTitle>
                  <div className='flex flex-col gap-2 text-xs font-semibold'>
                    <p
                      className={`hover:underline hover:underline-offset-4 ${
                        pathName === '/' && 'underline underline-offset-4'
                      }`}
                    >
                      <Link href='/'>Home</Link>
                    </p>
                    <p
                      className={`hover:underline hover:underline-offset-4 ${
                        pathName === '/general' &&
                        'underline underline-offset-4'
                      }`}
                    >
                      <Link href='/general'>General Media</Link>
                    </p>
                    <p
                      className={`hover:underline hover:underline-offset-4 ${
                        pathName === '/photography' &&
                        'underline underline-offset-4'
                      }`}
                    >
                      <Link href='/photography'>Photography</Link>
                    </p>
                    <p
                      className={`hover:underline hover:underline-offset-4 ${
                        pathName === '/videography' &&
                        'underline underline-offset-4'
                      }`}
                    >
                      <Link href='/videography'>Videography</Link>
                    </p>
                    <p
                      className={`hover:underline hover:underline-offset-4 ${
                        pathName === '/about' && 'underline underline-offset-4'
                      }`}
                    >
                      <Link href='/about'>About</Link>
                    </p>
                  </div>

                  <SheetTitle className='py-5'>Theme Switcher</SheetTitle>
                  <div>
                    <ThemeSwitcher align='start' />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className='lg:w-20 flex items-center justify-center'>
            <Link href='/'>
              <Image
                src='/logo.png'
                alt="Len's Pro Media Logo"
                width={55}
                height={45}
                className='h-9 w-auto'
              />
            </Link>
          </div>
          <LanguageSwitcher locale={locale} />
        </div>
      </div>
    </div>
  )
}
