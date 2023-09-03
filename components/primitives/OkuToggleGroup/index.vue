<script setup lang="ts">
import { OkuToggleGroup, OkuToggleGroupItem } from '@oku-ui/toggle-group'
</script>

<template>
  <div class="flex items-center justify-center">
    <OkuToggleGroup
      class="inline-flex bg-mauve6 rounded shadow-[0_2px_10px] shadow-blackA7 space-x-px" type="single"
      default-value="center" aria-label="Text alignment"
    >
      <OkuToggleGroupItem class="toggle-group-item" value="left" aria-label="Left aligned">
        <span class="i-ph-text-align-left text-white w-6 h-6" />
      </OkuToggleGroupItem>
      <OkuToggleGroupItem class="toggle-group-item" value="center" aria-label="Center aligned">
        <span class="i-ph-text-align-center text-white w-6 h-6" />
      </OkuToggleGroupItem>
      <OkuToggleGroupItem class="toggle-group-item" value="right" aria-label="Right aligned">
        <span class="i-ph-text-align-right text-white w-6 h-6" />
      </OkuToggleGroupItem>
    </OkuToggleGroup>
  </div>
</template>

<style lang="postcss">
.toggle-group-item {
  @apply hover:bg-oku-400 text-oku-300 data-[state=on]:bg-red-500 data-[state=on]:text-gray-500 flex h-[35px] w-[35px] items-center justify-center bg-grayA-900 text-base leading-4 first:rounded-l last:rounded-r focus:z-10 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none
}
</style>
