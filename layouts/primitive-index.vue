<script lang="ts" setup>
const { page } = useContent()

useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage',
  }),
])
</script>

<template>
  <AtomSection>
    <AtomPageSection class="gap-20">
      <AtomPageHeader :title="page.pageTitle">
        <slot />
      </AtomPageHeader>
      <OrgPrimitivesList>
        {{ page.title }}
      </OrgPrimitivesList>
    </AtomPageSection>
  </AtomSection>
</template>
