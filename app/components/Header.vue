<script setup lang="ts">
import icon from '~/assets/images/favicon.png';

const isOpen = ref(false);
const route = useRoute();
const menuRef = ref<HTMLElement | null>(null);

watch(
  () => route.path,
  () => {
    isOpen.value = false;
  }
);

onMounted(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
      isOpen.value = false;
    }
  };
  document.addEventListener('click', handleClickOutside);
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
  });
});
</script>

<template>
  <header
    ref="menuRef"
    class="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl flex flex-col items-center z-50"
  >
    <!-- Floating Bar -->
    <div
      class="w-full h-15 border-2 border-border flex items-center justify-between px-6 bg-background/80 backdrop-blur-md rounded-2xl shadow-lg"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2">
        <img
          :src="icon"
          alt="Ikhwan Satrio Icon"
          class="h-9 w-auto rounded-full"
        />
        <span
          class="hidden sm:inline font-poppins font-semibold text-foreground"
        >
          Ikhwan Satrio
        </span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav
        class="hidden md:flex items-center gap-8 font-inter text-muted-foreground text-sm"
      >
        <NuxtLink
          to="/"
          class="hover:text-foreground transition-colors"
          active-class="text-foreground font-semibold"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="hover:text-foreground transition-colors"
          active-class="text-foreground font-semibold"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/projects"
          class="hover:text-foreground transition-colors"
          active-class="text-foreground font-semibold"
        >
          Projects
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="hover:text-foreground transition-colors"
          active-class="text-foreground font-semibold"
        >
          Contact
        </NuxtLink>
        <NuxtLink
          to="/blogs"
          class="hover:text-foreground transition-colors"
          active-class="text-foreground font-semibold"
        >
          Blogs
        </NuxtLink>
      </nav>

      <!-- Actions (Desktop) -->
      <div class="hidden md:flex items-center gap-2">
        <ThemeToggle />
        <a
          href="https://github.com/ikhwan-satrio"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity"
        >
          <Icon name="fa:github" />
          Github
        </a>
      </div>

      <!-- Mobile Toggle -->
      <div class="md:hidden flex items-center gap-2">
        <ThemeToggle />
        <UiButton
          variant="outline"
          class="hover:text-foreground p-2 transition-colors"
          @click="isOpen = !isOpen"
          :aria-label="isOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="isOpen"
        >
          <Icon :name="isOpen ? 'lucide:x' : 'lucide:menu'" size="20" />
        </UiButton>
      </div>
    </div>
    <!-- Mobile Nav (Dropdown) -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 scale-95 -translate-y-2"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 -translate-y-2"
    >
      <nav
        v-if="isOpen"
        class="md:hidden absolute top-18 left-1/2 -translate-x-1/2 w-[90%] bg-background/95 backdrop-blur-md border border-border rounded-2xl shadow-lg flex flex-col items-center gap-4 py-6"
      >
        <NuxtLink
          to="/"
          class="text-muted-foreground hover:text-foreground font-medium transition-colors w-full text-center py-2"
          active-class="text-foreground font-semibold"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="text-muted-foreground hover:text-foreground font-medium transition-colors w-full text-center py-2"
          active-class="text-foreground font-semibold"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/projects"
          class="text-muted-foreground hover:text-foreground font-medium transition-colors w-full text-center py-2"
          active-class="text-foreground font-semibold"
        >
          Projects
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="text-muted-foreground hover:text-foreground font-medium transition-colors w-full text-center py-2"
          active-class="text-foreground font-semibold"
        >
          Contact
        </NuxtLink>
        <NuxtLink
          to="/blogs"
          class="text-muted-foreground hover:text-foreground font-medium transition-colors w-full text-center py-2"
          active-class="text-foreground font-semibold"
        >
          Blogs
        </NuxtLink>
        <a
          href="https://github.com/ikhwan-satrio"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-5 py-2 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity mt-2"
        >
          <Icon name="fa:github" />
          Github
        </a>
      </nav>
    </Transition>
  </header>
</template>
