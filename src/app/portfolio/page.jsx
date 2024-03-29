import React from "react";
import style from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div>
      <div className={style.selectTitle}>Choose a gallery</div>
      <div className={style.items}>
        <Link href="/portfolio/illustrations" className={style.item}>
          <span className={style.title}>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={style.item}>
          <span className={style.title}>Websites</span>
        </Link>
        <Link href="/portfolio/application" className={style.item}>
          <span className={style.title}>Application</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
