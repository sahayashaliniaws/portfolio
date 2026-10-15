import type { ProjectItem, SkillCategory, ExperienceItem, CertificationItem, AwsService } from '../types/portfolio';

export const personalInfo = {
  name: "Sahaya Shalini S",
  roleTitle: "AWS Cloud & DevOps Engineer",
  taglines: [
    "AWS Cloud & DevOps Engineer",
    "Terraform & IaC Specialist",
    "Kubernetes & Docker Orchestrator",
    "Jenkins CI/CD Automation Architect",
    "Linux Systems & CloudWatch Observability"
  ],
  status: "Open to Opportunities",
  yearsOfExperience: "4+",
  location: "Chennai, India",
  email: "sahayashalinis98@gmail.com",
  phone: "+91 9003846736",
  github: "https://github.com/sahayashaliniaws",
  linkedin: "https://www.linkedin.com/in/sahaya-shalini-s",
  summary: "AWS Cloud & DevOps Engineer with 4 years of IT experience, including 2 years in AWS Cloud Support and 2 years in DevOps Engineering. Skilled in AWS infrastructure management, Terraform-based Infrastructure as Code (IaC), Jenkins CI/CD automation, Git, GitHub, Maven, Docker, Kubernetes, Amazon EKS, and Linux administration. Experienced in infrastructure provisioning, application deployment automation, CloudWatch monitoring, incident management, troubleshooting, and integrating SonarQube quality gates into CI/CD workflows.",
  stats: [
    { label: "IT Experience", value: "4 Years", detail: "2y Cloud Support + 2y DevOps" },
    { label: "AWS Services Handled", value: "15+", detail: "EKS, ECS, EC2, VPC, Lambda..." },
    { label: "CI/CD Pipelines", value: "50+", detail: "Jenkins Declarative & Maven" },
    { label: "Target Availability", value: "99.99%", detail: "Multi-AZ High Availability" }
  ],
  education: {
    degree: "Bachelor of Engineering (B.E.)",
    major: "Electronics & Communication Engineering",
    institution: "Loyola-ICAM College of Engineering and Technology (LICET), Chennai",
    period: "2015 – 2019"
  },
  languages: [
    { name: "English", proficiency: "Professional Working Proficiency" },
    { name: "Tamil", proficiency: "Native Proficiency" }
  ]
};

