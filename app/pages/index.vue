<script setup lang="ts">
useHead({
  title: 'home',
  meta: [
    {
      name: 'description',
      content: 'Personal portfolio of Ikhwan Satrio - Frontend Developer',
    },
  ],
});
</script>

<template>
  <main class="w-full min-h-screen">
    <section
      class="relative w-full h-screen text-center flex flex-col items-center justify-center gap-8 bg-[radial-gradient(circle_at_center,var(--sidebar),var(--background))] overflow-hidden"
    >
      <ClientOnly>
        <template #fallback>
          <div class="flex flex-col items-center gap-6 animate-pulse">
            <div class="h-32.5 w-32.5 rounded-full bg-muted/50 border-2 border-border" />
            <div class="h-10 w-80 rounded-lg bg-muted/50" />
            <div class="h-7 w-52 rounded-md bg-muted/50" />
            <div class="flex gap-4 mt-8">
              <div class="h-12 w-36 rounded-xl bg-muted/50" />
              <div class="h-12 w-36 rounded-xl bg-muted/50" />
            </div>
          </div>
        </template>
        <HomeHeroSection />
      </ClientOnly>
    </section>
  </main>
</template>
