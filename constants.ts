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
  Award,
  FolderGit2
} from 'lucide-react';

export const RESUME_TEXT = `
Naman Mishra
Designation: Lead I – Software Engineering @ UST Canada (Toronto)
Contact: 778-723-7436 | Email: mnaman1201@gmail.com | Location: Toronto, Canada
Academic Details: Masters in Computer Applications (MCA)

Professional Overview:
Lead Engineer with 8+ years of experience building secure, scalable distributed systems using Java, Spring Boot, microservices, event-driven architecture, and Kafka. Experienced in Azure cloud services, API modernization, CI/CD automation, application security, and observability using OpenTelemetry, Prometheus, and Grafana. Currently delivering online-banking solutions at RBC and developing agentic engineering workflows and AI-assisted secure logging capabilities.

Professional Experience:
1. UST, Toronto — Lead I – Software Engineering
Client: RBC – Online Banking | May 2026 - Present
- Secured Spring Boot services with Vault, eliminating hardcoded credentials and committed keystore material while remediating encryption-key risks.
- Delivered Apigee migrations for online-banking APIs.
- Modernized HTTP integrations from RestTemplate to RestClient, retired obsolete APIs, and improved API latency and memory efficiency.
- Created an AI-assisted logging-security audit skill.
- Implemented agentic Jira-to-PR workflows and reusable AI-ready service bootstrapping.

2. UST, Vancouver — Lead I – Software Engineering
Client: Albertsons – APP | Bangalore, India & Vancouver, BC | March 2021 - May 2026
- Leading backend/API design and implementation using Java, Spring Boot, and cloud-native architecture.
- Integrated DocuSign REST APIs enabling envelope creation, sending, reminders, and void operations with secure OAuth 2.0/JWT auth.
- Built CDC pipelines using Kafka to stream MongoDB change events into downstream microservices.
- Reduced application CPU usage from 80% to 10% by refactoring core components and optimizing database access patterns.
- Utilized Azure Blob Storage, Key Vault, and APIM for secure and scalable application infrastructure.

3. Boeing, Bangalore — Software Engineer (Avionics)
Client / Domain: Boeing - Cabin System | June 2019 - March 2021
- Full Stack Engineer.
- Used Spring framework, Angular 7 & MySQL as the basic development structure.
- Involved in Technical design and implementation.
- Involved in Scrum Master activities.

4. Virtusa, Bangalore — Associate Consultant
Client: British Telecom – MyPM | March 2018 – July 2019
- Used Spring framework, Angular, Oracle DB (SQL DEVELOPER) as the basic development structure.
- Developed resources by using Spring REST.
- Implemented unit testing in project from scratch using JUnit and Mockito.
- Helped the team in resolving defects and cross-checking functionality with log4j.

Technical Toolkit:
- AI & Modern Engineering: Agentic AI, MCP, Retrieval-Augmented Generation (RAG), LLM Integration (OpenAI, DeepSeek, Ollama), Document Embeddings & Vector Search, Prompt Engineering, ChatBot, GitHub Copilot, Devin.
- Core Backend & Architecture: Microservices Architecture, Sync/Async API Design, Event-Driven Architecture, Resilience Patterns (Retry, Circuit Breaker, Idempotency), Java 21, Spring Boot (Advanced Configuration), Spring Security (JWT/OAuth2, RBAC), Hibernate/JPA, Design Patterns, OOPS, JEE/J2EE.
- Cloud & DevOps: Microsoft Azure (Blobs, Cosmos DB), APIGEE, HashiCorp Vault, Docker, CI/CD (Bamboo, Bitbucket), Sonar, Veracode.
- Observability: OpenTelemetry, Prometheus, Grafana, Dynatrace.
- Messaging & Distributed: Apache Kafka (CDC Pipelines).
- Database: MongoDB, MySQL, Oracle, PgVector.
- Tools: DocuSign, Swagger, Postman, Git/SVN, JUnit/Mockito, IntelliJ, JIRA, Confluence.
- Frontend: React, Angular 7, HTML, CSS.
`;

