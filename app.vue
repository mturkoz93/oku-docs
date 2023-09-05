<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

provide('navigation', navigation)

useHead({
  title: 'Oku',
  link: [
    { rel: 'prefetch', href: '/sponsors/productdevbook.svg' },
  ],
})
</script>

<template>
  <NuxtLoadingIndicator />
  <Html dir="ltr" class="h-full font-sans antialiased">
    <Head>
      <!-- <SeoKit /> -->
    </Head>

    <Body class="font-inter bg-[#f1f2f4] text-[#171717] dark:bg-[#151718] dark:text-[#ededef]">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <!-- <MolFooter class="relative" /> -->
    </Body>
  </Html>
</template>
