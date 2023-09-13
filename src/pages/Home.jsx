import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import TypeDeafultVariantPrimary from "../components/TypeDeafultVariantPrimary";
import styles from "./Home.module.css";
const Home = () => {
  const navigate = useNavigate();

  const onCTAButtonContainer1Click = useCallback(() => {
    navigate("/home-tecnologias");
  }, [navigate]);

  const onCTAButtonContainer2Click = useCallback(() => {
    navigate("/home-membros");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <div className={styles.background} />
      <FormContainer />
      <img className={styles.image1Icon} alt="" src="/undefined.png" />
      <div className={styles.confiraNossoPitchContainer}>
        <span>
          <span className={styles.confiraNosso}>Confira nosso</span>
          <span className={styles.span}>{` `}</span>
        </span>
        <span className={styles.span}>
          <span>#pitch</span>
        </span>
        <span className={styles.confiraNosso}> ao lado</span>
      </div>
      <div className={styles.nossoPitch}>Nosso pitch</div>
      <div className={styles.homeChild} />
      <div className={styles.groupParent}>
        <div className={styles.oQueBikecheckParent}>
          <div className={styles.oQue}>O que é BikeCheck?</div>
          <div className={styles.oDesafioAtual}>
            O desafio atual consiste em desenvolver uma solução digital para que
            os clientes do produto Porto Seguro Bike, possam realizar a inspeção
            online no momento da contratação sem a necessidade de intervenção
            humana no processo. Para enfrentar esse desafio, foi formado o grupo
            com o objetivo de criar uma resposta eficaz, e assim surgiu a
            BikeCheck.
          </div>
        </div>
        <img
          className={styles.ilustracaoBikeIcon}
          alt=""
          src="/undefined1.png"
        />
      </div>
      <div className={styles.homeItem} />
      <div className={styles.nossosServios}>Nossos serviços</div>
      <img
        className={styles.ilustracaoTecnologiasIcon}
        alt=""
        src="/undefined2.png"
      />
      <div className={styles.googleVisionApiParent}>
        <div className={styles.googleVisionApi}>Google Vision API</div>
        <img className={styles.groupChild} alt="" src="/undefined3.png" />
      </div>
      <div className={styles.tiposDeBicicletaParent}>
        <div className={styles.tiposDeBicicleta}>Tipos de bicicleta</div>
        <img className={styles.groupItem} alt="" src="/undefined4.png" />
      </div>
      <div className={styles.questionrioInteligenteParent}>
        <div className={styles.questionrioInteligente}>
          Questionário inteligente
        </div>
        <img className={styles.groupItem} alt="" src="/undefined5.png" />
      </div>
      <div className={styles.iaDeSimilaridadeParent}>
        <div className={styles.iaDeSimilaridade}>IA de similaridade</div>
        <img className={styles.groupItem} alt="" src="/undefined6.png" />
      </div>
      <div className={styles.escolhaDePeasParent}>
        <div className={styles.escolhaDePeas}>Escolha de peças</div>
        <img className={styles.groupItem} alt="" src="/undefined7.png" />
      </div>
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <b className={styles.bikecheck}>BikeCheck</b>
        <div className={styles.ctaButtonParent}>
          <div className={styles.ctaButton}>
            <b className={styles.home1}>Home</b>
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

export default Home;
