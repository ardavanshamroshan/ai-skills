<script setup lang="ts">
import { nextTick, watch } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import LangTabs from './components/LangTabs.vue'
import SiteAuthor from './components/SiteAuthor.vue'

const { Layout } = DefaultTheme
const route = useRoute()

function wrapTables() {
  const root = document.querySelector('.vp-doc')
  if (!root) return
  root.querySelectorAll('table').forEach((table) => {
    if (table.parentElement?.classList.contains('table-scroll')) return
    const wrap = document.createElement('div')
    wrap.className = 'table-scroll'
    table.parentNode?.insertBefore(wrap, table)
    wrap.appendChild(table)
  })
}

watch(
  () => route.path,
  async () => {
    await nextTick()
    wrapTables()
  },
  { immediate: true },
)

function onSidebarNavigation(event: MouseEvent) {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
  if (!(event.target instanceof Element)) return
  const link = event.target.closest<HTMLAnchorElement>('.VPSidebar.open a[href]')
  if (!link || link.target === '_blank') return
  const destination = new URL(link.href)
  if (destination.origin === window.location.origin && destination.hash) {
    document.querySelector<HTMLElement>('.VPBackdrop')?.click()
  }
}
</script>

<template>
  <Layout @click.capture="onSidebarNavigation">
    <template #doc-before>
      <LangTabs />
    </template>
    <template #sidebar-nav-after>
      <SiteAuthor />
    </template>
  </Layout>
</template>
