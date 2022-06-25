import React from "react";
import imgmono1 from "../../assets/imagesDraftArtistas/mono1.png"
import imgmono2 from "../../assets/imagesDraftArtistas/mono2.png"
import imgmono3 from "../../assets/imagesDraftArtistas/mono3.png"
import imgmono4 from "../../assets/imagesDraftArtistas/mono4.png"
import styles from "./styles/draftartistas.module.css";


const DraftArtistas = ({theme, td}) => {
  return (
    <div className={styles.containerDraftArtistas}>
      <div style={{display: 'flex', alignItems: 'center', gap: "3rem", justifyContent: 'center'}}>
        <div style={{backgroundImage: `url(${imgmono1})`}} className={styles.cardMono1and3}></div>
        <div style={{backgroundImage: `url(${imgmono2})`}} className={styles.cardMono2and4}></div>
        <div style={{backgroundImage: `url(${imgmono3})`}} className={styles.cardMono1and3}></div>
        <div style={{backgroundImage: `url(${imgmono4})`}} className={styles.cardMono2and4}></div>
      </div>
      <div className={styles.titleDraft} style={theme === "ligth" ? {} : {color: "#fff"}}>
        <h2 style={theme === "ligth" ? {color: "#011c44"} : {color: "#fff"}}>{td === "es" ? "PARTICIPA DE NUESTRO" : "PARTICIPATE IN OUR"}</h2>
        <h1>{td === "es" ? "DRAFT DE ARTISTAS" : "ARTISTS PROJECT"}</h1>
      </div>
      <div className={styles.btnIncribite}>{td === "es" ? "INSCRÍBETE" : "REGISTER"}</div>
    </div>
  );
};

export default DraftArtistas;
