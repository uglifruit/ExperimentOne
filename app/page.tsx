import FeatureCard from "@/components/FeatureCard";

const features = [
  {
    emoji: "📝",
    title: "AI Lesson Planner 3000",
    badge: "🔥 HOT NEW FEATURE",
    badgeColor: "#FF6600",
    description:
      "Tired of spending Sunday night crying into your planner? Let AI write your lesson plans in seconds! Your coffee will still be hot when class starts. Miracles DO happen!!",
    funFact: "Teachers spend an avg. 7 hrs/week on planning. AI gives those back to you!",
  },
  {
    emoji: "📊",
    title: "Auto-Grade-O-Matic™",
    badge: "⚡ SUPER SPEEDY",
    badgeColor: "#9900CC",
    description:
      "Upload a stack of essays and watch the AI grade them while you finally watch that TV show everyone's been talking about for 3 years. You deserve this.",
    funFact: "Grading 30 essays manually = 4 hours. With AI = 4 minutes. That's 236 extra minutes of napping.",
  },
  {
    emoji: "✉️",
    title: "Parent Email Composer",
    badge: "🛡️ SANITY SAVER",
    badgeColor: "#006699",
    description:
      'Generate professional, calm, non-passive-aggressive parent emails. AI removes the phrase "as I mentioned THREE TIMES already" automatically. Patent pending.',
    funFact: "Studies show teachers write 11+ parent emails per week. That's like a part-time job in typing.",
  },
  {
    emoji: "🎯",
    title: "Differentiation Engine",
    badge: "🌈 INCLUSIVE",
    badgeColor: "#009933",
    description:
      "Instantly create 4 versions of any assignment for different learning levels. No more writing the same worksheet four times while questioning your life choices.",
    funFact: "Differentiation used to take hours. Now it takes 30 seconds. Use the extra time to hydrate!",
  },
  {
    emoji: "📋",
    title: "IEP/504 Helper Bot",
    badge: "📎 PAPERWORK SLAYER",
    badgeColor: "#CC3300",
    description:
      "Navigate the ancient and mystical bureaucratic scrolls known as \"special education paperwork\" with AI guidance. Fewer forms, more teaching. Revolutionary concept!",
    funFact: "Special ed teachers spend up to 25% of their time on documentation. AI cuts that in half!",
  },
  {
    emoji: "🔔",
    title: "Substitute Plan Generator",
    badge: "🤒 GET WELL SOON",
    badgeColor: "#FF9900",
    description:
      "Sick day? Generate detailed sub plans at 5 AM while barely conscious. The AI asks no follow-up questions and does not require you to stand up. Medically approved.*",
    funFact: "*Not medically approved. Please actually rest. The AI handles it.",
  },
  {
    emoji: "💬",
    title: "Report Card Comment Bank",
    badge: "✏️ WRITER'S BLOCK CURE",
    badgeColor: "#660099",
    description:
      'Say goodbye to writing "is a pleasure to have in class" 30 times with increasing despair. AI generates unique, meaningful comments for every student. Even Ethan.',
    funFact: "Average teacher writes 150+ unique report card comments per year. That ends NOW.",
  },
  {
    emoji: "🧪",
    title: "Quiz & Test Factory",
    badge: "📐 TEST READY",
    badgeColor: "#006666",
    description:
      "Upload your notes, get a complete quiz with answer key in 60 seconds. Multiple choice, short answer, essay — all generated before your second cup of coffee.",
    funFact: "Creating a 20-question test from scratch: 90 min. With AI: 1 min. Math checks out.",
  },
  {
    emoji: "🌍",
    title: "Translate-O-Tron 9000",
    badge: "🗣️ MULTILINGUAL",
    badgeColor: "#003399",
    description:
      "Instantly translate handouts, newsletters, and permission slips into 50+ languages. Finally communicate with ALL your students' families without a babelfish.",
    funFact: "37% of US students speak a language other than English at home. Now you can reach them all!",
  },
];

