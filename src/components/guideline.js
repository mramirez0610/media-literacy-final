"use client";
import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import styles from "@styles/components/guideline.module.scss";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function Guideline({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const Button = () => {
    return <CaretDown size={26} onClick={() => setIsOpen(!isOpen)} />;
  };

  return (
    <li className={styles.guideline}>
      <div className={styles.title}>
        <h2>{title}</h2>
        <Button />
      </div>

      {isOpen && (
        <div className={styles.description}>
          <ReactMarkdown rehypePlugins={rehypeRaw}>{description}</ReactMarkdown>
        </div>
      )}
    </li>
  );
}
