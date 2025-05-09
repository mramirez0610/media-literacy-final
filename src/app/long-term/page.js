"use client";
import { useState, useEffect } from "react";
import Guideline from "@/components/guideline";

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
    <section>
      <h1>Long Term</h1>
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
