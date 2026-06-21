"use client";

import { useState } from "react";

export type OutfitSection = {
  title: string;
  items: string[];
};

export type SeasonOutfit = {
  id: string;
  label: string;
  title: string;
  when: string;
  walking: OutfitSection[];
  camp: OutfitSection[];
};

type Props = {
  seasons: SeasonOutfit[];
};

export default function BlogSeasonOutfit({ seasons }: Props) {
  const [active, setActive] = useState(seasons[0]?.id ?? "");

  return (
    <div className="blog-season-outfit">
      <div className="blog-seasons" role="tablist" aria-label="Season">
        {seasons.map((season) => (
          <button
            key={season.id}
            type="button"
            role="tab"
            aria-selected={active === season.id}
            className={`blog-season-btn${active === season.id ? " on" : ""}`}
            onClick={() => setActive(season.id)}
          >
            {season.label}
          </button>
        ))}
      </div>

      {seasons.map((season) => (
        <div
          key={season.id}
          role="tabpanel"
          className={`blog-outfit${active === season.id ? " on" : ""}`}
          hidden={active !== season.id}
        >
          <h3>{season.title}</h3>
          <p className="blog-outfit-when">{season.when}</p>
          <div className="blog-outfit-grid">
            <div>
              {season.walking.map((section) => (
                <div key={section.title}>
                  <h4>{section.title}</h4>
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div>
              {season.camp.map((section) => (
                <div key={section.title}>
                  <h4>{section.title}</h4>
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
