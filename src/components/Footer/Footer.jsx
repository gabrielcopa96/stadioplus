import React from 'react'
import styles from './styles/footer.module.css';
import logoBlanco from '../../assets/images/logo-blanco-t.png';
import { BsInstagram, BsTwitter, BsFacebook} from "react-icons/bs";

const Footer = ({td}) => {
  return (
    <footer className={styles.footer}>
        <div className={styles.blockFooter}>
            <img src={logoBlanco} alt="fondo-blanco" className={styles.imgLogoBlanco} />
            <h2>{td === "es" ? "YA ESTÁ AQUI EL NUEVO TOKEN DE STADIOPLUS" : "THE NEW STADIOPLUS TOKEN IS HERE"}</h2>
            <div style={{display: "flex", alignItems: "center", gap: "4rem", marginTop: "2.7rem"}}>
                <BsFacebook style={{width: "50px", height: "50px"}}/>
                <BsTwitter style={{width: "50px", height: "50px"}}/>
                <BsInstagram style={{width: "50px", height: "50px"}}/>
            </div>
        </div>
    </footer>
  )
}

export default Footer