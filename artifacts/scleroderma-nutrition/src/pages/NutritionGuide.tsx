import { Link } from "wouter";
import { articles } from "../data/articles";

function ArticleCard({ article }: { article: typeof articles[0] }) {
  return (
    <Link href={`/nutrition-guide/${article.slug}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          position: "relative",
          height: 200,
          borderRadius: 4,
          overflow: "hidden",
          cursor: "pointer",
          display: "block",
        }}
      >
        <img
          src={article.image}
          alt={article.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.15) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 12,
            background: "#fff",
            color: "#222",
            fontSize: "0.68rem",
            fontWeight: 600,
            borderRadius: 999,
            padding: "2px 9px",
            lineHeight: 1.6,
          }}
        >
          {article.readTime}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 14,
            left: 14,
            right: 14,
            color: "#fff",
            fontWeight: 700,
            fontSize: "1rem",
            lineHeight: 1.3,
          }}
        >
          {article.title}
        </div>
      </div>
    </Link>
  );
}

export default function NutritionGuide() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 32px 60px" }}>
      <div style={{ marginBottom: 16 }}>
        <Link href="/" style={{ color: "#2a7a8c", fontSize: "0.85rem", textDecoration: "none" }}>
          Nutrition Guide
        </Link>
      </div>
      <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#111", marginBottom: 28 }}>
        Nutrition Guide
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
        }}
      >
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
