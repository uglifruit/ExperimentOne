'use client'
import { useActionState } from 'react'
import { postGuestbookEntry } from '@/app/actions/guestbook'

export default function GuestbookForm() {
  const [state, action, pending] = useActionState(postGuestbookEntry, undefined)

  return (
    <form action={action} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <textarea
        name="message"
        maxLength={500}
        required
        placeholder="Sign the guestbook! Tell us who you are and where you're visiting from... 🌍"
        rows={4}
        style={{
          background: '#0a0a0a',
          border: '2px inset #FF00FF',
          color: '#00FF00',
          fontFamily: 'inherit',
          fontSize: '0.9rem',
          padding: '0.75rem',
          resize: 'vertical',
          width: '100%',
          boxSizing: 'border-box',
        }}
      />
      {state?.error && (
        <p style={{ color: '#FF4444', fontSize: '0.85rem', margin: 0 }}>⚠️ {state.error}</p>
      )}
      {state?.success && (
        <p style={{ color: '#00FF00', fontSize: '0.85rem', margin: 0 }}>✅ Your message has been added!</p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="geo-button"
        style={{ alignSelf: 'flex-start', padding: '8px 24px' }}
      >
        {pending ? '⏳ POSTING...' : '📝 SIGN THE GUESTBOOK'}
      </button>
    </form>
  )
}
