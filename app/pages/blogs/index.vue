<script setup lang="ts">
const { data: blogs } = await useAsyncData(() => {
  return queryCollection('blogs').all();
});

useHead({
  title: 'blogs',
  meta: [
    {
      name: 'description',
      content:
        'Read blogs by Ikhwan Satria on programming, anime, and dev tools like NeoVim, Nuxt, and more.',
    },
    {
      name: 'keywords',
      content: [
        'blog of ikhwan satrio',
        'ikhwan satrio blog',
        'main blog ikhwan satrio',
      ],
    },
  ],
});
</script>

<template>
  <BitsAnimationsTargetCursor :spin-duration="2" :hide-default-cursor="true" />
  <main
    class="min-h-screen bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8"
  >
    <BlogComponent v-if="blogs" :blogs="blogs" />
  </main>
</template>
