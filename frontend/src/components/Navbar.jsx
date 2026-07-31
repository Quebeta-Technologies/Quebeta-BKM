import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiArrowUpRight } from 'react-icons/fi';
import logo from '../assets/logo.svg';

const navLinks = [
  { name: 'Home',       href: '#home' },
  { name: 'About Us',   href: '#about' },
  { name: 'Service',    href: '#services' },
  { name: 'Our Clients',href: '#clients' },
  { name: 'Blog',       href: '#blog' },
  { name: 'Contact Us', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300
        ${scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,120,191,0.08)] py-3 border-b border-[rgba(0,120,191,0.08)]'
          : 'bg-white/60 backdrop-blur-xl py-[18px]'
        }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between gap-10">

        {/* Logo */}
        <a href="#home" className="block transition-transform duration-300 hover:scale-105" onClick={() => setActiveLink('Home')}>
          <img src={logo} alt="Quebeta" className="h-[42px] w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`relative px-[18px] py-[10px] font-medium text-[15px] transition-colors duration-300 group
                ${activeLink === link.name ? 'text-[#0078BF]' : 'text-slate-700 hover:text-[#0078BF]'}`}
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {link.name}
              {/* Animated underline */}
              <span
                className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300
                  ${activeLink === link.name ? 'w-[60%]' : 'w-0 group-hover:w-[60%]'}`}
                style={{ background: 'linear-gradient(135deg, #0078BF 0%, #1CBBEE 100%)' }}
              />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-[22px] py-3 text-white font-semibold text-sm rounded-full
                     transition-all duration-300 hover:-translate-y-[3px] group"
          style={{
            background: 'linear-gradient(135deg, #0078BF 0%, #1CBBEE 100%)',
            boxShadow: '0 8px 24px rgba(0,120,191,0.25)',
            fontFamily: 'var(--font-heading)',
          }}
        >
          <span>Get Started</span>
          <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#0078BF] text-[28px] flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl px-6 py-7
                       flex flex-col gap-1 shadow-[0_16px_48px_rgba(0,120,191,0.1)] border-t border-[rgba(0,120,191,0.08)]"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => { setActiveLink(link.name); setMenuOpen(false); }}
                className="px-[18px] py-[14px] font-medium text-base text-slate-800 rounded-[16px]
                           transition-all duration-300 hover:bg-[rgba(0,120,191,0.06)] hover:text-[#0078BF] hover:translate-x-1"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {link.name}
              </motion.a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary mt-3"
              onClick={() => setMenuOpen(false)}
            >
              Get Started <FiArrowUpRight />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
