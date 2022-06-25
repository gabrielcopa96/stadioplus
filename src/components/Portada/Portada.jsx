import React from "react";
import styles from "./styles/portada.module.css";
import imgBasket from "../../assets/images/portada-basket.png";
import imagenFondoBasket from "../../assets/images/72201c8f3d121877824bb35c82b28175.png";

export const Portada = ({theme, td}) => {
  return (
    <div className={styles.containerPortada}>
      <div className={styles.textPortada}>
        <div>
          <h1 style={theme === "ligth" ? {color: "#020202"} : {color: "#fff", position: "absolute", zIndex: "1", top: "20rem"}}>{td === "es" ? "DESCUBRE, COLECCIONA" : "DISCOVER AND COLLECT"}</h1>
          <h1 style={theme === "ligth" ? {color: "#020202"} : {color: "#fff", position: "absolute", zIndex: "1", top: "24.1rem"}}> {td === "es" ? "Y COMPRA INCREÍBLES" : "AND AMAZING BUY"}</h1>
          <h1 style={theme === "ligth" ? { color: "red", zIndex: 1 } : {color: "red", position: "absolute" ,zIndex: "1", top: "28.1rem"}}>NFTs</h1>
        </div>
        <div style={theme === "ligth" ? { color: "#011C44" } : {color: "#fff", position: "absolute", zIndex: "1", top: "32.5rem"}}>
          <p style={theme === "ligth" ? { marginBottom: "-.8rem", fontWeight: "600" } : {marginBottom: "-.8rem", fontWeight: "600", width: "86%", fontSize: ".95rem", fontFamily: "Montserrat"}}>
            {td === "es" ? 'StadioPlus es el primer mercado NFT de la comunidad del deporte.' : "StadioPlus is the sports community's first NFT marketplace."}
          </p>
          <p style={theme === "ligth" ? { marginBottom: "-.8rem", fontWeight: "600" } : {marginBottom: "-.8rem", fontWeight: "600", width: "86%", fontSize: ".95rem", fontFamily: "Montserrat"}}>
            {td === "es" ? "Descubre la oportunidad de poseer, vender y comercializar NFT." : "Discover the opportunity to own, sell and trade NFTs."}
          </p>
          <p style={{ fontWeight: "800" }}>{td === "es" ? "Explora el mercado para empezar." : "Explore the market to get started."}</p>
          <div className={styles.containerBtnsPortada}>
            <span className={styles.btnCreaNft}>{td === "es" ? "CREA TU NFT" : "CREATE YOUR NFT"}</span>
            <span className={styles.btnExplorar}>{td === "es" ? "EXPLORAR" : "EXPLORE"}</span>
          </div>
        </div>
      </div>
      <div className={styles.imagePortada}>
        <img src={imgBasket} alt="foto-basket" className={styles.imgBasket} />
        <div
          className={styles.containerImgPortada}
          style={{
            backgroundImage: `linear-gradient(#df2f2fab, #df2f2f9d, #ffffffd8), url(${imagenFondoBasket})`,
          }}
        >
        <div className={styles.cuadrado}></div>
        </div>
      </div>
    </div>
  );
};
