import React from "react";
import styles from "./styles/buttons.module.css";

export const Buttons = (props) => {
  const { title, theme } = props;
  return (
    <>
      {theme === "ligth"
        ?  <div className={styles.btn}>{title}</div>
        :  <div className={styles.btn2}>{title}</div>
      }
    </>
  );
};

export const ButtonsAlt = (props) => {
  const { title } = props;

  return (
    <a
      href="#"
      className={`${styles.button} ${styles.ribbonOutset} ${styles.border}`}
    >
      {title}
    </a>
  );
};