export const awsServices: AwsService[] = [
  {
    name: "Amazon EKS",
    category: "Containers",
    tagline: "Managed Kubernetes Control Plane",
    description: "Orchestrating containerized microservices across worker node groups with auto-scaling, Helm charts, and IAM roles for service accounts (IRSA).",
    useCase: "Production microservices hosting with zero-downtime rolling upgrades."
  },
  {
    name: "Amazon ECS",
    category: "Containers",
    tagline: "Elastic Container Service",
    description: "Configuring containerized tasks and services with task definitions, ALB integration, and CloudWatch log streaming.",
    useCase: "Containerized app modernization and rapid deployment pipelines."
  },
  {
    name: "Amazon EC2",
    category: "Compute",
    tagline: "Elastic Compute Cloud",
    description: "Provisioning instances across multiple AZs with custom AMIs, user-data automation, and Auto Scaling group policies.",
    useCase: "Scalable game servers and core multi-tier application nodes."
  },
  {
    name: "AWS Lambda",
    category: "Compute",
    tagline: "Serverless Event-Driven Compute",
    description: "Deploying serverless functions triggered by API Gateway, S3 events, and CloudWatch alarms for automated operations.",
    useCase: "Serverless backend APIs and event-driven maintenance tasks."
  },
  {
    name: "Amazon VPC",
    category: "Networking",
    tagline: "Virtual Private Cloud",
    description: "Designing isolated multi-tier networks with public/private subnets, Internet Gateways, NAT Gateways, Route Tables, and NACLs.",
    useCase: "Secure network boundary isolation for enterprise clients."
  },
  {
    name: "Application Load Balancer",
    category: "Networking",
    tagline: "Intelligent Traffic Distribution",
    description: "Configuring ALB target groups, health checks, path-based routing, and SSL/TLS termination for microservices.",
    useCase: "Dynamic traffic routing to EKS pods and EC2 Auto Scaling fleets."
  },
  {
    name: "Amazon S3",
    category: "Storage & DB",
    tagline: "Simple Storage Service",
    description: "Object storage with lifecycle policies, bucket versioning, server-side encryption (SSE-KMS), and cross-region replication.",
    useCase: "Static asset hosting, build artifacts, and disaster recovery backups."
  },
  {
    name: "Amazon RDS (MySQL)",
    category: "Storage & DB",
    tagline: "Relational Database Service",
    description: "Provisioning multi-AZ MySQL databases with automated automated backups, snapshot management, and read replicas.",
    useCase: "Persistent transactional data for e-commerce and gaming applications."
  },
  {
    name: "Amazon DynamoDB",
    category: "Storage & DB",
    tagline: "NoSQL Key-Value Store",
    description: "High-throughput, single-digit millisecond latency data storage with partition key design and TTL eviction.",
    useCase: "Real-time game session state, leaderboard metrics, and fast key lookups."
  },
  {
    name: "Amazon CloudWatch",
    category: "Security & Management",
    tagline: "Observability & Metric Alarms",
    description: "Configuring customized dashboards, metric filters, log groups, and automated SNS alarms for threshold breaches.",
    useCase: "End-to-end infrastructure monitoring and auto-healing triggers."
  },
  {
    name: "AWS IAM",
    category: "Security & Management",
    tagline: "Identity & Access Management",
    description: "Enforcing least-privilege policies, custom JSON roles, MFA enforcement, and secure temporary credentials.",
    useCase: "Zero-trust access governance across AWS accounts."
  },
  {
    name: "Amazon API Gateway",
    category: "Networking",
    tagline: "Managed REST & WebSocket APIs",
    description: "Building secure API front-ends with throttling, request validation, authentication, and Lambda integration.",
    useCase: "Entry point for serverless microservice requests."
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Cloud & AWS",
    description: "Production experience architecting, managing, and troubleshooting resilient AWS environments.",
    skills: [
      { name: "AWS EC2 & Auto Scaling", level: 95, experience: "4 Years", highlight: true, tags: ["Compute", "High Availability", "AMI"] },
      { name: "AWS VPC & Networking", level: 92, experience: "4 Years", highlight: true, tags: ["Subnets", "NACLs", "Security Groups", "Route53"] },
      { name: "Amazon S3 & EBS", level: 94, experience: "4 Years", highlight: false, tags: ["Storage", "Lifecycle", "Snapshots"] },
      { name: "AWS IAM & Security", level: 90, experience: "4 Years", highlight: true, tags: ["Least-Privilege", "Roles", "Policies"] },
      { name: "Application Load Balancer", level: 90, experience: "3 Years", highlight: false, tags: ["Target Groups", "Routing", "SSL/TLS"] },
      { name: "AWS Lambda & API Gateway", level: 85, experience: "2 Years", highlight: false, tags: ["Serverless", "REST", "Event-Driven"] }
    ]
  },
  {
    category: "DevOps & IaC",
    description: "Automating infrastructure provisioning and configuration management for repeatable environments.",
    skills: [
      { name: "Terraform (IaC)", level: 92, experience: "3 Years", highlight: true, tags: ["HCL", "State Management", "Modules", "AWS Provider"] },
      { name: "Ansible", level: 85, experience: "2 Years", highlight: false, tags: ["Playbooks", "Config Management", "Automation"] },
      { name: "Linux Administration", level: 92, experience: "4 Years", highlight: true, tags: ["RHEL", "Ubuntu", "Bash", "Systemd", "SSH"] },
      { name: "Shell Scripting", level: 90, experience: "4 Years", highlight: true, tags: ["Bash", "Cron", "Log Analysis", "Task Automation"] }
    ]
  },
  {
    category: "Containers & Orchestration",
    description: "Building container images, writing manifests, and operating cloud-native Kubernetes workloads.",
    skills: [
      { name: "Docker & Dockerfiles", level: 94, experience: "3 Years", highlight: true, tags: ["Multi-stage Builds", "Image Optimization", "ECR"] },
      { name: "Kubernetes (K8s)", level: 88, experience: "2.5 Years", highlight: true, tags: ["Pods", "Services", "ConfigMaps", "Deployments"] },
      { name: "Amazon EKS & ECS", level: 87, experience: "2.5 Years", highlight: true, tags: ["Node Groups", "Fargate", "Task Definitions"] },
      { name: "Helm Charts", level: 85, experience: "2 Years", highlight: false, tags: ["Package Management", "Templating", "Releases"] }
    ]
  },
  {
    category: "CI/CD & Code Quality",
    description: "Implementing continuous integration, automated builds, and DevSecOps quality gates.",
    skills: [
      { name: "Jenkins Declarative Pipelines", level: 95, experience: "3 Years", highlight: true, tags: ["Jenkinsfile", "Multibranch", "Plugins"] },
      { name: "Git & GitHub", level: 92, experience: "4 Years", highlight: true, tags: ["Branching Strategy", "Pull Requests", "Workflows"] },
      { name: "Maven Build Tool", level: 88, experience: "3 Years", highlight: false, tags: ["pom.xml", "Artifacts", "Dependencies"] },
      { name: "SonarQube Quality Gates", level: 90, experience: "2.5 Years", highlight: true, tags: ["DevSecOps", "Static Code Analysis", "Vulnerability Scanning"] }
    ]
  },
  {
    category: "Monitoring & Observability",
    description: "Proactive telemetry, alerting, and rapid incident response across distributed systems.",
    skills: [
      { name: "Amazon CloudWatch", level: 92, experience: "4 Years", highlight: true, tags: ["Metrics", "Logs", "Dashboards", "Alarms"] },
      { name: "Prometheus", level: 85, experience: "2 Years", highlight: false, tags: ["TSDB", "Scraping", "Node Exporter"] },
      { name: "Grafana", level: 86, experience: "2 Years", highlight: false, tags: ["Dashboards", "Visualizations", "Alerting"] },
      { name: "Jira & Confluence", level: 92, experience: "4 Years", highlight: false, tags: ["ITIL", "Runbooks", "Incident Management"] }
    ]
  },
  {
    category: "Application & Databases",
    description: "Supporting enterprise backend applications, microservice runtimes, and databases.",
    skills: [
      { name: "Java 17 & Spring Boot", level: 82, experience: "2 Years", highlight: false, tags: ["Microservices", "REST APIs", "JVM Tuning"] },
      { name: "Amazon RDS for MySQL", level: 86, experience: "3 Years", highlight: false, tags: ["Multi-AZ", "Backups", "Read Replicas"] },
      { name: "Amazon DynamoDB", level: 84, experience: "2 Years", highlight: false, tags: ["NoSQL", "Key-Value", "Session Store"] },
      { name: "Nginx Web Server", level: 86, experience: "3 Years", highlight: false, tags: ["Reverse Proxy", "Load Balancing", "SSL"] }
    ]
  }
];