const testimonials = [
  {
    name: "Mrs. Henderson",
    grade: "3rd Grade, Ohio",
    avatar: "👩‍🏫",
    quote:
      "I used to spend my weekends grading papers. NOW I spend them with my FAMILY. My kids think I was replaced by a robot. They're not wrong!!!",
    stars: 5,
  },
  {
    name: "Mr. Kowalski",
    grade: "High School History, Florida",
    avatar: "👨‍🏫",
    quote:
      "My lesson plans used to take 3 hours. Now they take 3 minutes. I used the extra time to learn guitar. I am NOT good at guitar but that's not Magic Teacher's fault.",
    stars: 5,
  },
  {
    name: "Ms. Patel",
    grade: "Special Ed, California",
    avatar: "🧑‍🏫",
    quote:
      "The IEP helper is LIFE CHANGING. I went from drowning in paperwork to merely very wet. Progress!!!",
    stars: 5,
  },
];

const faqs = [
  {
    q: "Is this actually free???",
    a: "YES! Totally FREE! No credit card! No hidden charges! Just pure AI magic for educators! (We're funded by VC money and optimism.)",
  },
  {
    q: "Will the AI grade my tests WRONG?",
    a: "Less wrong than a sleep-deprived teacher at 11pm. Plus you can always review! We recommend you check the work. Unlike with your students.",
  },
  {
    q: "Can the AI actually write better parent emails than me?",
    a: "Let's just say the AI has never accidentally sent an email to the wrong parent that started with 'Your kid is EXHAUSTING.' So... yes.",
  },
  {
    q: "Do I need to know computers real good?",
    a: "If you can find the 'Any' key, you're overqualified. Magic Teacher works on any internet browser from 1999 to present day!",
  },
];

