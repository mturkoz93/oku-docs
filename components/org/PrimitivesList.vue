<script lang="ts" setup>
const { data: primitives } = await useAsyncData('primitives-components', () => queryContent('primitives', 'components').sort({ to: -1 }).find())
</script>

<template>
  <section>
    <h2 class="sr-only">
      <slot />
    </h2>
    <ul class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      <MolPrimitiveCard v-for="item in primitives" :key="item._path" :primitive="item" />
    </ul>
  </section>
</template>