export const projects: ProjectItem[] = [
  {
    id: "ecommerce-microservices",
    title: "AWS Cloud-Native E-Commerce Microservices Platform",
    subtitle: "Enterprise Microservices with Automated Jenkins CI/CD, SonarQube & Terraform IaC",
    category: "Microservices & Kubernetes",
    image: "/assets/ecommerce-architecture.jpg",
    featured: true,
    problem: "The legacy monolithic application suffered from slow deployment cycles (taking several hours), high regression risks during releases, and inconsistent staging environments leading to frequent production incidents.",
    solution: "Architected and deployed a multi-tier microservices platform using Java 17 and Spring Boot (User, Product, and Order services). Containerized each service with Docker, created declarative Jenkins CI/CD pipelines with SonarQube quality gates, and automated infrastructure provisioning on AWS EKS using reusable Terraform modules.",
    architecture: "Source code pushed to GitHub triggers a Jenkins Declarative Pipeline that builds artifacts with Maven, enforces SonarQube quality gates, builds multi-stage Docker images, and pushes them to Amazon ECR. Terraform provisions VPC subnets, EKS clusters, and RDS databases. Deployments to EKS are managed via Helm charts with rolling zero-downtime updates.",
    outcome: "Achieved a 65% reduction in release deployment time, eliminated deployment downtime via rolling updates, and maintained 100% compliance with SonarQube security quality gates before code reaches staging.",
    metrics: [
      { label: "Deployment Speed", value: "65% Faster" },
      { label: "Deployment Downtime", value: "0 ms (Zero Downtime)" },
      { label: "Quality Gate Pass", value: "100% Enforced" },
      { label: "Microservices Managed", value: "3 Dedicated Services" }
    ],
    tools: [
      "Java 17",
      "Spring Boot",
      "Microservices",
      "REST APIs",
      "Docker",
      "Kubernetes (EKS)",
      "Helm",
      "Jenkins",
      "Git / GitHub",
      "Maven",
      "SonarQube",
      "Terraform",
      "AWS (VPC, RDS, CloudWatch)"
    ],
    githubUrl: "https://github.com/sahayashaliniaws",
    architectureFlow: [
      "Git Commit & Push",
      "Jenkins Webhook Trigger",
      "Maven Build & Unit Tests",
      "SonarQube Quality Gate Validation",
      "Docker Container Build & ECR Push",
      "Terraform IaC Infrastructure Verification",
      "Kubernetes (EKS) Helm Rolling Deployment",
      "CloudWatch Health & Performance Metrics"
    ]
  },
  {
    id: "game-server-architecture",
    title: "High-Availability Scalable Game Server on AWS",
    subtitle: "Fault-Tolerant Multiplayer Game Server with ALB, EC2 Auto Scaling & Serverless Hybrid",
    category: "High Availability & Cloud Architecture",
    image: "/assets/gameserver-architecture.jpg",
    featured: true,
    problem: "Sudden surges in concurrent player logins caused severe server latency, matchmaking timeouts, and unpredictable node crashes. Manual server provisioning was incapable of responding to bursty peak traffic.",
    solution: "Engineered an elastic game server architecture utilizing an Application Load Balancer (ALB) and EC2 Auto Scaling groups spanning multiple Availability Zones. Integrated AWS Lambda and API Gateway for serverless event operations, Amazon RDS MySQL for persistent player data, and Amazon DynamoDB for ultra-low latency session and leaderboard caching.",
    architecture: "Player game clients connect through an Internet Gateway and ALB that distributes traffic evenly across EC2 Auto Scaling groups in AZ-A and AZ-B. CloudWatch alarms monitor CPU and connection thresholds to dynamically trigger scale-out and scale-in policies. Authentication and matchmaking events are handled serverlessly by API Gateway + Lambda, querying DynamoDB for sub-10ms session access.",
    outcome: "Maintained 99.99% availability during simulated peak traffic spikes with seamless automated self-healing. Player session retrieval latency dropped below 25ms.",
    metrics: [
      { label: "System Availability", value: "99.99%" },
      { label: "Session Retrieval Latency", value: "< 25 ms" },
      { label: "Auto Scaling Reaction", value: "< 90 Seconds" },
      { label: "Availability Zones", value: "Multi-AZ Resilience" }
    ],
    tools: [
      "Amazon EC2",
      "Application Load Balancer (ALB)",
      "EC2 Auto Scaling Groups",
      "Amazon CloudWatch Metrics & Alarms",
      "AWS Lambda",
      "Amazon API Gateway",
      "Amazon RDS for MySQL",
      "Amazon DynamoDB",
      "Amazon VPC",
      "Java",
      "Linux (RHEL/Ubuntu)"
    ],
    githubUrl: "https://github.com/sahayashaliniaws",
    architectureFlow: [
      "Player Traffic via Internet Gateway",
      "Application Load Balancer Health Distribution",
      "EC2 Multi-AZ Auto Scaling Fleet",
      "CloudWatch Alarms & Dynamic Scale Triggers",
      "API Gateway + AWS Lambda Serverless Handlers",
      "DynamoDB Sub-10ms Session State Caching",
      "Amazon RDS MySQL Persistent Storage"
    ]
  }
];

