<script setup lang="ts">
import profileImage from '~/assets/images/nishimiya.jpeg';
</script>

<template>
  <!-- Background Rays -->
  <div class="absolute top-0 w-full h-full z-10">
    <BitsBackgroundsLetterGlitch
      :glitch-colors="['#2b4539', '#61dca3', '#61b3dc']"
      :glitch-speed="50"
      :center-vignette="true"
      :outer-vignette="true"
      :smooth="true"
      class="w-full h-full"
    />
  </div>

  <!-- Profile Image with Circular Text -->
  <div class="relative flex items-center justify-center z-10">
    <BitsTextAnimationsCircularText
      text="*ikhwan*satrio*"
      :spin-duration="20"
      class="custom-class"
    />
    <div class="absolute inset-0 flex items-center justify-center">
      <img
        :src="profileImage"
        alt="Profile"
        class="h-32.5 w-32.5 rounded-full object-cover shadow-lg"
      />
    </div>
  </div>

  <!-- Text Block -->
  <div class="flex flex-col items-center gap-4 p-3 z-10">
    <!-- Heading -->
    <h2
      class="font-poppins text-center text-4xl sm:text-5xl md:text-6xl font-extrabold"
    >
      hello, i'm Ikhwan satrio
    </h2>

    <!-- Typing Text -->
    <BitsTextAnimationsTextType
      class-name="font-inter text-lg sm:text-xl md:text-2xl text-muted-foreground"
      :text="[
        'Young Programmer',
        'Frontend Developer',
        'Loves Qwik & Svelte',
        'Happy coding!',
      ]"
      :typing-speed="75"
      :pause-duration="1500"
      :show-cursor="true"
      cursor-character="|"
    />
  </div>

  <!-- Call to Action -->
  <div class="mt-8 flex flex-wrap gap-4 justify-center z-10">
    <NuxtLink
      to="/projects"
      class="min-w-37.5 text-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
    >
      View Projects
    </NuxtLink>
    <a
      href="https://github.com/ikhwan-satrio"
      target="_blank"
      rel="noopener noreferrer"
      class="min-w-37.5 text-center px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-2"
    >
      <Icon name="fa:github" size="20" />
      Github
    </a>
  </div>
</template>
