import { useMemo } from "react";
import styles from "./FormContainer.module.css";
const FormContainer = ({ groupDivTop }) => {
  const footerStyle = useMemo(() => {
    return {
      top: groupDivTop,
    };
  }, [groupDivTop]);

  return (
    <div className={styles.footer} style={footerStyle}>
      <div className={styles.footerChild} />
      <div className={styles.empresaParent}>
        <div className={styles.empresa}>Empresa</div>
        <div className={styles.sobreNs}>Sobre nós</div>
      </div>
      <div className={styles.produtoParent}>
        <div className={styles.empresa}>Produto</div>
        <div className={styles.sobreNs}>Tecnologias</div>
      </div>
      <div className={styles.ajudaParent}>
        <div className={styles.ajuda}>Ajuda</div>
        <div className={styles.faq}>FAQ</div>
        <div className={styles.dvidasFrequntes}>Dúvidas frequêntes</div>
      </div>
      <div className={styles.websiteParent}>
        <div className={styles.ajuda}>Website</div>
        <div className={styles.faq}>Termos de serviço</div>
        <div className={styles.dvidasFrequntes}>Politíca de privacidade</div>
      </div>
      <div className={styles.bikecheckParent}>
        <b className={styles.bikecheck}>BikeCheck</b>
        <div className={styles.bikecheckTodosDireitos}>
          ©2023 Bikecheck. Todos direitos reservados.
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
