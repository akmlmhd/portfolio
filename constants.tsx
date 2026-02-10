
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Oceztra',
    description: 'A Resource Management System powered by Flutter, GetX, and a Jython-MySQL backend.',
    fullDescription: 'Oceztra is a high-performance Resource Management System (RMS). It features a Flutter frontend using GetX for reactive state management, communicating via REST APIs with a backend processing engine written in Jython that interfaces with a MySQL database. It utilizes Hive for local caching and OneSignal for push notifications.',
    technicalChallenge: 'Implementing complex resource allocation logic within a Jython middleware that provides optimized JSON responses for a responsive GetX-driven UI.',
    image: '/ocez_img.jpeg',
    tags: ['Flutter', 'GetX', 'Jython', 'MySQL', 'REST API'],
    link: 'https://drive.google.com/drive/folders/1UeD5yvKCNCN2HjXw7uWCN-c-mft9ixdj?usp=sharing'
  },
  {
    id: '2',
    title: 'AMS (Audit Management System)',
    description: 'Professional auditing tool with secure data handling and RESTful synchronization.',
    fullDescription: 'AMS digitizes corporate auditing workflows. It handles sensitive data using Flutter Secure Storage and syncs audit records with a MySQL database via JSON-based REST APIs. The state is managed efficiently using GetX, ensuring a smooth offline-to-online experience.',
    technicalChallenge: 'Developing a robust JSON parsing layer to handle large, nested audit report structures from the Jython-powered API while maintaining UI performance.',
    image: '/ams_img.jpeg',
    tags: ['Flutter', 'REST API', 'MySQL', 'Secure Storage', 'GetX'],
    link: 'https://drive.google.com/drive/folders/1w1dbwSu9qO9doqTWuH_aRq3tnUoZ0o51?usp=sharing'
  },
  {
    id: '3',
    title: 'eMSC (electronic Management System Certification)',
    description: 'Certification management platform built through collaborative GitHub Git-flow.',
    fullDescription: 'eMSC manages certification lifecycle tracking. Developed with a team using GitHub branching, the app consumes RESTful services to fetch certification data stored in MySQL. It uses Shared Preferences for user settings and GetX for navigation.',
    technicalChallenge: 'Coordinating multi-user certification edits and preventing state conflicts through efficient GetX dependency injection and Git branch management.',
    image: '/emsc_img.jpeg',
    tags: ['Flutter', 'GetX', 'MySQL', 'GitHub Branching', 'Jython'],
    link: 'https://drive.google.com/drive/folders/1etf3bsAjjlU-v_J_tySmH7R-9vS_mF0V?usp=sharing'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Flutter (GetX)', level: 95, category: 'Framework' },
  { name: 'Postman (JSON Body)', level: 96, category: 'Tools' },
  { name: 'REST API (JSON)', level: 93, category: 'Tools' },
  { name: 'Jython', level: 85, category: 'Language' },
  { name: 'MySQL', level: 90, category: 'Backend' },
  { name: 'Hive & Secure Storage', level: 92, category: 'Backend' },
  { name: 'GitHub (Branch Flow)', level: 90, category: 'Tools' },
  { name: 'OneSignal', level: 88, category: 'Tools' },
];
