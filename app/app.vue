<script setup lang="ts">
useHead({
  titleTemplate(title) {
    return `ikhwan | ${title}`;
  },
  meta: [
    {
      name: 'keywords',
      content:
        'portofolio,portofolio ikhwan,portofolio ikhwan satrio,ikhwan,ikhwan satrio,young dev portofolio',
    },
    {
      name: 'google-site-verification',
      content: 'bWRaoFVlyB345Wietszb9IvK4x9MIN9hvtEA9ChIgoQ',
    },
  ],
});
</script>

<template>
  <NuxtLoadingIndicator />
  <Header />
  <NuxtPage />
  <Footer />
  <RespectTooltip />
</template>
