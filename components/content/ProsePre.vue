<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <ProseCode :code="code" language="language" :filename="filename" :highlights="highlights" :meta="meta">
    <pre>
      <slot />
    </pre>
  </ProseCode>
</template>

<style lang="postcss">
div{
  &::after {
    @apply pointer-events-none absolute right-2 top-2 h-full w-full select-none text-right text-gray-500 content-[attr(filename)] dark:text-gray-400;
  }

  pre {
    @apply my-2 rounded bg-gray-100 px-1 py-4 dark:bg-gray-700;

    code .line {
      @apply relative block min-h-[1rem] pl-12;

      &.highlight {
        @apply bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10;
      }

      &::before {
        @apply pointer-events-none absolute -left-2 top-0 w-12 pr-3 text-right text-gray-500 content-[attr(line)] dark:text-gray-300;
      }
    }
  }
}
</style>
