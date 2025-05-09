"use client";
import { useState, useEffect } from "react";
import Guideline from "@/components/guideline";

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
    <section>
      <h1>My Plan</h1>
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
