import logo from '../assets/logo.png'

const go = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

const LINKS = [
  { href:'#about',      label:'About' },
  { href:'#services',   label:'Services' },
  { href:'#track',      label:'Track Record' },
  { href:'#compliance', label:'Compliance' },
  { href:'#contact',    label:'Contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#080f18', borderTop: '1px solid rgba(33,118,255,0.09)', padding: '48px 60px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 20, marginBottom: 32 }}>
          <img src={logo} alt="YKM Varuna Aviation"
            style={{ height: 32, filter: 'brightness(0) invert(1)', opacity: 0.65 }} />
          <ul style={{ display: 'flex', gap: 32, listStyle: 'none', flexWrap: 'wrap' }}>
            {LINKS.map(l => (
              <li key={l.href}>
                <a href={l.href} data-hover onClick={e => { e.preventDefault(); go(l.href) }}
                  style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: '0.12em',
                    textTransform: 'uppercase', color: 'rgba(245,247,250,0.28)', textDecoration: 'none',
                    transition: 'color .2s' }}
                  onMouseEnter={e => e.target.style.color='rgba(245,247,250,0.55)'}
                  onMouseLeave={e => e.target.style.color='rgba(245,247,250,0.28)'}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: 24,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10,
            color: 'rgba(245,247,250,0.24)', letterSpacing: '0.08em' }}>
            © 2025 Varuna Aviation. All rights reserved.
          </span>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10,
            color: 'rgba(245,247,250,0.24)', letterSpacing: '0.08em' }}>
            varunaaviation.in
          </span>
        </div>
      </div>
    </footer>
  )
}
