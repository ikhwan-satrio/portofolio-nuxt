<script setup lang="ts">
const route = useRoute();

const { data: blog } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('blogs').path(route.path).first();
});

useHead({
  title: blog?.value?.path.replaceAll('/blogs/', ''),
  meta: [
    { name: 'description', content: blog.value?.description },
    {
      name: 'keywords',
      content: [
        `post ${blog.value?.title}`,
        'blog ikhwan satrio',
        `blog ${blog.value?.title}`,
      ],
    },
  ],
});

if (!blog.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true,
  });
}
</script>

<template>
  <main
    class="w-full min-h-screen bg-background text-foreground px-4 pb-10 pt-25"
  >
    <!-- Container Utama -->
    <div class="max-w-6xl mx-auto space-y-16">
      <!-- Artikel dan Gambar -->
      <article class="flex flex-col lg:flex-row gap-10">
        <NuxtLink href="/blogs" class="font-poppins font-bold text-lg">
          <Icon name="fa:arrow-left" /> back
        </NuxtLink>
        <!-- Gambar utama -->
        <div v-if="blog?.thumbnail" class="shrink-0 w-full lg:w-1/3">
          <NuxtImg
            :src="blog.thumbnail"
            :alt="blog.title"
            class="aspect-video w-full object-cover rounded-lg shadow-md"
          />
        </div>

        <!-- Konten blog -->
        <div class="flex-1 space-y-6 overflow-x-hidden">
          <h1 class="text-3xl font-bold leading-tight">
            {{ blog?.title }}
          </h1>
          <p class="text-gray-500 text-sm">Published on {{ blog?.date }}</p>
          <div class="prose prose-ctp max-w-none py-2">
            <ContentRenderer v-if="blog" :value="blog" />
          </div>
        </div>
      </article>
    </div>
  </main>
</template>
