import useReveal from '../hooks/useReveal'

const WORK = [
  { idx:'01', title:'Fixed-Wing Agricultural UAV', cat:'Agriculture',
    desc:"Design, development, and production of a fixed-wing platform optimised for agricultural survey operations. Airframe engineered for extended endurance and payload flexibility across varied terrain. Full DGCA Type Certification obtained." },
  { idx:'02', title:'Multi-Rotor Surveillance Platform', cat:'Surveillance',
    desc:"Development of a multi-rotor platform built for persistent aerial surveillance operations. Stabilised gimbal integration, encrypted telemetry, and hardened flight stack. DGCA certified for commercial operation." },
  { idx:'03', title:'End-to-End DGCA Certification — OEM Engagement', cat:'Certification',
    desc:"Managed the complete DGCA Type Certification pathway for a third-party OEM — from airworthiness documentation and CB coordination to final approval. Delivered on schedule without certification failures or rework cycles." },
  { idx:'04', title:'Defence-Adjacent ISR Platform', cat:'Defence-Adjacent',
    desc:"Design and manufacture of an ISR-oriented platform for a defence-adjacent operator. Requirements included specific payload envelopes, hardened communication links, and thermal sensor integration. Platform delivered and operationally deployed." },
  { idx:'05', title:'Regulatory Documentation Architecture', cat:'Consulting',
    desc:"Built a reusable DGCA documentation framework and compliance audit trail system for a drone rental operator preparing for Type Certification — reducing their certification timeline by removing repeat documentation work." },
]

function Row({ item, delay }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{
      display: 'grid', gridTemplateColumns: '80px 1fr auto',
      gap: 32, alignItems: 'start', padding: '36px 0',
      borderBottom: '1px solid rgba(33,118,255,0.08)',
      transitionDelay: `${delay}s`,
    }}>
      <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 38,
        color: 'rgba(33,118,255,0.22)', letterSpacing: '0.04em', lineHeight: 1, paddingTop: 4 }}>
        {item.idx}
      </div>
      <div>
        <p style={{ fontWeight: 500, fontSize: 17, color: '#F5F7FA', marginBottom: 10 }}>
          {item.title}
        </p>
        <p style={{ fontSize: 14, color: 'rgba(245,247,250,0.52)', lineHeight: 1.72 }}>
          {item.desc}
        </p>
      </div>
      <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: '0.12em',
        textTransform: 'uppercase', padding: '4px 12px', border: '1px solid rgba(33,118,255,0.22)',
        color: '#2176FF', borderRadius: 2, whiteSpace: 'nowrap', marginTop: 4 }}>
        {item.cat}
      </div>
    </div>
  )
}

export default function TrackRecord() {
  const labelRef = useReveal()
  const titleRef = useReveal()
  const leadRef  = useReveal()

  return (
    <section id="track" style={{ background: '#0D1B2A' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 56 }}>
          <p ref={labelRef} className="reveal" style={{ fontFamily: "'DM Mono',monospace", fontSize: 11,
            letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2176FF', marginBottom: 16 }}>
            Previous Work
          </p>
          <h2 ref={titleRef} className="reveal" style={{ fontFamily: "'Bebas Neue',sans-serif",
            fontSize: 'clamp(40px,6vw,72px)', letterSpacing: '0.04em',
            lineHeight: 1, color: '#F5F7FA', marginBottom: 22, transitionDelay: '0.1s' }}>
            What We've Built<br />&amp; Certified
          </h2>
          <p ref={leadRef} className="reveal" style={{ fontSize: 16, color: 'rgba(245,247,250,0.52)',
            lineHeight: 1.75, maxWidth: 540, transitionDelay: '0.2s' }}>
            A record built on completed platforms and successful certifications — not proposals.
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(33,118,255,0.08)' }}>
          {WORK.map((w, i) => <Row key={w.idx} item={w} delay={i * 0.1} />)}
        </div>
      </div>
    </section>
  )
}
