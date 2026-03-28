import type { Metadata } from 'next'
import ServicePageLayout from '@/app/components/ServicePageLayout'
import type { ServicePageData } from '@/app/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'IT Infrastructure & Cloud | CTO1',
  description:
    'CTO1 delivers zero-downtime cloud migrations, DevOps automation, Terraform IaC, and cost-optimized AWS/Azure/GCP infrastructure for high-availability production systems.',
  keywords: [
    'Cloud Migration',
    'IT Infrastructure',
    'DevOps',
    'Terraform',
    'AWS',
    'Azure',
    'GCP',
    'Kubernetes',
    'Infrastructure as Code',
    'Site Reliability',
    'CTO1',
  ],
  alternates: { canonical: '/services/it-infrastructure-cloud' },
  openGraph: {
    title: 'IT Infrastructure & Cloud | CTO1',
    description:
      'AWS, Azure, GCP architecture and DevOps pipelines. Zero-downtime migrations and infrastructure modernization.',
    url: 'https://cto1.tech/services/it-infrastructure-cloud',
    siteName: 'CTO1',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'IT Infrastructure & Cloud — CTO1' }],
  },
}

const data: ServicePageData = {
  iconId: 'it-infrastructure-cloud',
  heroTitle: 'IT Infrastructure & Cloud',
  heroSubtitle: 'Zero-Downtime Migration. Maximum Performance.',
  intro:
    "We transform legacy infrastructure into high-performance cloud environments without disrupting your operations. Our cloud engineers have migrated hundreds of services across AWS, Azure, and GCP — and we know exactly where the landmines are.",
  whatWeDo: [
    'Cloud migration strategy and execution (AWS, Azure, GCP)',
    'DevOps pipeline automation (CI/CD)',
    'Infrastructure as Code with Terraform and Ansible',
    'Container orchestration with Kubernetes and Helm',
    'Monitoring, alerting, and observability stack setup',
    'Security hardening and compliance (CIS, SOC 2)',
    'Cloud cost analysis and optimization',
    'Disaster recovery planning and implementation',
  ],
  deliverables: [
    'Cloud architecture design and diagrams',
    'CI/CD pipeline (GitHub Actions / Jenkins)',
    'Terraform IaC modules and runbooks',
    'Monitoring dashboards (Prometheus + Grafana)',
    'Security audit and remediation report',
    'Cloud cost optimization analysis',
  ],
  technologies: [
    'AWS', 'Azure', 'GCP', 'Terraform', 'Ansible',
    'Docker', 'Kubernetes', 'Helm', 'Prometheus',
    'Grafana', 'GitHub Actions', 'Jenkins', 'ArgoCD',
    'Vault', 'Datadog',
  ],
  process: [
    {
      name: 'Audit',
      description: 'Assess your current infrastructure, identify risks, and document the full dependency map.',
    },
    {
      name: 'Plan',
      description: 'Design the target state architecture, migration sequence, and rollback procedures.',
    },
    {
      name: 'Migrate',
      description: 'Execute the migration in stages — starting with low-risk workloads and validating each step.',
    },
    {
      name: 'Optimize',
      description: 'Right-size resources, tune auto-scaling, and eliminate wasteful spend after migration.',
    },
    {
      name: 'Monitor',
      description: 'Deploy observability stack, configure alerts, and establish SLOs for all critical services.',
    },
  ],
  benefits: [
    {
      title: '99.9% Uptime',
      description:
        'High-availability architectures with multi-AZ deployments, auto-scaling, and battle-tested failover procedures.',
    },
    {
      title: 'Cost Optimized',
      description:
        'Most clients reduce cloud spend by 30–60% post-migration through right-sizing, reserved instances, and waste elimination.',
    },
    {
      title: 'Security First',
      description:
        'CIS benchmark hardening, IAM least-privilege, secrets management, and automated compliance scanning built in from day one.',
    },
  ],
  faq: [
    {
      q: 'How do you migrate to the cloud with zero downtime?',
      a: "We use a phased migration approach: run-parallel, then cut-over, then decommission. We start with non-critical workloads, validate in production-mirror environments, and schedule final cut-overs during low-traffic windows. Database migrations use CDC (change data capture) to keep source and target in sync during transition.",
    },
    {
      q: 'How much can cloud migration reduce our infrastructure costs?',
      a: "It depends on your current setup, but most organizations moving from on-prem or self-managed VMs to properly architected cloud see 30–60% cost reductions within 6 months. We provide a detailed cost projection before migration begins, so there are no surprises.",
    },
    {
      q: 'What is Infrastructure as Code and why should we use it?',
      a: 'Infrastructure as Code (IaC) means your cloud resources are defined in version-controlled code (Terraform, Ansible) rather than clicked through a UI. This eliminates configuration drift, enables disaster recovery in minutes, and makes every infrastructure change reviewable, auditable, and repeatable.',
    },
    {
      q: 'How do you ensure our cloud environment stays secure?',
      a: "Security is built in, not bolted on. We implement CIS benchmark configurations, enforce least-privilege IAM, use secrets managers (Vault, AWS Secrets Manager) for credentials, set up automated vulnerability scanning, and configure WAF and DDoS protection. We also run periodic penetration tests and provide compliance reporting.",
    },
  ],
  ctaHeading: 'Ready to Modernize Your Infrastructure?',
  ctaSubheading:
    "Stop babysitting servers. Let's build the cloud infrastructure your team deserves — reliable, scalable, and cost-efficient.",
}

export default function ITInfrastructureCloudPage() {
  return <ServicePageLayout {...data} />
}
