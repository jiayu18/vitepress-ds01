// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './layoutComponent.css'
import './ESUN-DS_admin.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
    })
    
  },
  enhanceApp({ app, router, siteData }) {
    router.onAfterRouteChanged = (to) => {
      if (typeof window !== 'undefined') {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('vitepress-theme-appearance', 'light')
      }
    }
  }
} satisfies Theme
