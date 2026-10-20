import qualityGuide from "@/data/editorial-blog-posts.json";
import priceFactorsGuide from "@/data/tmt-bar-price-factors-post.json";
import manufacturingGuide from "@/data/tmt-bar-manufacturing-process-post.json";
import gradesGuide from "@/data/tmt-bar-grades-post.json";
import buyingGuide from "@/data/factors-to-consider-when-buying-tmt-bars-post.json";
import chooseGradeGuide from "@/data/how-to-choose-the-right-tmt-bar-grade-post.json";
import ductilityGuide from "@/data/why-ductility-matters-in-tmt-steel-post.json";
import testingGuide from "@/data/how-tmt-steel-is-tested-during-manufacturing-post.json";
import type { BlogCategory } from "@/lib/blog-content";

export type EditorialBlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  category: BlogCategory;
  readTime: string;
  guideLabel: string;
  guideHeadingIds?: string[];
  publishedAt?: string;
  image: string;
  mobileImage: string;
  imageAlt: string;
  bodyHtml: string;
};

export const editorialBlogPosts: EditorialBlogPost[] = [
  buyingGuide as EditorialBlogPost,
  chooseGradeGuide as EditorialBlogPost,
  ductilityGuide as EditorialBlogPost,
  testingGuide as EditorialBlogPost,
  gradesGuide as EditorialBlogPost,
  manufacturingGuide as EditorialBlogPost,
  priceFactorsGuide as EditorialBlogPost,
  qualityGuide as EditorialBlogPost,
];

export function getEditorialBlogPost(slug: string) {
  return editorialBlogPosts.find((post) => post.slug === slug);
}
