<script setup lang="ts">
import { OkuPopover, OkuPopoverArrow, OkuPopoverClose, OkuPopoverContent, OkuPopoverPortal, OkuPopoverTrigger } from '@oku-ui/popover'
</script>

<template>
  <div class="flex items-center justify-center">
    <OkuPopover>
      <OkuPopoverTrigger as-child>
        <button
          class="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-codGray-900 shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-default outline-none"
          aria-label="Update dimensions"
        >
          <span class="i-ph-sliders-horizontal-duotone w-7 h-7 text-white" />
        </button>
      </OkuPopoverTrigger>
      <OkuPopoverPortal>
        <OkuPopoverContent
          class="rounded p-5 w-[260px] bg-codGray-900 shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
          :side-offset="5"
        >
          <div class="flex flex-col gap-2.5">
            <p class="text-mauve12 text-[15px] leading-[19px] font-medium mb-2.5">
              Dimensions
            </p>
            <fieldset class="flex gap-5 items-center">
              <label class="text-[13px] text-violet11 w-[75px]" htmlFor="width">
                Width
              </label>
              <input
                id="width"
                class="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                defaultValue="100%"
              >
            </fieldset>
            <fieldset class="flex gap-5 items-center">
              <label class="text-[13px] text-violet11 w-[75px]" htmlFor="maxWidth">
                Max. width
              </label>
              <input
                id="maxWidth"
                class="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                defaultValue="300px"
              >
            </fieldset>
            <fieldset class="flex gap-5 items-center">
              <label class="text-[13px] text-violet11 w-[75px]" htmlFor="height">
                Height
              </label>
              <input
                id="height"
                class="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                defaultValue="25px"
              >
            </fieldset>
            <fieldset class="flex gap-5 items-center">
              <label class="text-[13px] text-violet11 w-[75px]" htmlFor="maxHeight">
                Max. height
              </label>
              <input
                id="maxHeight"
                class="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                defaultValue="none"
              >
            </fieldset>
          </div>
          <OkuPopoverClose
            class="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 absolute top-[5px] right-[5px] hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 outline-none cursor-default"
            aria-label="Close"
          >
            <span class="i-ph-x-bold w-4 h-4 text-white" />
          </OkuPopoverClose>
          <OkuPopoverArrow class="fill-white" />
        </OkuPopoverContent>
      </OkuPopoverPortal>
    </OkuPopover>
  </div>
</template>
