import 'server-only'

const dictionaries = {
    en: () => import('@/public/locales/en.json').then((module) => module.default as any),
    ar: () => import('@/public/locales/ar.json').then((module) => module.default as any),
}

export const getDictionary = async (locale: 'en' | 'ar') => dictionaries[locale]()
