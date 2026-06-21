import type { ComponentType } from "react";
import type { BlogFaqItem } from "./types";

import BestWeekendTreksFromDelhiArticle from "@/components/blog/articles/best-weekend-treks-from-delhi";
import HowToReachKasolFromDelhiArticle from "@/components/blog/articles/how-to-reach-kasol-from-delhi";
import TwoDayTreksFirstTimersArticle from "@/components/blog/articles/2-day-treks-near-delhi-for-first-timers";
import OvernightVolvoToHimachalArticle from "@/components/blog/articles/overnight-volvo-to-himachal";
import TriundTrekGuideArticle from "@/components/blog/articles/triund-trek-guide";
import KheergangaTrekFromKasolArticle from "@/components/blog/articles/kheerganga-trek-from-kasol";
import KareriLakeTrekArticle from "@/components/blog/articles/kareri-lake-trek";
import ChurdharTrekGuideArticle from "@/components/blog/articles/churdhar-trek-guide";
import YullaKandaTrekArticle from "@/components/blog/articles/yulla-kanda-trek";
import TriundVsKheergangaArticle from "@/components/blog/articles/triund-vs-kheerganga";
import BirBillingTrekkingParaglidingArticle from "@/components/blog/articles/bir-billing-trekking-paragliding";
import EasyVsModerateHimachalTreksArticle from "@/components/blog/articles/easy-vs-moderate-himachal-treks";
import BestTimeToTrekHimachalArticle from "@/components/blog/articles/best-time-to-trek-himachal";
import SnowTreksHimachalWinterArticle from "@/components/blog/articles/snow-treks-himachal-winter";
import MonsoonTrekkingHimachalArticle from "@/components/blog/articles/monsoon-trekking-himachal";
import FirstTrekPackingListArticle from "@/components/blog/articles/first-trek-packing-list";
import HowToGetTrekFit3WeeksArticle from "@/components/blog/articles/how-to-get-trek-fit-3-weeks";
import WhatToWearTrekkingHimachalArticle from "@/components/blog/articles/what-to-wear-trekking-himachal";

import { CHURDHAR_FAQ, CHURDHAR_HOWTO } from "./faq-churdhar";
import { FIRST_TIMERS_FAQ } from "./faq-first-timers";
import { KARERI_FAQ, KARERI_HOWTO } from "./faq-kareri";
import { KASOL_OVERNIGHT_HOWTO, KASOL_TRAVEL_FAQ } from "./faq-kasol";
import { KHEERGANGA_FAQ } from "./faq-kheerganga";
import { TRIUND_FAQ, TRIUND_HOWTO } from "./faq-triund";
import { VOLVO_HIMACHAL_FAQ } from "./faq-volvo";
import { WEEKEND_TREKS_FAQ } from "./faq-weekend-treks";
import { YULLA_KANDA_FAQ, YULLA_KANDA_HOWTO } from "./faq-yulla-kanda";
import { TRIUND_VS_KHEERGANGA_FAQ } from "./faq-triund-vs-kheerganga";
import { BIR_BILLING_FAQ } from "./faq-bir-billing";
import { EASY_VS_MODERATE_FAQ } from "./faq-easy-vs-moderate";
import { BEST_TIME_HIMACHAL_FAQ } from "./faq-best-time-himachal";
import { SNOW_TREKS_FAQ } from "./faq-snow-treks";
import { MONSOON_TREKKING_FAQ } from "./faq-monsoon-trekking";
import { FIRST_TREK_PACKING_FAQ } from "./faq-first-trek-packing";
import { TREK_FIT_FAQ } from "./faq-trek-fit";
import { WHAT_TO_WEAR_FAQ } from "./faq-what-to-wear";

export type BlogHowTo = {
  name: string;
  totalTime: string;
  steps: { position: number; name: string; text: string }[];
};

export type BlogArticleEntry = {
  Component: ComponentType;
  faq?: BlogFaqItem[];
  howTo?: BlogHowTo;
};

/**
 * Single source of truth that binds each blog slug to its article component,
 * FAQ list and optional HowTo schema. Adding a new post is one entry here
 * plus its metadata in posts.ts. The route page and chatbot knowledge both
 * read from this registry so nothing has to be wired up by hand per slug.
 */
export const BLOG_REGISTRY: Record<string, BlogArticleEntry> = {
  "best-weekend-treks-from-delhi": {
    Component: BestWeekendTreksFromDelhiArticle,
    faq: WEEKEND_TREKS_FAQ,
  },
  "how-to-reach-kasol-from-delhi": {
    Component: HowToReachKasolFromDelhiArticle,
    faq: KASOL_TRAVEL_FAQ,
    howTo: KASOL_OVERNIGHT_HOWTO,
  },
  "2-day-treks-near-delhi-for-first-timers": {
    Component: TwoDayTreksFirstTimersArticle,
    faq: FIRST_TIMERS_FAQ,
  },
  "overnight-volvo-to-himachal": {
    Component: OvernightVolvoToHimachalArticle,
    faq: VOLVO_HIMACHAL_FAQ,
  },
  "triund-trek-guide": {
    Component: TriundTrekGuideArticle,
    faq: TRIUND_FAQ,
    howTo: TRIUND_HOWTO,
  },
  "kheerganga-trek-from-kasol": {
    Component: KheergangaTrekFromKasolArticle,
    faq: KHEERGANGA_FAQ,
  },
  "kareri-lake-trek": {
    Component: KareriLakeTrekArticle,
    faq: KARERI_FAQ,
    howTo: KARERI_HOWTO,
  },
  "churdhar-trek-guide": {
    Component: ChurdharTrekGuideArticle,
    faq: CHURDHAR_FAQ,
    howTo: CHURDHAR_HOWTO,
  },
  "yulla-kanda-trek": {
    Component: YullaKandaTrekArticle,
    faq: YULLA_KANDA_FAQ,
    howTo: YULLA_KANDA_HOWTO,
  },
  "triund-vs-kheerganga": {
    Component: TriundVsKheergangaArticle,
    faq: TRIUND_VS_KHEERGANGA_FAQ,
  },
  "bir-billing-trekking-paragliding": {
    Component: BirBillingTrekkingParaglidingArticle,
    faq: BIR_BILLING_FAQ,
  },
  "easy-vs-moderate-himachal-treks": {
    Component: EasyVsModerateHimachalTreksArticle,
    faq: EASY_VS_MODERATE_FAQ,
  },
  "best-time-to-trek-himachal": {
    Component: BestTimeToTrekHimachalArticle,
    faq: BEST_TIME_HIMACHAL_FAQ,
  },
  "snow-treks-himachal-winter": {
    Component: SnowTreksHimachalWinterArticle,
    faq: SNOW_TREKS_FAQ,
  },
  "monsoon-trekking-himachal": {
    Component: MonsoonTrekkingHimachalArticle,
    faq: MONSOON_TREKKING_FAQ,
  },
  "first-trek-packing-list": {
    Component: FirstTrekPackingListArticle,
    faq: FIRST_TREK_PACKING_FAQ,
  },
  "how-to-get-trek-fit-3-weeks": {
    Component: HowToGetTrekFit3WeeksArticle,
    faq: TREK_FIT_FAQ,
  },
  "what-to-wear-trekking-himachal": {
    Component: WhatToWearTrekkingHimachalArticle,
    faq: WHAT_TO_WEAR_FAQ,
  },
};

export function getBlogEntry(slug: string): BlogArticleEntry | undefined {
  return BLOG_REGISTRY[slug];
}

export function getBlogFaq(slug: string): BlogFaqItem[] {
  return BLOG_REGISTRY[slug]?.faq ?? [];
}
