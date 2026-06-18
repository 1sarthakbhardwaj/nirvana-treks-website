import type { ReactNode } from "react";
import Link from "next/link";
import BlogTopoBackdrop from "@/components/blog/blog-topo-backdrop";

type Props = {
  breadcrumbTitle: string;
  children: ReactNode;
};

export default function BlogArticleShell({ breadcrumbTitle, children }: Props) {
  return (
    <div className="blog-root">
      <BlogTopoBackdrop />
      <main className="blog-wrap">
        <nav className="blog-crumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/blog">Journal</Link>
          <span>/</span>
          {breadcrumbTitle}
        </nav>
        <article className="blog-article">{children}</article>
      </main>
    </div>
  );
}
