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
    {
      name: 'msvalidate.01',
      content: '7C8C851EE3CFCAE1B9971B0ECAC9BEBF',
    },
  ],
});
</script>

<template>
  <NuxtLoadingIndicator />
  <Header />
  <NuxtPage />
  <RespectTooltip />
  <Footer />
</template>
