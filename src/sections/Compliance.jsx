import useReveal from '../hooks/useReveal'

const CHECKS = [
  'Manufacturer compliance certificate covering all DGCA conditions',
  'Firmware checksum registration with Certification Body',
  'Power-On Self-Test (POST) validation and logging',
  'Signed firmware update pathway verified by CB',
  'Compliance-critical parameter locking (altitude, geofence, RTH)',
  'Tamper-evident security log — signed, append-only, CB-auditable',
  'Digital Certificate from Indian CA for key signing',
]

export default function Compliance() {
  const leftRef  = useReveal()
  const rightRef = useReveal()

  return (
    <section id="compliance" style={{ background: '#162438', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid',
        gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}
        className="compliance-grid">

        {/* Left */}
        <div ref={leftRef} className="reveal-left">
          <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: '#2176FF', marginBottom: 16 }}>
            DGCA Compliance
          </p>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif",
            fontSize: 'clamp(38px,5vw,66px)', letterSpacing: '0.04em',
            lineHeight: 1, color: '#F5F7FA', marginBottom: 24 }}>
            We Know the<br />Regulatory<br />Landscape
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(245,247,250,0.52)', lineHeight: 1.8, marginBottom: 20 }}>
            DGCA Type Certification is not a process you learn on someone else's project.
            We've been through it — from documentation to the CB's physical test bench.
          </p>
          <p style={{ fontSize: 15, color: 'rgba(245,247,250,0.52)', lineHeight: 1.8 }}>
            If you're building a drone platform for commercial operation in India, your timeline
            and your credibility depend entirely on how well your certification submission is prepared.
            We've built that process from scratch and executed it successfully.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 28 }}>
            {['Type Certificate','Airworthiness','CB Testing','Documentation'].map(t => (
              <span key={t} style={{ fontFamily: "'DM Mono',monospace", fontSize: 10,
                letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 12px',
                border: '1px solid rgba(33,118,255,0.25)', borderRadius: 2,
                color: '#2176FF', background: 'rgba(33,118,255,0.06)' }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right — cert card */}
        <div ref={rightRef} className="reveal-right">
          <div style={{ background: '#0D1B2A', border: '1px solid rgba(33,118,255,0.15)',
            borderRadius: 4, padding: 32, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
              background: 'linear-gradient(90deg,transparent,#2176FF,transparent)' }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: 12,
              marginBottom: 24, paddingBottom: 20,
              borderBottom: '1px solid rgba(33,118,255,0.1)' }}>
              <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: '0.12em',
                textTransform: 'uppercase', padding: '4px 10px',
                background: 'rgba(33,118,255,0.12)', border: '1px solid rgba(33,118,255,0.3)',
                color: '#2176FF', borderRadius: 2 }}>
                DGCA Framework
              </span>
              <span style={{ fontWeight: 500, fontSize: 14, color: '#F5F7FA' }}>
                What certification involves
              </span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {CHECKS.map((c, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start',
                  gap: 12, fontSize: 13.5, color: 'rgba(245,247,250,0.52)', lineHeight: 1.55 }}>
                  <span style={{ width: 18, height: 18, borderRadius: '50%',
                    background: 'rgba(33,118,255,0.15)', border: '1px solid rgba(33,118,255,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: 1, fontSize: 10, color: '#2176FF' }}>
                    ✓
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){ .compliance-grid{ grid-template-columns:1fr !important; gap:40px !important; } }`}</style>
    </section>
  )
}
