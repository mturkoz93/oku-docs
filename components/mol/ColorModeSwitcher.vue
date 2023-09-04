<script lang="ts" setup>
const colorMode = useColorMode()

function toggleColor() {
  if (colorMode.value === 'light')
    colorMode.preference = 'dark'
  else
    colorMode.preference = 'light'
}

const attrs = useAttrs()
</script>

<template>
  <AtomHeaderItem
    as="button" type="button" title="Changer le thème" v-bind="attrs"
    class="group h-10 w-10 flex justify-center items-center text-reduced" hover @click="toggleColor()"
  >
    <ClientOnly fallback="...">
      <Transition name="fade" mode="out-in">
        <span
          v-if="$colorMode.value === 'dark'"
          class="h-5 w-5 stroke-zinc-500 group-hover:stroke-zinc-400 fill-sky-400/10 dark:text-white transition-base i-ph-moon"
        />
        <span
          v-else-if="$colorMode.value === 'light'"
          class="h-5 w-5 fill-sky-50 stroke-sky-500 group-hover:stroke-sky-600 transition-base i-ph-sun"
        />
      </Transition>
    </ClientOnly>
  </AtomHeaderItem>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.15s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

button :deep(path) {
  stroke: inherit;
  fill: inherit;
}
</style>
