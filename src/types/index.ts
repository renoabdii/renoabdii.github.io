export interface Project {
  id: string
  title: string
  slug: string
  description: string
  description_en?: string
  problem?: string
  problem_en?: string
  solution?: string
  solution_en?: string
  architecture?: string
  architecture_en?: string
  tech_stack: string[]
  image_url?: string
  screenshots: string[]
  github_url?: string
  demo_url?: string
  status: 'draft' | 'published'
  featured: boolean
  created_at: string
  updated_at: string
}

export interface Blog {
  id: string
  title: string
  slug: string
  content: string
  excerpt?: string
  cover_image?: string
  tags: string[]
  status: 'draft' | 'published'
  created_at: string
  updated_at: string
}

export interface Skill {
  id: string
  skill_name: string
  category: 'Frontend' | 'Backend' | 'AI' | 'Mobile' | 'DevOps' | 'Database' | 'Other'
  proficiency_level: number
  icon_url?: string
  sort_order: number
  created_at: string
}

export interface Review {
  id: string
  name: string
  role: string
  role_en?: string
  content: string
  avatar_url?: string
  rating: number
  status: 'draft' | 'published'
  sort_order: number
  created_at: string
}

export interface Message {
  id: string
  name: string
  email: string
  message: string
  read_status: boolean
  created_at: string
}

export interface Experience {
  id: string
  company: string
  role: string
  role_en?: string
  start_date?: string
  end_date?: string
  description: string
  description_en?: string
  tech_stack: string[]
  sort_order: number
  created_at: string
  updated_at: string
}

export interface Education {
  id: string
  institution: string
  program: string
  program_en: string
  period?: string
}

export interface Profile {
  id: string
  display_name: string
  title: string
  bio?: string
  bio_en?: string
  avatar_url?: string
  resume_url?: string
  github_url?: string
  linkedin_url?: string
  twitter_url?: string
  email?: string
  phone?: string
  location?: string
  availability?: string
  education_institution?: string
  education_program?: string
  education_period?: string
  created_at: string
  updated_at: string
}
