<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { CardProps } from '../atom/ComponentCard.vue'

defineProps<Props>()

interface Props {
  primitives: ParsedContent[] | null
}

// const { trackEvent } = usePlausible()

// function linksClick(name: string) {
//   trackEvent('project', {
//     props: {
//       name,
//     },
//   })
// }
</script>

<template>
  <div class="relative">
    <ContentSlot :use="$slots.root" />

    <div class="hidden lg:grid grid-cols-3 gap-6 mb-6">
      <!-- eslint-disable -->
        <div class="w-full space-y-6">
          <template v-for="(item, index) in primitives">
            <AtomComponentCard v-if="index % 3 === 0" :key="item.title" :data="item" />
          </template>
        </div>
        <div class="w-full space-y-6">
          <template v-for="(item, index) in primitives">
            <AtomComponentCard v-if="index % 3 === 1" :key="item.title" :data="item" />
          </template>
        </div>
        <div class="w-full space-y-6">
          <template v-for="(item, index) in primitives">
            <AtomComponentCard v-if="index % 3 === 2" :key="item.title" :data="item" />
          </template>
        </div>
      </div>
      <div class="hidden sm:grid grid-cols-2 lg:hidden gap-6 mb-6">
      <!-- eslint-disable -->
        <div class="w-full space-y-6">
          <template v-for="(item, index) in primitives">
            <AtomComponentCard v-if="index % 2 === 0" :key="item.title" :data="item" />
          </template>
        </div>
        <div class="w-full space-y-6">
          <template v-for="(item, index) in primitives">
            <AtomComponentCard v-if="index % 2 === 1" :key="item.title" :data="item" />
          </template>
        </div>
      </div>
      <div class="grid sm:hidden grid-cols-1 gap-6 mb-6">
      <!-- eslint-disable -->
        <div class="w-full space-y-6">
          <template v-for="item in primitives" :key="item.title">
            <AtomComponentCard  :data="item" />
          </template>
        </div>
      </div>
  </div>
</template>
