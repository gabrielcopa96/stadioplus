import React from "react";
import styles from "./styles/cards.module.css";
import { BsArrowUpRight } from "react-icons/bs";

export const CardsLanzamientos = (props) => {
  const { image, title, price, pricealt, theme, td } = props;

  return (
    <div style={{ position: "relative" }}>
      <img src={image} alt="image-nft" className={styles.imgBox} />
      <div className={styles.containerCard}>
        <div className={theme === "dark" ? styles.containerCardColorDark : styles.containerCardColor} style={theme === "ligth" ? { position: "absolute", bottom: "48px" } : {position: "absolute", bottom: "38px"}}>
          <h2>{title}</h2>
          <h3>{price}</h3>
          <p>{pricealt}</p>
        </div>
      </div>
      <div className={styles.btnComprar}>{td === "es" ? "COMPRAR" : "BUY"}</div>
    </div>
  );
};

export const CardsCollections = (props) => {
  const { image, title, price, pricealt, theme, td } = props;

  return (
    <div style={{ position: "relative" }}>
      <img src={image} alt="image-nft" className={styles.imgBox} />
      <div className={styles.containerCard}>
        <div className={theme === "dark" ? styles.containerCardColorDark : styles.containerCardColor} style={theme === "ligth" ? { position: "absolute", bottom: "48px" } : {position: "absolute", bottom: "38px"}}>
          <h2>{title}</h2>
          <h3>{price}</h3>
          <p>{pricealt}</p>
        </div>
      </div>
      <div className={styles.btnExplorar}>{td === "es" ? "EXPLORAR" : "EXPLORE"}</div>
    </div>
  );
};

export const CardsBlog = (props) => {
  const { image, title, date, description } = props;

  return (
    <div style={{ position: "relative" }}>
      <img src={image} alt="image-nft" className={styles.imgBox2} />
      <div className={styles.containerCardBlog}>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            paddingLeft: "1.1rem",
            color: "#fff",
          }}
        >
          <h2 style={{ marginBottom: "-1rem" }}>{title}</h2>
          <h3
            style={{
              fontWeight: "600",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            {date}
          </h3>
          <div style={{width: "80%"}}>
            <p style={{ fontFamily: "Montserrat, sans-serif" }}>
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.btnArrow}><BsArrowUpRight /></div>
    </div>
  );
};
