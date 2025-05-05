"use client";
import { useState, useEffect } from "react";

export default function Guidelines() {
  const [guidelines, setGuidelines] = useState([]);

  useEffect(() => {
    async function getData() {
      const path = "/data/data.json";

      try {
        const res = await fetch(path);
        if (!res.ok) {
          throw new Error(res.status);
        }
        const data = await res.json();
        setGuidelines(data.guidelines);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  return (
    <div>
      <div>Guidelines</div>
      {guidelines.map((guideline, index) => (
        <li key={index}>{guideline.title}</li>
      ))}
    </div>
  );
}
