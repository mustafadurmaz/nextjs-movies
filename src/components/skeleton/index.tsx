import React from "react";
import styles from "./styles.module.css";

interface Params {
  width?: number;
  height?: number;
}

function Skeleton({ width, height }: Params) {
  return <div className={styles.skeleton} style={{ width, height }}></div>;
}

export default Skeleton;
