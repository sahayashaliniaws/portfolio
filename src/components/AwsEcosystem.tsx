import React, { useState } from 'react';
import { 
  Cloud, 
  Cpu, 
  Database, 
  Server, 
  ShieldCheck, 
  Activity, 
  Network, 
  Zap, 
  Radio, 
  MessageSquare, 
  Sliders,
  CheckCircle2
} from 'lucide-react';

interface AwsServiceDetail {
  name: string;
  category: 'Compute' | 'Containers' | 'Networking' | 'Storage & DB' | 'Security & Management' | 'Integration';
  icon: any;
  tagline: string;
  description: string;
  useCase: string;
  experienceLevel: 'Production Lead' | 'Enterprise Operations' | 'Architecture Implemented';
}

const detailedAwsServices: AwsServiceDetail[] = [
  {
    name: "Amazon EKS",
    category: "Containers",
    icon: Cpu,
    tagline: "Elastic Kubernetes Service",
    description: "Managed Kubernetes control plane orchestrating containerized Spring Boot microservices with managed node groups, Helm charts, and automated rollouts.",
    useCase: "Deployed User, Product, and Order microservices for Fiserv India Ltd with zero downtime.",
    experienceLevel: "Production Lead"
  },
  {
    name: "Amazon ECS",
    category: "Containers",
    icon: Server,
    tagline: "Elastic Container Service",
    description: "Container management with task definitions, service autoscaling, ALB target groups, and CloudWatch log driver integration.",
    useCase: "Supported legacy application container modernization and deployment automation.",
    experienceLevel: "Enterprise Operations"
  },
  {
    name: "Amazon EC2",
    category: "Compute",
    icon: Server,
    tagline: "Elastic Compute Cloud",
    description: "Provisioning instances across multiple Availability Zones with custom AMIs, Cloud-Init user data scripts, and EBS volume optimization.",
    useCase: "High-Availability game server fleet scaling and Linux backend hosting.",
    experienceLevel: "Production Lead"
  },
  {
    name: "EC2 Auto Scaling",
    category: "Compute",
    icon: Sliders,
    tagline: "Dynamic Elastic Capacity",
    description: "Configuring launch templates, target tracking policies, and step scaling triggered by CloudWatch CPU and connection metrics.",
    useCase: "Ensured automated scaling from 2 to 20+ nodes during game traffic spikes.",
    experienceLevel: "Architecture Implemented"
  },
  {
    name: "AWS Lambda",
    category: "Compute",
    icon: Zap,
    tagline: "Serverless Event-Driven Compute",
    description: "Building serverless event handlers triggered by API Gateway requests, S3 bucket events, and CloudWatch cron triggers.",
    useCase: "Handled asynchronous matchmaking calculations and automated cloud maintenance.",
    experienceLevel: "Architecture Implemented"
  },
  {
    name: "Amazon VPC",
    category: "Networking",
    icon: Network,
    tagline: "Virtual Private Cloud",
    description: "Designing isolated network topologies with public/private subnets, Internet Gateways, NAT Gateways, Route Tables, and NACLs.",
    useCase: "Built zero-trust enterprise network topologies for financial client workloads.",
    experienceLevel: "Production Lead"
  },
  {
    name: "Application Load Balancer",
    category: "Networking",
    icon: Radio,
    tagline: "Elastic Load Balancing (ALB)",
    description: "Configuring multi-AZ target groups, path-based routing rules, automated health check thresholds, and ACM SSL certificates.",
    useCase: "Evenly balanced traffic across game server instances and microservices.",
    experienceLevel: "Production Lead"
  },
  {
    name: "Amazon S3",
    category: "Storage & DB",
    icon: Database,
    tagline: "Simple Storage Service",
    description: "High-durability object storage with lifecycle management, cross-region replication, bucket policies, and KMS encryption.",
    useCase: "Stored application build artifacts, static web assets, and disaster recovery backups.",
    experienceLevel: "Production Lead"
  },
  {
    name: "Amazon RDS (MySQL)",
    category: "Storage & DB",
    icon: Database,
    tagline: "Relational Database Service",
    description: "Multi-AZ high-availability database provisioning, automated snapshot retention, parameter group tuning, and read replicas.",
    useCase: "Persistent transactional database for user accounts and e-commerce orders.",
    experienceLevel: "Enterprise Operations"
  },
  {
    name: "Amazon DynamoDB",
    category: "Storage & DB",
    icon: Database,
    tagline: "Managed NoSQL Key-Value Store",
    description: "Ultra-low millisecond latency database with partition/sort key modeling, auto-scaling throughput, and TTL data expiration.",
    useCase: "Real-time game session state, active player tokens, and dynamic leaderboards.",
    experienceLevel: "Architecture Implemented"
  },
  {
    name: "Amazon CloudWatch",
    category: "Security & Management",
    icon: Activity,
    tagline: "Metrics, Logs & Alarms",
    description: "Operational monitoring dashboards, log metric filters, high-resolution alarms, and SNS automated notification routing.",
    useCase: "24/7 telemetry and automated trigger for EC2 Auto Scaling policies.",
    experienceLevel: "Production Lead"
  },
  {
    name: "AWS IAM",
    category: "Security & Management",
    icon: ShieldCheck,
    tagline: "Identity & Access Management",
    description: "Designing strict least-privilege IAM policies, cross-account assume roles, permission boundaries, and MFA enforcement.",
    useCase: "Enforced compliance and zero-trust credentials across HCLTech client accounts.",
    experienceLevel: "Production Lead"
  },
  {
    name: "Amazon API Gateway",
    category: "Networking",
    icon: Radio,
    tagline: "Managed API Frontend",
    description: "Creating REST APIs with request validation, rate limiting, CORS configuration, and direct AWS Lambda integrations.",
    useCase: "Exposed secure endpoints for mobile and web game client sessions.",
    experienceLevel: "Architecture Implemented"
  },
  {
    name: "Amazon Route 53",
    category: "Networking",
    icon: Network,
    tagline: "Scalable DNS & Traffic Routing",
    description: "Configuring public/private hosted zones, alias records pointing to ALBs, and latency-based health check failovers.",
    useCase: "Domain routing and failover orchestration for microservice public endpoints.",
    experienceLevel: "Enterprise Operations"
  },
  {
    name: "Amazon SNS & SQS",
    category: "Integration",
    icon: MessageSquare,
    tagline: "Pub/Sub & Message Queuing",
    description: "Decoupling microservice components with asynchronous message queues, dead-letter queues (DLQ), and fanout notifications.",
    useCase: "Triggered alert notifications to operations team upon critical CloudWatch events.",
    experienceLevel: "Enterprise Operations"
  }
];

