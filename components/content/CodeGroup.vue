<script setup lang="ts">
import { OkuTabs, OkuTabsContent, OkuTabsList, OkuTabsTrigger } from '@oku-ui/tabs'

defineOptions({
  inheritAttrs: false,
})

const slots = useSlots()

const selectedIndex = ref('tab-0')

const tabs = computed(() => slots.default?.().map((slot, index) => {
  return {
    label: slot.props?.filename || slot.props?.label || `${index}`,
    component: slot,
  }
}) || [])

const selectedTab = computed(() => tabs.value.find((data, index) => {
  return (index === Number(selectedIndex.value.split('-')[1]))
}))
</script>

<template>
  <div class="overflow-hidden">
    <div class="rounded-lg componentBackground w-full relative items-center justify-center flex">
      <div class="w-full max-w-xl flex flex-col items-center justify-center px-4 py-20">
        <slot name="preview" />
      </div>
    </div>
    <slot name="code">
      <div :selected-index="selectedIndex" class="mt-5">
        <OkuTabs
          v-model="selectedIndex"
          default-value="tab-0"
        >
          <OkuTabsList class="" aria-label="Manage your account">
            <div class="flex border border-[#D3D3D3] dark:border-[#22201E] bg-[#F2F2F2] dark:bg-[#121110] rounded mb-4 overflow-hidden">
              <OkuTabsTrigger
                v-for="(tab, index) in tabs" :key="index" as="template" class="px-4 py-2 focus:outline-none border-r-oku-200 dark:border-r-oku-700"
                :class="[selectedIndex === `tab-${index}` ? 'font-medium text-[#111] dark:text-white bg-[#C9C9C9] dark:bg-[#22201E]' : 'hover:bg-[#C9C9C9] dark:hover:bg-[#22201E]']"
                :value="`tab-${index}`"
                @click="selectedIndex = `tab-${index}`"
              >
                {{ tab.label }}
              </OkuTabsTrigger>
            </div>
          </OkuTabsList>
          <OkuTabsContent value="tab-0">
            <component :is="selectedTab!.component" v-if="selectedTab" />
          </OkuTabsContent>
        </OkuTabs>
      </div>
    </slot>
  </div>
</template>

<style lang="postcss">
.highlight-md.prose-code.language-md {
  @apply mt-0;
}

.dark .componentBackground {
  @apply bg-gradient-to-br from-[#161616] to-[#262626];
}

.componentBackground {
  @apply bg-gradient-to-br from-[#E2E2E2] to-[#EFEFEF] shadow-inner;
}
</style>
