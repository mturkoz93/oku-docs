<script setup lang="ts">
import { OkuSlider, OkuSliderRange, OkuSliderThumb, OkuSliderTrack } from '@oku-ui/slider'
</script>

<template>
  <div class="flex items-center justify-center">
    <form>
      <OkuSlider
        class="relative flex items-center select-none touch-none w-[200px] h-5"
        :default-value="[50]"
        :max="100"
        :step="1"
      >
        <OkuSliderTrack class="bg-codGray-900 relative grow rounded-full h-[3px]">
          <OkuSliderRange class="absolute bg-white rounded-full h-full" />
        </OkuSliderTrack>
        <OkuSliderThumb
          class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-oku-500"
          aria-label="Volume"
        />
      </OkuSlider>
    </form>
  </div>
</template>
