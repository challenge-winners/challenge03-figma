import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import TypeDeafultVariantPrimary from "../components/TypeDeafultVariantPrimary";
import styles from "./HomeMembros.module.css";
const HomeMembros = () => {
  const navigate = useNavigate();

  const onCTAButtonContainer1Click = useCallback(() => {
    navigate("/home-tecnologias");
  }, [navigate]);

  const onCTAButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.homeMembros}>
      <div className={styles.background} />
      <FormContainer groupDivTop="1276px" />
      <b className={styles.nossoTime}>
        <span>{`Nosso `}</span>
        <span className={styles.time}>#Time</span>
      </b>
      <div className={styles.conheaNossosParticipates}>
        Conheça nossos participates da equipe
      </div>
      <div className={styles.membros}>
        <div className={styles.alexandrePortugalDoNascimenParent}>
          <div className={styles.alexandrePortugalDo}>
            Alexandre Portugal do Nascimento
          </div>
          <div className={styles.rm551737}>RM - 551737</div>
          <img className={styles.groupChild} alt="" src="/undefined8.png" />
        </div>
        <div className={styles.felipeSieiroPaimDosSantosParent}>
          <div className={styles.felipeSieiroPaim}>
            Felipe Sieiro Paim dos Santos
          </div>
          <div className={styles.rm551737}>RM - 98249</div>
          <img className={styles.groupChild} alt="" src="/undefined9.png" />
        </div>
        <div className={styles.jonathanMatusSouzaDeMoraesParent}>
          <div className={styles.jonathanMatusSouza}>
            Jonathan Matus Souza de Moraes
          </div>
          <div className={styles.rm551737}>RM - 551643</div>
          <img className={styles.groupChild} alt="" src="/undefined10.png" />
        </div>
        <div className={styles.lucasOlivieraFigueiredoNascParent}>
          <div className={styles.lucasOlivieraFigueiredo}>
            Debora Damaso Lopes
          </div>
          <div className={styles.rm98499}>RM - 97836</div>
          <img className={styles.rectangleIcon} alt="" src="/undefined11.png"/>
        </div>
        <div className={styles.tomazDeOliveiraPecoraroParent}>
          <div className={styles.tomazDeOliveira}>
            Tomaz de Oliveira Pecoraro
          </div>
          <div className={styles.rm98499}>RM - 98499</div>
          <img className={styles.rectangleIcon} alt="" src="/undefined12.png" />
        </div>
      </div>
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
            typeDeafultVariantPrimaryCursor="pointer"
            typeDeafultVariantPrimaryBackgroundColor="#407de6"
            typeDeafultVariantPrimaryBorder="unset"
            onCTAButtonContainer2Click={onCTAButtonContainer1Click}
          />
          <TypeDeafultVariantPrimary
            buttonText="Membros"
            typeDeafultVariantPrimaryPosition="absolute"
            typeDeafultVariantPrimaryTop="0px"
            typeDeafultVariantPrimaryLeft="362px"
            typeDeafultVariantPrimaryCursor="unset"
            typeDeafultVariantPrimaryBackgroundColor="unset"
            typeDeafultVariantPrimaryBorder="1px solid var(--color-white)"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeMembros;
