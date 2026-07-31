import { motion } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTypescript,
  SiTailwindcss, SiPython, SiTensorflow, SiFirebase, SiDocker,
  SiFlutter, SiPostgresql, SiRedis, SiFigma, SiWordpress,
  SiShopify, SiStripe, SiGooglecloud, SiAngular, SiVuedotjs,
  SiLaravel, SiMysql, SiPhp, SiSwift, SiKotlin, SiGit,
  SiNginx, SiGraphql, SiSass, SiBootstrap, SiJavascript,
  SiHtml5, SiCss, SiAndroid, SiElasticsearch,
} from 'react-icons/si';
import { FaJava, FaAws, FaApple } from 'react-icons/fa';

const row1 = [
  { name: 'React',      icon: SiReact,      color: '#61DAFB' },
  { name: 'Next.js',   icon: SiNextdotjs,   color: '#000000' },
  { name: 'TypeScript',icon: SiTypescript,  color: '#3178C6' },
  { name: 'JavaScript',icon: SiJavascript,  color: '#F7DF1E' },
  { name: 'Vue.js',    icon: SiVuedotjs,    color: '#4FC08D' },
  { name: 'Angular',   icon: SiAngular,     color: '#DD0031' },
  { name: 'Tailwind',  icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'HTML5',     icon: SiHtml5,       color: '#E34F26' },
  { name: 'CSS3',      icon: SiCss,         color: '#1572B6' },
  { name: 'Sass',      icon: SiSass,        color: '#CC6699' },
  { name: 'Bootstrap', icon: SiBootstrap,   color: '#7952B3' },
  { name: 'Flutter',   icon: SiFlutter,     color: '#02569B' },
  { name: 'Swift',     icon: SiSwift,       color: '#FA7343' },
  { name: 'Android',   icon: SiAndroid,     color: '#3DDC84' },
  { name: 'iOS',       icon: FaApple,       color: '#555555' },
  { name: 'Kotlin',    icon: SiKotlin,      color: '#7F52FF' },
  { name: 'GraphQL',   icon: SiGraphql,     color: '#E10098' },
  { name: 'Node.js',   icon: SiNodedotjs,   color: '#339933' },
];

const row2 = [
  { name: 'Python',       icon: SiPython,        color: '#3776AB' },
  { name: 'Java',         icon: FaJava,          color: '#007396' },
  { name: 'PHP',          icon: SiPhp,           color: '#777BB4' },
  { name: 'Laravel',      icon: SiLaravel,       color: '#FF2D20' },
  { name: 'MongoDB',      icon: SiMongodb,       color: '#47A248' },
  { name: 'MySQL',        icon: SiMysql,         color: '#4479A1' },
  { name: 'PostgreSQL',   icon: SiPostgresql,    color: '#4169E1' },
  { name: 'Redis',        icon: SiRedis,         color: '#DC382D' },
  { name: 'Elasticsearch',icon: SiElasticsearch, color: '#005571' },
  { name: 'AWS',          icon: FaAws,           color: '#FF9900' },
  { name: 'GCP',          icon: SiGooglecloud,   color: '#4285F4' },
  { name: 'Firebase',     icon: SiFirebase,      color: '#FFCA28' },
  { name: 'Docker',       icon: SiDocker,        color: '#2496ED' },
  { name: 'Nginx',        icon: SiNginx,         color: '#009639' },
  { name: 'TensorFlow',   icon: SiTensorflow,    color: '#FF6F00' },
  { name: 'Figma',        icon: SiFigma,         color: '#F24E1E' },
  { name: 'WordPress',    icon: SiWordpress,     color: '#21759B' },
  { name: 'Shopify',      icon: SiShopify,       color: '#7AB55C' },
  { name: 'Stripe',       icon: SiStripe,        color: '#635BFF' },
  { name: 'Git',          icon: SiGit,           color: '#F05032' },
];

const TechCard = ({ name, icon: Icon, color }) => (
  <div
    className="flex flex-col items-center justify-center gap-[10px] min-w-[110px] rounded-[16px] bg-white
               transition-all duration-300 cursor-default flex-shrink-0
               hover:-translate-y-[6px] hover:shadow-[0_12px_32px_rgba(0,120,191,0.12)]"
    style={{
      padding: '22px 28px',
      border: '1px solid rgba(0,120,191,0.08)',
      boxShadow: '0 4px 16px rgba(0,120,191,0.05)',
    }}
    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,120,191,0.25)'}
    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,120,191,0.08)'}
  >
    <div className="text-[42px] leading-none transition-transform duration-300 hover:scale-[1.15]" style={{ color }}>
      <Icon />
    </div>
    <span className="font-semibold text-[12px] text-slate-600 whitespace-nowrap"
      style={{ fontFamily: 'var(--font-heading)' }}>{name}</span>
  </div>
);

const MarqueeRow = ({ items, direction = 'ltr' }) => (
  <div className="relative w-full mb-5 overflow-hidden">
    {/* Fade edges */}
    <div className="absolute top-0 bottom-0 left-0 w-[120px] z-10 pointer-events-none"
      style={{ background: 'linear-gradient(90deg, white, transparent)' }} />
    <div className="absolute top-0 bottom-0 right-0 w-[120px] z-10 pointer-events-none"
      style={{ background: 'linear-gradient(-90deg, white, transparent)' }} />
    <div className="overflow-hidden py-[10px]">
      <div
        className={`flex gap-4 w-max ${direction === 'ltr' ? 'animate-marquee-ltr' : 'animate-marquee-rtl'}`}
        style={{ willChange: 'transform' }}
      >
        {[...items, ...items].map((tech, i) => (
          <TechCard key={`${direction}-${i}`} {...tech} />
        ))}
      </div>
    </div>
  </div>
);

const TechStack = () => {
  return (
    <section
      className="relative overflow-hidden py-[100px]"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F9FF 100%)' }}
    >
      {/* Background orbs */}
      <div className="absolute w-[500px] h-[500px] rounded-full top-[-100px] left-[-150px] pointer-events-none"
        style={{ background: 'rgba(0,120,191,0.5)', filter: 'blur(120px)', opacity: 0.2 }} />
      <div className="absolute w-[400px] h-[400px] rounded-full bottom-[-100px] right-[-100px] pointer-events-none"
        style={{ background: 'rgba(28,187,238,0.5)', filter: 'blur(120px)', opacity: 0.2 }} />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 text-[#0078BF] font-bold tracking-[0.1em] text-[13px] uppercase mb-5">
            <span>—</span> Our Tech Stack
          </div>
          <h2 className="section-title">
            Built With <span className="gradient-text">Trusted Technologies</span>
          </h2>
          <p className="section-subtitle">
            We use industry-leading tools and frameworks to build robust,
            future-proof solutions across web, mobile, cloud, and AI.
          </p>
        </motion.div>
      </div>

      <MarqueeRow items={row1} direction="ltr" />
      <MarqueeRow items={row2} direction="rtl" />
    </section>
  );
};

export default TechStack;
