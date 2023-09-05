<script setup lang="ts">
defineProps({
  prev: Object,
  next: Object,
})
</script>

<template>
  <div
    class="w-[100%] rounded-[12px] flex font-recoleta font-semibold justify-between p-4 dark:bg-[#171C34]"
  >
    <div>
      <NuxtLink v-if="prev" class="flex flex-col" :to="prev._path">
        <div class="flex flex-col text-[15px] text-black/80">
          <span class="i-ph-arrow-left w-7 -ml-2" />
          Previos
        </div>

        {{
          prev.title.length > 20
            ? `${prev.title.substring(0, 20)}...`
            : prev.title
        }}
      </NuxtLink>
    </div>
    <div>
      <NuxtLink v-if="next" class="flex flex-col items-end" :to="next._path">
        <div class="flex flex-col text-[15px] text-black/80 items-end">
          <span class="i-ph-arrow-right w-7 -mr-2" />
          Next
        </div>

        {{
          next.title.length > 20
            ? `${next.title.substring(0, 20)}...`
            : next.title
        }}
      </NuxtLink>
    </div>
  </div>
</template>
