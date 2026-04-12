<script setup lang="ts">

const colorMode = useColorMode()

// fungsi untuk mengubah tema seperti di versi React
function cycleTheme() {
  if (colorMode.preference === 'light') {
    colorMode.preference = 'dark'
  } else if (colorMode.preference === 'dark') {
    colorMode.preference = 'system'
  } else {
    colorMode.preference = 'light'
  }
}

// fungsi untuk menentukan ikon berdasarkan tema aktif
function getIcon() {
  switch (colorMode.preference) {
    case 'light':
      return { name: 'lucide:sun' }
    case 'dark':
      return { name: 'lucide:moon' }
    case 'system':
      return { name: 'lucide:monitor' }
    default:
      return { name: 'lucide:sun' }
  }
}
</script>

<template>
  <ClientOnly>
    <template #fallback>
      <UiButton variant="ghost" size="icon" class="p-2 rounded-md text-center hover:bg-foreground/30" aria-label="Loading theme toggle">
        <Icon name="lucide:loader-2" size="20" class="animate-spin" />
      </UiButton>
    </template>
    <UiButton variant="ghost" size="icon" @click="cycleTheme" class="p-2 rounded-md text-center hover:bg-foreground/30"
      :aria-label="`Switch to ${colorMode.preference === 'light' ? 'dark' : colorMode.preference === 'dark' ? 'system' : 'light'} theme`">
      <Icon :name="getIcon().name" size="20" />
    </UiButton>
  </ClientOnly>
</template>
