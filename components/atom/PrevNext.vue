<script setup lang="ts">
defineProps({
  prev: Object,
  next: Object,
})
</script>

<template>
  <div
    class="w-[100%] rounded-[12px] flex font-recoleta font-semibold justify-between border border-[#c7c7c7] bg-[#ffffff] dark:border-[#475584] p-4 dark:bg-[#171C34]"
  >
    <div>
      <NuxtLink v-if="prev" class="flex items-center" :to="prev._path">
        <span class="i-ph-arrow-left w-7" />

        {{
          prev.title.length > 20
            ? `${prev.title.substring(0, 20)}...`
            : prev.title
        }}
      </NuxtLink>
    </div>
    <div>
      <NuxtLink v-if="next" class="flex items-center" :to="next._path">
        {{
          next.title.length > 20
            ? `${next.title.substring(0, 20)}...`
            : next.title
        }}
        <span class="i-ph-arrow-right w-7" />
      </NuxtLink>
    </div>
  </div>
</template>
