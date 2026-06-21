import { BLOG_POSTS } from "./posts";
import { getBlogFaq } from "./registry";

let cached: string | null = null;

/**
 * Compact, model-friendly summary of every published blog post: title,
 * description, link path, and a couple of FAQ Q&As. Used to ground the
 * chatbot in the journal content. Built once and cached. FAQs are pulled
 * from the shared blog registry so new posts are picked up automatically.
 */
export function getBlogKnowledge(): string {
  if (cached) return cached;

  const entries = BLOG_POSTS.map((post) => {
    const faqLines = getBlogFaq(post.slug)
      .slice(0, 2)
      .map((f) => `  - Q: ${f.question} A: ${f.answer}`)
      .join("\n");

    return [
      `## ${post.title} (/blog/${post.slug})`,
      `- ${post.description}`,
      faqLines,
    ]
      .filter(Boolean)
      .join("\n");
  });

  cached = entries.join("\n\n");
  return cached;
}
