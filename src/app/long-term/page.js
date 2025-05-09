"use client";
import { useState, useEffect } from "react";
import Guideline from "@/components/guideline";
import styles from "@styles/pages/guidelines.module.scss";

export default function LongTerm() {
  const [longTerm, setLongTerm] = useState([]);

  useEffect(() => {
    async function getData() {
      const path = "/data/data.json";

      try {
        const res = await fetch(path);
        const data = await res.json();
        setLongTerm(data[2].longTerm);
        if (!res.ok) {
          throw new Error(res.status);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  return (
    <section className={styles.guidelineSection}>
      <h1>Long Term</h1>
      <p>
        Improving media literacy isn't something that happens over the span of a
        few weeks, it takes effort that requires constant engagement and
        accountability. I've outlined my long-term plan from here on out, and
        how I'll continue to apply the six guidelines that I observed I was
        lacking in. The goal is to make media literacy something that I carry
        with me through my career, not just a 4 month endeavor.
      </p>
      <ol>
        {longTerm.map((guideline, index) => (
          <Guideline
            key={index}
            title={guideline.title}
            description={guideline.description}
          />
        ))}
      </ol>
    </section>
  );
}
