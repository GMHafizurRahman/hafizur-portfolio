import type { Education } from '@/types'

export const educations: Education[] = [
  {
    id: 'isdb',
    institution: 'IsDB-BISEW IT Scholarship',
    degree: 'Diploma in Enterprise Systems Analysis and Design (ESAD-JEE)',
    period: 'April 2019 – November 2020',
    subjects: [
      'Web Publishing',
      'Oracle Database Development',
      'Object-Oriented Programming using Java',
      'Java and XML',
      'UML',
      'Servlets, JSP, JSTL, Hibernate',
      'PrimeFaces and Angular',
      'Spring Framework',
      'JasperReports',
      'Software Architecture',
      'Data Structures and Algorithms',
    ],
  },
  {
    id: 'iu',
    institution: 'Islamic University, Bangladesh',
    degree: 'BBA (2014) & MBA (2015) — Major: Management',
    period: '2010 – 2017',
    note: 'Academic background in management, business strategy, and organizational behavior.',
  },
  {
    id: 'cantonment',
    institution: 'Cantonment College, Bangladesh',
    degree: 'HSC – Business Studies',
    period: '2007 – 2009',
  },
  {
    id: 'dhuliapur',
    institution: 'Dhuliapur High School',
    degree: 'SSC – Business Studies',
    period: '2005 – 2007',
  },
]
