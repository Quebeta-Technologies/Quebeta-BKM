import { FiLinkedin, FiTwitter, FiInstagram, FiFacebook, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import logo from '../assets/logo.svg';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden" style={{ background: '#050E1A', color: 'rgba(255,255,255,0.7)' }}>

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(28,187,238,0.4), transparent)' }} />

      {/* Radial bg glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 30% 30%, rgba(0,120,191,0.08), transparent 50%)' }} />

      {/* Footer top */}
      <div className="relative z-10 pt-[70px] pb-[50px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid gap-12 md:gap-10" style={{ gridTemplateColumns: '1.4fr 1fr 1fr 1.3fr' }}>

            {/* Brand */}
            <div className="max-w-[320px] max-md:col-span-full max-md:max-w-full">
              <img src={logo} alt="Quebeta" className="h-11 w-auto mb-5 brightness-0 invert opacity-90" />
              <p className="text-[14.5px] leading-[1.7] mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Strategy. Technology. Growth. We turn ambitious ideas into scalable businesses.
              </p>
              <div className="flex gap-[10px]">
                {[FiLinkedin, FiTwitter, FiInstagram, FiFacebook, FiYoutube].map((Icon, i) => (
                  <a
                    key={i} href="#"
                    className="w-10 h-10 rounded-[10px] flex items-center justify-center text-base transition-all duration-300
                               hover:-translate-y-[3px] hover:border-transparent"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'rgba(255,255,255,0.7)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #0078BF 0%, #1CBBEE 100%)';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,120,191,0.35)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <FooterCol title="Company" links={[
              { label: 'Home',       href: '#home' },
              { label: 'About Us',   href: '#about' },
              { label: 'Services',   href: '#services' },
              { label: 'Our Clients',href: '#clients' },
              { label: 'Blog',       href: '#blog' },
            ]} />

            {/* Services */}
            <FooterCol title="Services" links={[
              { label: 'Business Strategy', href: '#services' },
              { label: 'Brand Identity',    href: '#services' },
              { label: 'Web Presence',      href: '#services' },
              { label: 'AI-Driven Systems', href: '#services' },
              { label: 'Digital Marketing', href: '#services' },
              { label: 'PR & Communication',href: '#services' },
            ]} />

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold text-base mb-5 pb-[10px] relative"
                style={{ fontFamily: 'var(--font-heading)' }}>
                Get in Touch
                <span className="absolute bottom-0 left-0 w-[30px] h-0.5 rounded-sm"
                  style={{ background: 'linear-gradient(135deg, #0078BF 0%, #1CBBEE 100%)' }} />
              </h4>
              <ul className="flex flex-col gap-3">
                {[
                  { Icon: FiMapPin,  content: 'Office No. 701 & 702, Sterling Towers, Baner, Pune 411069' },
                  { Icon: FiPhone,   content: '+91 86989 84443', href: 'tel:+918698984443' },
                  { Icon: FiMail,    content: 'sales@quebeta.in', href: 'mailto:sales@quebeta.in' },
                ].map(({ Icon, content, href }, i) => (
                  <li key={i} className="flex gap-3 items-start text-sm leading-[1.6]"
                    style={{ color: 'rgba(255,255,255,0.55)' }}>
                    <Icon className="mt-[3px] text-[15px] flex-shrink-0" style={{ color: '#1CBBEE' }} />
                    {href
                      ? <a href={href} className="transition-colors duration-300 hover:text-[#1CBBEE]">{content}</a>
                      : <span>{content}</span>
                    }
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="relative z-10 py-[22px] border-t border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-wrap justify-between items-center gap-4">
          <p className="text-[13.5px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
            © {year} Quebeta. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((t) => (
              <a key={t} href="#"
                className="text-[13.5px] transition-colors duration-300 hover:text-[#1CBBEE]"
                style={{ color: 'rgba(255,255,255,0.45)' }}>{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ─── Helper ─── */
const FooterCol = ({ title, links }) => (
  <div>
    <h4 className="text-white font-bold text-base mb-5 pb-[10px] relative"
      style={{ fontFamily: 'var(--font-heading)' }}>
      {title}
      <span className="absolute bottom-0 left-0 w-[30px] h-0.5 rounded-sm"
        style={{ background: 'linear-gradient(135deg, #0078BF 0%, #1CBBEE 100%)' }} />
    </h4>
    <ul className="flex flex-col gap-3">
      {links.map((l) => (
        <li key={l.label}>
          <a href={l.href}
            className="text-sm transition-all duration-300 inline-block hover:text-[#1CBBEE] hover:translate-x-1"
            style={{ color: 'rgba(255,255,255,0.55)' }}>
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
