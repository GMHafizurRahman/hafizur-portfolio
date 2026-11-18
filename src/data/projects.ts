import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'los',
    title: 'Enterprise Loan Origination System',
    category: 'Banking / Enterprise Software',
    status: 'Professional Experience',
    description:
      'An enterprise banking solution designed to manage the loan origination lifecycle, including application processing, workflow management, assessment, approvals, and credit operations.',
    longDescription:
      'A comprehensive enterprise banking platform built to support the complete loan origination lifecycle — from initial application intake through underwriting, credit assessment, multi-stage approvals, and final disbursement. The system handles complex business rules, regulatory compliance workflows, and integrates with document management and reporting infrastructure.',
    technologies: ['Java', 'Spring Boot', 'Angular', 'Oracle', 'Activiti', 'Flowable', 'JasperReports', 'BIRT'],
    highlights: [
      'Multi-stage configurable approval workflows using BPMN 2.0',
      'Business rule engine integration for credit decision automation',
      'Role-based access control across all loan processing stages',
      'Comprehensive reporting suite with JasperReports and BIRT',
      'RESTful API backend with Spring Boot and Spring Security',
      'Real-time status tracking and notification system',
    ],
    architectureNote:
      'Built on a layered MVC/CQRS architecture with Spring Boot services, Oracle persistence, and Angular SPA frontend. Workflow orchestration handled by Activiti/Flowable BPMN engine.',
  },
  {
    id: 'cbs',
    title: 'Core Banking Solutions',
    category: 'Banking Technology',
    status: 'Professional Experience',
    description:
      'Enterprise banking software involving business logic implementation, service development, and structured application architecture for financial institutions.',
    longDescription:
      'Core banking system development involving complex financial business logic, transactional data management, and service-oriented architecture. The system supports banking operations including account management, transaction processing, and financial reporting.',
    technologies: ['Java', 'Spring Boot', 'Angular', 'MVC', 'CQRS', 'Microservices', 'PostgreSQL'],
    highlights: [
      'Microservices-based backend architecture for modularity and scalability',
      'CQRS pattern implementation for read/write separation',
      'Angular frontend for banking operations interfaces',
      'Transactional integrity with Spring Data JPA and Hibernate',
      'RESTful APIs for inter-service communication',
    ],
    architectureNote:
      'Microservices architecture with CQRS pattern, deployed as independent services with shared database infrastructure.',
  },
  {
    id: 'lms',
    title: 'Loan Management System',
    category: 'Enterprise Application',
    status: 'Professional Experience',
    description:
      'A loan management application supporting structured business processes and loan-related operations, built with Java Spring Boot and Thymeleaf.',
    longDescription:
      'A full-featured loan management application enabling financial institutions to manage loan portfolios, track repayments, generate statements, and process modifications. Built with server-side rendering via Thymeleaf for reliability and performance.',
    technologies: ['Java', 'Spring Boot', 'Thymeleaf', 'MVC', 'MySQL', 'JasperReports', 'JavaScript'],
    highlights: [
      'Server-side rendering with Spring MVC and Thymeleaf templates',
      'Complete loan lifecycle management from origination to closure',
      'Automated JasperReports for loan statements and summaries',
      'Role-based access control with Spring Security',
      'Responsive UI with Bootstrap integration',
    ],
    architectureNote:
      'Traditional MVC architecture with Spring Boot backend, Thymeleaf server-side templates, and MySQL persistence.',
  },
  {
    id: 'missingfound',
    title: 'MissingFound',
    category: 'Personal Software Product',
    status: 'In Development',
    description:
      'A digital lost-and-found platform connecting people who have lost or found belongings through location-based discovery, smart matching, and notifications.',
    longDescription:
      'MissingFound is a personal project currently under active development. The platform aims to solve the real-world problem of lost and found items by providing a digital registry where users can report lost or found items, search by location and category, and receive smart match notifications when potential matches are identified.',
    technologies: ['Flutter', 'Java 21', 'Spring Boot', 'MySQL', 'JPA/Hibernate'],
    highlights: [
      'Cross-platform mobile application with Flutter',
      'Location-based item discovery and filtering',
      'Smart matching algorithm for lost and found items',
      'Push notification system for match alerts',
      'Java 21 Spring Boot REST API backend',
      'Secure user authentication and item management',
    ],
    architectureNote:
      'Mobile-first architecture with Flutter frontend and Spring Boot REST API. Currently in active development.',
  },
  {
    id: 'enterprise-demo',
    title: 'Enterprise Management Application',
    category: 'Enterprise Software',
    status: 'Demo Content',
    description:
      'A demonstration project entry for a full-featured enterprise management application with workflow, reporting, and multi-module architecture.',
    longDescription:
      '⚠️ DEMO CONTENT — This entry serves as an editable placeholder for an enterprise management application. Replace this with actual project details when available. The architecture description and technology choices below represent typical enterprise application patterns.',
    technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker', 'Kafka'],
    highlights: [
      'TODO: Replace with actual project highlights',
      'Multi-module enterprise architecture',
      'Event-driven integration with Kafka',
      'Containerized deployment with Docker',
      'Angular SPA with REST API backend',
    ],
    architectureNote:
      'TODO: Replace with actual architecture description.',
  },
]