export const experience: ExperienceItem[] = [
  {
    company: "HCLTech Pvt Ltd",
    client: "Client: Fiserv India Ltd",
    role: "Associate DevOps Engineer",
    location: "Chennai, India",
    period: "Mar 2024 – Aug 2026",
    type: "Full-Time",
    summary: "Engineered automated CI/CD pipelines, containerized microservices on Kubernetes, and managed AWS infrastructure using Terraform for leading financial technology client Fiserv.",
    keyResponsibilities: [
      "Built and maintained Jenkins CI/CD pipelines integrated with Git, GitHub, and Maven to automate source code checkout, builds, testing, and application deployments across development, integration, and staging environments.",
      "Managed Git repositories, branches, Jenkins jobs, plugins, and build configurations to support application releases and deployment workflows.",
      "Provisioned and maintained AWS infrastructure using Terraform and Infrastructure as Code (IaC) practices for consistent, repeatable environment setup.",
      "Containerized applications using Docker and created Dockerfiles; supported image builds and deployments using Kubernetes, including Pods, Services, ConfigMaps, and Helm charts.",
      "Supported containerized application deployments on Amazon ECS and EKS and assisted with cloud migration and application modernization activities.",
      "Monitored infrastructure and application health using Amazon CloudWatch dashboards, metrics, logs, and alarms, along with Prometheus and Grafana.",
      "Integrated SonarQube quality gates, automated validation, and vulnerability scanning into CI/CD workflows to support DevSecOps practices.",
      "Performed Linux system administration and automated routine tasks using Shell Scripting and Ansible; troubleshot build failures, deployment issues, and infrastructure incidents with development and QA teams.",
      "Supported AWS resource management, configuration, availability, routine maintenance, and resource optimization.",
      "Participated in incident management, production support, and release activities; maintained operational runbooks, deployment documentation, and task records using Jira and Confluence."
    ],
    technologies: [
      "Jenkins",
      "AWS (EKS, ECS, EC2, S3, IAM)",
      "Terraform",
      "Docker",
      "Kubernetes",
      "Helm",
      "SonarQube",
      "Maven",
      "Git / GitHub",
      "Prometheus & Grafana",
      "CloudWatch",
      "Linux",
      "Shell Scripting",
      "Ansible",
      "Jira / Confluence"
    ]
  },
  {
    company: "HCLTech Pvt Ltd",
    client: "Client: AFG Software Services",
    role: "AWS Cloud / Support Engineer",
    location: "Chennai, India",
    period: "Jul 2022 – Feb 2024",
    type: "Full-Time",
    summary: "Managed production AWS infrastructure, multi-tier VPC networks, IAM security policies, and 24/7 cloud support operations for enterprise client AFG Software Services.",
    keyResponsibilities: [
      "Supported AWS infrastructure and application environments using EC2, VPC, S3, IAM, EBS, RDS, and Lambda.",
      "Managed AWS networking components, including public and private subnets, route tables, Internet Gateways, Security Groups, and Network ACLs; supported Elastic Load Balancing and Auto Scaling configurations.",
      "Monitored infrastructure health, application availability, and resource utilization using Amazon CloudWatch metrics, logs, dashboards, and alarms.",
      "Troubleshot AWS infrastructure, Linux servers, application issues, network connectivity, and access permissions by analyzing system logs, CloudWatch metrics, and resource utilization.",
      "Managed IAM roles, policies, and permissions in accordance with AWS security best practices and supported infrastructure security checks.",
      "Assisted with infrastructure provisioning using Terraform and supported S3, EBS, and RDS operations, including database connectivity, backups, recovery, and disaster recovery procedures.",
      "Handled incidents, service requests, production support, and release-related activities; collaborated with development and DevOps teams and maintained incident records, troubleshooting guides, and technical documentation using Jira and Confluence."
    ],
    technologies: [
      "AWS (EC2, VPC, S3, IAM, EBS, RDS, Lambda)",
      "Terraform",
      "Amazon CloudWatch",
      "Linux Administration",
      "Network ACLs & Security Groups",
      "Auto Scaling & Load Balancing",
      "Bash Scripting",
      "Incident Troubleshooting",
      "ITIL / Jira / Confluence"
    ]
  }
];

