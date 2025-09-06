import {
  InstagramLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from '@phosphor-icons/react/ssr'
import Image from 'next/image'

const footerLinks = [
  {
    id: 'about',
    title: 'About',
    details: 'Details',
    software: 'Software Experience',
    articles: 'Related Articles',
  },
  {
    id: 'resources',
    title: 'Resources',
    details: 'Camera',
    software: 'Editing Software',
    articles: 'Articles',
  },
  {
    id: 'support',
    title: 'Support',
    details: 'Contact Us',
    software: 'FAQs',
    articles: 'Help Center',
  },
]

export const Footer = () => {
  const date = new Date()
  let year = date.getFullYear()
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
            <p className='text-xs sm:w-[80%] lg:text-sm'>
              Lens Pro Media, led by media expert Kimsour, offers photography
              and videography education to empower Cambodia's next generation
              with media knowledge.
            </p>
            <div className='flex gap-3 cursor-pointer'>
              <XLogoIcon size={18} />
              <InstagramLogoIcon size={18} />
              <LinkedinLogoIcon size={18} />
            </div>
          </div>

          {/* right side */}
            <div className='grid grid-cols-3 sm:gap-4 sm:w-[55%] xl:w-[40%]'>
              {footerLinks.map(item => {
                return (
                  <div
                    key={item.id}
                    className='flex flex-col sm:gap-2 gap-1 cursor-pointer w-fit ml-auto'
                  >
                    <h3 className='font-semibold sm:text-base text-sm'>
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
          <div>&copy;&nbsp;{year} Lens Pro Media All rights reserved</div>
          <div className='flex gap-4 items-center sm:text-xs/3 text-[10px] cursor-pointer'>
            <p className='hover:underline hover:underline-offset-4'>
              Privacy Policy
            </p>
            <p className='hover:underline hover:underline-offset-4'>
              Term's of Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
