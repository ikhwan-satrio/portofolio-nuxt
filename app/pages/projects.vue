<template>
  <main class="w-full min-h-screen bg-background text-foreground">
    <!-- Hero Section -->
    <section
      class="relative w-full h-screen text-center flex flex-col items-center justify-center gap-8 overflow-hidden"
    >
      <!-- Background Rays -->
      <div class="absolute top-0 w-full h-full z-10">
        <ClientOnly>
          <BitsBackgroundsLightRays
            rays-origin="top-center"
            rays-color="oklch(from var(--color-foreground) l c h / 0.2)"
            :rays-speed="1.0"
            :light-spread="0.5"
            :ray-length="0.8"
            :follow-mouse="true"
            :mouse-influence="0.06"
            :noise-amount="0.15"
            :distortion="0.02"
            class="custom-rays pointer-events-none"
          />
        </ClientOnly>
      </div>

      <!-- Content -->
      <div class="relative z-10 space-y-8">
        <div
          class="flex flex-col items-center justify-center text-center space-y-6"
        >
          <h2
            class="font-poppins text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-linear-to-r from-chart-1 via-chart-2 to-chart-3 bg-clip-text text-transparent p-3"
          >
            My Projects
          </h2>

          <p
            class="font-inter text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            A collection of projects I've worked on — from web apps to
            open-source tools, built with Astro, Svelte, Tauri, and more.
          </p>
        </div>

        <!-- Stats -->
        <div class="flex flex-wrap justify-center gap-8 mt-12">
          <div class="text-center">
            <div
              class="text-3xl font-bold bg-linear-to-r from-chart-1 to-chart-3 bg-clip-text text-transparent"
            >
              {{ projects.length }}+
            </div>
            <div class="text-muted-foreground text-sm uppercase tracking-wide">
              Projects
            </div>
          </div>
          <div class="text-center">
            <div
              class="text-3xl font-bold bg-linear-to-r from-chart-4 to-chart-1 bg-clip-text text-transparent"
            >
              6+
            </div>
            <div class="text-muted-foreground text-sm uppercase tracking-wide">
              Technologies
            </div>
          </div>
          <div class="text-center">
            <div
              class="text-3xl font-bold bg-linear-to-r from-chart-5 to-chart-2 bg-clip-text text-transparent"
            >
              2+
            </div>
            <div class="text-muted-foreground text-sm uppercase tracking-wide">
              Years Experience
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div class="flex flex-col items-center animate-bounce">
          <span class="text-muted-foreground text-sm mb-2">
            Explore Projects
          </span>
          <svg
            class="w-6 h-6 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>

    <!-- All Projects Section -->
    <section class="w-full py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2
            class="text-4xl font-bold bg-linear-to-r from-chart-1 via-chart-4 to-chart-3 bg-clip-text text-transparent mb-6"
          >
            All Projects
          </h2>
          <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse through all my projects by category
          </p>
        </div>

        <!-- Category Filter (inline) -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="selectedCategory = category.id"
            class="px-6 py-3 rounded-xl font-medium transition-all duration-300"
            :class="[
              selectedCategory === category.id
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground',
            ]"
          >
            {{ category.name }}
            <span class="ml-2 px-2 py-0.5 bg-black/20 rounded-full text-xs">
              {{ category.count }}
            </span>
          </button>
        </div>

        <!-- Projects Grid (inline) -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="group bg-card/50 rounded-2xl overflow-hidden border border-border/50 backdrop-blur-sm hover:border-border transition-all duration-500 hover:transform hover:-translate-y-2 flex flex-col"
          >
            <!-- Project Image Placeholder -->
            <div class="relative h-48 bg-linear-to-br from-muted to-card">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-4xl opacity-30">
                  {{
                    project.category === 'web'
                      ? '🌐'
                      : project.category === 'mobile'
                        ? '📱'
                        : project.category === 'ui'
                          ? '🎨'
                          : '🔧'
                  }}
                </div>
              </div>

              <!-- Status Indicator -->
              <div class="absolute top-3 left-3">
                <div
                  class="w-3 h-3 rounded-full"
                  :class="{
                    'bg-chart-5': project.status === 'completed',
                    'bg-chart-4': project.status === 'in-progress',
                    'bg-chart-1': project.status === 'planning',
                    'bg-muted': !project.status,
                  }"
                ></div>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6 flex flex-col h-full">
              <div class="flex-1 space-y-4">
                <h3
                  class="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300"
                >
                  {{ project.title }}
                </h3>

                <p class="text-muted-foreground text-sm leading-relaxed">
                  {{ project.description }}
                </p>

                <!-- Tech Stack -->
                <div class="flex flex-wrap gap-1">
                  <span
                    v-for="tech in project.technologies.slice(0, 3)"
                    :key="tech"
                    class="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                  >
                    {{ tech }}
                  </span>
                  <span
                    v-if="project.technologies.length > 3"
                    class="px-2 py-1 bg-muted text-muted-foreground/70 text-xs rounded"
                  >
                    +{{ project.technologies.length - 3 }}
                  </span>
                </div>
              </div>

              <!-- Links -->
              <div class="flex gap-2 mt-6">
                <a
                  v-if="project.demoUrl"
                  :href="project.demoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 text-center px-3 py-2 bg-primary text-primary-foreground text-sm rounded-lg transition-colors duration-200 hover:bg-primary/90"
                >
                  Demo
                </a>
                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-3 py-2 border border-border text-muted-foreground hover:bg-muted hover:text-foreground text-sm rounded-lg transition-all duration-200"
                  :class="{ 'flex-1 text-center': !project.demoUrl }"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="w-full py-20">
      <div class="max-w-4xl mx-auto text-center px-6">
        <div
          class="bg-linear-to-br from-chart-1/10 via-chart-4/10 to-chart-3/10 rounded-3xl p-12 backdrop-blur-sm border border-border/50"
        >
          <h2
            class="text-4xl font-bold bg-linear-to-r from-chart-1 via-chart-4 to-chart-3 bg-clip-text text-transparent mb-6"
          >
            Have a Project in Mind?
          </h2>
          <p
            class="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            I'm always excited to work on interesting projects and collaborate
            with passionate people. Let's bring your ideas to life!
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/contact"
              class="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Start a Project
            </NuxtLink>
            <NuxtLink
              to="/about"
              class="px-8 py-3 border border-border text-muted-foreground rounded-xl font-medium hover:bg-muted hover:text-foreground transition-all duration-300"
            >
              Learn More About Me
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// Data
const categories = [
  { id: 'all', name: 'All Projects', count: 3 },
  { id: 'web', name: 'Web Apps', count: 1 },
  { id: 'mobile', name: 'Mobile', count: 0 },
  { id: 'ui', name: 'UI/UX', count: 0 },
  { id: 'opensource', name: 'Open Source', count: 2 },
];

