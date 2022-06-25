import React, { useState } from "react";
import styles from "./styles/header.module.css";
import { GoSearch } from "react-icons/go";
import imagenSvg from "../../assets/images/StadioPlus-Logo.svg";
import imagenBlanco from "../../assets/images/logo-blanco-t.png";
import { VscChevronDown } from "react-icons/vsc";
import { FaAngleDown } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
// VscChevronDown

// IoIosArrowDown
// FaAngleDown

const Header = (props) => {
  const { td, setTd, theme, setTheme } = props;

  const handleSetTheme = (e) => {
    e.preventDefault();
    if (theme === "ligth") {
      setTheme("dark");
    }
    if (theme === "dark") {
      setTheme("ligth");
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    if (isOpen) {
      console.log("entro a cambiar el open a false");
      setIsOpen(false);
    }
    if (!isOpen) {
      console.log("entro a cambiar el open a true");
      setIsOpen(true);
    }
  };

  const handleIdiomaEnglish = (e) => {
    e.preventDefault();
    setTd("en");
    setIsOpen(false);
  };

  const handleIdiomaSpanish = (e) => {
    e.preventDefault();
    setTd("es");
    setIsOpen(false);
  };

  console.log(td);

  const dropdown = {
    display: "flex",
    alignItems: "center",
    gap: ".4rem",
    cursor: "pointer",
  };

  const arrow = {
    height: "20px",
    width: "20px",
  };

  const arrowReverse = {
    height: "20px",
    width: "20px",
    transform: "rotate(360deg)"
  }

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {/* <div>s */}
        {theme === "ligth" ? (
          <img src={imagenSvg} alt="logo" />
        ) : (
          <img src={imagenSvg} alt="logo" />
        )}

        <div className={styles.search}>
          <input
            type="text"
            className={styles.inputSearch}
            placeholder={td === "es" ? "BUSCA TU DROP AQUÍ" : "FIND YOUR FALL HERE"}
          />
          <GoSearch
            className={styles.iconSearch}
            style={theme === "ligth" ? { color: "#020202" } : { color: "#fff" }}
          />
        </div>
        <div className={styles.itemsNavbar}>
          <div
            style={
              theme === "ligth" ? { color: "#011c44" } : { color: "#dadada" }
            }
            className={styles.item}
          >
            {td === "es" ? "MIS COLECCIONES" : "MY COLLECTIONS"}
          </div>
          <div
            style={
              theme === "ligth" ? { color: "#011c44" } : { color: "#dadada" }
            }
            className={styles.item}
          >
            LOGIN
          </div>
          <div className={styles.btnRegister}>{td === "es" ? "REGISTRARSE" : "SIGN IN"}</div>
          <div className={styles.themeChange}>
            <BsMoon
              style={{
                width: "24px",
                height: "24px",
                color: "rgba(45, 106, 244, 0.5)",
              }}
            />
            <BsSun
              style={{ width: "24px", height: "24px", color: "#96B4F9" }}
            />
            <span
              onClick={(e) => handleSetTheme(e)}
              className={styles.circulo}
              style={
                theme === "ligth" ? { left: ".65rem" } : { right: ".65rem" }
              }
            ></span>
          </div>
        </div>
      </nav>
      <div className={styles.containerDropdown}>
        <div className={styles.itemsDropDown}>
          <div style={dropdown}>
            DROPS <FaAngleDown style={arrow} />
          </div>
          <div style={dropdown}>
            {td === "es" ? "ARTISTAS" : "ARTISTS"} <FaAngleDown style={arrow} />
          </div>
          <div>{td === "es" ? "PROMOCIONES" : "PROMOTIONS"}</div>
        </div>
        <div style={{ color: "#fff", marginRight: "8rem", fontWeight: "700" }}>
          <div style={dropdown} onClick={(e) => handleOpen(e)}>
            {td === "es" ? "ES" : "EN"} <FaAngleDown style={!isOpen ? arrow : arrowReverse} />
          </div>
          {isOpen && (
            <div className={styles.boxChangeIdioma}>
              <span
                onClick={(e) => handleIdiomaEnglish(e)}
                className={td === "en" ? styles.active : styles.inactive}
              >
                EN
              </span>
              <span
                onClick={(e) => handleIdiomaSpanish(e)}
                className={td === "es" ? styles.active : styles.inactive}
              >
                ES
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
