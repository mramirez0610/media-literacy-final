"use client";
import { useState, useEffect } from "react";
import Guideline from "@/components/guideline";
import styles from "@styles/pages/guidelines.module.scss";

export default function Guidelines() {
  const [guidelines, setGuidelines] = useState([]);

  useEffect(() => {
    async function getData() {
      const path = "/data/data.json";

      try {
        const res = await fetch(path);
        const data = await res.json();
        setGuidelines(data[0].guidelines);
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
      <h1>Guidelines</h1>
      <p>
        In chapter 9 of our textbook, Potter goes over 12 Guidelines of Media
        Literacy in detail. These guidelines act as a basis to help us build our
        own strategy to increase our awareness of the process of influence that
        the media currently dominates, and helps us gain control over this
        process to ascertain our own meanings from these messages to better our
        own lives. Let us go over them.
      </p>
      <ol>
        {guidelines.map((guideline, index) => (
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
