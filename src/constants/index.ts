import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  prosafe,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Web Application',
    icon: web,
  },
  {
    title: 'Mobile Application',
    icon: mobile,
  },
  {
    title: 'Full Stack Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Next+Node Resume Generator',
    companyName: 'SELC',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'Jan 2022',
    points: [
      'Developed and maintained dynamic web applications using Next.js for frontend and Node.js with Express for backend services.',
      'Collaborated with cross-functional teams including designers, product managers, and other developers to deliver exceptional products.',
      'Implemented responsive design strategies to ensure optimal user experience across devices.',
      'Conducted code reviews to uphold high standards for code quality and provide constructive feedback to peers.',
    ],
  },
  {
    title: 'React+Ruby Registration Software',
    companyName: 'PROSAFE',
    icon: prosafe,
    iconBg: '#E6DEDD',
    date: 'Jan 2023',
    points: [
      'Developing and maintaining a registration software using React.js for the frontend and Ruby for the backend.',
      'Working closely with cross-functional teams, including designers, product managers, and other developers to ensure the delivery of high-quality software.',
      'Ensuring responsive design principles and cross-browser compatibility are implemented.',
      'Engaging in code reviews and providing constructive feedback to peers.',
    ],
  },
  {
    title: 'Middleware Service plugin',
    companyName: 'ClassE365',
    icon: shopify,
    iconBg: '#383E56',
    date: 'June 2023',
    points: [
      'Developing and integrating a custom plugin for ClassE365 to enhance its capabilities by automating critical processes such as admissions, registrations, and alumni management.',
      'Streamlining operations by implementing features for automated contract and letter generation during the registration process, reducing manual effort.',
      'Enhancing user experience through seamless enrollment workflows and alumni portal functionality, ensuring efficiency and accessibility.',
      'Implementing a CRM with automated notifications and alerts at each stage of the user journey, improving communication and engagement.',
    ],
  },
  {
    title: 'Advanced Customer Relationship Management',
    companyName: 'TechAhead',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Jan 2024 - Present',
    points: [
      'Creating and sustaining advanced CRM applications leveraging React.js alongside Node Express.',
      'Team up with diverse groups such as designers, product managers, and fellow developers to craft superior products.',
      'Adopting responsive design principles and ensuring compatibility across various web browsers.',
      'Engaging in peer code reviews to offer insightful feedback and suggestions for improvement.',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I was convinced it was impossible to design a website as stunning as our product, but Sidhanth has shown me otherwise.',
    name: 'Amy',
    designation: 'CEO',
    company: '1Balance Inc',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "Sidhanth is a unique sytems architect with an exceptional commitment to his clients'success.",
    name: 'Richard',
    designation: 'CTO',
    company: 'Cloverdale Robotics',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "Sid's improvements to our site boosted our traffic significantly, leading to a purchase rate increase of 53.21%. We are extremely grateful!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: 'Ideation Tecnologies',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'React Resume Generator',
    description:
      'AI-powered resume generator, crafted by me and offered freely to the student community, providing a valuable resource for their career advancement.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    sourceCodeLink: 'https://resume.selccollege.com',
  },
  {
    name: 'AI Powered Registration Software',
    description:
      'A sophisticated web application featuring an AI-powered Registration Software integrated with a tailored Content Management System, offering users efficient navigation through job openings, real-time salary insights, and job availability based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    sourceCodeLink: 'http://164.92.111.11/',
  },
  {
    name: 'AI Powered Agency Customer Relationship Management',
    description:
      'An innovative customer relationship management platform, powered by AI, enables efficient interactions and strengthens client relationships with its intuitive features.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    sourceCodeLink: '/#',
  },
];

export { services, technologies, experiences, testimonials, projects };
