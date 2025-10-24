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
        <div className='flex sm:flex-row flex-col gap-6 sm:gap-2 justify-between min-[350px]:items-center'>
          {/* left section */}
          <div className='flex flex-col gap-6 xs:w-[20%] sm:w-[40%] md:w-[60%] xl:w-[75%]'>
            <Image
              src='/logo.png'
              alt="Len's Pro Media Logo"
              width={65}
              height={55}
              className='h-auto w-15'
            />
            <p className='text-md sm:w-[80%] lg:text-lg'>{t('description')}</p>
            <div className='flex gap-3 cursor-pointer'>
              <XLogoIcon size={20} />
              <InstagramLogoIcon size={20} />
              <LinkedinLogoIcon size={20} />
            </div>
          </div>

          {/* right side */}
          <div className='grid grid-cols-3 max-[350px]:grid-cols-2 gap-12 max-[450px]:gap-5 sm:gap-4 sm:w-[60%] xl:w-[50%]'>
            {footerLinks.map(item => {
              return (
                <div
                  key={item.id}
                  className='flex flex-col sm:gap-4 gap-2 cursor-pointer sm:w-fit sm:ml-auto w-full'
                >
                  <h3 className='font-semibold sm:text-lg text-md'>
                    {item.title}
                  </h3>
                  <p className='sm:text-sm max-[450px]:text-sm text-[16px] hover:underline hover:underline-offset-4 lg:text-[16.5px]'>
                    {item.details}
                  </p>
                  <p className='sm:text-sm max-[450px]:text-sm text-[16px] hover:underline hover:underline-offset-4 lg:text-[16.5px]'>
                    {item.software}
                  </p>
                  <p className='sm:text-sm max-[450px]:text-sm text-[16px] hover:underline hover:underline-offset-4 lg:text-[16.5px]'>
                    {item.articles}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
        {/* lower section */}
        <div className='flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center text-sm'>
          <div>
            &copy;{year} {t('copyRight')}
          </div>
          <div className='flex gap-4 min-[350px]:items-center sm:text-md text-sm cursor-pointer max-[350px]:flex-col'>
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
