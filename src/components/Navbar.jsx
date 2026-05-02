import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

const NAV = [
  { href: '#about',      label: 'About' },
  { href: '#services',   label: 'What We Do' },
  { href: '#track',      label: 'Track Record' },
  { href: '#compliance', label: 'Compliance' },
  { href: '#contact',    label: 'Contact' },
]

const go = href => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: scrolled ? '10px 60px' : '16px 60px',
        background: scrolled ? 'rgba(16,36,55,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(135,195,245,0.12)' : 'none',
        transition: 'all 0.35s ease',
      }}
    >
      <a href="#hero" onClick={e => { e.preventDefault(); go('#hero') }} data-hover>
        <img src={logo} alt="Varuna Aviation" style={{ height: 64, width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }} />
      </a>

      {/* Desktop */}
      <ul style={{ display: 'flex', gap: 36, listStyle: 'none' }} className="hidden-mobile">
        {NAV.map(l => (
          <li key={l.href}>
            <a href={l.href} data-hover onClick={e => { e.preventDefault(); go(l.href) }}
              style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, letterSpacing: '0.15em',
                textTransform: 'uppercase', color: 'rgba(245,247,250,0.5)', textDecoration: 'none',
                transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#F5F7FA'}
              onMouseLeave={e => e.target.style.color = 'rgba(245,247,250,0.5)'}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact" data-hover onClick={e => { e.preventDefault(); go('#contact') }}
        className="hidden-mobile"
        style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, letterSpacing: '0.12em',
          textTransform: 'uppercase', padding: '10px 22px', background: '#87C3F5',
          color: '#123B5C', borderRadius: 3, textDecoration: 'none', fontWeight: 700,
          transition: 'opacity .2s, transform .2s' }}
        onMouseEnter={e => { e.target.style.opacity = '.82'; e.target.style.transform = 'translateY(-1px)' }}
        onMouseLeave={e => { e.target.style.opacity = '1';   e.target.style.transform = 'translateY(0)' }}>
        Get in Touch
      </a>

      {/* Hamburger */}
      <button onClick={() => setOpen(!open)} data-hover className="show-mobile"
        style={{ background: 'none', border: 'none', display: 'flex', flexDirection: 'column',
          gap: 5, cursor: 'none', padding: 4 }}>
        {[0,1,2].map(i => (
          <span key={i} style={{ display: 'block', width: 24, height: 1, background: '#F5F7FA',
            transition: 'all 0.3s',
            transform: open && i === 0 ? 'rotate(45deg) translateY(6px)' : open && i === 2 ? 'rotate(-45deg) translateY(-6px)' : 'none',
            opacity: open && i === 1 ? 0 : 1 }} />
        ))}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div style={{ position: 'absolute', top: '100%', left: 0, right: 0,
          background: '#18324A', borderBottom: '1px solid rgba(135,195,245,0.12)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '32px 0', gap: 24 }}>
          {NAV.map(l => (
            <a key={l.href} href={l.href} onClick={e => { e.preventDefault(); go(l.href); setOpen(false) }}
              style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, letterSpacing: '0.15em',
                textTransform: 'uppercase', color: 'rgba(245,247,250,0.6)', textDecoration: 'none' }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={e => { e.preventDefault(); go('#contact'); setOpen(false) }}
            style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, letterSpacing: '0.12em',
              textTransform: 'uppercase', padding: '10px 28px', background: '#87C3F5',
              color: '#123B5C', borderRadius: 3, textDecoration: 'none', fontWeight: 700 }}>
            Get in Touch
          </a>
        </div>
      )}

      <style>{`
        @media(max-width:768px){ .hidden-mobile{ display:none !important; } .show-mobile{ display:flex !important; } }
        @media(min-width:769px){ .show-mobile{ display:none !important; } }
      `}</style>
    </nav>
  )
}
