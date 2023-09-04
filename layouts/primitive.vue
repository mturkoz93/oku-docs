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
    <AtomPageSection>
      <AtomPageProseHeader :title="page.title" :date-published="page.datePublished" />

      <div class="mt-20">
        <div class="prose dark:prose-invert prose-zinc w-full">
          <slot />
        </div>
      </div>
    </AtomPageSection>
  </AtomSection>
</template>
