import {
  InstagramLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from '@phosphor-icons/react/ssr'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const Footer = () => {
  const date = new Date()
  let year = date.getFullYear()
  const t = useTranslations('footer')
  const footerLinks = [
    {
      id: 'about',
      title: `${t('about')}`,
      details: `${t('randomLink')}`,
      software: `${t('randomLink')}`,
      articles: `${t('randomLink')}`,
    },
    {
      id: 'resources',
      title: `${t('resources')}`,
      details: `${t('randomLink')}`,
      software: `${t('randomLink')}`,
      articles: `${t('randomLink')}`,
    },
    {
      id: 'support',
      title: `${t('support')}`,
      details: `${t('randomLink')}`,
      software: `${t('randomLink')}`,
      articles: `${t('randomLink')}`,
    },
  ]
  return (
    <footer className='bg-inner-background max-w-[2050px] mx-auto sm:py-15 sm:px-20 px-10 py-8'>
      <div className='flex flex-col gap-8'>
        {/* upper section */}
        <div className='flex sm:flex-row flex-col gap-8 sm:gap-0 justify-between items-center'>
          {/* left section */}
          <div className='flex flex-col gap-4 sm:w-[45%] xl:w-[60%]'>
            <Image
              src='/logo.png'
              alt="Len's Pro Media Logo"
              width={65}
              height={55}
              className='h-auto w-15'
            />
            <p className='text-xs sm:w-[80%] lg:text-sm'>{t('description')}</p>
            <div className='flex gap-3 cursor-pointer'>
              <XLogoIcon size={18} />
              <InstagramLogoIcon size={18} />
              <LinkedinLogoIcon size={18} />
            </div>
          </div>

          {/* right side */}
          <div className='grid grid-cols-3 sm:gap-4 gap-5 max-[400px]:gap-4 sm:w-[55%] xl:w-[40%]'>
            {footerLinks.map(item => {
              return (
                <div
                  key={item.id}
                  className='flex flex-col sm:gap-2 gap-1 cursor-pointer w-fit ml-auto'
                >
                  <h3 className='ont-semibold sm:text-base text-sm'>
                    {item.title}
                  </h3>
                  <p className='sm:text-xs text-[11px] hover:underline hover:underline-offset-4 lg:text-sm'>
                    {item.details}
                  </p>
                  <p className='sm:text-xs text-[11px] hover:underline hover:underline-offset-4 lg:text-sm'>
                    {item.software}
                  </p>
                  <p className='sm:text-xs text-[11px] hover:underline hover:underline-offset-4 lg:text-sm'>
                    {item.articles}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
        {/* lower section */}
        <div className='flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center text-xs'>
          <div>
            &copy;{year} {t('copyRight')}
          </div>
          <div className='flex gap-4 items-center sm:text-xs/3 text-[10px] cursor-pointer'>
            <p className='hover:underline hover:underline-offset-4'>
              {t('privacyPolicy')}
            </p>
            <p className='hover:underline hover:underline-offset-4'>
              {t('termsOfService')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
