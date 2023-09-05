<script lang="ts" setup>
defineProps<{
  code: string
  language?: string
  filename?: string
  meta?: string
}>()
const { copy, copied, isSupported } = useClipboard()
</script>

<template>
  <div class="relative">
    <div class="absolute inset-0 rounded-2xl bg-gradient-to-tr from-oku-300 via-oku-300/70 to-blue-300 opacity-10" />
    <div class="absolute inset-0 rounded-2xl bg-gradient-to-tr from-oku-300 via-oku-300/70 to-blue-300 opacity-10 blur-lg" />
    <div class="absolute -top-px left-20 right-11 h-1 bg-gradient-to-r from-oku-300/0 via-oku-300/70 to-oku-300/0" />
    <div class="absolute -bottom-px left-11 right-20 h-1  bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0" />
    <div class="relative bg-stone-100 dark:bg-zinc-900 rounded-xl dark:border-zinc-700 overflow-hidden">
      <div class="group relative  dark:bg-zinc-700/10 mt-4">
        <div class="px-4 mb-4">
          <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" class="h-2.5 w-auto stroke-slate-500/30"><circle cx="5" cy="5" r="4.5" /><circle cx="21" cy="5" r="4.5" /><circle cx="37" cy="5" r="4.5" /></svg>
        </div>
        <span v-if="filename" class="absolute top-2 right-3 text-xs font-mono">
          {{ filename }}
        </span>
        <slot />
        <button v-if="isSupported" class="bg-stone-200 dark:bg-gray-100 rounded-tl-3xl text-stone-950 flex items-center justify-center absolute bottom-0 right-0 w-10 h-10" @click="copy(code)">
          <span v-if="copied" class="w-5 h-5 i-ph-check text-stone-950" />
          <span v-else class="w-5 h-5 i-ph-clipboard" />
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
:deep(pre code .line) {
  display: block;
  min-height: 1rem;
}
:deep(pre code) {
  @apply text-sm px-4 font-sans font-medium;
}
</style>
