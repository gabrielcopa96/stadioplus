import React from "react";
import styles from "./styles/blog.module.css";
import { CardsBlog } from "../helpers/cards/Cards.jsx";
import imagenFamericano from "../../assets/images/imagesCards/futbolamericano.jpg";
import imagenEstadioRojo from "../../assets/images/imagesCards/estadiorojo.jpg";
import imagenBrunoF from "../../assets/images/imagesCards/brunofernandes.png";

const Blog = ({theme, td}) => {
  return (
    <div className={styles.containerMainBlog}>
      <div className={styles.titleBlog} style={theme === "ligth" ? {} : {color: "#fff"}}>
        <h2 style={{marginBottom: "-.9rem"}}>{td === "es" ? "ACTUALIDAD Y NOTICIAS" : "CURRENT AND NEWS"}</h2>
        <h1>BLOG</h1>
      </div>
      <div style={{display: 'flex', alignItems: 'center', gap: "2rem", justifyContent: 'space-around'}}>
        <CardsBlog
          title="LOREMIPSUM DOLOR SIT"
          date="12.02.2022"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image={imagenFamericano}
        />
        <CardsBlog
          title="LOREMIPSUM DOLOR SIT"
          date="12.02.2022"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image={imagenEstadioRojo}
        />
        <CardsBlog
          title="LOREMIPSUM DOLOR SIT"
          date="12.02.2022"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image={imagenBrunoF}
        />
      </div>
      <div className={styles.btnLeermas}>{td === "es" ? "LEER MÁS" : "READ MORE"}</div>
    </div>
  );
};

export default Blog;
