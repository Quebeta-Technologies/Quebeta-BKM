import { motion } from 'framer-motion';
import heroSvg from '../assets/hero.svg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ paddingTop: 72, background: '#F0F9FF', lineHeight: 0 }}
    >
      <motion.img
        src={heroSvg}
        alt="Quebeta city scene"
        className="w-full h-auto block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
    </section>
  );
};

export default Hero;
