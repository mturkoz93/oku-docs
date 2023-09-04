<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="max-w-lg">
    <AtomPageTitle>
      {{ title }}
    </AtomPageTitle>
    <AtomPageProse class="mt-6">
      <slot />
    </AtomPageProse>
  </div>
</template>
