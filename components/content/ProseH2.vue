<script setup lang="ts">
defineProps<{ id?: string }>()

const config = useRuntimeConfig()

const heading = 2
const { anchorLinks } = config.public.content
const generate
  = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
</script>

<template>
  <h2 :id="id">
    <a v-if="id && generate" :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>

<style lang="postcss" scoped>
h2 {
  @apply mb-5 mt-14 text-3xl font-normal;

  a:before {
    content: '# ';
    @apply text-oku-500;
  }
}
</style>
