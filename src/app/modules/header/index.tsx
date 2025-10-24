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
import { useLocale, useTranslations } from 'next-intl'

interface HeaderProps {
  locale?: string | 'en' | 'km'
}

export const Header = ({ locale }: HeaderProps) => {
  const pathName = usePathname()
  const locale_not_found = useLocale()
  const t = useTranslations('header.navigation')
  const k = useTranslations('header.themeSwitcher')
  return (
    <div className='z-10 transition-all delay-150 ease-in-out'>
      {/* Full Header */}
      <div className='hidden min-[800px]:block z-7'>
        <header className='flex justify-between bg-inner-background items-center px-15 min-[801px]:px-20 py-4 lg:max-w-[2050px] mx-auto'>
          <div className='min-[801px]:w-20 w-17'>
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
          <div className='flex justify-center items-center gap-6 lg:text-lg text-md font-semibold'>
            <p
              className={`hover:underline hover:underline-offset-4 ${
                pathName === '/' && 'underline underline-offset-4'
              }`}
            >
              <Link href='/'>{t('home')}</Link>
            </p>
            <p
              className={`hover:underline hover:underline-offset-4 ${
                pathName === '/general' && 'underline underline-offset-4'
              }`}
            >
              <Link href='/general'>{t('general')}</Link>
            </p>
            <p
              className={`hover:underline hover:underline-offset-4 ${
                pathName === '/photography' && 'underline underline-offset-4'
              }`}
            >
              <Link href='/photography'>{t('photography')}</Link>
            </p>
            <p
              className={`hover:underline hover:underline-offset-4 ${
                pathName === '/videography' && 'underline underline-offset-4'
              }`}
            >
              <Link href='/videography'>{t('video')}</Link>
            </p>
            <p
              className={`hover:underline hover:underline-offset-4 ${
                pathName === '/about' && 'underline underline-offset-4'
              }`}
            >
              <Link href='/about'>{t('about')}</Link>
            </p>
          </div>

          <div className='flex items-center gap-2 min-[840px]:gap-4 min-[840px]:w-20 w-17'>
            <LanguageSwitcher locale={locale ?? locale_not_found} />
            <ThemeSwitcher align='end' />
          </div>
        </header>
      </div>
      {/* Side Sheet Header for Mobile Screen */}
      <div className='min-[800px]:hidden max-[800px]:flex z-7'>
        <div className='flex justify-between items-center px-9 py-4 max-w-[2050px] mx-auto w-full'>
          <div>
            <Sheet>
              <SheetTrigger>
                <ListIcon size={20} />
              </SheetTrigger>
              <SheetContent side='left'>
                <div className='px-5 py-10 overflow-auto'>
                  <SheetTitle className='py-5 text-xl'>{t('title')}</SheetTitle>
                  <div className='flex flex-col gap-2 text-md font-semibold'>
                    <p
                      className={`hover:underline hover:underline-offset-4 ${
                        pathName === '/' && 'underline underline-offset-4'
                      }`}
                    >
                      <Link href='/'>{t('home')}</Link>
                    </p>
                    <p
                      className={`hover:underline hover:underline-offset-4 ${
                        pathName === '/general' &&
                        'underline underline-offset-4'
                      }`}
                    >
                      <Link href='/general'>{t('general')}</Link>
                    </p>
                    <p
                      className={`hover:underline hover:underline-offset-4 ${
                        pathName === '/photography' &&
                        'underline underline-offset-4'
                      }`}
                    >
                      <Link href='/photography'>{t('photography')}</Link>
                    </p>
                    <p
                      className={`hover:underline hover:underline-offset-4 ${
                        pathName === '/videography' &&
                        'underline underline-offset-4'
                      }`}
                    >
                      <Link href='/videography'>{t('video')}</Link>
                    </p>
                    <p
                      className={`hover:underline hover:underline-offset-4 ${
                        pathName === '/about' && 'underline underline-offset-4'
                      }`}
                    >
                      <Link href='/about'>{t('about')}</Link>
                    </p>
                  </div>

                  <SheetTitle className='py-5 text-xl'>{k('title')}</SheetTitle>
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
          <LanguageSwitcher locale={locale ?? locale_not_found} />
        </div>
      </div>
    </div>
  )
}
