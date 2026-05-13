import { Link, useLocation } from "wouter";

const navLinks = [
  { label: "Nutrition Guide", href: "/" },
  { label: "Additional Resources", href: "/additional-resources" },
  { label: "Recipes", href: "/recipes" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#f5f5f5" }}>
      {/* Header */}
      <header style={{ background: "#daeaf4", borderBottom: "1px solid #c2d9e8" }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "18px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: "1.25rem",
              color: "#1e3a5f",
              lineHeight: 1.25,
              maxWidth: 200,
            }}>
              Scleroderma Nutrition Support
            </div>
          </Link>
          <nav style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {navLinks.map((link) => {
              const isActive = location === link.href || (link.href === "/" && location === "");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    textDecoration: "none",
                    color: isActive ? "#2a7a8c" : "#2a7a8c",
                    fontWeight: isActive ? 600 : 400,
                    fontSize: "0.95rem",
                    borderBottom: isActive ? "2px solid #2a7a8c" : "2px solid transparent",
                    paddingBottom: 2,
                    transition: "color 0.15s",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main */}
      <main style={{ flex: 1 }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={{ background: "#1a2744", padding: "40px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h3 style={{ color: "#fff", fontSize: "1.75rem", fontWeight: 700, marginBottom: 8 }}>Contact</h3>
          <a
            href="mailto:hirti@amc.edu"
            style={{ color: "#cce4f0", fontSize: "0.95rem", textDecoration: "none" }}
          >
            hirti@amc.edu
          </a>
        </div>
      </footer>
    </div>
  );
}
