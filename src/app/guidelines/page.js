"use client";
import { useState, useEffect } from "react";
import Guideline from "@/components/guideline";

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
    <section>
      <h1>Guidelines</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe
        quis dolorum maxime, voluptas, assumenda perferendis quam dignissimos
        deserunt, repudiandae facere quaerat laborum amet nulla sed! Accusantium
        corrupti commodi porro laborum dolore tempore, aliquam vero odit
        eligendi dolorem voluptatem numquam praesentium repudiandae nemo at
        nihil quasi asperiores nesciunt iste reiciendis?
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