export const CONTACT_INFO = {
  name: "Naman Mishra",
  title: "Lead I – Software Engineering @ UST Canada (Toronto)",
  phone: "778-723-7436",
  email: "mnaman1201@gmail.com",
  location: "Toronto, ON, Canada",
  education: "Masters in Computer Applications (MCA)",
  linkedin: "https://www.linkedin.com/in/naman-mishra-6bb257190",
  github: "https://github.com",
};

export const SOCIAL_LINKS = {
  linkedin: CONTACT_INFO.linkedin,
  email: `mailto:${CONTACT_INFO.email}`,
  phone: `tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`,
  github: CONTACT_INFO.github,
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Core Backend & Architecture",
    items: [
      { name: "Java 21", level: 96, tier: "Expert", experience: "8+ yrs" },
      { name: "Spring Boot (Advanced Config)", level: 95, tier: "Expert", experience: "8+ yrs" },
      { name: "Microservices Architecture", level: 94, tier: "Expert", experience: "8+ yrs" },
      { name: "Event-Driven Architecture", level: 92, tier: "Expert", experience: "6+ yrs" },
      { name: "Spring Security (JWT/OAuth2, RBAC)", level: 90, tier: "Expert", experience: "6+ yrs" },
      { name: "Resilience (Retry, Circuit Breaker)", level: 90, tier: "Advanced", experience: "5+ yrs" },
      { name: "Sync/Async API Design", level: 92, tier: "Expert", experience: "7+ yrs" },
      { name: "Hibernate / JPA", level: 88, tier: "Advanced", experience: "6+ yrs" }
    ]
  },
  {
    category: "AI & Modern Engineering",
    items: [
      { name: "Agentic AI & Workflows", level: 90, tier: "Expert", experience: "Active at RBC" },
      { name: "Model Context Protocol (MCP)", level: 86, tier: "Advanced", experience: "Modern" },
      { name: "RAG Architecture", level: 88, tier: "Advanced", experience: "Enterprise" },
      { name: "LLM Integration (OpenAI, DeepSeek, Ollama)", level: 90, tier: "Advanced", experience: "Production" },
      { name: "Vector Search & PgVector", level: 86, tier: "Advanced", experience: "Production" },
      { name: "Prompt Engineering", level: 90, tier: "Advanced", experience: "2+ yrs" },
      { name: "GitHub Copilot & Devin", level: 92, tier: "Expert", experience: "Daily Stack" }
    ]
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Microsoft Azure (Blobs, Cosmos DB)", level: 90, tier: "Expert", experience: "5+ yrs" },
      { name: "APIGEE API Management", level: 89, tier: "Advanced", experience: "RBC Banking" },
      { name: "HashiCorp Vault", level: 90, tier: "Advanced", experience: "Security Modernization" },
      { name: "Docker", level: 88, tier: "Advanced", experience: "6+ yrs" },
      { name: "CI/CD (Bamboo, Bitbucket)", level: 86, tier: "Advanced", experience: "Enterprise" },
      { name: "Sonar & Veracode", level: 85, tier: "Advanced", experience: "AppSec" }
    ]
  },
  {
    category: "Messaging & Distributed",
    items: [
      { name: "Apache Kafka", level: 94, tier: "Expert", experience: "5+ yrs" },
      { name: "CDC (Change Data Capture)", level: 90, tier: "Advanced", experience: "Albertsons APP" },
      { name: "Event Streaming Pipelines", level: 92, tier: "Expert", experience: "High-Throughput" },
      { name: "Distributed Systems", level: 92, tier: "Expert", experience: "8+ yrs" },
      { name: "Idempotency & Fault Tolerance", level: 90, tier: "Advanced", experience: "Resilience" }
    ]
  },
  {
    category: "Observability",
    items: [
      { name: "OpenTelemetry", level: 88, tier: "Advanced", experience: "RBC Banking" },
      { name: "Prometheus", level: 87, tier: "Advanced", experience: "Metrics" },
      { name: "Grafana", level: 88, tier: "Advanced", experience: "Dashboards" },
      { name: "Dynatrace", level: 85, tier: "Advanced", experience: "APM" },
      { name: "Application Performance Monitoring", level: 90, tier: "Advanced", experience: "Production" }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", level: 90, tier: "Advanced", experience: "CDC Streams" },
      { name: "MySQL", level: 92, tier: "Expert", experience: "Boeing Systems" },
      { name: "Oracle DB", level: 88, tier: "Advanced", experience: "BT MyPM" },
      { name: "PgVector", level: 86, tier: "Advanced", experience: "RAG & Search" },
      { name: "Azure Cosmos DB", level: 87, tier: "Advanced", experience: "Cloud NoSQL" }
    ]
  },
  {
    category: "Frontend & Tools",
    items: [
      { name: "React", level: 85, tier: "Advanced", experience: "4+ yrs" },
      { name: "Angular 7", level: 84, tier: "Advanced", experience: "Boeing & BT" },
      { name: "DocuSign REST APIs", level: 93, tier: "Expert", experience: "OAuth 2.0 / JWT" },
      { name: "Swagger & Postman", level: 95, tier: "Expert", experience: "API Testing" },
      { name: "JUnit & Mockito", level: 92, tier: "Expert", experience: "TDD / Unit Tests" },
      { name: "IntelliJ, JIRA & Confluence", level: 95, tier: "Expert", experience: "Workflows" }
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "ust-rbc",
    company: "UST, Toronto",
    client: "RBC (Royal Bank of Canada)",
    role: "Lead I – Software Engineering",
    period: "May 2026 – Present",
    systemName: "Enterprise Online Banking Core",
    architectureType: "Zero-Trust Microservices & Agentic AI Workflows",
    keyMetrics: ["Zero-Trust Vault", "Apigee Migration", "RestClient Upgrade", "Agentic Jira-to-PR"],
    description: [
      "Secured Spring Boot services with HashiCorp Vault, eliminating hardcoded credentials and committed keystore material while remediating encryption-key risks.",
      "Delivered enterprise Apigee migrations for high-volume online-banking APIs.",
      "Modernized HTTP integrations from RestTemplate to RestClient, retired obsolete APIs, and boosted API latency and memory efficiency.",
      "Created an AI-assisted logging-security audit skill to prevent credential leakage and ensure banking compliance.",
      "Engineered agentic Jira-to-PR workflows and reusable AI-ready service bootstrapping frameworks."
    ],
    tech: ["Java 21", "Spring Boot", "HashiCorp Vault", "Apigee", "Agentic AI", "RestClient", "OpenTelemetry", "Prometheus"]
  },
  {
    id: "ust-albertsons",
    company: "UST, Vancouver",
    client: "Albertsons (APP)",
    role: "Lead I – Software Engineering",
    period: "March 2021 – May 2026",
    systemName: "Cloud-Native Partner Portal (APP)",
    architectureType: "High-Throughput Kafka CDC & Cloud-Native Microservices",
    keyMetrics: ["-70% CPU Usage (80% ➔ 10%)", "Kafka CDC Pipelines", "DocuSign OAuth 2.0 / JWT", "Azure Cloud APIM"],
    description: [
      "Led backend/API design and cloud-native architecture implementation using Java, Spring Boot across Bangalore & Vancouver.",
      "Integrated DocuSign REST APIs enabling envelope creation, sending, automated reminders, and void operations with secure OAuth 2.0/JWT auth.",
      "Built resilient CDC pipelines using Apache Kafka to stream MongoDB change events into downstream microservices.",
      "Reduced application CPU usage from 80% to 10% by refactoring core components and optimizing database access patterns.",
      "Utilized Azure Blob Storage, Key Vault, and APIM for secure and scalable enterprise cloud infrastructure."
    ],
    tech: ["Java", "Spring Boot", "Apache Kafka", "DocuSign API", "Azure", "MongoDB", "OAuth 2.0", "Redis"]
  },
  {
    id: "boeing",
    company: "Boeing, Bangalore",
    client: "The Boeing Company (Cabin Systems)",
    role: "Software Engineer (Avionics)",
    period: "June 2019 – March 2021",
    systemName: "Avionics Cabin Video & Telemetry (CVMS)",
    architectureType: "Mission-Critical Avionics & Real-Time MQTT Telemetry",
    keyMetrics: ["Avionics Safety Specs", "Commercial Aircraft CVMS", "Real-Time MQTT Telemetry", "Scrum Master Leadership"],
    description: [
      "Full Stack Engineer building onboard cabin systems and cloud media applications for commercial aircraft.",
      "Used Spring framework, Angular 7, and MySQL as core development structure.",
      "Involved in end-to-end technical design, microservice integration, and avionics specifications.",
      "Actively led Scrum Master activities, sprint retrospectives, and agile ceremonies."
    ],
    tech: ["Spring Boot", "Angular 7", "MySQL", "Azure", "MQTT", "Avionics Specs"]
  },
  {
    id: "virtusa",
    company: "Virtusa, Bangalore",
    client: "British Telecom (MyPM)",
    role: "Associate Consultant",
    period: "March 2018 – July 2019",
    systemName: "Telecom Order Delivery Platform (MyPM)",
    architectureType: "High-Concurrency REST & Oracle DB Engine",
    keyMetrics: ["High-Volume Spring REST", "JUnit / Mockito TDD", "Oracle DB Concurrency", "Automated Task Fulfillment"],
    description: [
      "Developed high-throughput REST resources using Spring framework and Oracle DB (SQL Developer).",
      "Implemented comprehensive unit test suites from scratch using JUnit and Mockito.",
      "Assisted delivery team in resolving complex production defects and cross-checking functionality using Log4j."
    ],
    tech: ["Spring REST", "Angular", "Oracle DB", "JUnit / Mockito", "Log4j"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "rbc-banking",
    title: "RBC Online Banking Modernization",
    client: "RBC (Royal Bank of Canada)",
    description: "Enterprise Apigee API migration, RestClient modernizations, and HashiCorp Vault security integrations. Pioneered AI-assisted logging-security audit and agentic Jira-to-PR workflows.",
    tech: ["Java 21", "Spring Boot", "Vault", "Apigee", "Agentic AI", "RestClient"],
    image: "/projects/solid-starters.png"
  },
  {
    id: "albertsons-app",
    title: "Albertsons Partner Portal (APP)",
    client: "Albertsons / Safeway",
    description: "Cloud-native portal with DocuSign REST OAuth 2.0/JWT integration, Kafka CDC streaming pipelines for MongoDB change events, and a 70% CPU usage reduction via core architectural refactoring.",
    tech: ["Java", "Spring Boot", "Apache Kafka", "DocuSign", "Azure", "MongoDB"],
    image: "/projects/radix.png"
  },
  {
    id: "boeing-cabin",
    title: "Boeing Avionics Cabin Systems (CVMS)",
    client: "The Boeing Company",
    description: "Cloud-based onboard system enabling airlines to stream live media, video, and aircraft cabin sensor telemetry securely connected to ground systems via MQTT.",
    tech: ["Spring Boot", "Angular 7", "MySQL", "Azure", "MQTT", "Avionics"],
    image: "/projects/bond-cancellation.png"
  },
  {
    id: "bt-mypm",
    title: "British Telecom Delivery Platform (My-PM)",
    client: "British Telecom",
    description: "Delivery Manager portal accessing telecom source system data, automating order raising, and tracking task fulfillment pipelines with robust unit test coverage.",
    tech: ["Spring REST", "Angular", "Oracle DB", "JUnit / Mockito", "Log4j"],
    image: "/projects/max-life.png"
  }
];

export const NAV_ITEMS = [
  { label: 'About', href: '#about', icon: Terminal },
  { label: 'Experience', href: '#experience', icon: Settings },
  { label: 'Skills', href: '#skills', icon: Cpu },
];