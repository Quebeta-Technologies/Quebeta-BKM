/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0078BF',
          secondary: '#1CBBEE',
          accent: '#00D4FF',
          dark: '#0A1929',
          darker: '#050E1A',
          light: '#F0F9FF',
        },
      },
      fontFamily: {
        heading: ['Sora', 'Space Grotesk', 'sans-serif'],
        body: ['Inter', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0078BF 0%, #1CBBEE 100%)',
        'gradient-hero': 'linear-gradient(135deg, #E0F5FF 0%, #F8FCFF 50%, #FFFFFF 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0A1929 0%, #0078BF 100%)',
      },
      boxShadow: {
        'brand-sm': '0 2px 8px rgba(0,120,191,0.08)',
        'brand-md': '0 8px 24px rgba(0,120,191,0.12)',
        'brand-lg': '0 16px 48px rgba(0,120,191,0.16)',
        'brand-xl': '0 24px 64px rgba(0,120,191,0.2)',
        'brand-glow': '0 0 40px rgba(28,187,238,0.4)',
      },
      maxWidth: {
        container: '1280px',
      },
      borderRadius: {
        'brand-sm': '8px',
        'brand-md': '16px',
        'brand-lg': '24px',
        'brand-full': '999px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        'marquee-left': 'marquee-left 40s linear infinite',
        'marquee-right': 'marquee-right 45s linear infinite',
        'scroll-marquee': 'scroll-marquee 40s linear infinite',
        'scroll-marquee-rev': 'scroll-marquee 35s linear infinite reverse',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'rotate-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(28,187,238,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(28,187,238,0.7)' },
        },
        'marquee-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        'scroll-marquee': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
