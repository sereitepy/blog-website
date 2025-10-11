import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../modules/theme-switch/theme-provider'
import { Header } from '../modules/header'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { setRequestLocale } from 'next-intl/server'
import { Footer } from '../modules/footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Lens Pro Media',
  description:
    'Media Page that focuses on Photography and Videography Articles',
}

interface Props {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  setRequestLocale(locale)
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <div className='min-h-screen flex flex-col justify-between bg-inner-background'>
              <div className='sticky -top-1 bg-inner-background border-b-1'>
                <Header locale={locale} />
              </div>
              <div className='px-9 sm:px-20 py-10 bg-inner-background flex-grow'>
                {children}
              </div>
              <footer className='bg-inner-background border-t-1'>
                <Footer />
              </footer>
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
