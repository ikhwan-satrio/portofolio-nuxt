<template>
  <main class="w-full min-h-screen">
    <!-- Hero Section -->
    <section
      class="relative w-full min-h-screen flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 bg-[radial-gradient(circle_at_center,var(--sidebar),var(--background))] overflow-hidden px-4 sm:px-6 md:px-8"
    >
      <div class="absolute top-0 w-full h-full z-10">
        <ClientOnly>
          <BitsBackgroundsLightRays
            rays-origin="top-center"
            rays-color="hsl(var(--primary))"
            :rays-speed="0.8"
            :light-spread="0.4"
            :ray-length="0.6"
            :follow-mouse="true"
            :mouse-influence="0.05"
            :noise-amount="0.1"
            :distortion="0.03"
            class="custom-rays pointer-events-none"
          />
        </ClientOnly>
      </div>

      <div
        class="relative z-10 w-full max-w-7xl mx-auto text-center space-y-6 sm:space-y-8"
      >
        <div
          class="flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6"
        >
          <h2
            class="font-poppins text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-linear-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent leading-tight"
          >
            Let's Work Together
          </h2>
        </div>

        <p
          class="font-inter text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2"
        >
          Have a project in mind? I'd love to hear from you. Let's discuss how
          we can bring your ideas to life
        </p>
      </div>

      <div
        class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-lg sm:max-w-none mx-auto"
      >
        <a
          href="mailto:ikwansatria3974@gmail.com"
          class="z-10 w-full sm:w-auto px-6 sm:px-8 py-3 bg-primary text-primary-foreground rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
        >
          Send me an Email
        </a>
        <div class="text-muted-foreground text-xs sm:text-sm text-center">
          or fill out the form below
        </div>
      </div>

      <!-- Scroll Down Indicator -->
      <div
        class="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block"
      >
        <div class="flex flex-col items-center animate-bounce">
          <span class="text-muted-foreground text-xs sm:text-sm mb-2">
            Get in Touch
          </span>
          <Icon
            name="lucide:arrow-down"
            size="24"
            class="text-muted-foreground"
          />
        </div>
      </div>
    </section>

    <!-- Contact Form & Info Section -->
    <motion.section
      class="w-full bg-linear-to-b from-background to-sidebar py-12 sm:py-16 md:py-20"
      :initial="{ opacity: 0, y: 50 }"
      :whileInView="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.8, ease: 'easeOut' }"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          <!-- Form -->
          <div class="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div>
              <h2
                class="text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-4"
              >
                Send me a Message
              </h2>
              <p class="text-muted-foreground text-base sm:text-lg">
                Fill out this form and I'll get back to you within 24 hours
              </p>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-4 sm:space-y-6">
              <!-- Name & Email -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label
                    for="name"
                    class="block text-sm font-medium text-foreground mb-2"
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    v-model="name"
                    v-bind="nameAtt"
                    class="w-full px-3 sm:px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm sm:text-base"
                    placeholder="Your name"
                  />
                  <p v-if="errors.name" class="text-destructive text-xs mt-1">
                    {{ errors.name }}
                  </p>
                </div>

                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-foreground mb-2"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    v-model="email"
                    v-bind="emailAtt"
                    type="email"
                    class="w-full px-3 sm:px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                  <p v-if="errors.email" class="text-destructive text-xs mt-1">
                    {{ errors.email }}
                  </p>
                </div>
              </div>

              <!-- Subject -->
              <div>
                <label
                  for="subject"
                  class="block text-sm font-medium text-foreground mb-2"
                >
                  Subject *
                </label>
                <input
                  id="subject"
                  v-model="subject"
                  v-bind="subjectAtt"
                  class="w-full px-3 sm:px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm sm:text-base"
                  placeholder="Project discussion, collaboration, etc."
                />
                <p v-if="errors.subject" class="text-destructive text-xs mt-1">
                  {{ errors.subject }}
                </p>
              </div>

              <!-- Message -->
              <div>
                <label
                  for="message"
                  class="block text-sm font-medium text-foreground mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="message"
                  v-bind="messageAtt"
                  rows="5"
                  class="w-full px-3 sm:px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project, ideas, or just say hello..."
                ></textarea>
                <p v-if="errors.message" class="text-destructive text-xs mt-1">
                  {{ errors.message }}
                </p>
              </div>

              <!-- Submit -->
              <div>
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium text-primary-foreground transition-all duration-300 text-sm sm:text-base"
                  :class="{
                    'bg-muted cursor-not-allowed': isSubmitting,
                    'bg-chart-5 hover:bg-chart-5/90': formResponse.success,
                    'bg-primary hover:shadow-lg hover:scale-105':
                      !isSubmitting && !formResponse.success,
                  }"
                >
                  <div
                    v-if="isSubmitting"
                    class="flex items-center justify-center gap-2"
                  >
                    <Icon
                      name="lucide:loader-2"
                      size="20"
                      class="animate-spin"
                    />
                    Sending...
                  </div>
                  <div
                    v-else-if="formResponse.success"
                    class="flex items-center justify-center gap-2"
                  >
                    <Icon name="lucide:check" size="20" />
                    Message Sent!
                  </div>
                  <span v-else>Send Message</span>
                </button>
              </div>

              <!-- Feedback -->
              <div
                v-if="formResponse.success"
                class="p-3 sm:p-4 bg-chart-5/20 border border-chart-5/50 rounded-lg text-chart-5 text-xs sm:text-sm"
              >
                Thanks for reaching out! I'll get back to you soon.
              </div>
              <div
                v-else-if="formResponse.error"
                class="p-3 sm:p-4 bg-destructive/20 border border-destructive/50 rounded-lg text-destructive text-xs sm:text-sm"
              >
                {{ formResponse.error }}
              </div>
            </form>
          </div>

          <!-- Contact Methods -->
          <div class="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div>
              <h2
                class="text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-4"
              >
                Get in Touch
              </h2>
              <p class="text-muted-foreground text-base sm:text-lg">
                Prefer to reach out directly? Here are the best ways to contact
                me
              </p>
            </div>

            <div class="space-y-3 sm:space-y-4">
              <a
                v-for="method in contactMethods"
                :key="method.title"
                :href="method.href"
                :target="method.href.startsWith('mailto:') ? '_self' : '_blank'"
                :rel="
                  method.href.startsWith('mailto:') ? '' : 'noopener noreferrer'
                "
                class="group block p-4 sm:p-6 bg-secondary/50 rounded-xl sm:rounded-2xl border border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
              >
                <div class="flex items-start gap-3 sm:gap-4">
                  <div
                    class="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary/30 transition-all duration-300 shrink-0"
                  >
                    <Icon :name="method.icon" size="20" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <h3
                      class="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-sm sm:text-base"
                    >
                      {{ method.title }}
                    </h3>
                    <p
                      class="text-muted-foreground group-hover:text-foreground transition-colors duration-300 mb-1 text-sm sm:text-base wrap-break-word"
                    >
                      {{ method.value }}
                    </p>
                    <p class="text-muted-foreground/70 text-xs sm:text-sm">
                      {{ method.description }}
                    </p>
                  </div>
                  <div
                    class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0"
                  >
                    <Icon
                      name="lucide:external-link"
                      size="16"
                      class="text-muted-foreground"
                    />
                  </div>
                </div>
              </a>
            </div>

            <div
              class="p-4 sm:p-6 bg-chart-5/10 rounded-xl sm:rounded-2xl border border-chart-5/30"
            >
              <div class="flex items-center gap-3 mb-2 sm:mb-3">
                <div
                  class="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-chart-5 rounded-full animate-pulse shrink-0"
                ></div>
                <h3 class="font-semibold text-foreground text-sm sm:text-base">
                  Currently Available
                </h3>
              </div>
              <p class="text-foreground/80 text-xs sm:text-sm leading-relaxed">
                I'm currently taking on new projects and collaborations.
                Response time is typically within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>

    <!-- FAQ Section -->
    <motion.section
      class="w-full bg-linear-to-b from-sidebar to-background py-12 sm:py-16 md:py-20"
      :initial="{ opacity: 0, y: 50 }"
      :whileInView="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.8, ease: 'easeOut' }"
    >
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 sm:mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-primary mb-4 sm:mb-6">
            Frequently Asked Questions
          </h2>
          <p class="text-muted-foreground text-base sm:text-lg">
            Quick answers to common questions about working together
          </p>
        </div>

        <div class="space-y-4 sm:space-y-6">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-secondary/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border backdrop-blur-sm"
          >
            <h3
              class="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 leading-snug"
            >
              {{ faq.question }}
            </h3>
            <p
              class="text-muted-foreground leading-relaxed text-sm sm:text-base"
            >
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </motion.section>

    <!-- Final CTA -->
    <motion.section
      class="w-full bg-linear-to-b from-background to-sidebar py-12 sm:py-16 md:py-20"
      :initial="{ opacity: 0, y: 50 }"
      :whileInView="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.8, ease: 'easeOut' }"
    >
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div
          class="bg-primary/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur-sm border border-border"
        >
          <h2 class="text-3xl sm:text-4xl font-bold text-primary mb-4 sm:mb-6">
            Ready to Start Your Project?
          </h2>
          <p
            class="text-foreground/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Whether you have a clear vision or just an idea, I'm here to help
            bring it to life. Let's create something amazing together.
          </p>
          <div
            class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto"
          >
            <a
              href="mailto:ikwansatria3974@gmail.com"
              class="px-6 sm:px-8 py-3 bg-primary text-primary-foreground rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              Start the Conversation
            </a>
            <NuxtLink
              to="/projects"
              class="px-6 sm:px-8 py-3 border border-border text-foreground rounded-xl font-medium hover:bg-secondary transition-all duration-300 text-sm sm:text-base"
            >
              View My Work
            </NuxtLink>
          </div>
        </div>
      </div>
    </motion.section>
  </main>
