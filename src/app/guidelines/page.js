"use client";
import { useState, useEffect } from "react";

export default function Guidelines() {
  const [guidelines, setGuidelines] = useState([]);

  useEffect(() => {
    async function getData() {
      const path = "/data/data.json";

      try {
        const res = await fetch(path);
        const data = await res.json();
        setGuidelines(data.guidelines);
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
      <h1>Guidelines</h1>
      {guidelines.map((guideline, index) => (
        <li key={index}>{guideline.title}</li>
      ))}
    </section>
  );
}
