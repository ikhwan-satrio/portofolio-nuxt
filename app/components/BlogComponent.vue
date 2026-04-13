<script setup lang="ts">
import type { BlogsCollectionItem } from '@nuxt/content'

interface Props {
  blogs: BlogsCollectionItem[]
}

const { blogs } = defineProps<Props>()

const search = ref('')
const selectedTag = ref('')

// Get unique tags
const tags = computed(() => {
  const tagSet = new Set<string>()
  blogs.forEach(blog => {
    blog.tags?.forEach(tag => tagSet.add(tag))
  })
  return Array.from(tagSet).sort()
})

// Filter and sort blogs
const filteredBlogs = computed(() => {
  const keyword = search.value.toLowerCase().trim()
  const tag = selectedTag.value

  return [...blogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter(blog => {
      const titleMatch = blog.title.toLowerCase().includes(keyword)
      const tagMatch = !tag || blog.tags?.includes(tag)
      return titleMatch && tagMatch
    })
})

// Format date
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <!-- Filter Section -->
    <div
      class="mb-12 sticky top-20 z-20 bg-card/90 backdrop-blur-md py-4 rounded-xl shadow-lg px-4 border border-border">
      <div class="grid gap-4 md:grid-cols-2 items-center">
        <input v-model="search" type="text" placeholder="Search by title..."
          class="w-full border border-input bg-background rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all" />
        <select v-model="selectedTag"
          class="w-full border border-input bg-background rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all">
          <option value="">All Tags</option>
          <option v-for="tag in tags" :key="tag" :value="tag">
            {{ tag }}
          </option>
        </select>
      </div>
    </div>

    <!-- Blog Grid -->
    <div class="grid gap-6" :class="filteredBlogs.length === 1
      ? 'grid-cols-1 place-items-center'
      : 'sm:grid-cols-2 lg:grid-cols-3'">
      <!-- No Results -->
      <div v-if="filteredBlogs.length === 0" class="col-span-full text-center text-muted-foreground py-12">
        <div class="text-6xl mb-4">🔍</div>
        <p class="text-lg">
          No results found for "<strong class="text-primary">{{ search }}</strong>"
        </p>
      </div>

      <!-- Blog Cards -->
      <template v-else>
        <NuxtLink v-for="(blog, index) in filteredBlogs" :key="blog.path" :to="blog.path" v-motion
          :initial="{ opacity: 0, y: 30 }" :enter="{
            opacity: 1,
            y: 0,
            transition: {
              delay: index * 100,
              duration: 500,
              ease: 'easeOut'
            }
          }"
          class="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col w-full max-w-2xl group border-2 border-border hover:border-primary">
          <!-- Content -->
          <div class="p-6 flex flex-col flex-1">
            <div class="space-y-3">
              <h2 class="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {{ blog.title }}
              </h2>

              <div class="flex items-center gap-3 text-xs text-muted-foreground">
                <time>{{ formatDate(blog.date) }}</time>
                <span v-if="blog.lang" class="text-primary font-medium">•</span>
                <span v-if="blog.lang" class="text-primary">lang: {{ blog.lang }}</span>
              </div>

              <p class="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                {{ blog.description }}
              </p>

              <!-- Tags -->
              <div v-if="blog.tags && blog.tags.length > 0" class="flex flex-wrap gap-2 pt-2">
                <span v-for="tag in blog.tags.slice(0, 3)" :key="tag"
                  class="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border-2 border-border group-hover:border-primary/50 transition-colors">
                  {{ tag }}
                </span>
              </div>
            </div>

            <p class="mt-auto pt-4 text-primary text-sm group-hover:underline flex items-center gap-1 font-medium">
              Read more
              <Icon name="lucide:arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </p>
          </div>
        </NuxtLink>
      </template>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
