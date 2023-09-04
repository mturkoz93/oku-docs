<script setup lang="ts">
defineProps<Props>()
interface Props {
  data: {
    to: string
    theme: 'orange' | 'blue' | 'purple' | 'green'
    title: string
    description: string
    active?: boolean
    image: string
    buttonText?: string
  }[]
}
</script>

<template>
  <AtomSection>
    <div class="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 max-w-[1200px] mt-12">
      <div v-for="item in data" :key="item.title" class="!aspect-square w-full flex items-center justify-center">
        <AtomShowcaseCardItem :data="{ ...item }" />
      </div>
    </div>
  </AtomSection>
</template>