export const certifications: CertificationItem[] = [
  {
    id: "aws-cloud-practitioner",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS)",
    year: "2026",
    badgeType: "aws",
    credentialId: "AWS-CPE-2026",
    highlights: [
      "Core AWS Cloud Architecture & Global Infrastructure",
      "Compute, Storage, Database, & Networking fundamentals",
      "AWS Shared Responsibility Security Model & IAM Policies",
      "CloudWatch monitoring, AWS Well-Architected Framework, & Cost Optimization"
    ]
  },
  {
    id: "aws-devops-advanced",
    title: "AWS Cloud & DevOps Advanced Program",
    issuer: "Login360, Chennai",
    year: "2026",
    badgeType: "devops",
    credentialId: "L360-DEVOPS-2026",
    highlights: [
      "Advanced Infrastructure as Code with Terraform & Ansible",
      "Containerization with Docker & Kubernetes (EKS Cluster Ops)",
      "Enterprise Jenkins Declarative CI/CD Pipelines & SonarQube Gates",
      "Production-grade Linux system administration & Shell scripting"
    ]
  },
  {
    id: "licet-be-ece",
    title: "Bachelor of Engineering (B.E.) — ECE",
    issuer: "Loyola-ICAM College of Engineering and Technology (LICET), Chennai",
    year: "2015 – 2019",
    badgeType: "academic",
    highlights: [
      "Strong foundation in Computer Networking, Digital Systems, & Logic Design",
      "Analytical problem solving, operating systems, and computing fundamentals",
      "Collaborative engineering projects and academic excellence"
    ]
  }
];

