export default function DroneSVG({ style = {} }) {
  const motors = [[108,153],[292,153],[108,247],[292,247]]
  const props = [
    [108,153,'0 108 153','360 108 153'],
    [292,153,'360 292 153','0 292 153'],
    [108,247,'360 108 247','0 108 247'],
    [292,247,'0 292 247','360 292 247'],
  ]

  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
      {/* Body */}
      <rect x="160" y="175" width="80" height="50" rx="8"
        fill="rgba(33,118,255,0.1)" stroke="#2176FF" strokeWidth="0.8"/>

      {/* Cross frame lines */}
      <line x1="200" y1="105" x2="200" y2="295" stroke="#2176FF" strokeWidth="0.5" strokeOpacity="0.35"/>
      <line x1="105" y1="200" x2="295" y2="200" stroke="#2176FF" strokeWidth="0.5" strokeOpacity="0.35"/>

      {/* Arms */}
      <line x1="162" y1="188" x2="110" y2="155" stroke="#2176FF" strokeWidth="1.6" strokeLinecap="round"/>
      <line x1="238" y1="188" x2="290" y2="155" stroke="#2176FF" strokeWidth="1.6" strokeLinecap="round"/>
      <line x1="162" y1="213" x2="110" y2="246" stroke="#2176FF" strokeWidth="1.6" strokeLinecap="round"/>
      <line x1="238" y1="213" x2="290" y2="246" stroke="#2176FF" strokeWidth="1.6" strokeLinecap="round"/>

      {/* Motors */}
      {motors.map(([cx,cy],i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="13" fill="#0D1B2A" stroke="#2176FF" strokeWidth="1.2"/>
          <circle cx={cx} cy={cy} r="4"  fill="rgba(33,118,255,0.7)"/>
        </g>
      ))}

      {/* Spinning propellers */}
      {props.map(([cx,cy,from,to],i) => (
        <ellipse key={i} cx={cx} cy={cy} rx="29" ry="4.5"
          fill="rgba(33,118,255,0.11)" stroke="#2176FF" strokeWidth="0.7">
          <animateTransform attributeName="transform" type="rotate"
            values={`${from};${to}`} dur="0.35s" repeatCount="indefinite"/>
        </ellipse>
      ))}

      {/* Camera pod */}
      <circle cx="200" cy="194" r="7" fill="rgba(33,118,255,0.2)" stroke="#2176FF" strokeWidth="0.9"/>
      <circle cx="200" cy="194" r="3" fill="rgba(33,118,255,0.9)"/>

      {/* Ranging rings */}
      <circle cx="200" cy="200" r="52"  stroke="#2176FF" strokeWidth="0.4" strokeOpacity="0.25" strokeDasharray="4 7"/>
      <circle cx="200" cy="200" r="84"  stroke="#2176FF" strokeWidth="0.3" strokeOpacity="0.14" strokeDasharray="3 9"/>
      <circle cx="200" cy="200" r="120" stroke="#2176FF" strokeWidth="0.2" strokeOpacity="0.07" strokeDasharray="2 11"/>

      {/* Corner tick marks */}
      {[[148,148,1,0,0,1],[252,148,-1,0,0,1],[148,252,1,0,0,-1],[252,252,-1,0,0,-1]].map(([x,y,sx,_ox,_oy,sy],i)=>(
        <g key={i} transform={`translate(${x},${y}) scale(${sx},${sy})`}>
          <line x1="0" y1="0" x2="10" y2="0" stroke="#2176FF" strokeWidth="0.7" strokeOpacity="0.45"/>
          <line x1="0" y1="0" x2="0" y2="10" stroke="#2176FF" strokeWidth="0.7" strokeOpacity="0.45"/>
        </g>
      ))}

      {/* Landing legs */}
      <line x1="175" y1="225" x2="170" y2="252" stroke="#2176FF" strokeWidth="1.1" strokeLinecap="round"/>
      <line x1="225" y1="225" x2="230" y2="252" stroke="#2176FF" strokeWidth="1.1" strokeLinecap="round"/>
      <line x1="161" y1="252" x2="179" y2="252" stroke="#2176FF" strokeWidth="1.1" strokeLinecap="round"/>
      <line x1="221" y1="252" x2="239" y2="252" stroke="#2176FF" strokeWidth="1.1" strokeLinecap="round"/>
    </svg>
  )
}
