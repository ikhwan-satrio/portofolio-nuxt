<script setup lang="ts">
import image from '~/assets/images/nishimiya.jpeg';

// SEO Meta Tags
useHead({
  title: 'about',
  meta: [
    {
      name: 'description',
      content:
        'Learn more about Ikhwan Satrio - Young passionate programmer specializing in modern web development with Vue, Nuxt, and React',
    },
    {
      name: 'keywords',
      content:
        'portofolio,portofolio ikhwan,portofolio ikhwan satrio,ikhwan,ikhwan satrio,young dev portofolio',
    },
  ],
});

// Skills data
const skills = [
  { name: 'JavaScript', level: 90, color: 'from-chart-4 to-chart-1' },
  { name: 'TypeScript', level: 85, color: 'from-chart-3 to-chart-2' },
  { name: 'React', level: 75, color: 'from-chart-2 to-chart-3' },
  { name: 'Qwik', level: 80, color: 'from-chart-1 to-chart-4' },
  { name: 'Svelte', level: 80, color: 'from-chart-4 to-chart-5' },
  { name: 'Node.js', level: 85, color: 'from-chart-5 to-chart-3' },
  { name: 'UI/UX Design', level: 70, color: 'from-chart-1 to-chart-5' },
  { name: 'Database', level: 70, color: 'from-chart-3 to-chart-1' },
];

// Interests data
const interests = [
  { emoji: '🎮', title: 'Gaming', desc: 'Strategy games and indie titles' },
  { emoji: '📚', title: 'Learning', desc: 'Always exploring new tech' },
  { emoji: '☕', title: 'Coffee', desc: 'Fuel for late-night coding' },
  { emoji: '🎵', title: 'Music', desc: 'Lo-fi beats while coding' },
  { emoji: '🌟', title: 'Open Source', desc: 'Contributing to community' },
  { emoji: '🚀', title: 'Innovation', desc: 'Building the future' },
];
</script>

