import { Experience, Project, SkillCategory } from './types';
import { 
  Terminal, 
  Cpu, 
  Cloud, 
  Database, 
  Layout, 
  Settings, 
  Linkedin, 
  Github, 
  Mail,
  Award
} from 'lucide-react';

export const RESUME_TEXT = `
Naman Mishra - Backend Lead with 8+ years of experience.
Expertise in Microservices, Event-Driven Systems, AI (RAG, LLM), Azure, Java, Spring Boot.
Current Role: Lead Engineer at UST Global (Client: Safeway Inc.), leading a team of 8.
Previous: Software Engineer at The Boeing Company, Associate Consultant at Virtusa.
Key Skills: Java 8+, Spring Boot, Microservices, Azure (Blobs, Cosmos DB), React, Angular, Kafka, MQTT, SQL, MongoDB, OpenTelemetry.
Projects: SMATCH (Safeway), CVMS (Boeing), UMSA (Boeing), My-PM (BT).
Education: MCA (89%).
Awards: Star Performer of Sprint multiple times.
Languages: English (Expert), Hindi (Expert).
`;

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/naman-mishra-6bb257190",
  email: "mailto:mnaman1201@gmail.com", // Placeholder
  github: "https://github.com" // Placeholder
};

export const SKILLS: SkillCategory[] = [
  {
    category: "AI & Modern Engineering",
    items: ["RAG", "LLM Integration (OpenAI, DeepSeek)", "Vector Search", "Prompt Engineering", "Document Embeddings"]
  },
  {
    category: "Backend Core",
    items: ["Java 8+", "Spring Boot", "Microservices", "RESTful APIs", "Event-Driven Architecture", "Hibernate/JPA", "Spring Security"]
  },
  {
    category: "Cloud & DevOps",
    items: ["Microsoft Azure", "Docker", "CI/CD (Bamboo, Bitbucket)", "Cosmos DB", "OpenTelemetry"]
  },
  {
    category: "Distributed Systems",
    items: ["Apache Kafka", "MQTT", "Resilience Patterns (Circuit Breaker)", "System Design"]
  },
  {
    category: "Frontend",
    items: ["React.js", "Angular 7", "HTML5", "CSS3", "Tailwind"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "ust",
    company: "UST Global (Client: Safeway Inc.)",
    role: "Lead Engineer",
    period: "March 2021 - Present",
    description: [
      "Leading a team of 8 members involved in technical design, implementation, and documentation.",
      "Optimized application performance by reducing CPU utilization from 80% to 10% through code refactoring.",
      "Hands-on with Microsoft Azure Blobs and Cosmos DB.",
      "Collaborated with DevOps for CI/CD pipelines."
    ],
    tech: ["Java", "Spring Boot", "React", "Azure", "SQL"]
  },
  {
    id: "boeing",
    company: "The Boeing Company",
    role: "Software Engineer",
    period: "Previous",
    description: [
      "Worked as a Full Stack Developer (Backend + Frontend).",
      "Involved in Scrum Master activities and technical design.",
      "Developed cloud-based onboard systems."
    ],
    tech: ["Spring Boot", "Angular", "MySQL", "Azure", "MQTT"]
  },
  {
    id: "virtusa",
    company: "Virtusa (Client: British Telecom)",
    role: "Associate Consultant",
    period: "Previous",
    description: [
      "Developed resources using Spring REST.",
      "Implemented unit testing from scratch using Junit/Mockito.",
      "Resolved complex defects and performed log analysis."
    ],
    tech: ["Spring", "Angular", "Oracle DB", "Log4j"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "smatch",
    title: "APP - Albertson's Partner Portal",
    client: "Safeway Inc.",
    description: "Modernization of a legacy mainframe application for SMIC maintenance. The solution streamlines item setup and prevents SLU blocking by eliminating dependencies.",
    tech: ["Azure", "Java 8", "Spring Boot", "React.js", "Microservices", "Oracle"]
  },
  {
    id: "cvms",
    title: "CVMS (On Board System)",
    client: "The Boeing Company",
    description: "Cloud-based application enabling airlines to pull media (live stream, video, images) from airplanes connected to ground systems via MQTT.",
    tech: ["Azure", "Java 8", "MQTT", "Spring Boot", "Angular 7", "MySQL"]
  },
  {
    id: "umsa",
    title: "UMSA (Ground Based System)",
    client: "The Boeing Company",
    description: "Frontend-enabled platform used by airlines to manage configuration related to various aircraft modules.",
    tech: ["PCF", "Java 8", "Spring Boot", "Angular 7", "MySQL"]
  },
  {
    id: "mypm",
    title: "My-PM",
    client: "British Telecom",
    description: "Tool for Delivery Managers to access source system data, raise orders, and view task details to improve efficiency.",
    tech: ["Java 8", "Spring Boot", "AngularJS", "Oracle", "Gradle"]
  }
];

export const NAV_ITEMS = [
  { label: 'About', href: '#about', icon: Terminal },
  { label: 'Skills', href: '#skills', icon: Cpu },
  { label: 'Experience', href: '#experience', icon: Settings },
  { label: 'Projects', href: '#projects', icon: Layout },
];