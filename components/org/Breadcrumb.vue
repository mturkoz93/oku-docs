<script lang="ts" setup>
interface Props {
  slug: string
  pageList: string[]
}

const props = defineProps<Props>()

function breadcrumb() {
  return [...new Set(props.slug.split('/')
    .filter(r => r !== '')),
  ]
}

function breadcrumbLink(item: any, index: any) {
  return `/${breadcrumb().slice(0, index + 1).join('/')}`
}
function breadcrumbLinkExist(item: any, index: any) {
  return props.pageList.includes(breadcrumbLink(item, index))
}
</script>

<template>
  <div class="slug p-10">
    <span v-for="(item, index) in breadcrumb()" :key="item" :class="{ first: index === 0 }">
      <NuxtLink :href="breadcrumbLinkExist(item, index) ? breadcrumbLink(item, index) : ''">
        {{ item.toUpperCase() }}
      </NuxtLink>
    </span>
  </div>
</template>

<style lang="postcss" scoped>
.slug {
  @apply flex flex-wrap gap-1 text-oku-500 w-full font-bold;

  span {
    @apply before:content-['>'] before:mr-1 before:ml-1 first:before:content-none;
  }

  .breadcrumb-item+.breadcrumb-item::before {
    color: #6c757d;
  }
}
</style>
