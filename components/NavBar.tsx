"use client";

export default function NavBar() {
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
          <a href="#testimonials" className="geo-nav-link">💬 Guestbook</a>
          <a href="#faq" className="geo-nav-link">❓ FAQ</a>
          <a href="#cta" className="geo-nav-link">📧 Email Us</a>
        </div>

        {/* Visitor counter */}
        <div className="flex flex-col items-center" style={{ fontSize: "0.65rem", color: "#AAAAAA" }}>
          <span>YOU ARE VISITOR #</span>
          <span className="visitor-counter">0004269</span>
        </div>
      </div>
    </nav>
  );
}
