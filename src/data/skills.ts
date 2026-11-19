import type { SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: 'Code2',
    skills: ['Java', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    id: 'backend',
    title: 'Backend Engineering',
    icon: 'Server',
    skills: ['Spring Framework', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'Microservices', 'LogicalDOC', 'JWT', 'OAuth 2.0'],
  },
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    icon: 'Monitor',
    skills: ['Angular', 'React.js', 'Thymeleaf', 'HTML5', 'CSS', 'Bootstrap'],
  },
  {
    id: 'databases',
    title: 'Database Technologies',
    icon: 'Database',
    skills: ['Oracle', 'PostgreSQL', 'MySQL'],
  },
  {
    id: 'architecture',
    title: 'Software Architecture',
    icon: 'Layers',
    skills: ['MVC', 'CQRS', 'Microservices Architecture', 'Object-Oriented Programming', 'Design Patterns', 'Credit Risk Grading (CRG)', 'Configurable Rule Engines'],
  },
  {
    id: 'workflow',
    title: 'Workflow Engineering',
    icon: 'GitBranch',
    skills: ['BPMN', 'Activiti', 'Flowable', 'Workflow Automation', 'Business Process Design'],
  },
  {
    id: 'reporting',
    title: 'Reporting Technologies',
    icon: 'FileBarChart',
    skills: ['JasperReports', 'BIRT'],
  },
  {
    id: 'devops',
    title: 'DevOps & Dev Tools',
    icon: 'Terminal',
    skills: ['Docker', 'Linux', 'Git', 'Kafka'],
  },
  {
    id: 'ai-engineering',
    title: 'AI-Assisted Engineering',
    icon: 'Bot',
    skills: ['AI Coding Agents', 'AI-Accelerated Development Workflows', 'Prompt Engineering', 'AI-Augmented Debugging & QA'],
  },
]
