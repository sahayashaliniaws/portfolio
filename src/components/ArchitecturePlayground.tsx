import React, { useState } from 'react';
import { 
  GitBranch, 
  Terminal, 
  ShieldCheck, 
  Box, 
  Layers, 
  Cpu, 
  Activity, 
  ArrowRight, 
  CheckCircle2, 
  Code2,
  Sparkles
} from 'lucide-react';

interface PipelineStep {
  id: string;
  number: string;
  name: string;
  tool: string;
  role: string;
  icon: any;
  statusText: string;
  snippet: string;
  benefits: string[];
}

const pipelineSteps: PipelineStep[] = [
  {
    id: "git",
    number: "01",
    name: "Source Control & Webhook",
    tool: "Git & GitHub",
    role: "Branch protection rules, pull request validation, and automated GitHub webhook triggers on commit.",
    icon: GitBranch,
    statusText: "COMMIT MERGED: main",
    snippet: `// Git Flow & Webhook Trigger
git checkout -b feature/order-service-api
git commit -m "feat: implement resilient retry logic in OrderService"
git push origin feature/order-service-api
-> Webhook fires: POST https://jenkins.internal/github-webhook/`,
    benefits: [
      "Feature branch isolation and peer reviews",
      "Automated webhook invocation of Jenkins pipelines",
      "Audit trail for SOC2 & regulatory financial compliance"
    ]
  },
  {
    id: "jenkins",
    number: "02",
    name: "Continuous Integration",
    tool: "Jenkins Declarative Pipeline",
    role: "Automated checkout, dependency resolution, compilation, and unit test execution using Apache Maven.",
    icon: Terminal,
    statusText: "STAGE: BUILD & TEST (SUCCESS)",
    snippet: `// Jenkinsfile Declarative Pipeline
pipeline {
  agent { label 'maven-agent-jdk17' }
  stages {
    stage('Checkout') { steps { checkout scm } }
    stage('Build & Test') {
      steps {
        sh 'mvn clean verify -DskipTests=false'
      }
    }
  }
}`,
    benefits: [
      "Standardized multi-branch build execution",
      "Immediate feedback to developers within 3 minutes",
      "Artifact archiving with automated build versioning"
    ]
  },
  {
    id: "sonarqube",
    number: "03",
    name: "Static Analysis & Quality Gate",
    tool: "SonarQube & Security Gates",
    role: "Automated static analysis, code smell detection, vulnerability scanning, and strict Quality Gate enforcement.",
    icon: ShieldCheck,
    statusText: "QUALITY GATE: PASSED (0 Critical Vulnerabilities)",
    snippet: `// SonarQube Scanner Stage
stage('SonarQube Analysis') {
  steps {
    withSonarQubeEnv('SonarQube-Server') {
      sh 'mvn sonar:sonar -Dsonar.projectKey=ecommerce-order-service'
    }
    timeout(time: 5, unit: 'MINUTES') {
      waitForQualityGate abortPipeline: true
    }
  }
}`,
    benefits: [
      "Enforces 0 critical vulnerabilities before containerization",
      "Blocks code with test coverage under target threshold",
      "DevSecOps shift-left security culture"
    ]
  },
  {
    id: "docker",
    number: "04",
    name: "Container Packaging",
    tool: "Docker & Amazon ECR",
    role: "Multi-stage Docker builds to produce lightweight, secure container images, pushed to Amazon Elastic Container Registry.",
    icon: Box,
    statusText: "IMAGE PUSHED: ecr.aws/order-service:1.4.2",
    snippet: `// Multi-Stage Dockerfile
FROM eclipse-temurin:17-jre-alpine AS runner
WORKDIR /app
COPY --from=builder /workspace/target/*.jar app.jar
USER 10001
EXPOSE 8080
ENTRYPOINT ["java", "-XX:+UseG1GC", "-jar", "app.jar"]`,
    benefits: [
      "Minimal attack surface with Alpine base image",
      "Non-root container user execution (least-privilege)",
      "Immutable artifacts deployed across all environments"
    ]
  },
  {
    id: "terraform",
    number: "05",
    name: "Infrastructure as Code",
    tool: "Terraform AWS Provider",
    role: "Defining VPC subnets, EKS clusters, node groups, security groups, and IAM policies as reproducible code.",
    icon: Layers,
    statusText: "TERRAFORM: 0 Drift Detected | State Synchronized",
    snippet: `// Reusable Terraform AWS Module
module "eks_cluster" {
  source          = "./modules/aws-eks"
  cluster_name    = "prod-fintech-cluster"
  cluster_version = "1.30"
  vpc_id          = module.vpc.vpc_id
  subnet_ids      = module.vpc.private_subnets
  node_groups = {
    workers = { desired_capacity = 3, max_capacity = 10, instance_type = "m5.large" }
  }
}`,
    benefits: [
      "Consistent environments across Dev, QA, and Prod",
      "S3 remote backend with DynamoDB state locking",
      "Disaster recovery recreation in under 20 minutes"
    ]
  },
  {
    id: "kubernetes",
    number: "06",
    name: "Orchestration & Rollout",
    tool: "Amazon EKS & Helm",
    role: "Zero-downtime rolling deployments, health check probes, horizontal pod autoscaling, and ConfigMap injection.",
    icon: Cpu,
    statusText: "K8S STATUS: 3/3 PODS READY (Rolling Update Complete)",
    snippet: `// Helm Upgrade / Rollout
helm upgrade --install order-service ./helm/order-service \\
  --set image.tag=1.4.2 \\
  --set replicaCount=3 \\
  --atomic --timeout 3m

kubectl rollout status deployment/order-service`,
    benefits: [
      "Zero customer downtime during production deployments",
      "Automated rollback if liveness/readiness probes fail",
      "Self-healing pod restarts upon node degradation"
    ]
  },
  {
    id: "observability",
    number: "07",
    name: "Telemetry & Auto-Healing",
    tool: "Amazon CloudWatch & Prometheus",
    role: "Custom CloudWatch metrics, log insight queries, high-resolution alarms, and automated SNS pager notifications.",
    icon: Activity,
    statusText: "ALERTS: ALL NORMAL | CPU 24% | P99 < 32ms",
    snippet: `// CloudWatch Alarm Definition
resource "aws_cloudwatch_metric_alarm" "eks_high_cpu" {
  alarm_name          = "eks-node-high-cpu-alert"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = "2"
  metric_name         = "CPUUtilization"
  namespace           = "AWS/EKS"
  period              = "60"
  statistic           = "Average"
  threshold           = "75"
  alarm_actions       = [aws_sns_topic.devops_alerts.arn]
}`,
    benefits: [
      "Sub-second anomaly detection across microservices",
      "Direct integration into operational runbooks in Confluence",
      "Proactive auto-scaling before latency impacts users"
    ]
  }
];

