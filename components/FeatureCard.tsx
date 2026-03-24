interface FeatureCardProps {
  emoji: string;
  title: string;
  description: string;
  badge?: string;
  badgeColor?: string;
  funFact?: string;
}

export default function FeatureCard({
  emoji,
  title,
  description,
  badge,
  badgeColor = "#FF00FF",
  funFact,
}: FeatureCardProps) {
  return (
    <div className="geo-card p-5 flex flex-col gap-3">
      {/* Rainbow top stripe handled by ::before in CSS */}
      <div style={{ marginTop: "4px" }} />

      {/* Emoji clipart */}
      <div className="text-center" style={{ fontSize: "3.5rem", lineHeight: 1 }}>
        {emoji}
      </div>

      {/* Badge */}
      {badge && (
        <div className="text-center">
          <span
            style={{
              background: badgeColor,
              color: "#000",
              fontWeight: "bold",
              fontSize: "0.7rem",
              padding: "2px 10px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              border: "2px outset #ffffff88",
            }}
          >
            {badge}
          </span>
        </div>
      )}

      {/* Title */}
      <h3
        style={{
          color: "#FFFF00",
          fontWeight: "bold",
          fontSize: "1.1rem",
          textAlign: "center",
          textShadow: "1px 1px 0 #000, 0 0 8px #FF00FF",
          margin: 0,
        }}
      >
        {title}
      </h3>

      {/* Divider */}
      <div className="geo-hr" />

      {/* Description */}
      <p
        style={{
          color: "#CCCCFF",
          fontSize: "0.9rem",
          lineHeight: 1.5,
          margin: 0,
          textAlign: "center",
        }}
      >
        {description}
      </p>

      {/* Fun fact */}
      {funFact && (
        <div
          style={{
            background: "rgba(255,255,0,0.1)",
            border: "1px dashed #FFFF00",
            padding: "6px 10px",
            fontSize: "0.78rem",
            color: "#FFFF99",
            fontStyle: "italic",
            textAlign: "center",
            marginTop: "4px",
          }}
        >
          💡 {funFact}
        </div>
      )}
    </div>
  );
}
