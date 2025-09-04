'use client'

import * as React from 'react'
import { Moon, Sun, Settings, Check } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTranslations } from 'next-intl'

interface ThemeSwitcherProps {
  align?: 'start' | 'end' | 'center'
}

export function ThemeSwitcher({ align }: ThemeSwitcherProps) {
  const { setTheme } = useTheme()
  const t = useTranslations('header.themeSwitcher')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='flex items-center gap-2'>
          <Button variant='outline' size='icon' className='border-1'>
            <Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 cursor-pointer' />{' '}
            <Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 dark:cursor-pointer' />
            <span className='sr-only'>Toggle theme</span>
          </Button>
          <p className='dark:hidden flex text-xs sm:hidden'>Light Mode</p>
          <p className='hidden dark:flex text-xs sm:dark:hidden'>
            Dark Mode
          </p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align}>
        <DropdownMenuItem
          onClick={() => setTheme('light')}
          className='flex justify-between items-center cursor-pointer'
        >
          <span className='flex items-center gap-2 cursor-pointer'>
            <Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0' />
            &nbsp;
            {t('light')}
          </span>
          <Check className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('dark')}
          className='flex justify-between items-center cursor-pointer'
        >
          <span className='flex items-center gap-2'>
            <Moon className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0' />
            &nbsp;
            {t('dark')}
          </span>
          <Check className='h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('system')}
          className='cursor-pointer'
        >
          <span className='flex items-center gap-2'>
            <Settings className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0' />
            &nbsp;
            {t('system')}
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
