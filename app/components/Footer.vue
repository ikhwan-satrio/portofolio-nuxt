<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/ikhwan-satrio', icon: 'fa:github' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/ikhwan-satrio', icon: 'fa:linkedin' },
  { name: 'Twitter', href: 'https://twitter.com/ikhwansatrio', icon: 'fa:twitter' },
  { name: 'Instagram', href: 'https://www.instagram.com/wantoobrrrrrr/', icon: 'fa:instagram' },
]

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

const techStack = ['JavaScript', 'TypeScript', 'Vue', 'Nuxt', 'Bun']

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="bg-gradient-to-b from-background to-sidebar border-t border-border">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Footer Content -->
      <div class="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        <!-- Brand Section -->
        <div class="lg:col-span-2 space-y-6">
          <div class="flex items-center space-x-3">
            <div
              class="w-10 h-10 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center">
              <span class="text-primary-foreground font-bold text-lg">IS</span>
            </div>
            <div>
              <h3 class="text-xl font-bold text-foreground">Ikhwan Satrio</h3>
              <p class="text-muted-foreground text-sm">Young Programmer</p>
            </div>
          </div>

          <p class="text-foreground/90 leading-relaxed max-w-md">
            Passionate frontend developer crafting beautiful and performant web experiences
            with modern technologies. Always learning, always building.
          </p>

          <!-- Social Links -->
          <!-- Social Links -->
          <div class="flex space-x-3">
            <a v-for="social in socialLinks" :key="social.name" :href="social.href" target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-secondary hover:bg-primary/20 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 group border border-border"
              :aria-label="social.name">
              <Icon :name="social.icon" :size="20" class="flex-shrink-0" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="space-y-6">
          <h4 class="text-lg font-semibold text-foreground">Quick Links</h4>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <NuxtLink :to="link.href"
                class="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center group">
                <span
                  class="w-1 h-1 bg-primary rounded-full mr-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Tech Stack -->
        <div class="space-y-6">
          <h4 class="text-lg font-semibold text-foreground">Tech Stack</h4>
          <div class="flex flex-wrap gap-2">
            <span v-for="tech in techStack" :key="tech"
              class="px-3 py-1 bg-secondary text-foreground/80 text-sm rounded-full hover:bg-primary/20 hover:text-primary border border-border transition-all duration-200">
              {{ tech }}
            </span>
          </div>

          <!-- Status -->
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-chart-5 rounded-full animate-pulse"></div>
            <span class="text-sm text-muted-foreground">Available for projects</span>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
        <div class="flex flex-wrap items-center justify-center gap-1 text-muted-foreground">
          <span>&copy; {{ currentYear }} Ikhwan Satrio.</span>
          <span>Made with</span>
          <span class="text-destructive animate-pulse">❤️</span>
          <span>and lots of</span>
          <span class="text-chart-4">☕</span>
        </div>

        <div class="flex items-center gap-1 text-muted-foreground">
          <span>Built with</span>
          <span class="text-primary font-medium">Nuxt</span>
        </div>
      </div>
    </div>

    <!-- Scroll to Top Button -->
    <button @click="scrollToTop"
      class="fixed bottom-6 right-6 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 group"
      aria-label="Scroll to top">
      <Icon name="lucide:arrow-up" class="mx-auto group-hover:-translate-y-0.5 transition-transform" :size="24" />
    </button>
  </footer>
</template>
