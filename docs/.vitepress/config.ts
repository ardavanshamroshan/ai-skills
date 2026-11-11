import { defineConfig, type DefaultTheme } from 'vitepress'
import catalog from '../../scripts/catalog.json'

const base = '/ai-skills/'
const repo = 'https://github.com/ardavanshamroshan/ai-skills'

const authorFooterEn =
  'Built by <a href="https://ardavanshamroshan.ir" target="_blank" rel="noopener">Ardavan ShamRoshan</a> · <a href="https://github.com/ardavanshamroshan" target="_blank" rel="noopener">GitHub</a>'

const authorFooterFa =
  'ساخته‌شده توسط <a href="https://ardavanshamroshan.ir" target="_blank" rel="noopener">Ardavan ShamRoshan</a> · <a href="https://github.com/ardavanshamroshan" target="_blank" rel="noopener">GitHub</a>'

const featuredSkills = [
  'find-docs',
  'deslop',
  'unslop',
  'grill-me',
  'grill-with-docs',
  'handoff',
  'code-review',
  'playwright-cli',
  'penetration-testing-with-strix',
  'skillui',
  'ui-ux-pro-max',
  'domain-modeling',
  'setup-matt-pocock-skills',
  'grilling',
]

function skillItems(prefix: '' | '/fa'): DefaultTheme.SidebarItem[] {
  return featuredSkills.map((name) => ({
    text: name,
    link: `${prefix}/skills/${name}`,
  }))
}

function categorySkillItems(
  category: string,
  prefix: '' | '/fa',
): DefaultTheme.SidebarItem[] {
  const names = (catalog.categories as Record<string, string[]>)[category] ?? []
  return names.map((name) => ({
    text: name,
    link: `${prefix}/skills/${name}`,
  }))
}

const enSidebar: DefaultTheme.Sidebar = [
  {
    text: 'Start',
    collapsed: false,
    items: [
      { text: 'Home', link: '/' },
      { text: 'Getting started', link: '/getting-started' },
      { text: 'Catalog', link: '/catalog' },
    ],
  },
  {
    text: 'Workflows',
    collapsed: false,
    items: [
      { text: 'UI pipeline', link: '/workflows/ui-pipeline' },
      { text: 'Planning & grilling', link: '/workflows/planning' },
      { text: 'Review & cleanup', link: '/workflows/review' },
      { text: 'Research & docs', link: '/workflows/research' },
    ],
  },
  {
    text: 'Featured skills',
    collapsed: false,
    items: skillItems(''),
  },
  {
    text: 'All skills by group',
    collapsed: true,
    items: Object.keys(catalog.categories).map((cat) => ({
      text: cat,
      collapsed: true,
      items: categorySkillItems(cat, ''),
    })),
  },
  {
    text: 'Rules',
    collapsed: true,
    items: [
      { text: 'context7', link: '/rules/context7' },
      { text: 'graphify', link: '/rules/graphify' },
      { text: 'graphify-first-mode', link: '/rules/graphify-first-mode' },
      { text: 'caveman', link: '/rules/caveman' },
      { text: 'farsi-rtl-responses', link: '/rules/farsi-rtl-responses' },
    ],
  },
  {
    text: 'Plugins',
    collapsed: true,
    items: [
      { text: 'Overview', link: '/plugins/' },
      { text: 'Postman', link: '/plugins/postman' },
      { text: 'MongoDB', link: '/plugins/mongodb' },
      { text: 'Supabase', link: '/plugins/supabase' },
    ],
  },
]

const faSidebar: DefaultTheme.Sidebar = [
  {
    text: 'شروع',
    collapsed: false,
    items: [
      { text: 'خانه', link: '/fa/' },
      { text: 'شروع کار', link: '/fa/getting-started' },
      { text: 'کاتالوگ', link: '/fa/catalog' },
    ],
  },
  {
    text: 'گردش‌کارها',
    collapsed: false,
    items: [
      { text: 'پایپ‌لاین UI', link: '/fa/workflows/ui-pipeline' },
      { text: 'برنامه‌ریزی و grilling', link: '/fa/workflows/planning' },
      { text: 'بازبینی و پاکسازی', link: '/fa/workflows/review' },
      { text: 'تحقیق و مستندات', link: '/fa/workflows/research' },
    ],
  },
  {
    text: 'مهارت‌های اصلی',
    collapsed: false,
    items: skillItems('/fa'),
  },
  {
    text: 'همه مهارت‌ها',
    collapsed: true,
    items: Object.keys(catalog.categories).map((cat) => ({
      text: cat,
      collapsed: true,
      items: categorySkillItems(cat, '/fa'),
    })),
  },
  {
    text: 'قوانین',
    collapsed: true,
    items: [
      { text: 'context7', link: '/fa/rules/context7' },
      { text: 'graphify', link: '/fa/rules/graphify' },
      { text: 'graphify-first-mode', link: '/fa/rules/graphify-first-mode' },
      { text: 'caveman', link: '/fa/rules/caveman' },
      { text: 'farsi-rtl-responses', link: '/fa/rules/farsi-rtl-responses' },
    ],
  },
  {
    text: 'پلاگین‌ها',
    collapsed: true,
    items: [
      { text: 'نمای کلی', link: '/fa/plugins/' },
      { text: 'Postman', link: '/fa/plugins/postman' },
      { text: 'MongoDB', link: '/fa/plugins/mongodb' },
      { text: 'Supabase', link: '/fa/plugins/supabase' },
    ],
  },
]