</template>

<script setup lang="ts">
import { useForm } from '@vorms/core';
import z from 'zod';
import { motion } from "motion-v"

// Validasi
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.email('Please enter a valid email'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// Data statis
const contactMethods = [
  {
    icon: 'lucide:mail',
    title: 'Email',
    value: 'ikwansatria3974@gmail.com',
    href: 'mailto:ikwansatria3974@gmail.com',
    description: 'Drop me a line anytime',
  },
  {
    icon: 'fa:github',
    title: 'GitHub',
    value: '@wanto-production',
    href: 'https://github.com/ikhwan-satrio',
    description: 'Check out my code',
  },
  {
    icon: 'fa:linkedin',
    title: 'LinkedIn',
    value: 'Ikhwan Satrio',
    href: 'https://linkedin.com/in/ikhwan-satrio',
    description: "Let's connect professionally",
  },
  {
    icon: 'fa:twitter',
    title: 'Twitter',
    value: '@ikhwansatrio',
    href: 'https://twitter.com/ikhwansatrio',
    description: 'Follow me for updates',
  },
];

const faqs = [
  {
    question: 'What kind of projects do you work on?',
    answer:
      'I specialize in web applications using modern frameworks like Qwik, React, and Svelte. I also work on mobile apps, UI/UX design, and open-source projects.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. I always provide detailed timelines during consultation.',
  },
  {
    question: 'Do you work with remote clients?',
    answer:
      'Absolutely! I work with clients globally and have experience collaborating remotely. I use tools like Slack, Discord, and video calls to ensure smooth communication.',
  },
  {
    question: "What's your preferred tech stack?",
    answer:
      'I love working with Qwik for performance-critical apps, React for complex UIs, Svelte for lightweight projects, and TypeScript for everything. I also use Tailwind CSS, Node.js, and various databases.',
  },
];

// State
const isSubmitting = ref(false);
const formResponse = ref<{ success: boolean; error: string | null }>({
  success: false,
  error: null,
});

// Form dengan @vorms/core
const { validateForm, register, errors, resetForm, handleSubmit } = useForm({
  initialValues: {
    name: '',
    email: '',
    subject: '',
    message: '',
  },
  validate: useZodValidator(contactSchema),
  onSubmit: async () => {
    isSubmitting.value = true;
    formResponse.value = { success: false, error: null };

    // Validate form
    const validationErrors = await validateForm();
    if (Object.keys(validationErrors).length > 0) {
      isSubmitting.value = false;
      return;
    }

    try {
      // Kirim ke API endpoint
      await $fetch('/api/contact', {
        method: 'POST',
        body: {
          name: name.value,
          email: email.value,
          subject: subject.value,
          message: message.value,
        },
      });

      // Success
      formResponse.value = { success: true, error: null };
      resetForm();

      // Auto hide success message after 5 seconds
      setTimeout(() => {
        formResponse.value = { success: false, error: null };
      }, 5000);
    } catch (error: any) {
      // Error handling
      formResponse.value = {
        success: false,
        error:
          error.data?.message || 'Failed to send message. Please try again.',
      };
    } finally {
      isSubmitting.value = false;
    }
  },
});

const { value: name, attrs: nameAtt } = register('name');
const { value: email, attrs: emailAtt } = register('email');
const { value: subject, attrs: subjectAtt } = register('subject');
const { value: message, attrs: messageAtt } = register('message');

// Meta
useHead({
  title: 'contact',
  meta: [
    {
      name: 'description',
      content:
        'Get in touch with Ikhwan Satrio - Frontend Developer. Contact me for web development projects, collaborations, or just to say hello. Available for freelance work and exciting opportunities.',
    },
  ],
});
</script>
