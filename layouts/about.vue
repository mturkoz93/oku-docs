<script lang="ts" setup>
const { page } = useContent()
const socials = usePortfolio().value.socials
</script>

<template>
  <AtomSection>
    <slot />
  </AtomSection>
</template>
