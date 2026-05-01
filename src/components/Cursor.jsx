import { useEffect, useRef } from 'react'

export default function Cursor() {
  const curRef = useRef(null)
  const ringRef = useRef(null)
  const m = useRef({ x: 0, y: 0, rx: 0, ry: 0 })

  useEffect(() => {
    const onMove = e => { m.current.x = e.clientX; m.current.y = e.clientY }
    document.addEventListener('mousemove', onMove)

    let raf
    const tick = () => {
      m.current.rx += (m.current.x - m.current.rx) * 0.12
      m.current.ry += (m.current.y - m.current.ry) * 0.12
      if (curRef.current)  { curRef.current.style.left  = m.current.x  + 'px'; curRef.current.style.top  = m.current.y  + 'px' }
      if (ringRef.current) { ringRef.current.style.left = m.current.rx + 'px'; ringRef.current.style.top = m.current.ry + 'px' }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const on  = () => { curRef.current?.classList.add('hovered');    ringRef.current?.classList.add('hovered') }
    const off = () => { curRef.current?.classList.remove('hovered'); ringRef.current?.classList.remove('hovered') }
    document.querySelectorAll('a,button,input,textarea,select,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', on)
      el.addEventListener('mouseleave', off)
    })

    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  return (
    <>
      <div ref={curRef}  className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
