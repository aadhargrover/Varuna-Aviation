import { useState, useEffect } from 'react'
import useReveal from '../hooks/useReveal'

const nodes = [
  'Airframe Design & Manufacturing',
  'Flight Stack Integration',
  'DGCA Type Certification',
  'Regulatory Documentation & Compliance',
]

const tags = [
  'DGCA Certified',
  'Fixed-Wing',
  'Multi-Rotor',
  'Defence-Adjacent',
  'Surveillance',
  'Agriculture'
]

export default function About() {
  const leftRef = useReveal()
  const rightRef = useReveal()

  const [visible, setVisible] = useState(false)

  // 👇 detect when left section is visible
  useEffect(() => {
    if (!leftRef?.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(leftRef.current)

    return () => observer.disconnect()
  }, [leftRef])

  return (
    <section id="about" style={{ background: '#102437' }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center'
        }}
        className="about-grid"
      >

        {/* Left — architecture diagram */}
        <div ref={leftRef} className="reveal-left">
          <div
            style={{
              background: '#18324A',
              border: '1px solid rgba(135,195,245,0.14)',
              borderRadius: 4,
              padding: 40,
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* top glow line */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: 'linear-gradient(90deg,transparent,#87C3F5,transparent)'
              }}
            />

            <p
              style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: 10,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(245,247,250,0.28)',
                marginBottom: 24
              }}
            >
              // Platform Architecture
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {nodes.map((n, i) => (
                <div
                  key={i}
                  className="arch-item"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    padding: '12px 16px',
                    border: '1px solid rgba(135,195,245,0.1)',
                    borderRadius: 3,
                    background: 'rgba(135,195,245,0.04)',
                    fontSize: 13.5,
                    color: 'rgba(245,247,250,0.55)',

                    // ✨ stagger reveal
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0px)' : 'translateY(12px)',
                    transition: `all 0.5s ease ${i * 0.2}s`
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: i < 3 ? '#87C3F5' : 'rgba(135,195,245,0.3)',
                      flexShrink: 0,
                      boxShadow:
                        i < 3 ? '0 0 8px rgba(135,195,245,0.6)' : 'none'
                    }}
                  />
                  {n}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — text */}
        <div ref={rightRef} className="reveal-right">
          <p
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: 11,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#87C3F5',
              marginBottom: 14
            }}
          >
            About Varuna Aviation
          </p>

          <h2
            style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: 'clamp(38px,5vw,66px)',
              letterSpacing: '0.04em',
              lineHeight: 1,
              color: '#F5F7FA',
              marginBottom: 22
            }}
          >
            Aviation-grade
            <br />
            Engineering
          </h2>

          <p
            style={{
              fontSize: 15,
              color: 'rgba(245,247,250,0.52)',
              lineHeight: 1.8,
              marginBottom: 16
            }}
          >
            Varuna Aviation is a specialist drone engineering company operating at the
            intersection of hardware development and Indian regulatory compliance...
          </p>

          <p
            style={{
              fontSize: 15,
              color: 'rgba(245,247,250,0.52)',
              lineHeight: 1.8
            }}
          >
            Our work doesn't begin and end at manufacturing...
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 28 }}>
            {tags.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: 10,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '5px 12px',
                  border: '1px solid rgba(135,195,245,0.25)',
                  borderRadius: 2,
                  color: '#87C3F5',
                  background: 'rgba(135,195,245,0.06)'
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ styles */}
      <style>{`
        .arch-item {
          transition: all 0.3s ease;
        }

        .arch-item:hover {
          background: rgba(135,195,245,0.08);
          border: 1px solid rgba(135,195,245,0.35);
          transform: translateX(6px);
          color: rgba(245,247,250,0.9);
        }

        @media(max-width:768px){
          .about-grid{
            grid-template-columns:1fr !important;
            gap:40px !important;
          }
        }
      `}</style>
    </section>
  )
}