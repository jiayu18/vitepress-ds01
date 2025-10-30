import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Design System 2025",
  description: "Creating resonance between requirements and design to build intuitive experiences",
  base: '/vitepress-ds01/',
  head: [
    ['link',{ rel: 'icon', href: '/img/logo_esun.svg'}],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Overview', link: '/index' },
      { text: 'Brand', link: '/brand/brand' },
      { text: 'Guildline', link: '/guildline/color' },
      { text: 'UIKit', link: 'uikit/uikitoverview' },
      { text: 'MD檔教學', 
        items: [
          { text: '開發步驟', link: '/examples/0-2' },
          { text: '建立元件', link: '/examples/0-3' },
          { text: 'MD語法模板', link: '/examples/0-1' }
        ]
      }
    ],
    sidebar: {
      // Brand 
      '/brand/brand': [
        { text:'Brand 品牌介紹',link: '/brand/brand',collapsible: false,},
        { text:'CIVI 品牌識別設計資源',link: 'https://stdesignsysdev001.z11.web.core.windows.net/DS/index.html',collapsible: false,}
      ],
      // Guildline - Color 區
      '/guildline/': [
        { text:'Color 顏色',link: '/guildline/color',collapsible: false,},
        { text:'Typography 字體',link: '/guildline/typography',collapsible: false,},
        { text:'Icon 圖示',link: '/guildline/icon',collapsible: false,},
        { text:'Photo 照片',link: '/guildline/photo',collapsible: false,},
        { text:'Illustration 插圖',link: '/guildline/illustration',collapsible: false,},
        {
          text: 'Layout 佈局',
          collapsible: false ,
          items: [
            { text: '官網', link: '' ,collapsible: true,collapsed: true,
              items: [
               { text: '規範', link: '/' },
                { text: '版型', link: 'https://www.figma.com/design/omxTr5PtVk1GtGg4RkQJlM/layout%E7%9B%A4%E9%BB%9E?node-id=1-55&m=dev' },
              ]
            },
            { text: '行銷頁', link: '' ,collapsible: true,collapsed: true,
              items: [
                { text: '規範', link: '/' },
                { text: '版型', link: 'https://www.figma.com/design/omxTr5PtVk1GtGg4RkQJlM/layout%E7%9B%A4%E9%BB%9E?node-id=1-55&m=dev' },
              ]
            },
            { text: '流程頁', link: '' ,collapsible: true,collapsed: true,
              items: [
                { text: '規範', link: '/' },
                { text: '版型', link: 'https://www.figma.com/design/omxTr5PtVk1GtGg4RkQJlM/layout%E7%9B%A4%E9%BB%9E?node-id=1-55&m=dev' },
              ]
            }
          ]
        }
      ],
      // UIKit
      '/uikit/': [
        { text: 'Overview 總覽', link: '/uikit/uikitoverview', collapsible: false },
        { text: 'Button 按鈕', link: '/uikit/button', collapsible: false },
        { text: 'Tables 表格', link: '/uikit/tables', collapsible: false },
        { text: 'List 列表', link: '/uikit/list', collapsible: false },
        { text: 'Checkboxes 核取方塊', link: '/uikit/checkboxes', collapsible: false },
        { text: 'Radio Buttons 單選按鈕', link: '/uikit/radio', collapsible: false },
        { text: 'Input 輸入框', link: '/uikit/input', collapsible: false },
        { text: 'Dropdowns 下拉選單', link: '/uikit/dropdowns', collapsible: false },
        { text: 'Date Picker 日期選擇器', link: '/uikit/datepicker', collapsible: false },
        { text: 'Dividers 分隔線', link: '/uikit/dividers', collapsible: false },
        { text: 'Pagination 分頁器', link: '/uikit/pagination', collapsible: false },
        { text: 'Carousel 輪播', link: '/uikit/carousel', collapsible: false },
        { text: 'Navbar 導覽列', link: '/uikit/navbar', collapsible: false },
        { text: 'Breadcrumb 麵包屑', link: '/uikit/breadcrumb', collapsible: false },
        { text: 'Tab Navigation 頁籤', link: '/uikit/tabs', collapsible: false },
        { text: 'Page Anchor 網頁錨點', link: '/uikit/anchor', collapsible: false },
        { text: 'Steps 步驟表示', link: '/uikit/steps', collapsible: false },
        { text: 'Timeline 時間軸', link: '/uikit/timeline', collapsible: false },
        { text: 'Reciprocal 倒數', link: '/uikit/reciprocal', collapsible: false },
        { text: 'Card 卡片', link: '/uikit/card', collapsible: false },
        { text: 'Accordion 手風琴', link: '/uikit/accordion', collapsible: false },
        { text: 'Modals 彈跳視窗', link: '/uikit/modals', collapsible: false },
        { text: 'Chart 圖表', link: '/uikit/chart', collapsible: false },
        { text: 'Tooltips 提示工具', link: '/uikit/tooltips', collapsible: false },
        { text: 'Toasts 訊息提示', link: '/uikit/toasts', collapsible: false },
        { text: 'Filters 篩選器', link: '/uikit/filters', collapsible: false }
      ]
    },
    socialLinks: [
      { icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><g clip-path="url(#clip0_212_805)"><path d="M29 9.50012C31.9 17.4001 27.9 26.1001 20 29.0001C16.8 30.2001 13.3 30.3001 10.1 29.2001C2.29998 26.6001 -1.90002 17.9001 0.799981 10.1001C2.09998 6.50012 4.49998 3.60012 7.79998 1.80012C12.9 -0.899883 19.1 -0.499883 23.8 2.80012C26.2 4.50012 28 6.90012 29.1 9.60012L29 9.50012Z" fill="#009E96"/><path d="M27.9 16.7996H28.4C28.4 16.4996 27.9001 16.5996 27.7001 16.2996C27.9001 16.2996 28.1 16.2996 28.3 16.3996C28.3 16.3996 28 16.3996 28.1 16.1996C26.7 15.6996 25.4 14.9996 24.3 14.0996C23.3 13.4996 22.8001 12.1996 21.7001 11.8996C21.5001 11.6996 21.4 11.3996 21.3 11.0996H21.2001C21.0001 10.7996 20.9 10.5996 20.8 10.2996C20.6 10.0996 20.4 9.99961 20.1 9.99961C19.8 10.1996 19.3 9.89961 19.1 9.99961H19.3C19.3 10.1996 19.2 10.2996 19.1 10.2996C18.4 9.69961 17.9 9.09961 17.4 8.39961C17.7 7.59961 16.7 7.39961 16.3 6.89961C15.9 6.39961 15.1 6.89961 14.6 7.09961C13.8 6.79961 12.9 6.69961 12 6.59961C11.6 6.59961 11.4 7.09961 11.2 7.29961C10.8 8.19961 10.4 9.09961 9.90005 9.89961C9.70005 10.1996 9.30005 10.0996 9.00005 10.2996C8.50005 10.2996 7.90005 10.4996 7.50005 10.7996C7.50005 10.7996 7.50005 10.8996 7.40005 10.8996C7.30005 11.1996 7.10005 11.3996 6.90005 11.5996C6.50005 12.1996 5.60005 12.3996 5.00005 12.7996C4.20005 13.1996 3.50005 13.7996 2.90005 14.3996C2.60005 14.8996 2.10005 15.1996 1.80005 15.5996C2.10005 15.5996 2.10005 15.0996 2.50005 15.1996C2.50005 15.3996 2.30005 15.4996 2.30005 15.6996C2.30005 15.8996 2.60005 15.4996 2.70005 15.5996C2.80005 15.5996 2.50005 15.8996 2.30005 15.9996C2.50005 15.9996 2.40005 15.9996 2.50005 16.0996C2.60005 16.1996 2.90005 15.8996 3.10005 15.9996L2.60005 16.4996C2.70005 16.4996 2.80005 16.4996 2.90005 16.4996C3.10005 16.2996 3.30005 16.1996 3.50005 16.0996L3.20005 16.5996L3.60005 16.2996C3.60005 16.3996 3.40005 16.4996 3.60005 16.5996C3.90005 16.4996 3.90005 16.1996 4.20005 16.0996C4.20005 16.2996 3.90005 16.4996 3.80005 16.6996C3.90005 16.5996 4.30005 16.4996 4.20005 16.1996C4.50005 15.9996 4.70005 15.7996 5.00005 15.4996C5.70005 14.7996 6.10005 13.9996 7.10005 13.7996C7.60005 13.2996 8.50005 13.2996 9.00005 12.7996C9.00005 12.6996 9.20005 12.3996 9.40005 12.4996C9.40005 12.3996 9.60005 12.2996 9.70005 12.2996C10.1 11.8996 10.8 12.0996 11.2 11.6996C11.6 11.4996 12 11.0996 12.3 10.6996C12.4 10.3996 12.6 10.1996 12.8 9.89961C12.9 9.59961 13 9.39961 13.2 9.09961C13.5 9.09961 13.8 9.09961 14.1 9.09961C14.4 9.59961 15.1 9.29961 15.6 9.39961C15.6 9.69961 15.9 9.39961 15.9 9.69961C16.4 9.89961 16.5 10.5996 16.9 10.9996C16.6 11.1996 16.4 11.3996 16.3 11.6996C15.9 11.6996 16.3 12.1996 15.9 12.1996C16 12.0996 16.2 11.9996 16.3 12.1996C15.8 12.4996 15.4 12.7996 14.9 13.0996C14.8 13.0996 14.7 13.2996 14.6 13.3996H14.8C14.8 13.3996 14.8 13.3996 14.8 13.4996V13.6996C15 13.6996 15.1 13.4996 15.2 13.5996C15.3 13.6996 15.2 13.5996 15.2 13.6996C15.4 13.4996 15.5 13.6996 15.6 13.6996C15.4 13.8996 15.1 14.0996 14.9 14.2996H15.1C15.1 14.5996 14.7 14.4996 14.5 14.6996C14.7 14.6996 14.5 14.8996 14.5 14.9996C14.5 15.0996 14.7 14.7996 14.9 14.9996C14.9 15.1996 14.5 15.1996 14.5 15.4996C14.7 15.3996 14.8 14.9996 15.1 15.0996C15.1 15.0996 14.9 15.1996 15.1 15.3996C15.3 15.5996 15.3 15.1996 15.5 15.2996C15.6 15.0996 15.8 15.2996 16 15.1996C16.4 14.5996 17.2 14.6996 17.8 14.3996C17.8 13.8996 18.4001 13.9996 18.7001 13.8996C18.7001 13.4996 19.3 13.8996 19.4 13.4996C19.5 13.0996 19.7 13.4996 19.9 13.4996C20.2 13.4996 20.4001 13.4996 20.7001 13.2996C21.3001 13.1996 21.7 13.8996 22.1 14.1996C22.9 15.0996 23.8 15.7996 24.9 16.2996C24.4 15.8996 23.9 15.6996 23.4 15.2996C23.4 15.2996 23.5 15.2996 23.6 15.2996C24 15.5996 24.5 15.8996 25 16.1996C25.9 16.8996 27 17.3996 28 17.7996H27.8V17.5996H28C28 17.5996 28.2 17.5996 28.3 17.5996C28.1 17.2996 27.8 17.1996 27.5 17.0996C26.6 16.6996 25.8 16.2996 25.1 15.6996C26 16.1996 26.9 16.6996 27.9 17.0996C28.1 17.3996 28.3 17.1996 28.5 17.2996C28.5 17.2996 28.4 17.2996 28.4 17.1996L27.9 16.7996Z" fill="white"/><path d="M14.9999 12.6H14.7999C14.7999 12.9 14.5999 12.8 14.4999 12.9V12.7L14.2999 12.9C14.2999 13.2 13.8999 12.9 13.8999 13.2C14.0999 13.2 14.2999 12.9 14.5999 12.9C14.5999 12.7 14.8999 12.6 15.0999 12.5L14.9999 12.6Z" fill="white"/><path d="M14 12.7998C13.8 12.7998 13.7 12.7998 13.7 13.0998C13.8 13.0998 14 12.9998 14 12.7998Z" fill="white"/></g><defs><clipPath id="clip0_212_805"><rect width="30" height="30" fill="white"/></clipPath></defs></svg>' 
      },
      link: 'https://www.esunbank.com/zh-tw/personal'
    }
    ],
    search: { 
      provider: 'local'
    }, 
    //上次更新时间
    lastUpdated: {
      text: '最後更新時間',
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        timeStyle: 'medium' // 可选值full、long、medium、short
      },
    },
    docFooter: { 
      prev: '上一頁', 
      next: '下一頁', 
    }, 
  
  }
})
