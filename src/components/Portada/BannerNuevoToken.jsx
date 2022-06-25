import React from "react";
import styles from "./styles/portada.module.css";
import portada from "../../assets/images/imagennuevosnft.jpg";
import imgFondo1 from "../../assets/images/imagesCards/fondoCardBanner1.jpg";
import imgFondo2 from "../../assets/images/imagesCards/fondoBanner2.png";
import img1 from "../../assets/images/imagesCards/imgbanner1.png";
import img2 from "../../assets/images/imagesCards/imgbanner2.png";

const BannerNuevoToken = ({ td }) => {
  return (
    <div className={styles.containerBannerNft}>
      <div
        className={styles.mainBannerNft}
        style={{
          backgroundImage: `linear-gradient(#011c44b9, #011c44b5, #011c44bc), url(${portada})`,
          borderRadius: "1rem",
        }}
      ></div>
      <div className={styles.textBanner}>
        <h1>
          {td === "es"
            ? "YA ESTÁ AQUÍ EL NUEVO TOKEN DE"
            : "THE NEW TOKEN IS HERE"}
        </h1>
        <h1 style={{ color: "#0039FF" }}>STADIOPLUS</h1>
        <div className={styles.parrafoBannerNft}>
          {td === "es" ? (
            <p>
              El token que revolucionará el modelo de <b>monetización</b> del
            </p>
          ) : (
            <p>
              {" "}
              The token that will revolutionize the <b>
                monetization
              </b> model{" "}
            </p>
          )}
          {td === "es" ? (
            <p>
              mundo del deporte y los eSports gracias a los <b>NFTs</b>.
            </p>
          ) : (
            <p>
              {" "}
              in the world of sports and eSports thanks to <b>NFTs</b>
            </p>
          )}
        </div>
        <div
          style={{
            marginTop: "2rem",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <input type="text" className={styles.inputBannerNft} />
          <div className={styles.btnJoin}>Join the waitlist.</div>
        </div>
        <div className={styles.seccionCheck}>
          <input type="checkbox" />
          <p>I understand I can unsubscribe at any time. Privacy Policy</p>
        </div>
      </div>

      <div className={styles.seccionImg1}>
        <div
          className={styles.fondoimg1}
          style={{ backgroundImage: `url(${imgFondo1})` }}
        ></div>

        <div className={styles.detailsCard1}>
          <p
            style={{
              fontSize: ".8rem",
              fontWeight: "600",
              marginBottom: "-.6rem",
            }}
          >
            Bauer420187
          </p>
          <p style={{ fontSize: ".8rem", fontWeight: "700" }}>
            Sascha Kotysch 2020-21
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "-.6rem",
            }}
          >
            <p style={{ fontSize: ".8rem", fontWeight: "500" }}>
              Highest offter
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  fontSize: ".8rem",
                  fontWeight: "500",
                  marginBottom: "-.8rem",
                }}
              >
                ($25.56)
              </p>
              <p style={{ fontSize: ".8rem", fontWeight: "700" }}>0.013 ETH</p>
            </div>
          </div>
        </div>
      </div>
      <img src={img1} className={styles.imagen1} />
      <div className={styles.seccionImg2}>
        <div
          className={styles.fondoimg2}
          style={{ backgroundImage: `url(${imgFondo2})` }}
        ></div>

        <div className={styles.detailsCard2}>
          <p
            style={{
              fontSize: ".6rem",
              fontWeight: "600",
              marginBottom: "-.6rem",
            }}
          >
            Bauer420187
          </p>
          <p style={{ fontSize: ".6rem", fontWeight: "700" }}>
            Sascha Kotysch 2020-21
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "-.6rem",
            }}
          >
            <p style={{ fontSize: ".55rem", fontWeight: "500" }}>
              Highest offter
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  fontSize: ".6rem",
                  fontWeight: "500",
                  marginBottom: "-.8rem",
                }}
              >
                ($25.56)
              </p>
              <p style={{ fontSize: ".6rem", fontWeight: "700" }}>0.013 ETH</p>
            </div>
          </div>
        </div>
      </div>
      <img src={img2} className={styles.imagen2} />
      <div className={styles.seccionImg3}>
        <div
          className={styles.fondoimg3}
          style={{ backgroundImage: `url(${imgFondo2})` }}
        ></div>

        <div className={styles.detailsCard3}>
          <p
            style={{
              fontSize: ".6rem",
              fontWeight: "600",
              marginBottom: "-.6rem",
            }}
          >
            Bauer420187
          </p>
          <p style={{ fontSize: ".6rem", fontWeight: "700" }}>
            Sascha Kotysch 2020-21
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "-.6rem",
            }}
          >
            <p style={{ fontSize: ".55rem", fontWeight: "500" }}>
              Highest offter
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  fontSize: ".6rem",
                  fontWeight: "500",
                  marginBottom: "-.8rem",
                }}
              >
                ($25.56)
              </p>
              <p style={{ fontSize: ".6rem", fontWeight: "700" }}>0.013 ETH</p>
            </div>
          </div>
        </div>
      </div>
      <img src={img2} className={styles.imagen3} />
    </div>
  );
};

export default BannerNuevoToken;