const projects = [
  {
    id: 1,
    title: 'Portfolio and personal blog',
    description: 'My other portfolio with personal blog features',
    category: 'web',
    technologies: ['AstroJS', 'TypeScript', 'Tailwind CSS', 'SolidJS'],
    demoUrl: 'https://portofolio-ikhwan.vercel.app',
    githubUrl: 'https://github.com/ikhwan-satrio/astro-portofolio',
    status: 'completed',
  },
  {
    id: 2,
    title: 'Lenovo Vantage for Linux',
    description: 'Lenovo Vantage for Linux, built with Tauri and Svelte',
    category: 'opensource',
    technologies: ['Svelte', 'Tauri', 'Rust', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ikhwan-satrio/linux_vantage',
    status: 'completed',
  },
  {
    id: 3,
    title: 'Telegram TikTok Bot',
    description: 'Telegram bot that downloads TikTok videos without watermark',
    category: 'opensource',
    technologies: ['TypeScript', 'Deno', 'WebHook'],
    githubUrl: 'https://github.com/ikhwan-satrio/deno_telegrambot',
    status: 'completed',
  },
];

// State
const selectedCategory = ref('all');

// Computed
const filteredProjects = computed(() => {
  return selectedCategory.value === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory.value);
});

// Meta
useHead({
  title: 'projects',
  meta: [
    {
      name: 'description',
      content:
        'Explore the portfolio of Ikhwan Satrio – Frontend Developer. Showcasing web apps, open-source tools, and more built with Astro, Svelte, Tauri, and modern web tech.',
    },
  ],
});
</script>
