// Import global styles and fonts
import '@/app/[locale]/globals.css'
import { Button } from '@/components/ui/button'
import { NextIntlClientProvider, useTranslations } from 'next-intl'
import { Geist, Geist_Mono } from 'next/font/google'
import Link from 'next/link'
import { Footer } from './modules/footer'
import { Header } from './modules/header'
import { ThemeProvider } from './modules/theme-switch/theme-provider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

function Message() {
  const t = useTranslations("notFound")
  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-5 max-[770px]:min-h-100 my-10'>
        <h1 className='text-xl font-bold lg:text-2xl'>{t("title")}</h1>
        <p className='text-sm md:text-md lg:text-lg'>{t("body")}</p>
        <Button>
          <Link href='/' className='text-md lg:text-lg font-bold'>{t("buttonMessage")}</Link>
        </Button>
      </div>
    </div>
  )
}

export default async function GlobalNotFound() {
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
                <Header />
              </div>
              <div className='flex items-center justify-center sm:px-20 py-10 bg-inner-background flex-grow'>
                <Message />
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