export const AwsEcosystem: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Compute',
    'Containers',
    'Networking',
    'Storage & DB',
    'Security & Management',
    'Integration'
  ];

  const filteredServices = selectedCategory === 'All'
    ? detailedAwsServices
    : detailedAwsServices.filter((s) => s.category === selectedCategory);

  return (
    <section id="aws" className="py-24 relative bg-[#0B1120] border-t border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
            <Cloud className="w-3.5 h-3.5" />
            <span>AWS Infrastructure Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Mastering the <span className="gradient-text">AWS Ecosystem</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Hands-on production expertise across compute, networking, storage, orchestration, and automated governance on the world’s leading cloud platform.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 text-white shadow-md shadow-blue-500/30 font-semibold'
                  : 'bg-gray-900/80 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between group hover:border-sky-400/50"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-blue-500/10 text-sky-300 border border-blue-500/20">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-sky-300 transition-colors">
                    {service.name}
                  </h3>
                  <div className="text-xs font-mono text-gray-400 mb-3">
                    {service.tagline}
                  </div>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-800/80">
                  <div className="text-[11px] font-mono text-gray-400 mb-1">
                    Production Implementation:
                  </div>
                  <div className="text-xs text-sky-300/90 font-medium">
                    {service.useCase}
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-gray-500">
                    <span>Level: {service.experienceLevel}</span>
                    <span className="text-emerald-400">Verified</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* AWS Well-Architected Framework Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-gray-900/60 to-cyan-950/40 border border-sky-500/30 glass-panel">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <span className="text-xs font-mono uppercase tracking-widest text-sky-400 mb-1 block">
                AWS Well-Architected Framework
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Engineered for Operational Excellence, Security & Reliability
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Every infrastructure component is built following AWS Best Practices: least-privilege IAM policies, automated failover across multi-AZs, CloudWatch metric alarms, and Terraform state encryption with S3 + DynamoDB state locking.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-300 bg-black/40 px-3 py-2 rounded-lg border border-gray-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Multi-AZ High Availability</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-gray-300 bg-black/40 px-3 py-2 rounded-lg border border-gray-800">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Zero-Trust IAM Permissions</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-gray-300 bg-black/40 px-3 py-2 rounded-lg border border-gray-800">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>CloudWatch Automated Self-Healing</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
