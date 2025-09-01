'use client'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Link, usePathname } from '@/i18n/navigation'
import '/node_modules/flag-icons/css/flag-icons.min.css'
import { useTranslations } from 'next-intl'
import { Check } from 'lucide-react'

interface LanguageSwitcherProps {
  locale: string | 'en' | 'km'
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathName = usePathname()
  const t = useTranslations('header.languageSwitcher')
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          {locale === 'en' ? (
            <span className='fi fi-us' />
          ) : (
            <span className='fi fi-kh' />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem>
          <Link
            href={`/${pathName}`}
            locale='km'
            className='flex items-center justify-between cursor-pointer w-full'
          >
            <div className='flex items-center gap-2'>
              <span className='fi fi-kh' />
              <p>{t('khmer')}</p>
            </div>

            <Check
              className={`${
                locale !== 'en'
                  ? 'h-[1.2rem] w-[1.2rem] scale-100 rotate-0'
                  : 'hidden'
              }`}
            />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href={`/${pathName}`}
            locale='en'
            className='flex items-center justify-between cursor-pointer w-full'
          >
            <div className='flex items-center gap-2'>
              <span className='fi fi-us' />
              <p>{t('english')}</p>
            </div>

            <Check
              className={`${
                locale === 'en'
                  ? 'h-[1.2rem] w-[1.2rem] scale-100 rotate-0'
                  : 'hidden'
              }`}
            />
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
