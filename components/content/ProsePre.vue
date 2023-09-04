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

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>
