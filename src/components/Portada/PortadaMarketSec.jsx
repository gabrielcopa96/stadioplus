import React from "react";
import styles from "./styles/portada.module.css";
import imagenPort from "../../assets/images/985a85d789bfbb87ee0160ef4c1694cf.jpg";
import imagenCardPort from "../../assets/images/card-transparente2.png";

const PortadaMarketSec = ({ td }) => {
  return (
    <div className={styles.containerPortadaMarketSec}>
      <div className={styles.containerTextPort}></div>
      <div className={styles.text}>
        <h1>
          {td === "es"
            ? "CONOCE EL NUEVO MARKETPLACE NFT"
            : "MEET THE NEW NFT MARKET"}
        </h1>
        <h1 style={{ color: "#d6302a" }}>STADIOPLUS</h1>
        <p>
          {td === "es"
            ? "Podrás conseguir cualquier NFT de deporte de la red de"
            : "You can get any NFT sport from the network"}{" "}
          <b style={{ letterSpacing: "1.2px" }}>ethereum</b> y
        </p>
        <p>
          <b style={{ letterSpacing: "1.2px" }}>BSC</b>{" "}
          {td === "es"
            ? "con solo un 1% de comisión"
            : "with only 1% commission"}
        </p>
        <div className={styles.btnMercadoSec}>{td === "es" ? "MERCADO SECUNDARIO" : "SECONDARY MARKET"}</div>
      </div>
      <div
        className={styles.portadaMarketSec}
        style={{
          backgroundImage: `linear-gradient(#1a17369d, #1a173690, #1a1736a9), url(${imagenPort})`,
        }}
      ></div>
      <img src={imagenCardPort} alt="card" className={styles.imgCard} />
    </div>
  );
};

export default PortadaMarketSec;
