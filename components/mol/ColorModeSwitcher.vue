<script setup lang="ts">
import type { ColorModeInstance } from '@nuxtjs/color-mode/dist/runtime/types'

const colorMode = useColorMode()

const icon = ref('ph-activity')

onMounted(() => {
  setIcon(colorMode.preference)
})

const themeOrder = ['system', 'light', 'dark']

function getNextTheme(): string {
  return (
    themeOrder[themeOrder.indexOf(colorMode.preference) + 1] ?? themeOrder[0]
  )
}

function setTheme() {
  colorMode.preference = getNextTheme()
}

function setIcon(theme: ColorModeInstance['preference']) {
  switch (theme) {
    case 'system':
      icon.value = 'i-ph-scan-bold'
      break
    case 'light':
      icon.value = 'i-ph-sun-duotone'
      break
    case 'dark':
      icon.value = 'i-ph-moon-stars-duotone'
      break
  }
}

watch(colorMode, (value: ColorModeInstance) => {
  setIcon(value.preference)
})
</script>

<template>
  <ClientOnly>
    <button
      v-bind="$attrs" :aria-label="`Switch to ${getNextTheme()} mode`"
      class="rounded p-1 px-3 text-lg text-blue-500 dark:text-blue-300" @click="setTheme()"
    >
      <i :class="icon" />
    </button>
  </ClientOnly>
</template>

<style scoped></style>
