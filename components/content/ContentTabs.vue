<script lang="ts" setup>
import { OkuTabs, OkuTabsContent, OkuTabsList, OkuTabsTrigger } from '@oku-ui/tabs'

import { computed, ref } from 'vue'

const slots = useSlots()

const active = ref(Object.keys(slots)[0])
onMounted(() => {
  console.log(slots)
})
const tabs = ref([
  { name: 'preview', title: 'Preview' },
  { name: 'config', title: 'inkline.config.ts' },
  { name: 'vite', title: 'vite.config.ts' },
  { name: 'nuxt', title: 'nuxt.config.ts' },
  { name: 'webpack', title: 'webpack.config.js' },
  { name: 'main', title: 'main.ts' },
  { name: 'app', title: 'App.vue' },
  { name: 'vue', title: 'Component.vue' },
  { name: 'scss', title: 'style.scss' },
  { name: 'output', title: 'Output' },
])

const availableTabs = computed(() => tabs.value.filter(tab => !!slots[tab.name]))
</script>

<template>
  <div class="w-full">
    <OkuTabs
      v-bind="$attrs"
      v-model="active"
      class="flex flex-col shadow-[0_2px_10px] shadow-grayA-900"
    >
      <OkuTabsList class="shrink-0 flex border-b border-mauve6" aria-label="Manage your account">
        <OkuTabsTrigger
          v-for="tab in availableTabs"
          :key="tab.name"
          class="bg-white dark:bg-grayA-950 px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
          :value="tab.name"
        >
          {{ tab.title }}
        </OkuTabsTrigger>
      </OkuTabsList>
      <OkuTabsContent
        v-for="tab in availableTabs"
        :key="tab.name"
        class="grow p-5 bg-white dark:bg-grayA-950 rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        :value="tab.name"
      >
        <slot :name="tab.name" />
      </OkuTabsContent>
    </OkuTabs>
  </div>
</template>
