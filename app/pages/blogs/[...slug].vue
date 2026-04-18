<script setup lang="ts">
const route = useRoute();
const { data: blog } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('blogs').path(route.path).first();
});

if (!blog.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true,
  });
}

useHead({
  title: blog.value.title,
  meta: [
    { name: 'description', content: blog.value.description },
    {
      name: 'keywords',
      content: [
        `post ${blog.value.title}`,
        'blog ikhwan satrio',
        `blog ${blog.value.title}`,
      ].join(', '),
    },
  ],
});
</script>

<template>
  <main
    class="w-full min-h-screen bg-background text-foreground px-4 pb-10 pt-25"
  >
    <div class="max-w-4xl mx-auto space-y-6">
      <!-- Back Button -->
      <NuxtLink
        to="/blogs"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-border bg-card text-foreground font-medium hover:border-primary hover:text-primary transition-all duration-300 group shadow-sm hover:shadow-md"
      >
        <Icon
          name="lucide:arrow-left"
          class="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
        />
        <span>Back to Blogs</span>
      </NuxtLink>

      <!-- Artikel -->
      <article class="space-y-6 overflow-x-hidden">
        <h1 class="text-3xl font-bold leading-tight">
          {{ blog?.title }}
        </h1>
        <p class="text-muted-foreground text-sm">
          Published on {{ blog?.date }}
        </p>
        <div class="prose prose-ctp max-w-none py-2">
          <ContentRenderer v-if="blog" :value="blog" />
        </div>
      </article>
    </div>
  </main>
</template>
