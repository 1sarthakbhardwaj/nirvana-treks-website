"use client";

import { useMemo, useState } from "react";

export type ChecklistItem = {
  title: string;
  note: string;
  essential: boolean;
};

export type ChecklistCategory = {
  name: string;
  subtitle?: string;
  items: ChecklistItem[];
};

type Props = {
  categories: ChecklistCategory[];
  progressLabel?: string;
};

export default function BlogChecklist({
  categories,
  progressLabel = "Tap items as you pack",
}: Props) {
  const flatItems = useMemo(
    () => categories.flatMap((category) => category.items),
    [categories]
  );
  const [checked, setChecked] = useState<Set<number>>(() => new Set());

  const total = flatItems.length;
  const done = checked.size;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  let index = 0;

  function toggle(itemIndex: number) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(itemIndex)) {
        next.delete(itemIndex);
      } else {
        next.add(itemIndex);
      }
      return next;
    });
  }

  return (
    <div className="blog-checklist">
      <div className="blog-check-progress">
        <div className="blog-check-pbar" aria-hidden="true">
          <i style={{ width: `${pct}%` }} />
        </div>
        <span className="blog-check-ptext">
          {done === 0 ? progressLabel : `${done} of ${total} done (${pct}%)`}
        </span>
      </div>

      {categories.map((category) => (
        <div key={category.name}>
          <p className="blog-check-cat">
            {category.name}
            {category.subtitle ? (
              <span className="blog-check-cat-sub">{category.subtitle}</span>
            ) : null}
          </p>
          {category.items.map((item) => {
            const itemIndex = index;
            index += 1;
            const isDone = checked.has(itemIndex);

            return (
              <button
                key={item.title}
                type="button"
                className={`blog-check-item${isDone ? " done" : ""}`}
                aria-pressed={isDone}
                onClick={() => toggle(itemIndex)}
              >
                <span className="blog-check-box" aria-hidden="true" />
                <span className="blog-check-it">
                  <b>{item.title}</b>
                  <small>{item.note}</small>
                </span>
                <span
                  className={`blog-check-tag${item.essential ? " ess" : " opt"}`}
                >
                  {item.essential ? "Essential" : "Optional"}
                </span>
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
