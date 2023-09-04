<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

defineProps<{
  primitive: ParsedContent
}>()
</script>

<template>
  <article class="group relative flex flex-col items-start gap-6">
    <!-- <MolPrimitiveImage :image="primitive.company" class="z-20" /> -->

    <div class="flex flex-col gap-1">
      <h2 class="text-base font-semibold tracking-tight text-content">
        <div
          class="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition  ease-in group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"
        />
        <NuxtLink :to="primitive._path">
          <span class="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
          <span class="relative z-10">{{
            primitive.title
          }}</span>
        </NuxtLink>
      </h2>
    </div>

    <p class="relative z-10 text-sm text-reduced grow">
      {{ primitive.description }}
    </p>

    <div
      class="relative z-30 flex items-center text-sm font-medium text-content hover:text-primary transition"
    >
      <span class="h-4 w-4" i-ph-link />
    </div>
  </article>
</template>
