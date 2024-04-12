import Link from "next/link";
import React from "react";

import styles from "./styles.module.css";

function Footer() {
  return <footer className={styles.footer}>
    Made with by &nbsp;
    <Link href="https://github.com/mustafadurmaz" target="_blank">
      Mustafa Durmaz
    </Link>
  </footer>;
}

export default Footer;
