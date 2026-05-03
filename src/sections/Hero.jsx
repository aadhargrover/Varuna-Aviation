import { useEffect, useRef } from 'react'
import DroneSVG from '../components/DroneSVG'

export default function Hero() {
  const droneRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (!droneRef.current || y > window.innerHeight) return
      const pct = y / window.innerHeight
      droneRef.current.style.transform =
        `translate(-50%, calc(-50% + ${y * 0.12}px)) rotate(${-1 + pct}deg)`
      droneRef.current.style.opacity = 0.34 - pct * 0.14
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" style={{
      position: 'relative', width: '100vw', height: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', background: '#102437', padding: 0,
    }}>
      {/* Animated grid */}
      <div className="hero-grid" />

      {/* Glow */}
      <div className="hero-glow" />

      {/* Scan line */}
      <div className="scan-line" />

      {/* Corner brackets */}
      <div className="corner corner-tl" />
      <div className="corner corner-tr" />
      <div className="corner corner-bl" />
      <div className="corner corner-br" />

      {/* Drone — behind content */}
      <div ref={droneRef} className="drone-float" style={{
        position: 'absolute', width: 'min(900px, 92vw)', height: 'min(900px, 92vw)',
        top: '53%', left: '50%',
        transform: 'translate(-50%,-50%)',
        opacity: 0.34, pointerEvents: 'none',
      }}>
        <DroneSVG style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Hero text — above drone */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center',
        maxWidth: 980, padding: '84px 40px 80px', transform: 'translateY(6px)' }}>

        <p className="anim-1" style={{ fontFamily: "'DM Mono',monospace", fontSize: 11,
          letterSpacing: '0.24em', textTransform: 'uppercase', color: '#87C3F5', marginBottom: 22 }}>
          Varuna Aviation · India
        </p>

        <h1 className="anim-2" style={{
          fontFamily: "'Bebas Neue',sans-serif",
          fontSize: 'clamp(58px, 8.5vw, 130px)',
          letterSpacing: '0.04em', lineHeight: 0.94, color: '#F5F7FA', marginBottom: 0,
        }}>
          Engineered<br />
          for <span style={{ color: '#87C3F5' }}>Indian</span><br />
          Airspace
        </h1>

        <p className="anim-3" style={{ fontSize: 18, color: 'rgba(245,247,250,0.52)',
          lineHeight: 1.68, marginTop: 10, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
          End-to-end drone manufacturing and DGCA type certification —
          built for governments, defence, and enterprise operators
          who require zero compromise.
        </p>

        <div className="anim-4" style={{ display: 'flex', gap: 14,
          justifyContent: 'center', marginTop: 34 }}>
          <button data-hover onClick={() => go('#track')}
            style={{ fontFamily: "'DM Mono',monospace", fontSize: 12, letterSpacing: '0.12em',
              textTransform: 'uppercase', padding: '14px 34px', background: '#87C3F5',
              color: '#123B5C', border: 'none', borderRadius: 3, cursor: 'none',
              fontWeight: 700,
              transition: 'opacity .2s, transform .2s' }}
            onMouseEnter={e => { e.target.style.opacity='.82'; e.target.style.transform='translateY(-2px)' }}
            onMouseLeave={e => { e.target.style.opacity='1';   e.target.style.transform='translateY(0)' }}>
            Our Track Record
          </button>
          <button data-hover onClick={() => go('#contact')}
            style={{ fontFamily: "'DM Mono',monospace", fontSize: 12, letterSpacing: '0.12em',
              textTransform: 'uppercase', padding: '14px 34px', background: 'transparent',
              color: '#F5F7FA', border: '1px solid rgba(245,247,250,0.22)',
              borderRadius: 3, cursor: 'none', transition: 'border-color .2s, transform .2s' }}
            onMouseEnter={e => { e.target.style.borderColor='rgba(245,247,250,0.55)'; e.target.style.transform='translateY(-2px)' }}
            onMouseLeave={e => { e.target.style.borderColor='rgba(245,247,250,0.22)'; e.target.style.transform='translateY(0)' }}>
            Get in Touch
          </button>
        </div>

      </div>

      <div className="anim-5" style={{ position: 'absolute', zIndex: 10, bottom: 0, left: '50%',
        width: 96, marginLeft: -48, display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: 8, textAlign: 'center' }}>
        <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10,
          display: 'block', width: '100%', letterSpacing: '0.2em',
          textIndent: '0.2em', textTransform: 'uppercase', color: 'rgba(245,247,250,0.42)' }}>
          Scroll
        </span>
        <div className="scroll-line" style={{ width: 1, height: 34,
          marginTop: 4, background: 'linear-gradient(to bottom, rgba(135,195,245,0.72), transparent)' }} />
      </div>
    </section>
  )
}
