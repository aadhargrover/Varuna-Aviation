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
      ([e]) => {
        if (e.isIntersecting) {
          ref.current
            ?.querySelectorAll('.stat-i')
            .forEach(el => el.classList.add('visible'))
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="stats-bar">
      {STATS.map((s, i) => (
        <div key={i} className="stat-i reveal">
          <div className="stat-value">{s.val}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}

      <style>{`
        .stats-bar {
          background: #18324A;
          border-top: 1px solid rgba(135,195,245,0.09);
          border-bottom: 1px solid rgba(135,195,245,0.09);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 32px 60px;
        }

        .stat-i {
          text-align: center;
          padding: 8px 20px;
          border-right: 1px solid rgba(135,195,245,0.09);
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.5s ease;
        }

        .stat-i:last-child {
          border-right: none;
        }

        .stat-i.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stat-value {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 44px;
          letter-spacing: 0.04em;
          color: #87C3F5;
          line-height: 1;
          margin-bottom: 7px;
        }

        .stat-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(245,247,250,0.5);
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .stats-bar {
            grid-template-columns: repeat(2, 1fr);
            padding: 28px 40px;
          }

          .stat-i {
            border-right: none;
            border-bottom: 1px solid rgba(135,195,245,0.09);
            padding: 20px 10px;
          }

          .stat-i:nth-last-child(-n+2) {
            border-bottom: none;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .stats-bar {
            grid-template-columns: 1fr;
            padding: 24px 20px;
          }

          .stat-i {
            border-bottom: 1px solid rgba(135,195,245,0.09);
            padding: 18px 0;
          }

          .stat-i:last-child {
            border-bottom: none;
          }

          .stat-value {
            font-size: 34px;
          }

          .stat-label {
            font-size: 9px;
          }
        }
      `}</style>
    </div>
  )
}