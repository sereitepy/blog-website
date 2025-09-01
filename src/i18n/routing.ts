import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'km'],

  // Used when no locale matches
  defaultLocale: 'km',
  localePrefix: 'as-needed',
})
