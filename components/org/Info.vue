<script setup lang="ts">
const props = defineProps({
  datePublished: String,
  readingTime: String,
})

function shareOnTwitter() {
  window.open(
    `https://twitter.com/intent/tweet?text=${
     encodeURIComponent(document.title)
     }&url=${
     encodeURIComponent(window.location.href.replace(/([^#]*)#.+/, '$1'))}`,
    '',
    'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=350,width=600',
  )
}

function copyLink() {
  navigator.clipboard.writeText(
    window.location.href.replace(/([^#]*)#.+/, '$1'),
  )
}
</script>

<template>
  <div class="mt-10 sm:mt-20 flex justify-between items-center flex-row">
    <div class="flex">
      <!-- <div class="mr-4">
        <div class="text-[11px] mb-1 text-[#6f6f6f] dark:text-[#9ba1a6]">
          Written by
        </div>
        <div class="flex items-center">
          <div>
            <img class="w-5 h-5 mr-2 rounded-full" src="/img/my_logo.png" alt="">
          </div>
          <div>
            <a class="text-[14px]" href="https://twitter.com/oku_ui" target="_blank">@oku_ui</a>
          </div>
        </div>
      </div> -->

      <div class="mr-4">
        <div class="text-[11px] mb-1 text-[#6f6f6f] dark:text-[#9ba1a6]">
          Published on
        </div>
        <span class="text-[14px]">
          {{
            new Date(datePublished!).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
          }}
        </span>
      </div>

      <div class="mr-4">
        <div class="text-[11px] mb-1 text-[#6f6f6f] dark:text-[#9ba1a6]">
          Reading time
        </div>
        <span class="text-[14px]">{{ readingTime }}</span>
      </div>
    </div>

    <div class="hidden sm:flex">
      <button
        class="h-[36px] mr-3 flex justify-center items-center bg-[#E8E8E8] w-[36px] rounded-full dark:bg-[#232425]"
        @click="shareOnTwitter"
      >
        <i class="i-ph-twitter-logo w-4" />
      </button>

      <button
        class="h-[36px] flex justify-center items-center bg-[#E8E8E8] w-[36px] rounded-full dark:bg-[#232425]"
        @click="copyLink"
      >
        <i class="i-ph-link w-4" />
      </button>
    </div>
  </div>
</template>
