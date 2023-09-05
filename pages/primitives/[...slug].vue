<script setup>
const route = useRoute()
const slug = `/primitives/${Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug}`
</script>

<template>
  <OrgPrimitivesContainer type="docs" :slug="slug" />
</template>

<style lang="postcss" scoped>
.container {
  overflow: visible;
}
</style>
