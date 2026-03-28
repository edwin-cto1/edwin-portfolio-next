import type { Metadata } from 'next'
import ServicePageLayout from '@/app/components/ServicePageLayout'
import type { ServicePageData } from '@/app/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'AI & Machine Learning | CTO1',
  description:
    'CTO1 builds production-ready AI and ML systems — custom models, NLP, computer vision, LLM integration, and MLOps pipelines that deliver measurable ROI.',
  keywords: [
    'AI Machine Learning',
    'Custom ML Models',
    'NLP',
    'Computer Vision',
    'LangChain',
    'OpenAI',
    'MLOps',
    'Predictive Analytics',
    'Recommendation Systems',
    'CTO1',
  ],
  alternates: { canonical: '/services/ai-machine-learning' },
  openGraph: {
    title: 'AI & Machine Learning | CTO1',
    description:
      'Custom ML models, intelligent automation, and AI-powered decision systems that drive measurable ROI.',
    url: 'https://cto1.tech/services/ai-machine-learning',
    siteName: 'CTO1',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI & Machine Learning — CTO1' }],
  },
}

const data: ServicePageData = {
  iconId: 'ai-machine-learning',
  heroTitle: 'AI & Machine Learning',
  heroSubtitle: 'Intelligent Systems That Drive Real Results',
  intro:
    'We build production-ready AI systems that go beyond demos. From custom ML models to LLM-powered applications, our work is grounded in measurable business outcomes — not just technical novelty. Every model we deploy is monitored, maintained, and built to last.',
  whatWeDo: [
    'Custom ML model development and training',
    'Natural language processing (NLP) and text analytics',
    'Computer vision and image recognition systems',
    'Recommendation engines and personalization',
    'Predictive analytics and forecasting',
    'LLM integration, RAG pipelines, and AI agents',
    'AI automation and workflow intelligence',
    'Model monitoring, drift detection, and MLOps',
  ],
  deliverables: [
    'Trained and deployed production models',
    'End-to-end ML pipelines',
    'AI-powered REST/GraphQL APIs',
    'Data strategy and readiness report',
    'Model monitoring dashboard',
    'Integration documentation and runbooks',
  ],
  technologies: [
    'Python', 'TensorFlow', 'PyTorch', 'OpenAI API',
    'LangChain', 'HuggingFace', 'AWS SageMaker', 'Vertex AI',
    'Scikit-learn', 'FastAPI', 'Docker', 'MLflow',
    'Pinecone', 'Weaviate', 'PostgreSQL',
  ],
  process: [
    {
      name: 'Data Assessment',
      description: 'Evaluate your existing data quality, volume, and labeling. Identify gaps and define the data strategy.',
    },
    {
      name: 'Model Design',
      description: 'Select the right architecture — from simple regression to transformer-based LLMs — for your specific use case.',
    },
    {
      name: 'Training',
      description: 'Train, fine-tune, and evaluate models against rigorous benchmarks with continuous experimentation.',
    },
    {
      name: 'Deployment',
      description: 'Deploy models to production via scalable inference APIs with CI/CD and A/B testing support.',
    },
    {
      name: 'Monitoring',
      description: 'Track model performance, detect data drift, and retrain on schedule to maintain accuracy over time.',
    },
  ],
  benefits: [
    {
      title: 'ROI-Driven',
      description:
        'Every AI initiative is tied to a measurable business outcome — cost reduction, revenue growth, or efficiency gains.',
    },
    {
      title: 'Production-Ready',
      description:
        'We build models designed for real-world scale, not just notebooks. Robust pipelines, versioning, and monitoring included.',
    },
    {
      title: 'Explainable AI',
      description:
        "Models that your team and stakeholders can understand and trust. We don't build black boxes — we build tools.",
    },
  ],
  faq: [
    {
      q: 'Do I need a large dataset to build a useful AI model?',
      a: "Not necessarily. For many use cases, transfer learning and fine-tuning pre-trained models (like GPT or BERT) can deliver excellent results with as few as a few hundred labeled examples. We'll assess your data situation and recommend the most practical approach.",
    },
    {
      q: 'How long does it take to build and deploy an ML model?',
      a: 'A focused MVP model — for example, a text classifier or demand forecasting model — can go from concept to production API in 4–8 weeks. More complex systems like custom computer vision pipelines or multi-model ensembles typically take 2–4 months.',
    },
    {
      q: 'Can you integrate AI into our existing systems?',
      a: 'Absolutely. We build AI as APIs and microservices that slot into your existing architecture. Whether you\'re running on AWS, GCP, or on-prem, we ensure the integration is seamless, secure, and doesn\'t disrupt your current operations.',
    },
    {
      q: 'How do you prevent model drift and degradation over time?',
      a: 'We instrument every deployed model with monitoring for data distribution shifts, prediction confidence, and business-level KPIs. When drift is detected, automated retraining pipelines kick in. We also schedule periodic model audits as part of ongoing engagements.',
    },
  ],
  ctaHeading: 'Ready to Leverage AI?',
  ctaSubheading:
    "Let's turn your data into a competitive advantage. From proof of concept to production — we've got you covered.",
}

export default function AIMachineLearningPage() {
  return <ServicePageLayout {...data} />
}
