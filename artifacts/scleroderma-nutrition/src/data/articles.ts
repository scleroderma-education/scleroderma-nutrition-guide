import { articleContent } from "./articleContent";

export interface Article {
  id: string;
  title: string;
  readTime: string;
  image: string;
  slug: string;
  content: string;
  updatedDate: string;
  introBox: { title: string; body: string };
}

const base = import.meta.env.BASE_URL;

export const articles: Article[] = [
  {
    id: "1",
    slug: "eating-tips-newly-diagnosed",
    title: "Eating Tips for Newly Diagnosed Scleroderma Patients",
    readTime: "2 min read",
    image: `${base}images/img6.jpg`,
    updatedDate: "Dec 22, 2025",
    introBox: {
      title: "Getting Started: Key Dietary Tips for Living Well with Scleroderma",
      body: "Being newly diagnosed with scleroderma can feel overwhelming, especially when it comes to food and digestion. Many people find that small, consistent dietary changes help manage symptoms, improve comfort, and maintain energy. While everyone's experience is different, these general tips can help you start building healthy, supportive eating habits.",
    },
    content: articleContent["eating-tips-newly-diagnosed"],
  },
  {
    id: "2",
    slug: "eating-with-swallowing-difficulties",
    title: "Eating with Swallowing Difficulties",
    readTime: "2 min read",
    image: `${base}images/img4.png`,
    updatedDate: "Dec 22, 2025",
    introBox: {
      title: "Background:",
      body: "Scleroderma (systemic sclerosis) often affects the gastrointestinal tract, with up to 90% of patients experiencing some degree of esophageal involvement. Swallowing difficulties (dysphagia) are common and result from several factors: fibrosis and inflammation can stiffen the esophagus, impairing its ability to move food; microstomia (small mouth opening), dry mouth, and poor dentition can make chewing and swallowing harder; and muscle weakness or reflux-related changes may further disrupt the swallowing process. These issues can lead to malnutrition and reduced quality of life.",
    },
    content: articleContent["eating-with-swallowing-difficulties"],
  },
  {
    id: "3",
    slug: "vitamin-nutritional-deficiencies",
    title: "Vitamin and Nutritional Deficiencies in Scleroderma",
    readTime: "3 min read",
    image: `${base}images/img3.jpg`,
    updatedDate: "Feb 20, 2025",
    introBox: {
      title: "Vitamin and Nutritional Deficiencies in Scleroderma: What Patients Should Know",
      body: "Scleroderma (systemic sclerosis) often affects the gastrointestinal (GI) tract, leading to malnutrition and deficiencies in key vitamins and minerals. These deficiencies can worsen symptoms and impact overall health, so understanding them is important for disease management.",
    },
    content: articleContent["vitamin-nutritional-deficiencies"],
  },
  {
    id: "4",
    slug: "constipation-gut-health",
    title: "Constipation and Gut Health in Scleroderma",
    readTime: "3 min read",
    image: `${base}images/img1.jpg`,
    updatedDate: "Dec 22, 2025",
    introBox: {
      title: "Scleroderma Gut Health Tips",
      body: "Scleroderma is a condition that can affect many parts of your body, including your digestive system. Problems like constipation, bloating, diarrhea, and trouble absorbing nutrients are common. These issues happen because scleroderma can slow down the movement of food through your gut (called reduced peristalsis) and sometimes cause too many bacteria to grow in your small intestine (called small intestinal bacterial overgrowth, or SIBO).",
    },
    content: articleContent["constipation-gut-health"],
  },
  {
    id: "5",
    slug: "managing-gerd",
    title: "Managing GERD with Scleroderma",
    readTime: "2 min read",
    image: `${base}images/img7.png`,
    updatedDate: "Dec 22, 2025",
    introBox: {
      title: "",
      body: "Gastroesophageal reflux disease (GERD) is common in systemic sclerosis (SSc, scleroderma) due to esophageal dysmotility and fibrosis, which impair the normal movement of food and reduce lower esophageal sphincter (LES) pressure, making reflux more severe and harder to control than in the general population. SSc patients often experience more persistent and severe symptoms, and are at higher risk for complications such as malnutrition and esophagitis.",
    },
    content: articleContent["managing-gerd"],
  },
  {
    id: "6",
    slug: "calorie-dense-foods",
    title: "Best Calorie-Dense Foods to Maintain Weight with Scleroderma",
    readTime: "2 min read",
    image: `${base}images/img2.jpg`,
    updatedDate: "Dec 20, 2025",
    introBox: {
      title: "",
      body: "For individuals with systemic sclerosis (scleroderma) who struggle to maintain their weight due to malabsorption, dysphagia, or other gastrointestinal issues, the best foods are those that are high in calories and protein, easy to swallow, and gentle on the digestive tract. Nutritional interventions should be tailored to individual symptoms, but several general recommendations can be made based on the medical literature.",
    },
    content: articleContent["calorie-dense-foods"],
  },
  {
    id: "7",
    slug: "anti-inflammatory-foods",
    title: "Top Anti-Inflammatory Foods for Scleroderma Patients",
    readTime: "3 min read",
    image: `${base}images/img5.jpg`,
    updatedDate: "Dec 22, 2025",
    introBox: {
      title: "",
      body: "Scleroderma is a chronic autoimmune condition that causes hardening and tightening of the skin and connective tissue. Inflammation plays a key role in the progression of this disease, often leading to discomfort and complications. Managing inflammation through diet can support overall health and may help ease symptoms. This post explores the best anti-inflammatory foods that can benefit people living with scleroderma.",
    },
    content: articleContent["anti-inflammatory-foods"],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
