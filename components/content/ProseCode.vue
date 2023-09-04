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
  <div class="bg-white dark:bg-zinc-900 rounded-xl border-2 border-zinc-300 dark:border-zinc-700 overflow-hidden">
    <div class="group relative bg-zinc-300/10 dark:bg-zinc-700/10 px-4 py-4">
      <span v-if="filename" class="absolute top-2 right-3 text-xs font-mono">
        {{ filename }}
      </span>
      <slot />
      <button v-if="isSupported" class="opacity-0 bg-oku-700 rounded-full w-10 h-10 flex items-center justify-center group-hover:opacity-100 absolute right-3 bottom-10 p-1 transition text-white" @click="copy(code)">
        <span v-if="copied" class="w-7 h-7 i-ph-check text-white" />
        <span v-else class="w-7 h-7 i-ph-clipboard" />
      </button>
    </div>
  </div>
</template>

<style scoped>
:deep(pre code .line) {
  display: block;
  min-height: 1rem;
}
</style>
