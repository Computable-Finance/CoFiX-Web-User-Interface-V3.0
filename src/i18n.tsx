import { FC, useEffect } from 'react'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'

import { en, zh } from 'make-plural/plurals'
import { detect, fromUrl, fromStorage, fromNavigator } from '@lingui/detect-locale'

export const locales = {
  'en-US': 'English',
  'zh-CN': '中文',
}

const DEFAULT_FALLBACK = () => 'en-US'

export const defaultLocale = detect(fromUrl('lang'), fromStorage('lang'), fromNavigator(), DEFAULT_FALLBACK) || 'en-US'

i18n.loadLocaleData({
  'en-US': { plurals: en },
  'zh-CN': { plurals: zh },
})

export async function dynamicActivate(locale: string = defaultLocale) {
  if (!(locale in locales)) {
    locale = 'en-US'
  }
  const { messages } = await import(`@lingui/loader!src/locales/${locale}.po`)

  i18n.load(locale, messages)
  i18n.activate(locale)

  if (window.localStorage) {
    window.localStorage.setItem('lang', locale)
  }
}

const I18n: FC = ({ children }) => {
  useEffect(() => {
    dynamicActivate()
  }, [])

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>
}

export default I18n
