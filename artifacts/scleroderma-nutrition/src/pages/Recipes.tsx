export default function Recipes() {
  const resources = [
    {
      org: "National Scleroderma Foundation:",
      links: [
        {
          text: "Holiday Recipe Booklet 2024",
          href: "https://scleroderma.org/wp-content/uploads/2024/12/Holiday-Recipe-Booklet-2024.pdf",
        },
      ],
    },
    {
      org: "Sclérodermie Québec:",
      links: [
        {
          text: "Nutrition and Recipe Book",
          href: "https://sclerodermie.ca/wp-content/uploads/2020/01/GuideAlimentairV2020_ang_br.pdf",
        },
      ],
    },
  ];

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 32px 60px" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#111", marginBottom: 32 }}>
        Recipes
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        {resources.map((section, i) => (
          <div key={i}>
            <p style={{ fontSize: "1rem", color: "#222", margin: "0 0 8px", fontWeight: 500 }}>
              {section.org}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingLeft: 16 }}>
              {section.links.map((link, j) => (
                <a
                  key={j}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#2a7a8c",
                    fontSize: "0.97rem",
                    textDecoration: "underline",
                    lineHeight: 1.5,
                  }}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