export default function Home() {
  return (
    <main style={{ overflowX: "hidden" }}>

      {/* ===== HERO SECTION ===== */}
      <section
        style={{
          background: "linear-gradient(180deg, #000033 0%, #000066 50%, #330033 100%)",
          borderBottom: "4px solid #FF00FF",
          padding: "40px 20px 32px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative corner stars */}
        <div style={{ position: "absolute", top: 10, left: 10, fontSize: "2rem" }} className="spin-slow">⭐</div>
        <div style={{ position: "absolute", top: 10, right: 10, fontSize: "2rem" }} className="spin-slow">⭐</div>
        <div style={{ position: "absolute", bottom: 10, left: 30, fontSize: "1.5rem" }} className="bounce">🌟</div>
        <div style={{ position: "absolute", bottom: 10, right: 30, fontSize: "1.5rem" }} className="bounce">🌟</div>

        {/* Under construction badge */}
        <div className="flex justify-center mb-4 gap-3">
          <span className="construction">🚧 UNDER CONSTRUCTION 🚧</span>
        </div>

        {/* Main headline */}
        <div style={{ marginBottom: "12px" }}>
          <span className="blink" style={{ color: "#FF00FF", fontWeight: "bold", fontSize: "1rem", letterSpacing: "4px" }}>
            *** THE FUTURE OF EDUCATION IS HERE ***
          </span>
        </div>

        {/* Title with wave letters */}
        <h1 style={{ fontSize: "clamp(2rem, 6vw, 4rem)", fontWeight: "bold", marginBottom: "8px", lineHeight: 1.1 }}>
          {Array.from("✨ Magic Teacher ✨").map((char, i) => (
            <span key={i} className="wave-letter" style={{ color: i % 3 === 0 ? "#FFFF00" : i % 3 === 1 ? "#FF00FF" : "#00FFFF" }}>
              {char}
            </span>
          ))}
        </h1>

        <h2
          style={{
            color: "#FFFF00",
            fontSize: "clamp(1rem, 3vw, 1.5rem)",
            fontWeight: "bold",
            textShadow: "2px 2px 0 #000, 0 0 12px #FFFF00",
            marginBottom: "20px",
          }}
        >
          🤖 AI That Saves Teachers Time So They Can Do LITERALLY ANYTHING ELSE 🤖
        </h2>

        {/* Clipart row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            fontSize: "2.5rem",
            marginBottom: "24px",
            flexWrap: "wrap",
          }}
        >
          <span title="teacher" className="bounce" style={{ animationDelay: "0s" }}>👩‍🏫</span>
          <span title="robot" className="spin-slow">🤖</span>
          <span title="books">📚</span>
          <span title="pencil" className="bounce" style={{ animationDelay: "0.3s" }}>✏️</span>
          <span title="apple" className="bounce" style={{ animationDelay: "0.6s" }}>🍎</span>
          <span title="computer" className="spin-slow">💻</span>
          <span title="graduation" className="bounce" style={{ animationDelay: "0.9s" }}>🎓</span>
        </div>

        {/* Subheadline */}
        <p
          style={{
            color: "#CCCCFF",
            fontSize: "1rem",
            maxWidth: "600px",
            margin: "0 auto 28px",
            lineHeight: 1.6,
          }}
        >
          Teachers work <strong style={{ color: "#FF6600" }}>54 hours per week</strong> on average.
          Grading, planning, emails, paperwork... 😭<br />
          <span className="blink" style={{ color: "#00FF00", fontWeight: "bold" }}>MAGIC TEACHER AI GIVES YOU YOUR LIFE BACK!!!</span>
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <button className="geo-button glow-box" id="cta">
            🚀 TRY IT FREE!!! 🚀
          </button>
          <button
            className="geo-button"
            style={{ background: "linear-gradient(180deg, #009900, #006600)", borderColor: "#00FF00" }}
          >
            📧 JOIN OUR LISTSERV
          </button>
        </div>

        {/* Rainbow divider */}
        <div
          style={{
            height: "6px",
            background: "linear-gradient(90deg, #FF0000, #FF6600, #FFFF00, #00FF00, #00FFFF, #9900FF, #FF00FF)",
            marginTop: "32px",
            marginLeft: "-20px",
            marginRight: "-20px",
          }}
        />
      </section>

      {/* ===== STATS BANNER ===== */}
      <section
        style={{
          background: "#330033",
          borderBottom: "3px solid #FFFF00",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "16px",
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {[
            { num: "54 hrs", label: "Teacher work week", emoji: "😭" },
            { num: "7 hrs", label: "Weekly lesson planning", emoji: "📝" },
            { num: "150+", label: "Report card comments/yr", emoji: "✏️" },
            { num: "1 min", label: "With Magic Teacher AI", emoji: "⚡" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                border: "2px solid #FF00FF",
                padding: "12px",
                background: "rgba(0,0,0,0.4)",
              }}
            >
              <div style={{ fontSize: "2rem" }}>{stat.emoji}</div>
              <div style={{ color: "#FFFF00", fontWeight: "bold", fontSize: "1.8rem", lineHeight: 1 }}>{stat.num}</div>
              <div style={{ color: "#CCCCFF", fontSize: "0.75rem", marginTop: "4px" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURES GRID ===== */}
      <section
        id="features"
        style={{
          padding: "40px 20px",
          background: "linear-gradient(180deg, #000066, #000033)",
        }}
      >
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <span style={{ color: "#FF00FF", fontSize: "1.5rem", letterSpacing: "3px", display: "block" }}>
            ~~~ ★ ~~~
          </span>
          <h2
            style={{
              color: "#FFFF00",
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              fontWeight: "bold",
              textShadow: "2px 2px 0 #000, 0 0 16px #FFFF00",
              margin: "8px 0",
            }}
          >
            🌟 TOTALLY RAD FEATURES 🌟
          </h2>
          <p style={{ color: "#AAAAFF", fontSize: "1rem" }}>
            Click a card to learn more! (They don&apos;t actually do anything yet but WOW they look cool!!!)
          </p>
          <span style={{ color: "#FF00FF", fontSize: "1.5rem", letterSpacing: "3px", display: "block" }}>
            ~~~ ★ ~~~
          </span>
        </div>

        {/* Card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section
        style={{
          background: "#000033",
          borderTop: "4px double #FF00FF",
          borderBottom: "4px double #FF00FF",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#00FFFF",
            fontWeight: "bold",
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            textShadow: "0 0 12px #00FFFF",
            marginBottom: "32px",
          }}
        >
          🔮 HOW THE MAGIC WORKS (It&apos;s NOT Actual Magic) 🔮
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0",
            maxWidth: "900px",
            margin: "0 auto",
            flexWrap: "wrap",
          }}
        >
          {[
            { step: "1", emoji: "📥", label: "You upload your stuff", sub: "(notes, syllabus, cries for help)" },
            { step: "→", emoji: "", label: "", sub: "", arrow: true },
            { step: "2", emoji: "🤖", label: "AI does the hard work", sub: "(it never complains, unlike Ethan)" },
            { step: "→", emoji: "", label: "", sub: "", arrow: true },
            { step: "3", emoji: "🎉", label: "You get free time!", sub: "(use it wisely. or don't.)" },
          ].map((item, i) =>
            item.arrow ? (
              <div key={i} style={{ display: "flex", alignItems: "center", padding: "0 8px", color: "#FFFF00", fontSize: "2rem", fontWeight: "bold" }}>
                →
              </div>
            ) : (
              <div
                key={i}
                style={{
                  border: "3px solid #FFFF00",
                  background: "rgba(0,0,50,0.8)",
                  padding: "20px 16px",
                  minWidth: "180px",
                  flex: "1",
                  maxWidth: "220px",
                }}
              >
                <div
                  style={{
                    background: "#FF00FF",
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 10px",
                  }}
                >
                  {item.step}
                </div>
                <div style={{ fontSize: "2.5rem", marginBottom: "8px" }}>{item.emoji}</div>
                <div style={{ color: "#FFFF00", fontWeight: "bold", fontSize: "0.95rem" }}>{item.label}</div>
                <div style={{ color: "#AAAAFF", fontSize: "0.75rem", marginTop: "4px" }}>{item.sub}</div>
              </div>
            )
          )}
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section
        id="testimonials"
        style={{
          background: "linear-gradient(180deg, #1a0033 0%, #000033 100%)",
          padding: "40px 20px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h2
            style={{
              color: "#FF00FF",
              fontWeight: "bold",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              textShadow: "0 0 12px #FF00FF",
            }}
          >
            💬 WHAT REAL TEACHERS ARE SAYING IN OUR GUESTBOOK!!! 💬
          </h2>
          <p style={{ color: "#AAAAFF", fontSize: "0.85rem" }}>
            (These are real. We did not make these up. Okay we made one up. Can you guess which?)
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                border: "3px solid #FF00FF",
                background: "rgba(0,0,0,0.5)",
                padding: "20px",
                position: "relative",
              }}
            >
              {/* Rainbow stripe */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: "linear-gradient(90deg, #FF0000, #FFFF00, #00FF00, #00FFFF, #FF00FF)",
                }}
              />
              <div style={{ marginTop: "8px" }} />
              <div style={{ fontSize: "3rem", textAlign: "center", marginBottom: "8px" }}>{t.avatar}</div>
              <div style={{ textAlign: "center", marginBottom: "12px" }}>
                {"⭐".repeat(t.stars)}
              </div>
              <p style={{ color: "#FFFFFF", fontSize: "0.9rem", fontStyle: "italic", lineHeight: 1.5, marginBottom: "12px" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ borderTop: "1px dashed #FF00FF", paddingTop: "8px" }}>
                <div style={{ color: "#FFFF00", fontWeight: "bold", fontSize: "0.9rem" }}>— {t.name}</div>
                <div style={{ color: "#AAAAFF", fontSize: "0.75rem" }}>{t.grade}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section
        id="faq"
        style={{
          background: "#000",
          borderTop: "4px solid #FFFF00",
          padding: "40px 20px",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2
            style={{
              color: "#FFFF00",
              fontWeight: "bold",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              textAlign: "center",
              marginBottom: "28px",
              textShadow: "0 0 10px #FFFF00",
            }}
          >
            ❓ FREQUENTLY ASKED QUESTIONS (F.A.Q.) ❓
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  border: "2px solid #FFFF00",
                  background: "rgba(0,0,50,0.6)",
                  padding: "16px",
                }}
              >
                <div style={{ color: "#FF00FF", fontWeight: "bold", fontSize: "1rem", marginBottom: "8px" }}>
                  Q: {faq.q}
                </div>
                <div style={{ color: "#CCFFCC", fontSize: "0.9rem", lineHeight: 1.5 }}>
                  A: {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section
        id="cta"
        style={{
          background: "linear-gradient(180deg, #330066 0%, #000033 100%)",
          borderTop: "4px solid #FF00FF",
          borderBottom: "4px solid #FF00FF",
          padding: "48px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "4rem", marginBottom: "16px" }} className="bounce">🎓</div>
        <h2
          style={{
            color: "#FFFF00",
            fontWeight: "bold",
            fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
            textShadow: "2px 2px 0 #000, 0 0 20px #FFFF00",
            marginBottom: "12px",
          }}
        >
          READY TO SAVE 10+ HOURS A WEEK???
        </h2>
        <p style={{ color: "#CCCCFF", fontSize: "1rem", maxWidth: "500px", margin: "0 auto 28px", lineHeight: 1.6 }}>
          Join <strong style={{ color: "#00FF00" }}>10,000+ teachers</strong> who have already discovered that
          working smarter is better than sobbing into a stack of essays at midnight!
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "24px" }}>
          <button className="geo-button glow-box" style={{ fontSize: "1.2rem", padding: "14px 36px" }}>
            ✨ START FREE TODAY ✨
          </button>
        </div>

        <p style={{ color: "#888888", fontSize: "0.75rem" }}>
          No credit card required • No virus (probably) • Best viewed in Netscape Navigator
        </p>

        {/* Decorative bottom clipart */}
        <div style={{ marginTop: "24px", fontSize: "1.8rem", letterSpacing: "8px" }}>
          🍎 📚 ✏️ 🤖 ⭐ 🎯 💡 🏆 📐 🔭
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer
        style={{
          background: "#000",
          borderTop: "3px double #FF00FF",
          padding: "24px 20px",
          textAlign: "center",
        }}
      >
        {/* Rainbow rule */}
        <div
          style={{
            height: "4px",
            background: "linear-gradient(90deg, #FF0000, #FF6600, #FFFF00, #00FF00, #00FFFF, #9900FF, #FF00FF)",
            marginBottom: "20px",
          }}
        />

        <div style={{ fontSize: "0.75rem", color: "#888888", lineHeight: 2 }}>
          <div style={{ color: "#FF00FF", fontWeight: "bold", marginBottom: "8px" }}>✨ Magic Teacher ✨</div>
          <div>© 1999–2025 Magic Teacher Inc. All Rights Reserved. Probably.</div>
          <div>
            Made with{" "}
            <span className="rainbow" style={{ fontWeight: "bold" }}>❤️ and MAGIC</span>
            {" "}by people who believe teachers deserve better.
          </div>
          <div style={{ marginTop: "8px" }}>
            <span className="blink" style={{ color: "#FF0000", fontWeight: "bold" }}>
              ⚠️ THIS SITE CONTAINS ANIMATED GIFS ⚠️
            </span>
          </div>
          <div style={{ marginTop: "8px", color: "#444" }}>
            Best viewed in 800×600 • Netscape Navigator 4.0 • Please enable JavaScript and Java Applets
          </div>
        </div>

        {/* Web ring banner */}
        <div
          style={{
            marginTop: "20px",
            border: "2px solid #FFFF00",
            display: "inline-block",
            padding: "8px 16px",
            background: "rgba(0,0,50,0.8)",
            fontSize: "0.75rem",
            color: "#FFFF00",
          }}
        >
          ⬅️ PREV &nbsp;|&nbsp;{" "}
          <span style={{ color: "#FF00FF" }}>🌐 EDUCATOR WEB RING 🌐</span>
          {" "}&nbsp;|&nbsp; NEXT ➡️
        </div>
      </footer>

    </main>
  );
}
