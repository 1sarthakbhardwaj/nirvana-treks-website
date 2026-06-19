"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";

type VsChip = { label: string; side: "a" | "b" };
type WorthChip = { label: string; positive?: boolean; hard?: boolean };
type FitnessQuestion = { question: string; options: { label: string; points: number }[] };

type VsPickerProps = {
  mode: "vs";
  labelA: string;
  labelB: string;
  chips: VsChip[];
};

type WorthPickerProps = {
  mode: "worth";
  chips: WorthChip[];
};

type FitnessPickerProps = {
  mode: "fitness";
  questions: FitnessQuestion[];
};

type Props = VsPickerProps | WorthPickerProps | FitnessPickerProps;

function VsPicker({ labelA, labelB, chips }: Omit<VsPickerProps, "mode">) {
  const [selected, setSelected] = useState<Set<number>>(new Set());

  function toggle(index: number) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  let a = 0;
  let b = 0;
  selected.forEach((i) => {
    if (chips[i]?.side === "a") a++;
    else b++;
  });
  const total = a + b;
  const aPct = total ? (a / total) * 100 : 50;
  const bPct = total ? (b / total) * 100 : 50;

  let lean = "Tap what matters to you above.";
  let why = "";
  if (total > 0) {
    if (a > b) {
      lean = `Leaning: ${labelA}`;
      why = `${labelA} fits more of what you picked.`;
    } else if (b > a) {
      lean = `Leaning: ${labelB}`;
      why = `${labelB} fits more of what you picked.`;
    } else {
      lean = "It is a tie, you would enjoy either.";
    }
  }

  return (
    <>
      <div className="blog-picker-chips">
        {chips.map((chip, i) => (
          <button
            key={chip.label}
            type="button"
            className={`blog-chip-btn${selected.has(i) ? ` on${chip.side === "b" ? " b" : ""}` : ""}`}
            onClick={() => toggle(i)}
          >
            {chip.label}
          </button>
        ))}
      </div>
      <div className="blog-picker-result">
        <span className="blog-picker-lean">{lean}</span>
        <div className="blog-picker-meter">
          <i className="a" style={{ width: `${aPct}%` }} />
          <i className="b" style={{ width: `${bPct}%` }} />
        </div>
        {why ? <p className="blog-picker-why">{why}</p> : null}
      </div>
    </>
  );
}

function WorthPicker({ chips }: Omit<WorthPickerProps, "mode">) {
  const [selected, setSelected] = useState<Set<number>>(new Set());

  function toggle(index: number) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  let pos = 0;
  let hard = false;
  let any = false;
  selected.forEach((i) => {
    any = true;
    const chip = chips[i];
    if (chip?.positive) pos++;
    if (chip?.hard) hard = true;
  });

  let lean = "Tap what you care about above.";
  let why = "";
  if (any) {
    if (hard && pos < 2) {
      lean = "Maybe not for you.";
      why =
        "If hardcore trekking is the goal, Bir is gentle. Look at Kheerganga or Churdhar instead.";
    } else if (pos >= 2) {
      lean = "Worth it for you.";
      why = "Bir Billing lines up with what you want.";
    } else {
      lean = "Could go either way.";
      why = "Worth it if the flight excites you, skippable if not.";
    }
  }

  return (
    <>
      <div className="blog-picker-chips">
        {chips.map((chip, i) => (
          <button
            key={chip.label}
            type="button"
            className={`blog-chip-btn${selected.has(i) ? " on" : ""}`}
            onClick={() => toggle(i)}
          >
            {chip.label}
          </button>
        ))}
      </div>
      <div className="blog-picker-result">
        <span className="blog-picker-lean">{lean}</span>
        {why ? <p className="blog-picker-why">{why}</p> : null}
      </div>
    </>
  );
}

function FitnessPicker({ questions }: Omit<FitnessPickerProps, "mode">) {
  const [answers, setAnswers] = useState<(number | null)[]>(
    () => questions.map(() => null),
  );

  function select(qIndex: number, points: number) {
    setAnswers((prev) => {
      const next = [...prev];
      next[qIndex] = points;
      return next;
    });
  }

  const done = answers.every((a) => a !== null);
  const sum = answers.reduce<number>((acc, a) => acc + (a ?? 0), 0);

  let lean = "Answer all three to see your match.";
  let why: ReactNode = "";
  if (done) {
    if (sum <= 2) {
      lean = "Start with EASY treks.";
      why = (
        <>
          Try Triund or a short weekend trek first. See the{" "}
          <Link href="/blog/2-day-treks-near-delhi-for-first-timers">first-timer guide</Link>.
        </>
      );
    } else if (sum <= 4) {
      lean = "You are ready for MODERATE treks.";
      why = (
        <>
          Kheerganga or Kareri Lake should suit you. Read{" "}
          <Link href="/blog/easy-vs-moderate-himachal-treks">easy vs moderate</Link> for the full picture.
        </>
      );
    } else {
      lean = "You can handle tougher options.";
      why = (
        <>
          Look at Churdhar or longer routes. See our{" "}
          <Link href="/blog/best-weekend-treks-from-delhi">weekend trek list</Link>.
        </>
      );
    }
  }

  return (
    <>
      {questions.map((q, qi) => (
        <div key={q.question} className="blog-picker-qrow">
          <p className="blog-picker-q">{q.question}</p>
          <div className="blog-picker-chips">
            {q.options.map((opt) => (
              <button
                key={opt.label}
                type="button"
                className={`blog-chip-btn${answers[qi] === opt.points ? " on" : ""}`}
                onClick={() => select(qi, opt.points)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      ))}
      <div className="blog-picker-result">
        <span className="blog-picker-lean">{lean}</span>
        {why ? <p className="blog-picker-why">{why}</p> : null}
      </div>
    </>
  );
}

export default function BlogInteractivePicker(props: Props) {
  return (
    <div className="blog-picker">
      {props.mode === "vs" ? (
        <>
          <h3>Not sure? Tap what matters to you</h3>
          <p className="blog-picker-sub">Pick as many as you like. We will lean you one way.</p>
          <VsPicker labelA={props.labelA} labelB={props.labelB} chips={props.chips} />
        </>
      ) : null}
      {props.mode === "worth" ? (
        <>
          <h3>Is it worth it for you?</h3>
          <p className="blog-picker-sub">Tap what you care about.</p>
          <WorthPicker chips={props.chips} />
        </>
      ) : null}
      {props.mode === "fitness" ? (
        <>
          <h3>Quick fitness self-check</h3>
          <p className="blog-picker-sub">Answer three questions. We will point you to the right tier.</p>
          <FitnessPicker questions={props.questions} />
        </>
      ) : null}
    </div>
  );
}
