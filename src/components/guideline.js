"use client";
import { useState, useEffect } from "react";
import { CaretDown } from "@phosphor-icons/react";
import styles from "@styles/components/guideline.module.scss";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function Guideline({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const Button = () => {
    return <CaretDown size={26} onClick={() => setIsOpen(!isOpen)} />;
  };

  //had to look this up. animation wasn't working because of conditonal rendering, and i'm so tired.
  useEffect(() => {
    if (isOpen) {
      setAnimate(true);
    } else {
      const timer = setTimeout(() => setAnimate(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <li className={styles.guideline}>
      <div className={styles.title}>
        <h2>{title}</h2>
        <Button />
      </div>

      {(isOpen || animate) && (
        <div
          className={`${styles.description} ${
            animate ? (isOpen ? styles.fadeIn : styles.fadeOut) : ""
          }`}
        >
          <ReactMarkdown rehypePlugins={rehypeRaw}>{description}</ReactMarkdown>
        </div>
      )}
    </li>
  );
}
