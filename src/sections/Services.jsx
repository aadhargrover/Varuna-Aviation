import useReveal from '../hooks/useReveal'

const SERVICES = [
  {
    num: '01', title: 'Drone Manufacturing',
    body: 'We design and manufacture fixed-wing and multi-rotor platforms from the ground up. Every component decision is made with airworthiness and operational reliability as the non-negotiable constraint — not cost reduction.',
    tags: ['Fixed-Wing','Multi-Rotor','Airframe','Propulsion'],
  },
  {
    num: '02', title: 'DGCA Type Certification',
    body: "We navigate the complete DGCA Type Certification process — from initial documentation and airworthiness compliance planning to CB submission and final approval. We've done this before. We know where it breaks and how to prevent it.",
    tags: ['Type Certificate','CB Submission','Documentation'],
  },
  {
    num: '03', title: 'Platform Integration',
    body: 'Flight stack integration, sensor payload fitment, telemetry architecture, and GCS customisation for specific operational requirements. We configure platforms for the mission — not the other way around.',
    tags: ['ArduPilot','PX4','GCS','MAVLink'],
  },
  {
    num: '04', title: 'Regulatory Consulting',
    body: 'For OEMs and operators who need domain expertise without a full development engagement — we advise on DGCA compliance pathways, documentation requirements, and airspace regulatory positioning.',
    tags: ['Compliance','Advisory','Documentation'],
  },
]

function Card({ s, delay }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal card-bar"
      style={{ background: '#102437', padding: '48px 44px', transitionDelay: `${delay}s` }}>
      <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 58,
        color: 'rgba(135,195,245,0.11)', lineHeight: 1, marginBottom: 20, letterSpacing: '0.04em' }}>
        {s.num}
      </div>
      <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 28,
        letterSpacing: '0.04em', color: '#F5F7FA', marginBottom: 14, lineHeight: 1 }}>
        {s.title}
      </h3>
      <p style={{ fontSize: 14, color: 'rgba(245,247,250,0.52)', lineHeight: 1.76 }}>
        {s.body}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 20 }}>
        {s.tags.map(t => (
          <span key={t} style={{ fontFamily: "'DM Mono',monospace", fontSize: 10,
            padding: '3px 9px', border: '1px solid rgba(135,195,245,0.18)',
            color: 'rgba(245,247,250,0.35)', borderRadius: 2 }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Services() {
  const labelRef = useReveal()
  const titleRef = useReveal()
  const leadRef  = useReveal()

  return (
    <section id="services" style={{ background: '#18324A' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 60 }}>
          <p ref={labelRef} className="reveal" style={{ fontFamily: "'DM Mono',monospace", fontSize: 11,
            letterSpacing: '0.2em', textTransform: 'uppercase', color: '#87C3F5', marginBottom: 16 }}>
            What We Do
          </p>
          <h2 ref={titleRef} className="reveal" style={{ fontFamily: "'Bebas Neue',sans-serif",
            fontSize: 'clamp(40px,6vw,72px)', letterSpacing: '0.04em', lineHeight: 1,
            color: '#F5F7FA', marginBottom: 20, transitionDelay: '0.1s' }}>
            Full-spectrum<br />Drone Engineering
          </h2>
          <p ref={leadRef} className="reveal" style={{ fontSize: 16, color: 'rgba(245,247,250,0.52)',
            lineHeight: 1.75, maxWidth: 600, transitionDelay: '0.2s' }}>
            From concept airframe to certified flight — we handle the engineering, the build,
            and the regulatory path that most companies treat as separate problems.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }} className="services-grid">
          {SERVICES.map((s, i) => <Card key={s.num} s={s} delay={i * 0.1} />)}
        </div>
      </div>
      <style>{`@media(max-width:768px){ .services-grid{ grid-template-columns:1fr !important; } }`}</style>
    </section>
  )
}
