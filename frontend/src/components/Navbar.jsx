import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiArrowUpRight } from 'react-icons/fi';
import logo from '../assets/logo.svg';

const navLinks = [
  { name: 'Home',        href: '#home' },
  { name: 'About Us',    href: '#about' },
  { name: 'Service',     href: '#services' },
  { name: 'Our Clients', href: '#clients' },
  { name: 'Blog',        href: '#blog' },
  { name: 'Contact Us',  href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
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
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-100 py-3'
          : 'bg-white py-[18px]'
        }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between gap-10">

        {/* Logo */}
        <a
          href="#home"
          className="block"
          onClick={() => setActiveLink('Home')}
        >
          <img src={logo} alt="Quebeta" className="h-[42px] w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`relative px-[18px] py-[10px] font-medium text-[15px] transition-colors duration-200
                ${activeLink === link.name
                  ? 'text-[#0078BF]'
                  : 'text-slate-600 hover:text-[#0078BF]'
                }`}
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {link.name}
              {/* Underline */}
              <span
                className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-[#0078BF] transition-all duration-200
                  ${activeLink === link.name ? 'w-[55%]' : 'w-0 group-hover:w-0'}`}
              />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-[22px] py-[10px] text-white font-semibold text-sm rounded-full transition-opacity duration-200 hover:opacity-85"
          style={{
            backgroundColor: '#1CBBEE',
            fontFamily: 'var(--font-heading)',
          }}
        >
          <span>Get Started</span>
          <FiArrowUpRight />
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white px-6 py-6
                       flex flex-col gap-1 shadow-sm border-t border-slate-100"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => { setActiveLink(link.name); setMenuOpen(false); }}
                className={`px-4 py-3 font-medium text-base rounded-xl transition-colors duration-200
                  ${activeLink === link.name
                    ? 'text-[#0078BF]'
                    : 'text-slate-700 hover:text-[#0078BF]'
                  }`}
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {link.name}
              </motion.a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold text-sm rounded-full"
              style={{ backgroundColor: '#1CBBEE', fontFamily: 'var(--font-heading)' }}
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