import { useRef, useEffect } from 'react'

const STATS = [
  { val: '10+',  label: 'Platforms Developed' },
  { val: 'DGCA', label: 'Type Certified' },
  { val: '3',    label: 'Verticals Served' },
  { val: '100%', label: 'Compliance Record' },
]

export default function StatsBar() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) ref.current?.querySelectorAll('.stat-i').forEach(el => el.classList.add('visible')) },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} style={{
      background: '#18324A',
      borderTop: '1px solid rgba(135,195,245,0.09)',
      borderBottom: '1px solid rgba(135,195,245,0.09)',
      display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
      padding: '32px 60px',
    }}>
      {STATS.map((s, i) => (
        <div key={i} className="stat-i reveal" style={{
          textAlign: 'center', padding: '8px 20px',
          borderRight: i < 3 ? '1px solid rgba(135,195,245,0.09)' : 'none',
          transitionDelay: `${i * 0.1}s`,
        }}>
          <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 44,
            letterSpacing: '0.04em', color: '#87C3F5', lineHeight: 1, marginBottom: 7 }}>
            {s.val}
          </div>
          <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10,
            letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,247,250,0.5)' }}>
            {s.label}
          </div>
        </div>
      ))}
      <style>{`@media(max-width:600px){ div[style*="repeat(4"] { grid-template-columns:1fr 1fr; padding:24px; } }`}</style>
    </div>
  )
}
