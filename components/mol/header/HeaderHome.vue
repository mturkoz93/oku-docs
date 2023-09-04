<script lang="ts" setup>
const NuxtLink = resolveComponent('NuxtLink')

const { isHome } = useActivePath()
</script>

<template>
  <Transition>
    <template v-if="!isHome">
      <AtomHeaderItem :as="NuxtLink" to="/" class="h-10 w-10 p-0.5 block" v-bind="$attrs" hover>
        <AtomLogo width="36" height="36" class="w-9 h-9" loading="async" />
      </AtomHeaderItem>
    </template>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
