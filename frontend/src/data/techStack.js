import {
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTypescript,
  SiTailwindcss, SiPython, SiTensorflow, SiFirebase,
  SiDocker, SiFlutter, SiPostgresql, SiRedis,
  SiFigma, SiWordpress, SiShopify, SiStripe, SiGooglecloud
} from 'react-icons/si';
import { FaJava, FaAws, FaBrain } from 'react-icons/fa';

export const techStack = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Java', icon: FaJava, color: '#007396' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    ],
  },
  {
    category: 'AI & Cloud',
    items: [
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'OpenAI', icon: FaBrain, color: '#412991' },
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
      { name: 'GCP', icon: SiGooglecloud, color: '#4285F4' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    ],
  },
  {
    category: 'Design & Commerce',
    items: [
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'WordPress', icon: SiWordpress, color: '#21759B' },
      { name: 'Shopify', icon: SiShopify, color: '#7AB55C' },
      { name: 'Stripe', icon: SiStripe, color: '#635BFF' },
    ],
  },
];