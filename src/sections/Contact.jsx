import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import useReveal from '../hooks/useReveal'

// ─── EmailJS config ───────────────────────────────────────────
// 1. Go to https://www.emailjs.com → free account
// 2. Add Email Service (Gmail / Outlook) → copy SERVICE_ID
// 3. Create Email Template → copy TEMPLATE_ID
//    Template variables used: {{from_name}}, {{from_org}},
//    {{from_email}}, {{enquiry_type}}, {{message}}
// 4. Go to Account → API Keys → copy PUBLIC_KEY
// Replace the three strings below:
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
// ──────────────────────────────────────────────────────────────

const TYPES = [
  'Drone Manufacturing',
  'DGCA Certification',
  'Platform Integration',
  'Regulatory Consulting',
  'Other',
]

const EMPTY = { name:'', org:'', email:'', type:'', message:'' }

export default function Contact() {
  const formRef  = useReveal()
  const [form,    setForm]   = useState(EMPTY)
  const [status,  setStatus] = useState('idle') // idle | sending | sent | error

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.name,
          from_org:     form.org,
          from_email:   form.email,
          enquiry_type: form.type,
          message:      form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('sent')
      setForm(EMPTY)
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const labelRef = useReveal()
  const titleRef = useReveal()
  const leadRef  = useReveal()

  return (
    <section id="contact" style={{ background: '#0D1B2A' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>

        <p ref={labelRef} className="reveal" style={{ fontFamily: "'DM Mono',monospace", fontSize: 11,
          letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2176FF', marginBottom: 14 }}>
          Contact
        </p>
        <h2 ref={titleRef} className="reveal" style={{ fontFamily: "'Bebas Neue',sans-serif",
          fontSize: 'clamp(40px,6vw,72px)', letterSpacing: '0.04em',
          lineHeight: 1, color: '#F5F7FA', marginBottom: 20, transitionDelay: '0.1s' }}>
          Let's Talk
        </h2>
        <p ref={leadRef} className="reveal" style={{ fontSize: 16, color: 'rgba(245,247,250,0.52)',
          lineHeight: 1.75, marginBottom: 48, transitionDelay: '0.2s' }}>
          Whether you're looking to develop a platform, navigate DGCA certification,
          or need technical advisory — reach out and we'll respond within one business day.
        </p>

        {status === 'sent' ? (
          <div style={{ padding: '48px 32px', border: '1px solid rgba(33,118,255,0.2)',
            borderRadius: 4, background: 'rgba(33,118,255,0.05)' }}>
            <p style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 32,
              letterSpacing: '0.04em', color: '#2176FF', marginBottom: 12 }}>
              Enquiry Received
            </p>
            <p style={{ fontSize: 14, color: 'rgba(245,247,250,0.52)' }}>
              We'll be in touch within one business day.
            </p>
            <button data-hover onClick={() => setStatus('idle')}
              style={{ marginTop: 24, fontFamily: "'DM Mono',monospace", fontSize: 11,
                letterSpacing: '0.12em', textTransform: 'uppercase', padding: '10px 24px',
                background: 'transparent', color: 'rgba(245,247,250,0.5)',
                border: '1px solid rgba(245,247,250,0.2)', borderRadius: 3, cursor: 'none' }}>
              Send another
            </button>
          </div>
        ) : (
          <form ref={formRef} className="reveal" onSubmit={submit}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 14, textAlign: 'left', transitionDelay: '0.3s' }}>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontFamily: "'DM Mono',monospace", fontSize: 10,
                letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,247,250,0.28)' }}>
                Full Name *
              </label>
              <input name="name" value={form.name} onChange={handle} required
                placeholder="Your name" className="field" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontFamily: "'DM Mono',monospace", fontSize: 10,
                letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,247,250,0.28)' }}>
                Organisation
              </label>
              <input name="org" value={form.org} onChange={handle}
                placeholder="Company or agency" className="field" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontFamily: "'DM Mono',monospace", fontSize: 10,
                letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,247,250,0.28)' }}>
                Email *
              </label>
              <input name="email" type="email" value={form.email} onChange={handle} required
                placeholder="your@email.com" className="field" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontFamily: "'DM Mono',monospace", fontSize: 10,
                letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,247,250,0.28)' }}>
                Enquiry Type
              </label>
              <select name="type" value={form.type} onChange={handle} className="field"
                style={{ appearance: 'none' }}>
                <option value="" disabled>Select...</option>
                {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontFamily: "'DM Mono',monospace", fontSize: 10,
                letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,247,250,0.28)' }}>
                Message *
              </label>
              <textarea name="message" value={form.message} onChange={handle} required
                rows={5} placeholder="Brief overview of what you're working on and what you need..."
                className="field" style={{ resize: 'vertical' }} />
            </div>

            {status === 'error' && (
              <div style={{ gridColumn: '1 / -1', fontSize: 13,
                color: '#ff6b6b', textAlign: 'center', padding: '8px 0' }}>
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            <div style={{ gridColumn: '1 / -1', textAlign: 'right', marginTop: 8 }}>
              <button type="submit" data-hover disabled={status === 'sending'}
                style={{ fontFamily: "'DM Mono',monospace", fontSize: 12, letterSpacing: '0.12em',
                  textTransform: 'uppercase', padding: '14px 40px', background: '#2176FF',
                  color: '#fff', border: 'none', borderRadius: 3, cursor: 'none',
                  opacity: status === 'sending' ? 0.6 : 1,
                  transition: 'opacity .2s, transform .2s' }}
                onMouseEnter={e => { if(status!=='sending'){ e.target.style.opacity='.82'; e.target.style.transform='translateY(-2px)' } }}
                onMouseLeave={e => { e.target.style.opacity=status==='sending'?'0.6':'1'; e.target.style.transform='translateY(0)' }}>
                {status === 'sending' ? 'Sending...' : 'Send Enquiry →'}
              </button>
            </div>
          </form>
        )}
      </div>
      <style>{`@media(max-width:600px){ form[style*="1fr 1fr"]{ grid-template-columns:1fr !important; } }`}</style>
    </section>
  )
}
