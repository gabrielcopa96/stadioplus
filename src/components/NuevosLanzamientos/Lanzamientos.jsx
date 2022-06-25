import React from "react";
import styles from "./styles/lanzamientos.module.css";
import { CardsLanzamientos, CardsCollections } from "../helpers/cards/Cards.jsx";
import imagenBombonera from "../../assets/images/imagesCards/cc941eba818fff07dba0e731b32b467b.png";
import imagenDiego from "../../assets/images/imagesCards/70c8908cb3784c548fd697df7a60951f.png";
import imagenTomba from "../../assets/images/imagesCards/9265a0f7d03b010a5a831a160af0d90b.png";

const Lanzamientos = ({theme, td}) => {
  return (
    <div className={styles.containerLanzamientos}>
      <p style={theme === "ligth" ? {color: "#011c44"} : {color: "#fff"}}>{td === "es" ? "DESCUBRE NUESTROS" : "DISCOVER OUR"}</p>
      <h2 style={theme === "ligth" ? {color: "#011c44"} : {color: "#fff"}}>{td === "es" ? "NUEVOS LANZAMIENTOS" : "NEW RELEASES"}</h2>

      <div className={styles.seccionLanzamientos}>
        <h3>{td === "es" ? "OBRAS DESTACADAS" : "OUTSTANDING WORKS"}</h3>
      </div>
      <div className={styles.containerCardsLanzamientos}>
        <CardsLanzamientos
          image={imagenBombonera}
          theme={theme}
          td={td}
          title="LA BOMBONERA - TEMPLE OF WORLD FOOTBALL"
          price="0.034 BNB"
          pricealt="($10.88 / 10.14€)"
        />
        <CardsLanzamientos
          image={imagenDiego}
          title="EL SEMILLERO DEL MUNDO"
          theme={theme}
          td={td}
          price="5 BNB"
          pricealt="($1600.00 / 1490.50€)"
        />
        <CardsLanzamientos
         image={imagenTomba}
         title="TOMBA LA BOMBA"
         theme={theme}
         td={td}
         price="0.034 BNB"
         pricealt="($10.88 / 10.14€)"
        />
      </div>
      <div className={styles.seccionLanzamientos}>
        <h3>{td === "es" ? "COLLECIONES" : "COLLECTIONS"}</h3>
      </div>
      <div className={styles.containerCardsLanzamientos} id="collections">
      <CardsCollections
          image={imagenBombonera}
          title="LA BOMBONERA - TEMPLE OF WORLD FOOTBALL"
          theme={theme}
          td={td}
          price="0.034 BNB"
          pricealt="($10.88 / 10.14€)"
        />
        <CardsCollections
          image={imagenDiego}
          theme={theme}
          td={td}
          title="EL SEMILLERO DEL MUNDO"
          price="5 BNB"
          pricealt="($1600.00 / 1490.50€)"
        />
        <CardsCollections
         image={imagenTomba}
         title="TOMBA LA BOMBA"
         theme={theme}
         td={td}
         price="0.034 BNB"
         pricealt="($10.88 / 10.14€)"
        />
      </div>
    </div>
  );
};

export default Lanzamientos;