export const ArchitecturePlayground: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(1); // Default to Jenkins CI step

  const currentStep = pipelineSteps[activeStepIndex];
  const StepIcon = currentStep.icon;

  return (
    <section id="pipeline" className="py-24 relative bg-[#0B1120] border-t border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive CI/CD & Cloud Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            End-to-End <span className="gradient-text">DevSecOps Pipeline</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Click on any pipeline stage below to inspect the production tooling, automation logic, and architecture standards I implement in enterprise environments.
          </p>
        </div>

        {/* Pipeline Progress Stages Bar */}
        <div className="mb-10 overflow-x-auto pb-4 pt-2">
          <div className="flex items-center min-w-max gap-2 sm:gap-3 justify-start lg:justify-center">
            {pipelineSteps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = idx === activeStepIndex;
              const isPast = idx < activeStepIndex;

              return (
                <React.Fragment key={step.id}>
                  <button
                    onClick={() => setActiveStepIndex(idx)}
                    className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer border ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white border-sky-400 shadow-lg shadow-blue-500/25 scale-105'
                        : isPast
                        ? 'bg-gray-900/90 text-sky-300 border-sky-500/30 hover:border-sky-400'
                        : 'bg-gray-950/80 text-gray-400 border-gray-800 hover:text-gray-200 hover:bg-gray-900'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-md flex items-center justify-center bg-black/30 font-bold text-[10px]">
                      {step.number}
                    </span>
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="font-sans font-medium">{step.tool.split(' ')[0]}</span>
                    {isPast && <CheckCircle2 className="w-3 h-3 text-emerald-400 ml-1" />}
                  </button>

                  {idx < pipelineSteps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-gray-600 shrink-0 hidden md:block" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Stage Interactive Inspector Card */}
        <div className="glass-card rounded-2xl overflow-hidden border border-sky-500/30 shadow-2xl">
          
          {/* Top Stage Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-gray-950/90 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <StepIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-sky-400 font-semibold">STAGE {currentStep.number}</span>
                  <span className="text-gray-500">•</span>
                  <h3 className="text-base sm:text-lg font-bold text-white">{currentStep.name}</h3>
                </div>
                <div className="text-xs font-mono text-gray-400">{currentStep.tool}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{currentStep.statusText}</span>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8">
            
            {/* Left: Engineering Implementation & Outcomes */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-sky-400 mb-2">
                  Implementation Role & DevOps Responsibility
                </h4>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {currentStep.role}
                </p>

                <h4 className="text-xs uppercase font-mono tracking-wider text-gray-400 mb-3">
                  Production Impact & Enterprise Controls
                </h4>
                <div className="space-y-2.5 mb-6">
                  {currentStep.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-800 text-xs font-mono">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-700 text-gray-300 disabled:opacity-40 disabled:cursor-not-allowed hover:border-sky-400 cursor-pointer"
                >
                  &larr; Previous Stage
                </button>
                <span className="text-gray-400">{activeStepIndex + 1} of {pipelineSteps.length}</span>
                <button
                  disabled={activeStepIndex === pipelineSteps.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(pipelineSteps.length - 1, prev + 1))}
                  className="px-3 py-1.5 rounded-lg bg-blue-600/30 border border-blue-500/40 text-sky-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-600/50 cursor-pointer"
                >
                  Next Stage &rarr;
                </button>
              </div>
            </div>

            {/* Right: Code & Configuration Snippet Terminal View */}
            <div className="lg:col-span-6">
              <div className="rounded-xl bg-[#090D16] border border-gray-800 overflow-hidden shadow-inner">
                <div className="flex items-center justify-between px-4 py-2.5 bg-gray-950 border-b border-gray-800 text-xs font-mono text-gray-400">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>production_pipeline_config</span>
                  </div>
                  <span className="text-[11px] text-gray-500">YAML / Groovy / HCL</span>
                </div>
                <div className="p-4 sm:p-5 text-xs font-mono text-gray-300 overflow-x-auto leading-relaxed">
                  <pre className="whitespace-pre-wrap">{currentStep.snippet}</pre>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
