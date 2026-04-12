# Project: porto-nuxt

A modern personal portfolio and blog built with Nuxt 4, showcasing projects and sharing insights through a collection of blog posts.

## Project Overview

- **Purpose:** Personal portfolio for Ikhwan Satrio, a Frontend Developer.
- **Core Framework:** Nuxt 4 (using the modern \`app/\` directory structure).
- **Styling & UI:**
  - **Tailwind CSS v4:** Integrated via \`@tailwindcss/vite\`.
  - **Shadcn-nuxt:** For accessible and consistent UI components.
  - **Nuxt Icon:** Extensive icon support (Lucide, FontAwesome).
- **Animations:**
  - **GSAP & Motion-v:** For complex and fluid animations.
  - **Three.js & OGL:** Powering interactive 3D elements (e.g., Hyperspeed background).
  - **VueUse/Motion:** For simple declarative animations.
- **Content Management:**
  - **Nuxt Content v3:** Manages blog posts in Markdown format.
  - **LibSQL (Turso):** Backend database for Nuxt Content, enabling efficient querying.
- **Server Features:**
  - **Resend:** Handles email delivery for the contact form.
  - **Zod:** Used for data validation (content schemas, contact form).

## Building and Running

The project uses \`pnpm\` as the preferred package manager.

- **Install Dependencies:** \`pnpm install\`
- **Development Server:** \`pnpm dev\` (runs on http://localhost:3000)
- **Production Build:** \`pnpm build\`
- **Static Generation:** \`pnpm generate\`
- **Preview Production:** \`pnpm preview\`

## Project Structure

- \`app/\`: Primary application source.
  - \`assets/\`: Styles (\`css/main.css\`) and images.
  - \`components/\`: UI components (\`ui/\`) and specialized "bits" for animations (\`bits/\`).
  - \`composables/\`: Reusable logic (e.g., email templates, validation).
  - \`pages/\`: Application routes (Home, About, Projects, Blogs).
- \`content/blogs/\`: Markdown files for the blog.
- \`server/api/\`: Backend API endpoints (e.g., \`contact.post.ts\`).
- \`public/\`: Static assets, including blog thumbnails.
- \`content.config.ts\`: Configuration for Nuxt Content collections and schemas.

## Development Conventions

- **Framework Version:** Strictly Nuxt 4 (compatibility mode enabled).
- **Scripting:** TypeScript is mandatory for all components and server logic.
- **Component Pattern:** Use the Composition API with \`<script setup>\`.
- **Styling:** Prefer Tailwind CSS utility classes. Use CSS variables for theme-aware colors.
- **Content:** Blog posts must adhere to the Zod schema defined in \`content.config.ts\` (title, date, description, lang, etc.).
- **Validation:** Use Zod for all input validation.
- **Linting:** ESLint and Prettier are configured; ensure code follows these standards before committing.

## Environment Variables

The following environment variables are required for full functionality:

- \`TURSO_DATABASE_URL\`: URL for the Turso database.
- \`TURSO_AUTH_TOKEN\`: Authentication token for Turso.
- \`RESEND_API_KEY\`: API key for the Resend email service.
