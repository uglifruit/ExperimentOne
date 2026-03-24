"use client";

import Link from 'next/link'

interface NavBarProps {
  userEmail?: string | null
}

export default function NavBar({ userEmail }: NavBarProps) {
  return (
    <nav className="geo-nav sticky top-0 z-50">
      {/* Marquee bar */}
      <div
        style={{
          background: "#000",
          borderBottom: "2px solid #FF00FF",
          overflow: "hidden",
          height: "28px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span className="marquee-inner" style={{ color: "#FFFF00", fontSize: "0.85rem", fontWeight: "bold" }}>
          ⭐ WELCOME TO MAGIC TEACHER — THE #1 AI SITE FOR EDUCATORS ON THE INFORMATION SUPERHIGHWAY ⭐ &nbsp;&nbsp;&nbsp; 🎉 BEST VIEWED IN NETSCAPE NAVIGATOR 4.0 AT 800×600 🎉 &nbsp;&nbsp;&nbsp; ✨ AI IS TOTALLY TUBULAR ✨ &nbsp;&nbsp;&nbsp; 🚧 ALWAYS UNDER CONSTRUCTION 🚧 &nbsp;&nbsp;&nbsp; ☎ AOL KEYWORD: MAGICTEACHER ☎ &nbsp;&nbsp;&nbsp;
        </span>
      </div>

      {/* Main nav */}
      <div
        className="flex items-center justify-between px-4 py-2 flex-wrap gap-2"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span style={{ fontSize: "2rem" }} className="spin-slow">✨</span>
          <span
            style={{
              fontSize: "1.4rem",
              fontWeight: "bold",
              textShadow: "0 0 8px #FF00FF, 0 0 16px #FF00FF",
            }}
            className="rainbow"
          >
            Magic Teacher
          </span>
          <span style={{ fontSize: "2rem" }} className="spin-slow" suppressHydrationWarning>✨</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 flex-wrap">
          <a href="#features" className="geo-nav-link">🏠 Home</a>
          <a href="#features" className="geo-nav-link">🤖 AI Tools</a>
          <Link href="/guestbook" className="geo-nav-link">💬 Guestbook</Link>
          <a href="#faq" className="geo-nav-link">❓ FAQ</a>
          <a href="#cta" className="geo-nav-link">📧 Email Us</a>
        </div>

        {/* Right side: auth + visitor counter */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Auth button */}
          {userEmail ? (
            <Link
              href="/vip"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'linear-gradient(180deg, #FFD700, #FF6600)',
                border: '2px outset #FFE566',
                color: '#000',
                fontWeight: 'bold',
                fontSize: '0.85rem',
                padding: '6px 14px',
                textDecoration: 'none',
                letterSpacing: '1px',
                whiteSpace: 'nowrap',
              }}
            >
              👑 VIP AREA
            </Link>
          ) : (
            <Link
              href="/login"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'linear-gradient(180deg, #FF00FF, #9900CC)',
                border: '2px outset #FF99FF',
                color: '#FFFF00',
                fontWeight: 'bold',
                fontSize: '0.85rem',
                padding: '6px 14px',
                textDecoration: 'none',
                letterSpacing: '1px',
                whiteSpace: 'nowrap',
                animation: 'pulse-glow 2s ease-in-out infinite',
              }}
            >
              🔐 VIP LOGIN / REGISTER
            </Link>
          )}

          {/* Visitor counter */}
          <div className="flex flex-col items-center" style={{ fontSize: "0.65rem", color: "#AAAAAA" }}>
            <span>YOU ARE VISITOR #</span>
            <span className="visitor-counter">0004269</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
