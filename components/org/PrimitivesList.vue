<script lang="ts" setup>
const { data: primitives } = await useAsyncData('primitives-components', () => queryContent('primitives', 'components').sort({ to: -1 }).find())
</script>

<template>
  <section>
    <h2 class="sr-only">
      <slot />
    </h2>
    <OrgPrimitivesShow :primitives="primitives" />
  </section>
</template>