<template>
  <main class="w-full min-h-screen bg-background text-foreground">
    <!-- Hero Section -->
    <section
      class="relative w-full h-screen text-center flex flex-col items-center justify-center gap-8 overflow-hidden"
    >
      <!-- Profile Image -->
      <div class="relative">
        <BitsAnimationsGlareHover
          width="150px"
          height="150px"
          border-radius="100%"
          glare-color="oklch(from var(--color-foreground) l c h / 0.3)"
          :glare-opacity="0.3"
          :glare-angle="-30"
          :glare-size="300"
          :transition-duration="800"
          :play-once="false"
        >
          <img
            :src="image"
            alt="Profile"
            class="h-37.5 w-37.5 rounded-full object-cover shadow-2xl border-4 border-border/50"
          />
        </BitsAnimationsGlareHover>
      </div>

      <!-- Text Block -->
      <div class="flex flex-col items-center gap-6 p-3 z-10">
        <ClientOnly>
          <BitsTextAnimationsSplitText
            text="About Ikhwan Satrio"
            class-name="font-poppins text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight "
            ease="power3.out"
            split-type="chars"
            root-margin="-100px"
            text-align="center"
            :delay="100"
            :duration="0.6"
            :from="{ opacity: 0, y: 40 }"
            :to="{ opacity: 1, y: 0 }"
            :threshold="0.1"
          />
          <BitsTextAnimationsTextType
            class="font-inter text-lg sm:text-xl md:text-2xl"
            :textColors="[
              'var(--color-chart-1)',
              'var(--color-chart-4)',
              'var(--color-chart-3)',
              'var(--color-chart-2)',
            ]"
            :text="[
              'Passionate Developer',
              'Problem Solver',
              'Tech Enthusiast',
              'Linux Enthusiast',
            ]"
            :typing-speed="80"
            :pause-duration="1800"
            show-cursor
            cursor-character="|"
          />
        </ClientOnly>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
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
    </section>

    <!-- Content Sections -->
    <!-- Story Section -->
    <section class="w-full py-24 flex items-center border-t-2 border-border">
      <div class="max-w-6xl mx-auto px-6 w-full">
        <div class="space-y-12">
          <div class="text-center">
            <h2
              class="text-4xl font-bold bg-linear-to-r from-chart-1 via-chart-4 to-chart-3 bg-clip-text text-transparent mb-6 p-2"
            >
              My Story
            </h2>
          </div>

          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
              <div
                class="space-y-4 text-muted-foreground leading-relaxed text-lg"
              >
                <p>
                  My journey started with an old, barely functioning laptop. I
                  first touched programming through Scratch, dragging colorful
                  blocks on screen. Curiosity led me to open VSCode and write my
                  first lines of HTML. Soon, I jumped into React without fully
                  understanding JavaScript — and failed, but kept going.
                </p>
                <p>
                  Through persistence and late nights, I gradually built real
                  apps. I fell in love with clean code and fast feedback loops.
                  Today, I proudly craft projects using TypeScript, NeoVim, and
                  modern frameworks like Nuxt, SvelteKit, and AdonisJS.
                </p>
                <p>
                  I'm still learning, still building, and always excited to
                  solve meaningful problems with code.
                </p>
              </div>

              <div class="flex flex-wrap gap-3 mt-8">
                <span
                  class="px-4 py-2 bg-chart-1/20 text-chart-1 rounded-full text-sm border border-chart-1/30"
                >
                  Creative Thinker
                </span>
                <span
                  class="px-4 py-2 bg-chart-4/20 text-chart-4 rounded-full text-sm border border-chart-4/30"
                >
                  Problem Solver
                </span>
                <span
                  class="px-4 py-2 bg-chart-3/20 text-chart-3 rounded-full text-sm border border-chart-3/30"
                >
                  Team Player
                </span>
              </div>
            </div>

            <div class="relative">
              <div
                class="bg-linear-to-br from-chart-1/10 via-chart-4/10 to-chart-3/10 rounded-3xl p-8 backdrop-blur-sm border border-border/50"
              >
                <div class="text-center space-y-6">
                  <div class="text-6xl">💭</div>
                  <h3
                    class="text-2xl font-bold bg-linear-to-r from-chart-1 to-chart-3 bg-clip-text text-transparent"
                  >
                    My Philosophy
                  </h3>
                  <blockquote
                    class="text-muted-foreground text-lg italic leading-relaxed"
                  >
                    "Code is my canvas, and ambition is my fuel."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="w-full py-24 flex items-center bg-muted/30 border-t-2 border-border">
      <div class="max-w-6xl mx-auto px-6 w-full">
        <div class="space-y-12">
          <div class="text-center">
            <h2
              class="text-4xl font-bold bg-linear-to-r from-chart-1 via-chart-4 to-chart-3 bg-clip-text text-transparent mb-6 p-2"
            >
              Skills & Technologies
            </h2>
            <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
              Here are the technologies I love working with and my proficiency
              levels
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <div
              v-for="(skill, index) in skills"
              :key="skill.name"
              class="bg-card/50 rounded-2xl p-6 border border-border/50 backdrop-blur-sm"
            >
              <div class="flex justify-between items-center mb-4">
                <h3 class="font-semibold text-foreground text-lg">
                  {{ skill.name }}
                </h3>
                <span class="text-muted-foreground font-medium"
                  >{{ skill.level }}%</span
                >
              </div>
              <div class="w-full bg-muted rounded-full h-3 overflow-hidden">
                <div
                  class="h-full rounded-full transition-all duration-1000 ease-out bg-linear-to-r"
                  :class="skill.color"
                  :style="{
                    width: `${skill.level}%`,
                    animationDelay: `${index * 100}ms`,
                  }"
                ></div>
              </div>
            </div>
          </div>

          <div
            class="text-center bg-linear-to-r from-chart-1/10 to-chart-4/10 rounded-2xl p-8 border border-border/50"
          >
            <p class="text-muted-foreground text-lg">
              🚀 Always learning new technologies and staying up-to-date with
              the latest trends in web development
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Journey Section -->
    <section class="w-full py-24 flex items-center border-t-2 border-border">
      <div class="max-w-6xl mx-auto px-6 w-full">
        <div class="space-y-12">
          <div class="text-center">
            <h2
              class="text-4xl font-bold bg-linear-to-r from-chart-1 via-chart-4 to-chart-3 bg-clip-text text-transparent mb-6 p-2"
            >
              My Journey
            </h2>
            <p class="text-muted-foreground text-lg">
              The path that led me to where I am today
            </p>
          </div>

          <div class="max-w-2xl mx-auto text-center py-16">
            <div class="space-y-6">
              <div
                class="w-24 h-24 mx-auto bg-linear-to-r from-muted to-border rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-12 h-12 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div class="space-y-4">
                <h3 class="text-2xl font-bold text-foreground">
                  Journey Coming Soon
                </h3>
                <p class="text-muted-foreground text-lg leading-relaxed">
                  I'm currently building my professional timeline. Check back
                  soon to see my journey unfold!
                </p>
              </div>

              <div class="pt-6">
                <NuxtLink
                  to="/contact"
                  class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-4.906-1.447l-3.077 1.028a.75.75 0 01-.97-.97l1.028-3.077A8.955 8.955 0 013 12C3 7.582 6.582 4 12 4s8 3.582 8 8z"
                    />
                  </svg>
                  Let's Connect
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interests Section -->
    <section class="w-full py-24 flex items-center bg-muted/30 border-t-2 border-border">
      <div class="max-w-6xl mx-auto px-6 w-full">
        <div class="space-y-12">
          <div class="text-center">
            <h2
              class="text-4xl font-bold bg-linear-to-r from-chart-1 via-chart-4 to-chart-3 bg-clip-text text-transparent mb-6 p-2"
            >
              Beyond Code
            </h2>
            <p class="text-muted-foreground text-lg">
              What inspires and motivates me outside of programming
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="interest in interests"
              :key="interest.title"
              class="bg-card/50 rounded-2xl p-6 text-center border border-border/50 backdrop-blur-sm hover:border-border transition-all duration-300 group"
            >
              <div
                class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"
              >
                {{ interest.emoji }}
              </div>
              <h3 class="text-xl font-bold text-foreground mb-2">
                {{ interest.title }}
              </h3>
              <p class="text-muted-foreground">{{ interest.desc }}</p>
            </div>
          </div>

          <div
            class="bg-linear-to-r from-chart-1/10 via-chart-4/10 to-chart-3/10 rounded-3xl p-8 text-center border border-border/50 backdrop-blur-sm"
          >
            <div class="text-4xl mb-4">🎯</div>
            <h3
              class="text-2xl font-bold bg-linear-to-r from-chart-1 to-chart-3 bg-clip-text text-transparent mb-4"
            >
              Current Focus
            </h3>
            <p
              class="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto"
            >
              I'm currently diving deep into performance optimization with Nuxt
              and exploring the intersection of AI and web development. Always
              excited about pushing the boundaries of what's possible on the
              web! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Music -->
    <FavoriteMusicSection />

    <!-- Fun fact section --->
    <section
      class="w-full min-h-screen h-fit p-6 bg-background flex items-center text-foreground border-t-2 border-border"
    >
      <div class="max-w-4xl mx-auto text-center px-4">
        <h2 class="text-3xl font-bold mb-6 text-secondary-foreground">
          🎉 Fun Facts About Me
        </h2>
        <ul class="text-lg space-y-4">
          <li>👨‍💻 A young programmer with big ambition</li>
          <li>
            🎬 Huge fan of anime (especially slice-of-life and romance genres)
          </li>
          <li>💪 Loves doing calisthenics every morning</li>
          <li>
            🧩 Enjoys exploring new frameworks while listening to anime lo-fi
          </li>
        </ul>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="w-full py-20 border-t-2 border-border">
      <div class="max-w-4xl mx-auto text-center px-6">
        <div
          class="bg-linear-to-br from-chart-1/10 via-chart-4/10 to-chart-3/10 rounded-3xl p-12 backdrop-blur-sm border border-border/50"
        >
          <h2
            class="text-4xl font-bold bg-linear-to-r from-chart-1 via-chart-4 to-chart-3 bg-clip-text text-transparent mb-6 p-2"
          >
            Let's Build Something Amazing
          </h2>
          <p
            class="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            I'm always excited to work on interesting projects and collaborate
            with passionate people. Whether it's a challenging technical problem
            or an innovative idea, let's make it happen!
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/projects"
              class="min-w-37.5 text-center px-8 py-3 rounded-xl bg-primary text-primary-foreground font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View My Work
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="min-w-37.5 text-center px-8 py-3 rounded-xl border border-border text-muted-foreground font-medium hover:bg-muted hover:text-foreground transition-all duration-300"
            >
              Get In Touch
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
