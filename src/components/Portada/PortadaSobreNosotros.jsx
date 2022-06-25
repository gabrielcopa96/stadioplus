import React from "react";
import styles from "./styles/portada.module.css";
import imgEstadio from "../../assets/images/estadio.jpg";
import imgFutbolista from "../../assets/images/futbolista.png";

const PortadaSobreNosotros = ({ theme, td }) => {
  return (
    <div className={styles.containerMainNosotros}>
      <div style={{ position: "relative" }}>
        <div
          className={styles.containerPortadaSobreNosotros}
          style={{
            backgroundImage: `linear-gradient(#df2f2fab, #df2f2f9d, #ffffffd8), url(${imgEstadio})`,
          }}
        ></div>
        <img src={imgFutbolista} alt="futbolista" className={styles.imgFut} />
      </div>
      <div className={styles.containerTextNosotros}>
        <h2
          style={theme === "ligth" ? { color: "#011C44" } : { color: "#fff" }}
        >
          {td === "es" ? "CONÓCENOS" : "KNOW US"}
        </h2>
        <h1
          style={theme === "ligth" ? { color: "#020202" } : { color: "#fff" }}
        >
          {td === "es" ? "ACERCA DE" : "ABOUT"}{" "}
          <span
            style={theme === "ligth" ? { color: "#e04e5e" } : { color: "#fff" }}
          >
            {td === "es" ? "NOSOTROS" : "US"}
          </span>
        </h1>
        <div
          className={
            theme === "ligth" ? styles.textNosotros : styles.textNosotros2
          }
        >
          <p>{td === "es" ? "StadioPlus es una empresa web3 que tiende un puente entre el" : "StadioPlus is a web3 company that bridges the gap between"}</p>
          <p>{td === "es" ? "mundo del deporte y los NFTs, democratizaremos el acceso a" : "world of sport and NFTs, we will democratize access to"}</p>
          <p>{td === "es" ? "los aficionados al deporte permitiendo que todos descubran," : "sports fans allowing everyone to discover,"}</p>
          <p>{td === "es" ? "recopilen, compren y vendan NFT de deporte." : "collect, buy and sell sports NFTs."}</p>
        </div>
      </div>
    </div>
  );
};

export default PortadaSobreNosotros;