const enNav: DefaultTheme.NavItem[] = [
  { text: 'Docs', link: '/getting-started' },
  { text: 'Catalog', link: '/catalog' },
  { text: 'Workflows', link: '/workflows/ui-pipeline' },
  { text: 'GitHub', link: repo },
]

const faNav: DefaultTheme.NavItem[] = [
  { text: 'مستندات', link: '/fa/getting-started' },
  { text: 'کاتالوگ', link: '/fa/catalog' },
  { text: 'گردش‌کار', link: '/fa/workflows/ui-pipeline' },
  { text: 'GitHub', link: repo },
]

export default defineConfig({
  title: 'AI Skills',
  description: 'Installed AI agent skills, rules, workflows, and install guides',
  base,
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  themeConfig: {
    search: { provider: 'local', options: { detailedView: true } },
  },
  head: [
    ['link', { rel: 'stylesheet', href: `${base}fonts/fonts.css` }],
    ['link', { rel: 'icon', href: `${base}favicon-32x32.png`, type: 'image/png', sizes: '32x32' }],
    ['link', { rel: 'icon', href: `${base}favicon-16x16.png`, type: 'image/png', sizes: '16x16' }],
    ['link', { rel: 'icon', href: `${base}favicon.ico`, sizes: 'any' }],
    ['link', { rel: 'apple-touch-icon', href: `${base}apple-touch-icon.png`, sizes: '180x180' }],
    ['meta', { name: 'theme-color', content: '#f53003' }],
  ],
  markdown: {
    theme: {
      light: 'github-light-high-contrast',
      dark: 'github-dark',
    },
    lineNumbers: true,
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'AI Skills',
      description: 'Installed AI agent skills, rules, workflows, and install guides',
      themeConfig: {
        logo: { light: '/logo.svg', dark: '/logo.svg' },
        siteTitle: 'AI Skills',
        outline: { label: 'On this page', level: [2, 3] },
        search: { provider: 'local', options: { detailedView: true } },
        nav: enNav,
        socialLinks: [{ icon: 'github', link: repo }],
        sidebar: enSidebar,
        footer: {
          message: authorFooterEn,
          copyright: 'Personal skill docs — free to learn and share',
        },
      },
    },
    fa: {
      label: 'فارسی',
      lang: 'fa-IR',
      dir: 'rtl',
      title: 'مهارت‌های AI',
      description: 'مستندات مهارت‌ها، قوانین و گردش‌کارهای ایجنت',
      themeConfig: {
        logo: { light: '/logo.svg', dark: '/logo.svg' },
        siteTitle: 'مهارت‌های AI',
        outline: { label: 'در این صفحه', level: [2, 3] },
        search: {
          provider: 'local',
          options: {
            detailedView: true,
            translations: {
              button: { buttonText: 'جستجو', buttonAriaLabel: 'جستجو' },
              modal: {
                displayDetails: 'نمایش جزئیات',
                resetButtonTitle: 'پاک کردن',
                backButtonTitle: 'بازگشت',
                noResultsText: 'نتیجه‌ای نبود',
                footer: {
                  selectText: 'انتخاب',
                  navigateText: 'جابه‌جایی',
                  closeText: 'بستن',
                },
              },
            },
          },
        },
        nav: faNav,
        socialLinks: [{ icon: 'github', link: repo }],
        sidebar: faSidebar,
        footer: {
          message: authorFooterFa,
          copyright: 'مستندات شخصی مهارت‌ها — آزاد برای یادگیری و اشتراک',
        },
        darkModeSwitchLabel: 'ظاهر',
        lightModeSwitchTitle: 'حالت روشن',
        darkModeSwitchTitle: 'حالت تاریک',
        sidebarMenuLabel: 'منو',
        returnToTopLabel: 'بازگشت به بالا',
        langMenuLabel: 'تغییر زبان',
        lastUpdated: { text: 'آخرین به‌روزرسانی' },
        docFooter: { prev: 'قبلی', next: 'بعدی' },
      },
    },
  },
})
