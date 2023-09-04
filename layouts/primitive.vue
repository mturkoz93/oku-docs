<script lang="ts" setup>
const { page } = useContent()
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
    <OkuToolbar />
    <AtomPageSection>
      <PageProseHeader :title="page.title" :date-published="page.datePublished" />

      <div class="prose dark:prose-invert prose-zinc w-full">
        <slot />
      </div>
    </AtomPageSection>
  </AtomSection>
</template>
