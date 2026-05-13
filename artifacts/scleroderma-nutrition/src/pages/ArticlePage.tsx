import { Link, useParams } from "wouter";
import { getArticleBySlug, articles } from "../data/articles";

function RelatedCard({ article }: { article: typeof articles[0] }) {
  return (
    <Link href={`/nutrition-guide/${article.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, cursor: "pointer" }}>
        <div style={{ height: 90, borderRadius: 4, overflow: "hidden" }}>
          <img src={article.image} alt={article.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "#222", lineHeight: 1.3, margin: 0 }}>
          {article.title}
        </p>
      </div>
    </Link>
  );
}

export default function ArticlePage() {
  const params = useParams<{ slug: string }>();
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return (
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 32px", textAlign: "center" }}>
        <h1 style={{ fontSize: "1.5rem", color: "#333" }}>Article not found</h1>
        <Link href="/" style={{ color: "#2a7a8c" }}>← Back to Nutrition Guide</Link>
      </div>
    );
  }

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div style={{ background: "#fff", minHeight: "60vh" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "24px 32px 60px" }}>

        {/* Breadcrumb */}
        <div style={{ marginBottom: 20 }}>
          <Link href="/" style={{ color: "#2a7a8c", fontSize: "0.85rem", textDecoration: "none" }}>
            Nutrition Guide
          </Link>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#111", lineHeight: 1.2, margin: "0 0 6px" }}>
          {article.title}
        </h1>
        <p style={{ fontSize: "0.8rem", color: "#888", marginBottom: 24 }}>
          Updated: {article.updatedDate}
        </p>

        {/* Image + Intro Box row — no text wrapping */}
        <div style={{
          display: "flex",
          gap: 24,
          marginBottom: 32,
          alignItems: "stretch",
        }}>
          <img
            src={article.image}
            alt={article.title}
            style={{
              width: 220,
              objectFit: "cover",
              borderRadius: 6,
              flexShrink: 0,
              display: "block",
            }}
          />
          <div style={{
            flex: 1,
            background: "#f0f6fa",
            borderLeft: "3px solid #2a7a8c",
            borderRadius: 4,
            padding: "16px 18px",
            fontSize: "0.88rem",
            lineHeight: 1.7,
            color: "#444",
          }}>
            {article.introBox.title && (
              <strong style={{ display: "block", marginBottom: 8, fontSize: "0.92rem", color: "#1e3a5f" }}>
                {article.introBox.title}
              </strong>
            )}
            <p style={{ margin: 0 }}>{article.introBox.body}</p>
          </div>
        </div>

        {/* Article body */}
        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Divider */}
        <hr style={{ border: "none", borderTop: "1px solid #e5e5e5", margin: "48px 0 32px" }} />

        {/* Recent Posts */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#111", margin: 0 }}>Recent Posts</h3>
            <Link href="/" style={{ fontSize: "0.8rem", color: "#2a7a8c", textDecoration: "none" }}>See All</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {related.map((a) => <RelatedCard key={a.id} article={a} />)}
          </div>
        </div>
      </div>

      <style>{`
        .article-body {
          font-size: 0.97rem;
          line-height: 1.8;
          color: #333;
        }
        .article-body h2 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #111;
          margin: 28px 0 10px;
        }
        .article-body h3 {
          font-size: 1rem;
          font-weight: 700;
          color: #222;
          margin: 20px 0 8px;
        }
        .article-body p {
          margin: 0 0 14px;
        }
        .article-body ul, .article-body ol {
          margin: 0 0 16px 0;
          padding-left: 1.4em;
        }
        .article-body li {
          margin-bottom: 6px;
        }
        .article-body strong {
          color: #111;
        }
        .article-takeaway {
          background: #f5f8fa;
          border-radius: 6px;
          padding: 18px 20px;
          margin-top: 28px;
          border-left: 3px solid #2a7a8c;
        }
        .article-takeaway strong {
          display: block;
          margin-bottom: 8px;
          color: #1e3a5f;
        }
        .article-takeaway p, .article-takeaway ul {
          margin: 0;
          color: #444;
        }
        @media (max-width: 600px) {
          .article-intro-row {
            flex-direction: column;
          }
          .article-intro-row img {
            width: 100% !important;
            height: 200px !important;
          }
        }
      `}</style>
    </div>
  );
}
