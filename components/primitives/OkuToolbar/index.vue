<script setup lang="ts">
import { OkuToolbar, OkuToolbarButton, OkuToolbarLink, OkuToolbarSeparator, OkuToolbarToggleGroup, OkuToolbarToggleItem } from '@oku-ui/toolbar'
</script>

<template>
  <div class="w-full">
    <OkuToolbar
      class="flex p-[10px] w-full min-w-max rounded-md bg-codGray-900 shadow-[0_2px_10px] shadow-blackA7"
      aria-label="Formatting options"
    >
      <OkuToolbarToggleGroup type="multiple" aria-label="Text formatting">
        <OkuToolbarToggleItem
          class="flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-codGray-800 ml-0.5 outline-none hover:bg-violet3 hover:text-violet11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7 first:ml-0 data-[state=on]:bg-violet5 data-[state=on]:text-violet11"
          value="bold"
          aria-label="Bold"
        >
          <span class="i-ic-baseline-format-bold w-4 h-4 text-white" />
        </OkuToolbarToggleItem>
        <OkuToolbarToggleItem
          class="flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-codGray-800 ml-0.5 outline-none hover:bg-violet3 hover:text-violet11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7 first:ml-0 data-[state=on]:bg-violet5 data-[state=on]:text-violet11"
          value="italic"
          aria-label="Italic"
        >
          <span class="i-ic-baseline-format-italic w-4 h-4 text-white" />
        </OkuToolbarToggleItem>
        <OkuToolbarToggleItem
          class="flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-codGray-800 ml-0.5 outline-none hover:bg-violet3 hover:text-violet11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7 first:ml-0 data-[state=on]:bg-violet5 data-[state=on]:text-violet11"
          value="strikethrough"
          aria-label="Strike through"
        >
          <span class="i-ic-baseline-format-strikethrough w-4 h-4 text-white" />
        </OkuToolbarToggleItem>
      </OkuToolbarToggleGroup>
      <OkuToolbarSeparator class="w-[1px] bg-mauve6 mx-[10px]" />
      <OkuToolbarToggleGroup type="single" default-value="center" aria-label="Text alignment">
        <OkuToolbarToggleItem
          class="flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-codGray-800 ml-0.5 outline-none hover:bg-violet3 hover:text-violet11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7 first:ml-0 data-[state=on]:bg-violet5 data-[state=on]:text-violet11"
          value="left"
          aria-label="Left aligned"
        >
          <span class="i-ic-baseline-format-align-left w-4 h-4 text-white" />
        </OkuToolbarToggleItem>
        <OkuToolbarToggleItem
          class="flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-codGray-800 ml-0.5 outline-none hover:bg-violet3 hover:text-violet11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7 first:ml-0 data-[state=on]:bg-violet5 data-[state=on]:text-violet11"
          value="center"
          aria-label="Center aligned"
        >
          <span class="i-ic-baseline-format-align-center w-4 h-4 text-white" />
        </OkuToolbarToggleItem>
        <OkuToolbarToggleItem
          class="flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-codGray-800 ml-0.5 outline-none hover:bg-violet3 hover:text-violet11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7 first:ml-0 data-[state=on]:bg-violet5 data-[state=on]:text-violet11"
          value="right"
          aria-label="Right aligned"
        >
          <span class="i-ic-baseline-format-align-right w-4 h-4 text-white" />
        </OkuToolbarToggleItem>
      </OkuToolbarToggleGroup>
      <OkuToolbarSeparator class="w-[1px] bg-mauve6 mx-[10px]" />
      <OkuToolbarLink
        class="bg-transparent text-mauve11 hidden sm:inline-flex justify-center items-center hover:bg-transparent hover:cursor-pointer flex-shrink-0 flex-grow-0 basis-auto h-[25px] px-[5px] rounded text-[13px] leading-none bg-codGray-800 ml-0.5 outline-none hover:bg-violet3 hover:text-violet11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7 first:ml-0 data-[state=on]:bg-violet5 data-[state=on]:text-violet11"
        href="#"
        target="_blank"
        :style="{ marginRight: 10 }"
      >
        Edited 2 hours ago
      </OkuToolbarLink>
      <OkuToolbarButton
        class="px-[10px] text-codbg-codGray-800 bg-violet9 flex-shrink-0 flex-grow-0 basis-auto h-[25px] rounded inline-flex text-[13px] leading-none items-center justify-center outline-none hover:bg-violet10 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7"
        :style="{ marginLeft: 'auto' }"
      >
        Share
      </OkuToolbarButton>
    </OkuToolbar>
  </div>
</template>
