import { createClient } from '@/app/lib/supabase-server'
import { getSession } from '@/app/lib/session'
import GuestbookForm from '@/components/GuestbookForm'
import Link from 'next/link'

interface GuestbookEntry {
  id: string
  user_email: string
  message: string
  created_at: string
}

export const revalidate = 0

export default async function GuestbookPage() {
  const supabase = await createClient()
  const session = await getSession()

  const { data: entries } = await supabase
    .from('guestbook')
    .select('id, user_email, message, created_at')
    .order('created_at', { ascending: false })

  const guestbookEntries: GuestbookEntry[] = entries ?? []

  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      {/* Header */}
      <div
        className="geo-card glow-box"
        style={{
          textAlign: 'center',
          padding: '2rem',
          marginBottom: '2rem',
          borderColor: '#FF00FF',
          boxShadow: '0 0 30px #FF00FF, 0 0 60px rgba(255,0,255,0.2)',
        }}
      >
        <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📖✨📖</div>
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#FF00FF',
            textShadow: '0 0 12px #FF00FF, 0 0 24px #FF00FF',
            marginBottom: '0.5rem',
          }}
        >
          💬 THE MAGIC TEACHER GUESTBOOK 💬
        </h1>
        <p style={{ color: '#FFFF00', fontSize: '0.9rem' }} className="blink">
          ★ SIGN IN AND LET THE WORLD KNOW YOU WERE HERE ★
        </p>
      </div>

      {/* Post form */}
      <div className="geo-card" style={{ padding: '1.5rem', marginBottom: '2rem', borderColor: '#00FFFF' }}>
        <h2 style={{ color: '#00FFFF', fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 'bold' }}>
          ✍️ LEAVE YOUR MARK ON THE INFORMATION SUPERHIGHWAY
        </h2>
        {session ? (
          <>
            <p style={{ color: '#888', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
              Posting as: <span style={{ color: '#FF00FF' }}>{session.email}</span>
            </p>
            <GuestbookForm />
          </>
        ) : (
          <p style={{ color: '#AAAAAA', fontSize: '0.9rem' }}>
            You must be{' '}
            <Link href="/login" style={{ color: '#FF00FF', textDecoration: 'underline' }}>
              logged in
            </Link>{' '}
            to sign the guestbook.
          </p>
        )}
      </div>

      {/* Entries */}
      <h2
        style={{
          color: '#FFD700',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          textShadow: '0 0 8px #FFD700',
        }}
      >
        📜 {guestbookEntries.length} VISITOR{guestbookEntries.length !== 1 ? 'S' : ''} HAVE SIGNED
      </h2>

      {guestbookEntries.length === 0 ? (
        <div className="geo-card" style={{ padding: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#888', fontSize: '1rem' }}>
            No entries yet! Be the first to sign! 🌟
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {guestbookEntries.map((entry) => (
            <div
              key={entry.id}
              className="geo-card"
              style={{ padding: '1.25rem', borderColor: '#333' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.25rem' }}>
                <span style={{ color: '#FF00FF', fontWeight: 'bold', fontSize: '0.85rem' }}>
                  📧 {entry.user_email}
                </span>
                <span style={{ color: '#555', fontSize: '0.75rem' }}>
                  🕐 {new Date(entry.created_at).toLocaleDateString('en-US', {
                    year: 'numeric', month: 'short', day: 'numeric',
                    hour: '2-digit', minute: '2-digit',
                  })}
                </span>
              </div>
              <p style={{ color: '#CCCCCC', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>
                {entry.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
