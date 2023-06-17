"use client";

import React, { useEffect, useRef } from "react";
import styles from "./transition.module.css";

export default function AnimationFadeIn({ children }) {
  const transitionComponent = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      const component = transitionComponent.current;

      if (component) {
        component.className = `${styles.content} ${styles.fadeIn}`;
      }
    }, 0);
  }, []);

  return (
    <>
      <div className={styles.content} ref={transitionComponent}>
        {children}
      </div>
    </>
  );
}
