import { getSession } from '@/app/lib/session'
import { redirect } from 'next/navigation'
import { logout } from '@/app/actions/auth'

const VIP_RESOURCES = [
  {
    emoji: '📋',
    title: 'SECRET LESSON PLAN VAULT',
    badge: 'ULTRA RARE',
    description: 'Access our legendary archive of lesson plans so good, they\'re classified by the Department of Education.',
    tip: '🤫 WARNING: May cause spontaneous standing ovations from students.',
  },
  {
    emoji: '🤖',
    title: 'TURBO AI GRADING MODE',
    badge: 'MEMBERS ONLY',
    description: 'Grade 200 essays in the time it takes to make a coffee. Our AI reads your rubric telepathically.',
    tip: '☕ Side effect: Too much free time. Use responsibly.',
  },
  {
    emoji: '💎',
    title: 'DIAMOND TIER PARENT EMAILS',
    badge: 'VIP EXCLUSIVE',
    description: 'Pre-written parent emails for every situation. From "Your child is a genius" to... other situations.',
    tip: '📧 Even works for the email you\'ve been putting off for 3 weeks.',
  },
  {
    emoji: '🏆',
    title: 'HALL OF FAME SUBSTITUTE PLANS',
    badge: 'LEGENDARY',
    description: 'So detailed, the substitute will actually teach better than you. (We won\'t tell if you don\'t.)',
    tip: '🎯 100% success rate. 0% chaos. Allegedly.',
  },
  {
    emoji: '🧠',
    title: 'GENIUS IEP GENERATOR',
    badge: 'CERTIFIED MAGIC',
    description: 'Generate fully compliant, thoughtful IEP goals in seconds. Like having a special ed specialist on speed dial.',
    tip: '⚡ Now with "actually useful" mode enabled.',
  },
  {
    emoji: '📊',
    title: 'REPORT CARD SORCERY',
    badge: 'WIZARD LEVEL',
    description: 'Turn your cryptic gradebook notes into polished, professional report card comments. Alakazam!',
    tip: '🪄 Turns "talks too much" into three paragraphs of positive framing.',
  },
]

export default async function VipPage() {
  const session = await getSession()

  if (!session?.userId) {
    redirect('/login')
  }

  const email = session.email as string

  return (
    <main style={{ padding: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
      {/* Hero Banner */}
      <div
        className="geo-card glow-box"
        style={{
          textAlign: 'center',
          padding: '2.5rem 2rem',
          marginBottom: '2rem',
          borderColor: '#FFD700',
          boxShadow: '0 0 40px #FFD700, 0 0 80px rgba(255,215,0,0.3)',
        }}
      >
        <div style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>
          <span className="bounce" style={{ display: 'inline-block' }}>👑</span>
          <span className="spin-slow" style={{ display: 'inline-block', margin: '0 1rem' }}>⭐</span>
          <span className="bounce" style={{ display: 'inline-block', animationDelay: '0.3s' }}>👑</span>
        </div>
        <h1
          style={{
            fontSize: '2.2rem',
            fontWeight: 'bold',
            textShadow: '0 0 12px #FFD700, 0 0 24px #FFD700',
            color: '#FFD700',
            marginBottom: '0.5rem',
          }}
        >
          🎉 WELCOME TO THE VIP ZONE 🎉
        </h1>
        <p style={{ color: '#FFFF00', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
          You are logged in as{' '}
          <span style={{ color: '#FF00FF', fontWeight: 'bold' }}>{email}</span>
        </p>
        <p style={{ color: '#00FFFF', fontSize: '0.9rem' }} className="blink">
          ★ VERIFIED VIP TEACHER — TOP SECRET CLEARANCE GRANTED ★
        </p>
        <hr className="geo-hr" style={{ margin: '1.5rem 0 1rem' }} />
        <p style={{ color: '#AAAAAA', fontSize: '0.85rem' }}>
          You have unlocked EXCLUSIVE access to the most powerful AI teaching tools on the Information Superhighway.
          Do NOT share these with non-VIP teachers. They will be EXTREMELY jealous.
        </p>
      </div>

      {/* VIP Badge */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #FFD700, #FF6600)',
            border: '4px solid #FFD700',
            padding: '0.75rem 2rem',
            color: '#000',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            letterSpacing: '3px',
            boxShadow: '0 0 20px #FFD700',
          }}
        >
          👑 VIP MEMBER — CLASS OF {new Date().getFullYear()} 👑
        </div>
      </div>

      {/* Resources Grid */}
      <h2
        style={{
          textAlign: 'center',
          fontSize: '1.4rem',
          color: '#FF00FF',
          marginBottom: '1.5rem',
          textShadow: '0 0 8px #FF00FF',
        }}
      >
        🔓 YOUR EXCLUSIVE VIP RESOURCES 🔓
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}
      >
        {VIP_RESOURCES.map((resource) => (
          <div
            key={resource.title}
            className="geo-card"
            style={{
              padding: '1.5rem',
              borderColor: '#FFD700',
              cursor: 'pointer',
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{resource.emoji}</div>
            <div style={{ marginBottom: '0.5rem' }}>
              <span
                style={{
                  background: 'linear-gradient(90deg, #FFD700, #FF6600)',
                  color: '#000',
                  fontSize: '0.65rem',
                  fontWeight: 'bold',
                  padding: '2px 8px',
                  letterSpacing: '1px',
                }}
              >
                {resource.badge}
              </span>
            </div>
            <h3
              style={{
                color: '#FFD700',
                fontWeight: 'bold',
                fontSize: '1rem',
                marginBottom: '0.5rem',
              }}
            >
              {resource.title}
            </h3>
            <p style={{ color: '#CCCCCC', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
              {resource.description}
            </p>
            <p style={{ color: '#888', fontSize: '0.75rem', fontStyle: 'italic' }}>
              {resource.tip}
            </p>
            <button
              className="geo-button"
              style={{ marginTop: '1rem', width: '100%', fontSize: '0.85rem', padding: '8px' }}
            >
              🚀 ACCESS NOW
            </button>
          </div>
        ))}
      </div>

      {/* Logout */}
      <div
        style={{
          textAlign: 'center',
          borderTop: '2px solid #333',
          paddingTop: '2rem',
        }}
      >
        <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '1rem' }}>
          Leaving so soon? The other VIP teachers will miss you. 😢
        </p>
        <form action={logout}>
          <button
            type="submit"
            style={{
              background: 'transparent',
              border: '2px solid #666',
              color: '#AAAAAA',
              padding: '8px 24px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: '0.9rem',
            }}
          >
            🚪 LOGOUT
          </button>
        </form>
      </div>
    </main>
  )
}
