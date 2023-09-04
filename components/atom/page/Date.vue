<script lang="ts" setup>
defineProps<{
  datetime: string
}>()
</script>

<template>
  <AtomDate :datetime="datetime" />
</template>
