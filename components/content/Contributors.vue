<script setup lang="ts">
const { teamMembers } = useContributors()
</script>

<template>
  <AtomSection>
    <div v-if="teamMembers">
      <div class="mt-20 flex mx-auto flex-col gap-6 w-full max-w-[1200px]">
        <h2 class="text-center font-semibold leading-8 text-gray-900 dark:text-white text-3xl">
          Our Team
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-stretch gap-4 w-full lg:grid-cols-4">
          <template v-for="item in teamMembers" :key="item.github">
            <AtomTeamCard
              :data="{
                image: item.avatar,
                name: item.name,
                github: item.github,
                title: item.title,
                description: item.desc,
                twitter: item.twitter,
                sponsor: item.sponsor,
              }"
            />
          </template>
        </div>
      </div>
      <div class="mt-40">
        <h2 class="text-center font-semibold leading-8 text-gray-900 dark:text-white text-3xl">
          Contributors
        </h2>
        <p class="text-lg max-w-200 text-center leading-7 mt-10">
          <AtomContributors />
          <br>
          <a class="text-oku-500 font-bold" href="https://chat.productdevbook.com" rel="noopener noreferrer">Join the community</a> and get involved!
        </p>
      </div>

      <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-40 mb-40">
        <h2 class="text-center font-semibold leading-8 text-gray-900 dark:text-white text-3xl">
          Sponsored by
        </h2>
        <div class="mx-auto mt-10 flex justify-center items-center max-w-none ">
          <div class="flex flex-col items-center">
            <a class="text-lg font-semibold text-oku-600" href="https://github.com/sponsors/productdevbook" rel="noopener noreferrer">productdevbook's Sponsors</a>
            <a href="https://cdn.jsdelivr.net/gh/productdevbook/static/sponsors.svg" target="_blank" rel="noopener noreferrer">
              <img
                crossorigin="anonymous"
                inline-block
                width="768" height="1464"
                class="resizable-img"
                loading="lazy"
                src="/sponsors/productdevbook.svg"
                alt="Anthony Fu's sponsors"
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </AtomSection>
</template>

<style lang="postcss">

</style>
