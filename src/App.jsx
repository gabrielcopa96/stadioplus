import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import { Portada } from "./components/Portada/Portada.jsx";
import Lanzamientos from "./components/NuevosLanzamientos/Lanzamientos.jsx";
import {
  Buttons,
  ButtonsAlt,
} from "./components/helpers/cards/buttons/Buttons.jsx";
import PortadaMarketSec from "./components/Portada/PortadaMarketSec.jsx";
import PortadaSobreNosotros from "./components/Portada/PortadaSobreNosotros.jsx";
import Blog from "./components/Blog/Blog.jsx";
import DraftArtistas from "./components/DraftArtistas/DraftArtistas.jsx";
import BannerNuevoToken from "./components/Portada/BannerNuevoToken.jsx";
import Footer from "./components/Footer/Footer.jsx";
import logoipsum1 from "./assets/images/logos/logo1-m.png";
import logoipsum2 from "./assets/images/logos/logo2-m.png";
import logoipsum3 from "./assets/images/logos/logo3-m.png";
import logoipsum4 from "./assets/images/logos/logo4-m.png";
import logoipsum5 from "./assets/images/logos/logo5-m.png";

function App() {
  const containerBtn = {
    width: "80%",
    margin: "10rem auto 5rem auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "3rem",
  };

  const sizeLogo = {
    width: "160px",
    height: "65px",
  };

  const [traductor, setTraductor] = useState("es");
  const [theme, setTheme] = useState("ligth");

  return (
    <div className={theme === "ligth" ? "App" : "App2"}>
      <Header td={traductor} setTd={setTraductor} theme={theme} setTheme={setTheme}/>
      <Portada td={traductor} theme={theme}/>
      <Lanzamientos td={traductor} theme={theme}/>
      <div style={containerBtn}>
        <Buttons title="TOKEN" theme={theme}/>
        {traductor === "es" ? (
          <Buttons title="IR AL BLOG" theme={theme}/>
        ) : (
          <Buttons title="GO TO THE BLOG" theme={theme}/>
        )}
      </div>
      <PortadaMarketSec td={traductor} theme={theme}/>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "3rem",
          width: "85%",
          margin: "0 auto",
        }}
      >
        <div style={theme === "ligth" ? {color: "#020202"} : {color: "#fff"}}>
          <h1
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1.4rem",
              marginBottom: "-1rem",
              marginTop: "2.8rem",
            }}
          >
            {traductor === "es" ? "DESCUBRE NUESTROS" : "DISCOVER OUR"}
          </h1>
          <h1 style={{ fontFamily: "Days One, sans-serif" }}>PARTNERS</h1>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            marginLeft: "5rem",
          }}
        >
          <img src={logoipsum1} alt="" style={sizeLogo} />
          <img src={logoipsum2} alt="" style={sizeLogo} />
          <img src={logoipsum3} alt="" style={sizeLogo} />
          <img src={logoipsum4} alt="" style={sizeLogo} />
          <img src={logoipsum5} alt="" style={sizeLogo} />
        </div>
      </div>
      <PortadaSobreNosotros theme={theme} td={traductor}/>
      <Blog theme={theme} td={traductor}/>
      <div style={{width: '100%', backgroundColor: "#0039ff", height: '40px', margin: '3rem auto'}}>
          <ul style={{color: "#fff", display: 'flex', alignItems: 'center', gap: "6rem", justifyContent: 'center', paddingTop: ".5rem"}}>
            <li>{traductor === "es" ? "ARTISTAS" : "ARTIST"}</li>
            <li>{traductor === "es" ? "ARTISTAS" : "ARTIST"}</li>
            <li>{traductor === "es" ? "ARTISTAS" : "ARTIST"}</li>
            <li>{traductor === "es" ? "ARTISTAS" : "ARTIST"}</li>
            <li>{traductor === "es" ? "ARTISTAS" : "ARTIST"}</li>
            <li>{traductor === "es" ? "ARTISTAS" : "ARTIST"}</li>
            <li>{traductor === "es" ? "ARTISTAS" : "ARTIST"}</li>
            <li>{traductor === "es" ? "ARTISTAS" : "ARTIST"}</li>
            <li>{traductor === "es" ? "ARTISTAS" : "ARTIST"}</li>
            <li>{traductor === "es" ? "ARTISTAS" : "ARTIST"}</li>
          </ul>
      </div>
      <DraftArtistas theme={theme} td={traductor}/>
      <BannerNuevoToken theme={theme} td={traductor}/>
      <Footer theme={theme} td={traductor}/>
    </div>
  );
}

export default App;
