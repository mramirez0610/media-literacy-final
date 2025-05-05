"use client";
import styles from "@styles/components/nav.module.scss";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [
    {
      pageName: "Home",
      href: "/",
    },
    {
      pageName: "My Media",
      href: "/my-media",
    },
    {
      pageName: "Guidelines",
      href: "/guidelines",
    },
    {
      pageName: "My Plan",
      href: "/my-plan",
    },
    {
      pageName: "Long-Term",
      href: "/long-term",
    },
    {
      pageName: "Conclusion",
      href: "/conclusion",
    },
  ];

  const handlePageClick = (index) => {
    setCurrentPage(index + 1);
  };

  return (
    <nav className={styles.nav}>
      <ul>
        {pages.map((page, index) => (
          <li
            key={index}
            className={currentPage === index + 1 ? styles.active : ""}
            onClick={() => handlePageClick(index)}
          >
            <Link href={page.href}>{page.pageName}</Link>
          </li>
        ))}
      </ul>

      <div className={styles.navigationButtons}>
        {currentPage > 1 && (
          <Link href={pages[currentPage - 2].href}>
            <button onClick={() => setCurrentPage(currentPage - 1)}>
              Previous
            </button>
          </Link>
        )}
        {currentPage < pages.length && (
          <Link href={pages[currentPage].href}>
            <button onClick={() => setCurrentPage(currentPage + 1)}>
              Next
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}
