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
    <div
      ref={ref}
      className="row reveal"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="row-idx">{item.idx}</div>

      <div className="row-content">
        <p className="row-title">{item.title}</p>
        <p className="row-desc">{item.desc}</p>
      </div>

      <div className="row-tag">{item.cat}</div>
    </div>
  )
}

export default function TrackRecord() {
  const labelRef = useReveal()
  const titleRef = useReveal()
  const leadRef  = useReveal()

  return (
    <section id="track" style={{ background: '#102437' }}>
      <div className="track-container">

        {/* Header */}
        <div className="track-header">
          <p ref={labelRef} className="reveal track-label">
            Previous Work
          </p>

          <h2 ref={titleRef} className="reveal track-title">
            What We've Built<br />&amp; Certified
          </h2>

          <p ref={leadRef} className="reveal track-lead">
            A record built on completed platforms and successful certifications — not proposals.
          </p>
        </div>

        {/* Rows */}
        <div className="track-list">
          {WORK.map((w, i) => (
            <Row key={w.idx} item={w} delay={i * 0.1} />
          ))}
        </div>

      </div>

      {/* ✅ STYLES */}
      <style>{`

        .track-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .track-header {
          margin-bottom: 56px;
        }

        .track-label {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #87C3F5;
          margin-bottom: 16px;
        }

        .track-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(40px, 6vw, 72px);
          letter-spacing: 0.04em;
          line-height: 1;
          color: #F5F7FA;
          margin-bottom: 22px;
        }

        .track-lead {
          font-size: 16px;
          color: rgba(245,247,250,0.52);
          line-height: 1.75;
          max-width: 540px;
        }

        .track-list {
          border-top: 1px solid rgba(135,195,245,0.08);
        }

        /* ===== ROW ===== */

        .row {
          display: grid;
          grid-template-columns: 80px 1fr auto;
          gap: 32px;
          align-items: start;
          padding: 36px 0;
          border-bottom: 1px solid rgba(135,195,245,0.08);
          transition: all 0.5s ease;
        }

        .row-idx {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 38px;
          color: rgba(135,195,245,0.22);
          letter-spacing: 0.04em;
        }

        .row-title {
          font-size: 17px;
          color: #F5F7FA;
          margin-bottom: 10px;
        }

        .row-desc {
          font-size: 14px;
          color: rgba(245,247,250,0.52);
          line-height: 1.7;
        }

        .row-tag {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 4px 12px;
          border: 1px solid rgba(135,195,245,0.22);
          color: #87C3F5;
          border-radius: 2px;
          white-space: nowrap;
        }

        /* ===== TABLET ===== */
        @media (max-width: 900px) {
          .row {
            grid-template-columns: 60px 1fr;
            gap: 20px;
          }

          .row-tag {
            grid-column: 2;
            margin-top: 12px;
          }

          .row-idx {
            font-size: 30px;
          }
        }

         @media (max-width: 600px) {

  .row {
    display: flex;              /* 🔥 switch from grid → flex */
    flex-direction: column;     /* stack everything */
    gap: 10px;
    padding: 24px 0;
  }

  .row-idx {
    font-size: 24px;
    opacity: 0.4;
    order: 1;
  }

  .row-content {
    order: 2;
  }

  .row-title {
    font-size: 16px;
  }

  .row-desc {
    font-size: 13px;
  }

  .row-tag {
    order: 3;
    width: fit-content;
    margin-top: 6px;
  }

        }

      `}</style>
    </section>
  )
}