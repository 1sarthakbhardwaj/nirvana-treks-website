import { BLOG_POSTS } from "./posts";
import type { BlogFaqItem } from "./types";
import { MONSOON_TREKKING_FAQ } from "./faq-monsoon-trekking";
import { SNOW_TREKS_FAQ } from "./faq-snow-treks";
import { BEST_TIME_HIMACHAL_FAQ } from "./faq-best-time-himachal";
import { EASY_VS_MODERATE_FAQ } from "./faq-easy-vs-moderate";
import { BIR_BILLING_FAQ } from "./faq-bir-billing";
import { TRIUND_VS_KHEERGANGA_FAQ } from "./faq-triund-vs-kheerganga";
import { YULLA_KANDA_FAQ } from "./faq-yulla-kanda";
import { CHURDHAR_FAQ } from "./faq-churdhar";
import { KARERI_FAQ } from "./faq-kareri";
import { KHEERGANGA_FAQ } from "./faq-kheerganga";
import { TRIUND_FAQ } from "./faq-triund";
import { VOLVO_HIMACHAL_FAQ } from "./faq-volvo";
import { FIRST_TIMERS_FAQ } from "./faq-first-timers";
import { KASOL_TRAVEL_FAQ } from "./faq-kasol";
import { WEEKEND_TREKS_FAQ } from "./faq-weekend-treks";

const FAQ_BY_SLUG: Record<string, BlogFaqItem[]> = {
  "best-weekend-treks-from-delhi": WEEKEND_TREKS_FAQ,
  "how-to-reach-kasol-from-delhi": KASOL_TRAVEL_FAQ,
  "2-day-treks-near-delhi-for-first-timers": FIRST_TIMERS_FAQ,
  "overnight-volvo-to-himachal": VOLVO_HIMACHAL_FAQ,
  "triund-trek-guide": TRIUND_FAQ,
  "kheerganga-trek-from-kasol": KHEERGANGA_FAQ,
  "kareri-lake-trek": KARERI_FAQ,
  "churdhar-trek-guide": CHURDHAR_FAQ,
  "yulla-kanda-trek": YULLA_KANDA_FAQ,
  "triund-vs-kheerganga": TRIUND_VS_KHEERGANGA_FAQ,
  "bir-billing-trekking-paragliding": BIR_BILLING_FAQ,
  "easy-vs-moderate-himachal-treks": EASY_VS_MODERATE_FAQ,
  "best-time-to-trek-himachal": BEST_TIME_HIMACHAL_FAQ,
  "snow-treks-himachal-winter": SNOW_TREKS_FAQ,
  "monsoon-trekking-himachal": MONSOON_TREKKING_FAQ,
};

let cached: string | null = null;

/**
 * Compact, model-friendly summary of every published blog post: title,
 * description, link path, and a couple of FAQ Q&As. Used to ground the
 * chatbot in the journal content. Built once and cached.
 */
export function getBlogKnowledge(): string {
  if (cached) return cached;

  const entries = BLOG_POSTS.map((post) => {
    const faqs = FAQ_BY_SLUG[post.slug] ?? [];
    const faqLines = faqs
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
