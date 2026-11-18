export interface NavItem {
  label: string
  href: string
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  type: 'work' | 'training'
  responsibilities: string[]
  technologies?: string[]
}

export interface SkillCategory {
  id: string
  title: string
  icon: string
  skills: string[]
}

export interface Project {
  id: string
  title: string
  category: string
  status: 'Professional Experience' | 'In Development' | 'Demo Content'
  description: string
  longDescription: string
  technologies: string[]
  highlights: string[]
  githubUrl?: string
  liveUrl?: string
  architectureNote?: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  period: string
  subjects?: string[]
  note?: string
}

export interface Capability {
  id: string
  title: string
  description: string
  icon: string
}

export interface Value {
  id: string
  title: string
  description: string
  icon: string
}