export const terminalCommands: Record<string, string> = {
  help: `Available commands:
  • about         - Display professional summary & background
  • skills        - View key technical skills & proficiency
  • experience    - Show career timeline at HCLTech (Fiserv & AFG)
  • projects      - List production cloud projects & architecture
  • aws           - Inspect AWS services mastered
  • certs         - View certifications & academic credentials
  • contact       - Get direct phone, email, and social handles
  • cat resume    - Print concise resume data
  • terraform plan - Simulate Terraform IaC execution
  • kubectl pods  - Inspect simulated running Kubernetes pods
  • clear         - Clear terminal screen`,
  about: `Sahaya Shalini S — AWS Cloud & DevOps Engineer
4 years of IT experience (2y AWS Cloud Support + 2y DevOps).
Specializing in automated Jenkins CI/CD, Terraform IaC, Docker, Kubernetes (Amazon EKS/ECS), and CloudWatch monitoring. Based in Chennai, India.`,
  skills: `Primary Technical Stack:
[Cloud]        AWS (EKS, ECS, EC2, S3, IAM, VPC, Lambda, ALB, CloudWatch)
[DevOps & IaC] Terraform, Ansible, Shell Scripting, Linux Administration
[Containers]   Docker, Kubernetes, Amazon EKS, Helm, ConfigMaps, Services
[CI/CD]        Jenkins Declarative Pipelines, Maven, Git, GitHub, SonarQube
[Databases]    Amazon RDS (MySQL), Amazon DynamoDB
[Monitoring]   CloudWatch Dashboards/Alarms, Prometheus, Grafana`,
  experience: `Professional Experience:
1. HCLTech Pvt Ltd | Associate DevOps Engineer (Client: Fiserv India Ltd) [Mar 2024 – Aug 2026]
   - Built Jenkins CI/CD pipelines, Dockerized apps, Kubernetes on EKS, Terraform IaC, SonarQube gates.
2. HCLTech Pvt Ltd | AWS Cloud / Support Engineer (Client: AFG Software Services) [Jul 2022 – Feb 2024]
   - Managed VPC networks, EC2, S3, IAM least-privilege, RDS backups, CloudWatch alarms, 24/7 support.`,
  projects: `Production Projects:
1. AWS Cloud-Native E-Commerce Microservices Platform
   - Java 17, Spring Boot, Docker, Kubernetes/EKS, Jenkins, SonarQube, Terraform.
   - 65% faster deployments, zero downtime.
2. High-Availability Scalable Game Server on AWS
   - EC2 Auto Scaling, ALB, Multi-AZ, CloudWatch, Lambda, DynamoDB, RDS MySQL.
   - Sub-25ms latency, 99.99% availability.`,
  aws: `AWS Services Proficiency:
• Compute: EC2, Lambda, Auto Scaling
• Containers: Amazon EKS, Amazon ECS, ECR
• Networking: VPC, ALB, Route53, Security Groups, NACLs, NAT Gateways
• Storage & DB: S3, EBS, RDS MySQL, DynamoDB
• Governance & Ops: CloudWatch, IAM, CloudFormation, SNS`,
  certs: `Certifications:
• AWS Cloud Practitioner Essentials — Amazon Web Services (2026)
• AWS Cloud & DevOps Advanced Program — Login360, Chennai (2026)
• B.E. in Electronics & Communication Engineering — LICET, Chennai (2015-2019)`,
  contact: `Contact Channels:
• Email: sahayashalinis98@gmail.com
• Phone: +91 9003846736
• Location: Chennai, India (Open to Relocation / Hybrid / Remote)
• LinkedIn: linkedin.com/in/sahaya-shalini-s
• GitHub: github.com/sahayashaliniaws`,
  "cat resume": `=====================================================
SAHAYA SHALINI S - AWS CLOUD & DEVOPS ENGINEER
Email: sahayashalinis98@gmail.com | Phone: +91 9003846736
Location: Chennai, India | GitHub: sahayashaliniaws
=====================================================
SUMMARY:
AWS Cloud & DevOps Engineer with 4 years of IT experience (2 years AWS Cloud Support + 2 years DevOps Engineering). Skilled in AWS infrastructure, Terraform IaC, Jenkins CI/CD, Docker, Kubernetes (Amazon EKS/ECS), SonarQube quality gates, and Linux.

WORK HISTORY:
• HCLTech Pvt Ltd | Associate DevOps Engineer (Client: Fiserv) [2024-2026]
• HCLTech Pvt Ltd | AWS Cloud / Support Engineer (Client: AFG) [2022-2024]

EDUCATION:
• B.E. in Electronics & Communication Eng. | LICET Chennai [2015-2019]`,
  "terraform plan": `[Terraform v1.8.0]
Refreshing state... [id=aws_vpc.production_vpc]
aws_eks_cluster.main_cluster: Refreshing state...
aws_security_group.allow_alb: Refreshing state...
aws_lb.app_alb: Refreshing state...

Terraform will perform the following actions:
  + aws_eks_node_group.workers (3 instances, multi-az)
  + aws_cloudwatch_metric_alarm.cpu_high (threshold: 75%)
  + aws_rds_instance.primary_db (multi-az: true)

Plan: 3 to add, 0 to change, 0 to destroy.
------------------------------------------------------
Status: 100% Validated. Ready to apply.`,
  "kubectl pods": `NAME                                   READY   STATUS    RESTARTS   AGE
user-service-7f89d4695b-z2x8q          1/1     Running   0          42m
product-service-6b4df99cb-m7p21        1/1     Running   0          42m
order-service-598dc4697-x9k12          1/1     Running   0          42m
jenkins-agent-build-984                1/1     Running   0          3m
nginx-ingress-controller-6f7d8c4-v4k   1/1     Running   0          5d`
};
