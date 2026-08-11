# Portfolio System - Architecture & Design Document

## 📋 TABLE OF CONTENTS
1. [System Overview](#system-overview)
2. [Wireframes & UI Layout](#wireframes--ui-layout)
3. [Component Breakdown](#component-breakdown)
4. [Navigation Flow](#navigation-flow)
5. [Supabase Database Schema](#supabase-database-schema)
6. [Folder Structure](#folder-structure)
7. [Development Roadmap](#development-roadmap)

---

## SYSTEM OVERVIEW

```
┌─────────────────────────────────────────────────────┐
│                   Frontend (React + TS)              │
│  ┌──────────────────────┐  ┌──────────────────────┐  │
│  │  Public Portfolio    │  │  Admin CMS           │  │
│  │  (Neo-Brutalist)     │  │  (Clean SaaS)        │  │
│  └──────────┬───────────┘  └──────────┬───────────┘  │
│             │                          │              │
│  ┌──────────┴──────────────────────────┴───────────┐  │
│  │           Supabase Client (SDK)                  │  │
│  └──────────────────────┬──────────────────────────┘  │
└─────────────────────────┼────────────────────────────┘
                          │
┌─────────────────────────┼────────────────────────────┐
│           Supabase BaaS │                            │
│  ┌──────────┐ ┌────────┴───────┐ ┌───────────────┐  │
│  │  Auth    │ │  PostgreSQL    │ │  Storage       │  │
│  │  (Admin) │ │  (Tables)      │ │  (Images)      │  │
│  └──────────┘ └────────────────┘ └───────────────┘  │
└──────────────────────────────────────────────────────┘
```

---

## WIREFRAMES & UI LAYOUT

### 1. PUBLIC PORTFOLIO PAGES

#### 🏠 Home Page Layout
```
┌──────────────────────────────────────────────────────┐
│ [Logo]   [Nav: Home | Projects | Blog | Contact]     │
├──────────────────────────────────────────────────────┤
│ ┌──────────────────────────────────────────────────┐ │
│ │              HERO SECTION                        │ │
│ │  ██▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀██  │ │
│ │  ██  Hi, I'm [Name]                     ██  │ │
│ │  ██  Full Stack Developer               ██  │ │
│ │  ██  [GitHub] [Download CV] [Contact]   ██  │ │
│ │  ██▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄██  │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐              │
│ │  Stats   │ │  Stats   │ │  Stats   │              │
│ │  15+     │ │  3+      │ │  20+     │              │
│ │ Projects │ │  Years   │ │  Skills  │              │
│ └──────────┘ └──────────┘ └──────────┘              │
│                                                      │
│ ┌──────┐ ┌──────┐ ┌──────┐                          │
│ │ Proj │ │ Proj │ │ Proj │  <- Featured Grid        │
│ │ Card │ │ Card │ │ Card │                          │
│ └──────┘ └──────┘ └──────┘                          │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │              About Section                       │ │
│ │  Short bio, photo, highlights                    │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │          Call to Action Section                  │ │
│ │  [Let's Work Together] -> Contact Page           │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ [Footer: Socials | Copyright]                        │
└──────────────────────────────────────────────────────┘
```

#### 📁 Projects Page Layout
```
┌──────────────────────────────────────────────────────┐
│ [Logo]   [Nav: Home | Projects | Blog | Contact]     │
├──────────────────────────────────────────────────────┤
│  Projects  (Header with neo-brutalist underline)     │
│                                                      │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐  │
│ │  Thumbnail   │ │  Thumbnail   │ │  Thumbnail   │  │
│ │  Title       │ │  Title       │ │  Title       │  │
│ │  Description │ │  Description │ │  Description │  │
│ │  [React]     │ │  [Python]    │ │  [Flutter]   │  │
│ │  [Detail]    │ │  [Detail]    │ │  [Detail]    │  │
│ └──────────────┘ └──────────────┘ └──────────────┘  │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐  │
│ │  Thumbnail   │ │  Thumbnail   │ │  Thumbnail   │  │
│ │  Title       │ │  Title       │ │  Title       │  │
│ │  Description │ │  Description │ │  Description │  │
│ │  [Detail]    │ │  [Detail]    │ │  [Detail]    │  │
│ └──────────────┘ └──────────────┘ └──────────────┘  │
│                                                      │
│                                              [Footer] │
└──────────────────────────────────────────────────────┘
```

#### 📄 Project Detail Page Layout
```
┌──────────────────────────────────────────────────────┐
│ [Logo]   [Nav]                          ← Back       │
├──────────────────────────────────────────────────────┤
│                                                      │
│  Project Title (Bold Neo-Brutalist)                  │
│  ┌────────────────────────────────────────────────┐  │
│  │           Main Screenshot / Hero Image         │  │
│  │           (with thick border)                  │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  Tech Stack: [React] [TypeScript] [Tailwind]        │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │  Problem                                      │  │
│  │  description text...                          │  │
│  │                                               │  │
│  │  Solution                                     │  │
│  │  description text...                          │  │
│  │                                               │  │
│  │  Architecture                                 │  │
│  │  diagram/code snippet...                      │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  [GitHub Repo] [Live Demo]                           │
│                                                      │
│                                              [Footer] │
└──────────────────────────────────────────────────────┘
```

#### ✍️ Blog Page Layout
```
┌──────────────────────────────────────────────────────┐
│ [Logo]   [Nav]                                        │
├──────────────────────────────────────────────────────┤
│  Blog / Articles                                     │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  Blog Card 1                                     │ │
│ │  Title: "Building an LSTM Forecasting System"    │ │
│ │  Preview: Lorem ipsum dolor sit amet...          │ │
│ │  Tags: [AI] [Python] [LSTM]                      │ │
│ │  [Read More]                                     │ │
│ └──────────────────────────────────────────────────┘ │
│ ┌──────────────────────────────────────────────────┐ │
│ │  Blog Card 2                                     │ │
│ │  Title: "Computer Vision with OpenCV"            │ │
│ │  Preview: Lorem ipsum dolor sit amet...          │ │
│ │  Tags: [CV] [Python] [MediaPipe]                 │ │
│ │  [Read More]                                     │ │
│ └──────────────────────────────────────────────────┘ │
│                                              [Footer] │
└──────────────────────────────────────────────────────┘
```

#### 📩 Contact Page Layout
```
┌──────────────────────────────────────────────────────┐
│ [Logo]   [Nav]                                        │
├──────────────────────────────────────────────────────┤
│  Get In Touch                                        │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │  ┌────────────────────┐ ┌────────────────────┐ │  │
│  │  │ Name               │ │ Email              │ │  │
│  │  │ [______________]   │ │ [______________]   │ │  │
│  │  └────────────────────┘ └────────────────────┘ │  │
│  │                                                │  │
│  │  Message                                       │  │
│  │  ┌──────────────────────────────────────────┐  │  │
│  │  │                                          │  │  │
│  │  │                                          │  │  │
│  │  └──────────────────────────────────────────┘  │  │
│  │                                                │  │
│  │  ┌──────────────────────────────────────────┐  │  │
│  │  │         SEND MESSAGE 🚀                  │  │  │
│  │  └──────────────────────────────────────────┘  │  │
│  └────────────────────────────────────────────────┘  │
│                                              [Footer] │
└──────────────────────────────────────────────────────┘
```

---

### 2. ADMIN CMS DASHBOARD

#### 📊 Dashboard Overview Layout
```
┌──────────────────────────────────────────────────────┐
│ ┌──────┐  [Dashboard] [Projects] [Blog] [Skills]    │
│ │Logo  │  [Messages] [Settings]                      │
│ └──────┤                                             │
│        │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐      │
│ Side   │  │Total │ │Total │ │Unread│ │Skills│      │
│ Bar    │  │Proj. │ │Blogs │ │Msg   │ │Count │      │
│        │  │  12  │ │  8   │ │  3   │ │  20  │      │
│        │  └──────┘ └──────┘ └──────┘ └──────┘      │
│        │                                             │
│        │  Recent Messages                            │
│        │  ┌──────────────────────────────────────┐   │
│        │  │ John Doe - Hello, I want to...    unread│  │
│        │  │ Jane Smith - Great portfolio!     read  │  │
│        │  └──────────────────────────────────────┘  │
│        │                                             │
│        │  Recent Activity Log                        │
│        │  [12:30] Project "LSTM" updated            │
│        │  [11:15] Blog "React Tips" published       │
│        └─────────────────────────────────────────────┘
└──────────────────────────────────────────────────────┘
```

#### 📁 Projects CMS Layout
```
┌──────────────────────────────────────────────────────┐
│ ┌──────┐  [Dashboard] [Projects] [Blog] [Skills]    │
│ │Logo  │  [Messages] [Settings]                      │
│ └──────┤                                             │
│        │  Projects          [+ Add New]              │
│ Side   │                                             │
│ Bar    │  ┌───┬────────┬────────┬──────┬─────────┐  │
│        │  │ # │ Title  │ Status │ Date │ Actions │  │
│        │  ├───┼────────┼────────┼──────┼─────────┤  │
│        │  │ 1 │ LSTM   │ ✓ pub  │ 2/1  │ ✏️ 🗑️   │  │
│        │  │ 2 │ CV App │ Draft  │ 1/15 │ ✏️ 🗑️   │  │
│        │  └───┴────────┴────────┴──────┴─────────┘  │
│        └─────────────────────────────────────────────┘
└──────────────────────────────────────────────────────┘
```

#### 📝 Blog Editor Layout
```
┌──────────────────────────────────────────────────────┐
│ ┌──────┐  [Dashboard] [Projects] [Blog] [Skills]    │
│ │Logo  │  [Messages] [Settings]                      │
│ └──────┤                                             │
│        │  Edit Blog Post          [Publish] [Draft]  │
│ Side   │                                             │
│ Bar    │  Title: [________________________]          │
│        │  Slug: [________________________]          │
│        │  Cover: [Upload Image]                     │
│        │  Tags: [tag1] [tag2] [+Add]               │
│        │                                             │
│        │  ┌──────────────────────────────────────┐   │
│        │  │  Rich Text Editor                    │   │
│        │  │  (B I U H1 H2 Code Block...)         │   │
│        │  │                                       │   │
│        │  └──────────────────────────────────────┘   │
│        └─────────────────────────────────────────────┘
└──────────────────────────────────────────────────────┘
```

---

## COMPONENT BREAKDOWN

### Public Portfolio Components

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx              # Navigation bar (logo + links)
│   │   ├── Footer.tsx              # Footer with social links
│   │   └── Layout.tsx              # Wrapper with Navbar + Footer
│   │
│   ├── home/
│   │   ├── HeroSection.tsx         # Hero with name, title, CTAs
│   │   ├── StatsCards.tsx          # Stat counters row
│   │   ├── FeaturedProjects.tsx    # Featured projects grid
│   │   ├── AboutSection.tsx        # Short bio section
│   │   └── CTASection.tsx          # Call to action banner
│   │
│   ├── projects/
│   │   ├── ProjectCard.tsx         # Single project card
│   │   ├── ProjectGrid.tsx         # Grid of project cards
│   │   ├── ProjectDetail.tsx       # Full project detail view
│   │   └── TechStackBadge.tsx      # Tech tag component
│   │
│   ├── blog/
│   │   ├── BlogCard.tsx            # Single blog post card
│   │   ├── BlogList.tsx            # Blog posts list
│   │   ├── BlogDetail.tsx          # Full blog article
│   │   └── CodeBlock.tsx           # Code snippet renderer
│   │
│   ├── contact/
│   │   └── ContactForm.tsx         # Contact form with validation
│   │
│   └── shared/
│       ├── Button.tsx              # Neo-brutalist button
│       ├── Card.tsx                # Neo-brutalist card
│       ├── Badge.tsx               # Tag/badge component
│       ├── SectionTitle.tsx        # Section heading style
│       └── LoadingSpinner.tsx      # Loading state
```

### Admin CMS Components

```
src/
├── components/admin/
│   ├── layout/
│   │   ├── AdminLayout.tsx         # Sidebar + content wrapper
│   │   ├── Sidebar.tsx             # Navigation sidebar
│   │   ├── AdminHeader.tsx         # Top bar with user info
│   │   └── AdminFooter.tsx         # Footer
│   │
│   ├── dashboard/
│   │   ├── KpiCard.tsx             # KPI statistic card
│   │   ├── RecentMessages.tsx      # Latest messages widget
│   │   ├── ActivityLog.tsx         # Recent activity list
│   │   └── DashboardStats.tsx      # Stats grid
│   │
│   ├── projects/
│   │   ├── ProjectTable.tsx        # Data table for projects
│   │   ├── ProjectForm.tsx         # Create/edit project form
│   │   └── ProjectActions.tsx      # Edit/delete buttons
│   │
│   ├── blog/
│   │   ├── BlogTable.tsx           # Blog posts data table
│   │   ├── BlogForm.tsx            # Create/edit blog form
│   │   └── RichTextEditor.tsx      # Rich text editing (TipTap/TinyMCE)
│   │
│   ├── skills/
│   │   ├── SkillList.tsx           # Skills list with edit
│   │   ├── SkillForm.tsx           # Add/edit skill
│   │   └── SkillCategory.tsx       # Skill category group
│   │
│   ├── messages/
│   │   ├── MessageInbox.tsx        # Message list
│   │   └── MessageDetail.tsx       # Single message view
│   │
│   ├── settings/
│   │   ├── ProfileForm.tsx         # Edit profile info
│   │   └── PortfolioConfig.tsx     # Portfolio configuration
│   │
│   └── shared/
│       ├── DataTable.tsx           # Reusable data table
│       ├── Modal.tsx               # Modal dialog
│       ├── ConfirmDialog.tsx       # Delete confirmation
│       ├── StatusBadge.tsx         # Draft/Published badge
│       └── FormInput.tsx           # Styled form input
│
├── components/auth/
│   └── LoginForm.tsx               # Admin login form
```

### Page Components

```
src/pages/
├── public/
│   ├── HomePage.tsx
│   ├── ProjectsPage.tsx
│   ├── ProjectDetailPage.tsx
│   ├── BlogPage.tsx
│   ├── BlogDetailPage.tsx
│   └── ContactPage.tsx
│
├── admin/
│   ├── DashboardPage.tsx
│   ├── ProjectsManagePage.tsx
│   ├── BlogManagePage.tsx
│   ├── SkillsManagePage.tsx
│   ├── MessagesPage.tsx
│   └── SettingsPage.tsx
│
├── auth/
│   └── LoginPage.tsx
│
└── NotFoundPage.tsx
```

---

## NAVIGATION FLOW

### User (Public) Flow

```
                        ┌─────────────┐
                        │   Home Page  │
                        └──────┬──────┘
                               │
            ┌──────────────────┼──────────────────┐
            ▼                  ▼                  ▼
     ┌──────────┐      ┌──────────┐      ┌──────────┐
     │ Projects │      │   Blog   │      │ Contact  │
     └────┬─────┘      └────┬─────┘      └──────────┘
          │                 │
          ▼                 ▼
   ┌──────────────┐ ┌──────────────┐
   │ Project      │ │ Blog         │
   │ Detail       │ │ Detail       │
   └──────────────┘ └──────────────┘

   All pages link to:
   - GitHub (external)
   - Download CV (file download)
   - Contact form submission -> Supabase -> Messages table
```

### Admin Flow

```
                        ┌─────────────┐
                        │  Login Page │
                        └──────┬──────┘
                               │ (auth)
                               ▼
                     ┌─────────────────┐
                     │   Dashboard     │
                     └────────┬────────┘
                              │
          ┌───────────────────┼───────────────────┐
          ▼                   ▼                   ▼
   ┌────────────┐    ┌────────────┐    ┌────────────┐
   │  Projects  │    │    Blog    │    │  Skills    │
   │  CRUD      │    │  CRUD      │    │  CRUD      │
   └────────────┘    └────────────┘    └────────────┘
          │                 │                 │
          ▼                 ▼                 ▼
   ┌────────────┐    ┌────────────┐    ┌────────────┐
   │ Add/Edit   │    │ Editor     │    │ Add/Edit   │
   │ Project    │    │ (RichText) │    │ Skill      │
   └────────────┘    └────────────┘    └────────────┘

   ┌────────────┐    ┌────────────┐
   │ Messages   │    │ Settings   │
   │ (Readonly) │    │ (Edit)     │
   └────────────┘    └────────────┘

   Navigation: Sidebar always visible
   Auth: Protected routes redirect to /login if unauthenticated
```

---

## SUPABASE DATABASE SCHEMA

### SQL Migration

```sql
-- Enable UUID generation

```

---

## FOLDER STRUCTURE

```
portfolio/
├── public/
│   ├── images/
│   │   ├── projects/
│   │   └── blog/
│   └── resume.pdf
│
├── src/
│   ├── lib/
│   │   ├── supabase.ts            # Supabase client init
│   │   └── utils.ts               # Helper functions
│   │
│   ├── hooks/
│   │   ├── useAuth.ts             # Auth hook
│   │   ├── useProjects.ts         # Projects data hook
│   │   ├── useBlogs.ts            # Blogs data hook
│   │   ├── useSkills.ts           # Skills data hook
│   │   └── useMessages.ts         # Messages data hook
│   │
│   ├── contexts/
│   │   └── AuthContext.tsx         # Auth context provider
│   │
│   ├── components/
│   │   ├── layout/                # Navbar, Footer, Layout
│   │   ├── home/                  # Hero, Stats, Featured
│   │   ├── projects/              # ProjectCard, ProjectGrid
│   │   ├── blog/                  # BlogCard, BlogList
│   │   ├── contact/               # ContactForm
│   │   ├── shared/                # Button, Card, Badge
│   │   ├── admin/
│   │   │   ├── layout/            # AdminLayout, Sidebar
│   │   │   ├── dashboard/         # KpiCard, ActivityLog
│   │   │   ├── projects/          # ProjectTable, ProjectForm
│   │   │   ├── blog/              # BlogTable, BlogForm, RichTextEditor
│   │   │   ├── skills/            # SkillList, SkillForm
│   │   │   ├── messages/          # MessageInbox, MessageDetail
│   │   │   ├── settings/          # ProfileForm, PortfolioConfig
│   │   │   └── shared/            # DataTable, Modal, FormInput
│   │   └── auth/
│   │       └── LoginForm.tsx
│   │
│   ├── pages/
│   │   ├── public/
│   │   │   ├── HomePage.tsx
│   │   │   ├── ProjectsPage.tsx
│   │   │   ├── ProjectDetailPage.tsx
│   │   │   ├── BlogPage.tsx
│   │   │   ├── BlogDetailPage.tsx
│   │   │   └── ContactPage.tsx
│   │   ├── admin/
│   │   │   ├── DashboardPage.tsx
│   │   │   ├── ProjectsManagePage.tsx
│   │   │   ├── BlogManagePage.tsx
│   │   │   ├── SkillsManagePage.tsx
│   │   │   ├── MessagesPage.tsx
│   │   │   └── SettingsPage.tsx
│   │   ├── auth/
│   │   │   └── LoginPage.tsx
│   │   └── NotFoundPage.tsx
│   │
│   ├── routes/
│   │   ├── PublicRoutes.tsx        # Public route wrapper
│   │   ├── AdminRoutes.tsx         # Protected admin routes
│   │   └── index.tsx               # Route definitions
│   │
│   ├── styles/
│   │   ├── globals.css             # Tailwind + base styles
│   │   └── neo-brutalist.css       # Neo-brutalist custom classes
│   │
│   ├── data/
│   │   └── constants.ts           # Site data, social links
│   │
│   ├── types/
│   │   └── index.ts               # TypeScript type definitions
│   │
│   ├── vite-env.d.ts
│   ├── App.tsx
│   └── main.tsx
│
├── .env.local                     # VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

---

## DEVELOPMENT ROADMAP

### Phase 1: MVP (Week 1-2)

| Step | Task | Details |
|------|------|---------|
| 1.1 | Init project | Vite + React + TypeScript + TailwindCSS |
| 1.2 | Setup Supabase | Create project, init tables, setup RLS |
| 1.3 | Core layout | Navbar, Footer, Layout wrappers |
| 1.4 | Neo-brutalist design system | Button, Card, Badge, SectionTitle |
| 1.5 | Home page | Hero, Stats, Featured Projects, About, CTA |
| 1.6 | Projects page | Grid + Cards + Detail page |
| 1.7 | Contact form | Form + submit to Supabase Messages table |
| 1.8 | Deploy MVP | Deploy to Vercel/Netlify |

### Phase 2: Admin CMS (Week 3-4)

| Step | Task | Details |
|------|------|---------|
| 2.1 | Supabase Auth | Login page, AuthContext, protected routes |
| 2.2 | Admin layout | Sidebar, AdminLayout, AdminHeader |
| 2.3 | Dashboard | KPI cards, Recent Messages, Activity Log |
| 2.4 | Projects CRUD | Table + Form + Delete confirmation |
| 2.5 | Blog CRUD | Table + RichTextEditor + Form |
| 2.6 | Skills CRUD | List + Form + Category grouping |
| 2.7 | Messages inbox | Read/Unread toggle, reply (mailto) |

### Phase 3: Content & Polish (Week 5)

| Step | Task | Details |
|------|------|---------|
| 3.1 | Blog pages | Public blog list + detail pages |
| 3.2 | Blog content | Rich text rendering (dangerouslySetInnerHTML/sanitized) |
| 3.3 | Code snippets | Syntax highlighting (prism.js or highlight.js) |
| 3.4 | Animations | Framer Motion page transitions, scroll animations |
| 3.5 | Responsive | Mobile-first polish for all pages |
| 3.6 | SEO | Meta tags, sitemap, Open Graph |
| 3.7 | Settings page | Profile editor, portfolio config |
| 3.8 | 404 page | Custom not-found page |

### Phase 4: Production (Week 6)

| Step | Task | Details |
|------|------|---------|
| 4.1 | Performance | Image optimization, lazy loading, bundle analysis |
| 4.2 | Security | RLS verification, input sanitization, rate limiting |
| 4.3 | Testing | Component testing (Vitest) |
| 4.4 | Documentation | README, setup guide, deployment guide |
| 4.5 | Final deploy | Production deploy + custom domain |

---

## TECH STACK SUMMARY

```
Frontend:
├── React 18 + TypeScript
├── Vite (bundler)
├── TailwindCSS (styling)
├── Framer Motion (animations)
├── React Router v6 (routing)
├── @supabase/supabase-js (backend client)
├── @tiptap/react (rich text editor - optional)
└── react-hot-toast / sonner (notifications)

Backend (BaaS):
├── Supabase Auth (admin login)
├── Supabase PostgreSQL (database)
├── Supabase Storage (image uploads)
└── Supabase REST/GraphQL API

Deployment:
├── Vercel / Netlify (frontend)
└── Supabase (backend - already hosted)
```
