
import { Project, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Finly - Financial Management App',
    description: 'A comprehensive financial management application built with modern web technologies. Features expense tracking, budget planning, financial analytics, and secure user authentication. Implements clean architecture patterns with React frontend and Node.js backend.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Chart.js'],
    images: [
      '/images/projects/finly/dashboard.svg',
      '/images/projects/finly/analytics.svg',
      '/images/projects/finly/budget.svg'
    ],
    githubUrl: 'https://github.com/mbu-peter/finly',
    demoUrl: 'https://finly-frontend-pi.vercel.app'
  },
  {
    id: '2',
    name: 'Hospital Management System',
    description: 'Enterprise-grade hospital management system built with Spring Boot microservices architecture. Features patient management, appointment scheduling, medical records, inventory tracking, and billing. Deployed on AWS with Docker containers and Kubernetes orchestration.',
    tech: ['Java', 'Spring Boot', 'Microservices', 'Docker', 'AWS', 'Kafka', 'gRPC', 'PostgreSQL'],
    images: [
      '/images/projects/hospital/dashboard.svg',
      '/images/projects/hospital/patient-records.svg',
      '/images/projects/hospital/appointments.svg'
    ],
    githubUrl: 'https://github.com/mbu-peter/patient-management-system',
    demoUrl: 'https://github.com/mbu-peter/patient-management-system'
  },
  {
    id: '3',
    name: 'SocialConnect API',
    description: 'Terminal-based FastAPI REST API for social media management and analytics. Features user authentication, post management, real-time notifications, and comprehensive analytics dashboard. Built with modern async Python patterns and includes CLI tools for content scheduling and engagement tracking.',
    tech: ['FastAPI', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'JWT', 'WebSocket', 'Celery'],
    images: [
      '/images/projects/socialconnect/terminal-dashboard.svg',
      '/images/projects/socialconnect/api-endpoints.svg',
      '/images/projects/socialconnect/analytics-cli.svg'
    ],
    githubUrl: 'https://github.com/mbu-peter/socialconnect-api',
    demoUrl: 'https://fast-api-social-app.onrender.com'
  }
];

export const EXPERIENCES: Experience[] = [
  { year: '1900', content: 'Nothing to say, I was not born yet.' },
  { year: '2000', content: 'Managed to power off a computer on my own.' },
  { year: '2010', content: 'Registered a facebook account for my friend, I was not paid though.' },
  { year: '2015', content: 'Built A Todo app using Javascript. Felt like Elon Musk.' },
  { year: '2020', content: 'Built first fullstack app using React and Java. Also deployed it.' },
  { year: '2025', content: "I'm just building, Microservice architecture fascinates me." }
];

export const COMMANDS_HELP = `
Available Directives:
  help       - Open Menu
  about      - Core Bio
  skills     - Tech Stack
  experience - Timeline
  projects   - Portfolio
  contact    - Connectivity
  github     - GitHub Profile
  linkedin   - LinkedIn Profile
  twitter    - Twitter Profile
  clear      - Reset CLI
  whoami     - User Profile
`;

export const ABOUT_TEXT = `
[ IDENTITY ]
> PETER MBUGUA
> SPECIALIZATION: BACKEND SYSTEMS
> KERNEL: JAVA / SPRING BOOT
> CLOUD: AWS ARCHITECT

[ OBJECTIVE ]
Developing scalable, distributed systems 
using modern cloud-native architectures.
Focused on Microservices and DevOps.
`;

export const SKILLS_LIST = `
[ LANGUAGES ]
> JAVA, TYPESCRIPT, SQL, BASH

[ FRAMEWORKS ]
> SPRING BOOT, SPRING CLOUD,
> EXPRESS.JS, REACT.JS

[ CLOUD & OPS ]
> AWS (EC2, S3, RDS, ECS), DOCKER
> KUBERNETES, TERRAFORM, JENKINS

[ EVENT-DRIVEN ]
> REDIS, KAFKA, RABBITMQ
`;
