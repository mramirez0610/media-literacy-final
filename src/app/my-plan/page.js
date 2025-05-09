"use client";
import { useState, useEffect } from "react";
import Guideline from "@/components/guideline";
import styles from "@styles/pages/guidelines.module.scss";

export default function MyPlan() {
  const [myGuidelines, setMyGuidelines] = useState([]);

  useEffect(() => {
    async function getData() {
      const path = "/data/data.json";

      try {
        const res = await fetch(path);
        const data = await res.json();
        setMyGuidelines(data[1].myGuidelines);
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
      <h1>My Plan</h1>
      <p>
        After reading all of the guidelines, it&apos;s clear to see that each is
        integral when attempting to understand media literacy as a whole.
        Though, of those twelve, I chose 6 that I felt I needed the most growth
        in. These areas -- exposure tracking, knowledge building, mental coding,
        opinion analysis, message creation, and personal responsibility -- have
        had long and short term effects on my growth and personal opinions due
        to lack of necessary knowledge. This page outlines why exactly I chose
        these.
      </p>
      <ol>
        {myGuidelines.map((guideline, index) => (
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
