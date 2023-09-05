<script setup>
import { hash } from 'ohash'

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
})

const { data: page, error } = await useAsyncData(`Container-${hash(props.slug)}`, () => {
  try {
    return queryContent(props.slug).findOne()
  }
  catch (error) {
    throw createError({ statusCode: 404, message: error.toString(), data: error, fatal: true })
  }
})

if (error && error.value)
  throw error.value

const { data: pageList } = await useAsyncData(
  `Container-pageList-${hash(props.type)}`,
  () => queryContent(props.type).only('_path').find(),
  {
    transform: pages => pages.map(e => e._path),
  },
)

useContentHead(page)

function transformTitle(text) {
  return text
    .replace(/([A-Z])/g, '&#x200B;$1')
    .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
}

const [prev, next] = await queryContent()
  .only(['_path', 'title'])
  .sort({ date: 1 })
  .findSurround(props.slug)
</script>

<template>
  <div class="container mx-auto">
    <OrgPrimitivesList v-if="slug === '/primitives/'" :blogs="page" />

    <div
      v-if="page?.title"
      class="pt-10 col-span-8 pb-4 border-[#c7c7c7] border-dashed border-b dark:border-[#34343a]"
    >
      <div class="flex mb-4">
        <div v-for="(t, i) in page.tags" :key="i" class="mr-2 last:mr-0">
          <div class="text-[13px]">
            #{{ t }}
          </div>
        </div>
      </div>

      <h1 class="text-4xl sm:text-6xl mb-5 font-recoleta font-semibold">
        {{ page.title }}
      </h1>
      <p class="font-recoleta">
        {{ page.description }}
      </p>
      <OrgInfo
        v-if="page.title"
        :reading-time="page.readingTime"
        :date-published="page.datePublished"
      />
    </div>

    <div class="grid grid-cols-12 gap-5">
      <article v-if="page" class="xl:col-span-8 col-span-full" :class="{ full: page.rightBar === false }">
        <ContentRenderer :value="page">
          <div class="bd-title">
            <OrgBreadcrumb :slug="props.slug" :page-list="pageList" />
            <h1 v-html="transformTitle(page.title)" />
          </div>

          <div class="bd-content">
            <ContentRendererMarkdown class="bd-markdown" :value="page" data-bs-spy="scroll" data-bs-target="#nav-toc" />
            <AtomPrevNext
              v-if="prev || next"
              class="hidden sm:flex"
              :prev="prev"
              :next="next"
            />
          </div>
        </ContentRenderer>
      </article>
      <div
        v-if="page?.title && page.body.toc.links.length > 0"
        class="hidden sm:block xl:col-span-2 pl-6"
      >
        <aside class="sticky top-10 mt-[3rem] h-[auto]">
          <MolNavToc :links="page.body.toc.links" />
        </aside>
      </div>
    </div>
  </div>
</template>
