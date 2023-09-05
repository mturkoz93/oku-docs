<script lang="ts" setup>
const { prev, next, page } = useContent()
const { ISODate } = useDate()

useSchemaOrg([
  defineArticle(
    {
      image: page.value.image ?? '',
      datePublished: ISODate(new Date(page.value.datePublished)),
      dateModified: ISODate(new Date(page.value.dateModified)),
    },
  ),
])
</script>

<template>
  <AtomSection>
    <AtomPageSection>
      <AtomPageProseHeader :title="page.title" :date-published="page.datePublished" />

      <div class="mt-20">
        <div class="prose dark:prose-invert prose-zinc w-full">
          <slot />
        </div>
      </div>

      <div class="items-between flex pt-8">
        <NuxtLink
          v-if="prev"
          class="text-yellow-500 transition hover:text-primary-500 dark:text-yellow-300 dark:hover:text-primary-500"
          :to="prev._path"
        >
          &larr; {{ prev.title }}
        </NuxtLink>
        <span class="grow" />
        <NuxtLink
          v-if="next"
          class="text-yellow-500 transition hover:text-primary-500 dark:text-yellow-300 dark:hover:text-primary-500"
          :to="next._path"
        >
          {{ next.title }} &rarr;
        </NuxtLink>
      </div>
    </AtomPageSection>
  </AtomSection>
</template>
