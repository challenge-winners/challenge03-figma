import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "../components/Cards";
import FormContainer from "../components/FormContainer";
import TypeDeafultVariantPrimary from "../components/TypeDeafultVariantPrimary";
import styles from "./HomeTecnologias.module.css";
const HomeTecnologias = () => {
  const navigate = useNavigate();

  const onCTAButtonContainer2Click = useCallback(() => {
    navigate("/home-membros");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    // Please sync "Home > Tecnologias 2" to the project
  }, []);

  const onGroup1Click = useCallback(() => {
    // Please sync "Home > Tecnologias 2" to the project
  }, []);

  const onCTAButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.homeTecnologias}>
      <div className={styles.background} />
      <Cards />
      <FormContainer groupDivTop="807px" />
      <b className={styles.tecnologias}>Tecnologias</b>
      <div className={styles.apsPesquisasE}>
        Após pesquisas e entrevistas, essas são as tecnologias atuais que podem
        nos ajudar
      </div>
      <img
        className={styles.homeTecnologiasChild}
        alt=""
        src="/undefined18.png"
        onClick={onGroupClick}
      />
      <img
        className={styles.homeTecnologiasItem}
        alt=""
        src="/undefined19.png"
        onClick={onGroup1Click}
      />
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <b className={styles.bikecheck}>BikeCheck</b>
        <div className={styles.ctaButtonParent}>
          <div className={styles.ctaButton} onClick={onCTAButtonContainerClick}>
            <b className={styles.home}>Home</b>
          </div>
          <TypeDeafultVariantPrimary
            buttonText="Tecnologias"
            typeDeafultVariantPrimaryPosition="absolute"
            typeDeafultVariantPrimaryTop="0px"
            typeDeafultVariantPrimaryLeft="153px"
            typeDeafultVariantPrimaryCursor="unset"
            typeDeafultVariantPrimaryBackgroundColor="unset"
            typeDeafultVariantPrimaryBorder="1px solid var(--color-white)"
          />
          <TypeDeafultVariantPrimary
            buttonText="Membros"
            typeDeafultVariantPrimaryPosition="absolute"
            typeDeafultVariantPrimaryTop="0px"
            typeDeafultVariantPrimaryLeft="362px"
            typeDeafultVariantPrimaryCursor="pointer"
            typeDeafultVariantPrimaryBackgroundColor="#407de6"
            typeDeafultVariantPrimaryBorder="unset"
            onCTAButtonContainer2Click={onCTAButtonContainer2Click}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeTecnologias;
