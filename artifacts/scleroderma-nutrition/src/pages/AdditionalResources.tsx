export default function AdditionalResources() {
  const resources = [
    {
      org: "The National Scleroderma Foundation:",
      links: [
        {
          text: "Eating Well With Scleroderma",
          href: "https://scleroderma.org/resources/eating-well-with-scleroderma/",
        },
      ],
    },
    {
      org: "Scleroderma Research Foundation:",
      links: [
        {
          text: "Strategies and Recommendations for Diet and Nutrition in Scleroderma",
          href: "https://srfcure.org/living-with-scleroderma/resources/diet-nutrition-scleroderma/",
        },
      ],
    },
    {
      org: "Scleroderma Australia:",
      links: [
        {
          text: "Nutritional Needs in Scleroderma",
          href: "https://www.sclerodermaaustralia.com.au/wp-content/uploads/2021/09/Scleroderma-Aus-Nutritional-Needs-in-Scleroderma-web.pdf",
        },
        {
          text: "Taking Charge of Systemic Sclerosis (TOSS) - An Internet Self-Management Program",
          href: null,
        },
      ],
    },
    {
      org: "Scleroderma and Raynaud's UK:",
      links: [
        {
          text: "Nutrition and Scleroderma",
          href: "https://www.sruk.co.uk/about-scleroderma/signs-symptoms-of-scleroderma/managing-your-scleroderma-symptoms/nutrition-and-scleroderma/",
        },
      ],
    },
  ];

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 32px 60px" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#111", marginBottom: 32 }}>
        Additional Resources
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        {resources.map((section, i) => (
          <div key={i}>
            <p style={{ fontSize: "1rem", color: "#222", margin: "0 0 8px", fontWeight: 500 }}>
              {section.org}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingLeft: 16 }}>
              {section.links.map((link, j) =>
                link.href ? (
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
                ) : (
                  <span key={j} style={{ color: "#444", fontSize: "0.97rem", lineHeight: 1.5 }}>
                    {link.text}
                  </span>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
