import { FaCode, FaPaintBrush, FaMobileAlt, FaPalette, FaChartLine, FaCommentDots } from "react-icons/fa";
import React from 'react';

export const services = [
  {
    icon: React.createElement(FaCode),
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies and best practices.',
    fullDescription: 'I create responsive, high-performance websites and web applications tailored to your business needs. From landing pages to complex web platforms, I ensure your digital presence stands out with clean code and exceptional user experience.',
    deliverables: [
      'Fully responsive design (mobile, tablet, desktop)',
      'Fast loading speeds and SEO optimization',
      'Modern UI with smooth animations',
      'Cross-browser compatibility',
      'Admin panel (if needed)',
      '30 days post-launch support'
    ],
    price: '$500',
    timeline: '2-4 weeks'
  },
  {
    icon: React.createElement(FaPaintBrush),
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create intuitive and engaging digital experiences.',
    fullDescription: 'I design beautiful, user-friendly interfaces that not only look great but also provide seamless user experiences. Every design decision is backed by research and best practices to ensure your users love interacting with your product.',
    deliverables: [
      'User research and persona development',
      'Wireframes and user flows',
      'High-fidelity mockups',
      'Interactive prototypes',
      'Design system and style guide',
      'Handoff files for developers'
    ],
    price: '$400',
    timeline: '1-3 weeks'
  },
  {
    icon: React.createElement(FaMobileAlt),
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.',
    fullDescription: 'I develop mobile applications that provide native-like experiences on both iOS and Android platforms. Whether you need a simple app or a complex solution, I deliver quality apps that your users will love.',
    deliverables: [
      'Cross-platform development (iOS & Android)',
      'Native performance and animations',
      'Push notifications integration',
      'Backend API integration',
      'App store submission assistance',
      '60 days maintenance support'
    ],
    price: '$1000',
    timeline: '4-8 weeks'
  },
  {
    icon: React.createElement(FaPalette),
    title: 'Branding',
    description: 'Complete brand identity design including logos, color schemes, and brand guidelines.',
    fullDescription: 'I help businesses establish a strong visual identity that resonates with their target audience. From logos to complete brand guidelines, I create cohesive brand systems that tell your story.',
    deliverables: [
      'Logo design (3 concepts + revisions)',
      'Color palette and typography',
      'Brand style guide',
      'Business card and letterhead design',
      'Social media templates',
      'Brand assets in various formats'
    ],
    price: '$600',
    timeline: '2-3 weeks'
  },
  {
    icon: React.createElement(FaChartLine),
    title: 'Digital Marketing',
    description: 'Strategic digital marketing campaigns to grow your online presence and reach.',
    fullDescription: 'I create and execute digital marketing strategies that drive real results. From social media campaigns to content strategy, I help you reach your target audience and grow your business online.',
    deliverables: [
      'Social media strategy and management',
      'Content calendar (1 month)',
      'Custom graphics for posts',
      'Engagement and growth tactics',
      'Analytics and monthly reports',
      'Ad campaign setup (if needed)'
    ],
    price: '$350/month',
    timeline: 'Ongoing'
  },
  {
    icon: React.createElement(FaCommentDots),
    title: 'Design & Tech Guidance',
    description: 'Helping clients and teams choose the right design approach and technical direction for simple and effective solutions.',
    fullDescription: 'Not sure which technology or design approach to use? I provide expert consultation to help you make informed decisions about your project. Get clarity on technical stack, design systems, and implementation strategies.',
    deliverables: [
      'Technology stack recommendations',
      'Architecture and system design advice',
      'Design system planning',
      'Project timeline and budget estimation',
      'Best practices and optimization tips',
      'Ongoing consultation support'
    ],
    price: '$100/hour',
    timeline: 'Flexible'
  }
];