import GoogleVisionContainer from "./GoogleVisionContainer";
import styles from "./Cards.module.css";
const Cards = () => {
  return (
    <div className={styles.cards}>
      <GoogleVisionContainer
        visibility="/undefined13.png"
        googleVisionAPI="Google Vision API"
        oRecursoEncapsulaModelosA="O recurso encapsula modelos avançados de machine learning em uma API fácil de usar. Com o Google Vision é possível extrair contúdos de imagens, reconhecer padrões, detectar objetos, reconhecer formar geométricas e rostos, classificar objetos e transcrever palavras contidas em imagens"
      />
      <GoogleVisionContainer
        visibility="/undefined14.png"
        googleVisionAPI="Escolha de peças"
        oRecursoEncapsulaModelosA="Algumas peças são muito pequenas e muito díficeis de serem dicernidas com clareza por inteligëncias artificiais, mas pelo sue preço não deviam ser ignoradas, por isso usando as informações previamente coletadas os usuários podem escolher as peças adicionais que a bicicleta possui"
        rectangleDivLeft="403px"
        propLeft="calc(50% - 88.5px)"
        propLeft1="calc(50% - 149.5px)"
      />
      <GoogleVisionContainer
        visibility="/undefined15.png"
        googleVisionAPI="Questionário inteligente"
        oRecursoEncapsulaModelosA="Por perguntas bem pensadas é possível diminuir as bicicletas que um pode ter, junto com uma inteligência artificial isso pode diminuir as falhas, por exemplo, se sua bicicleta é do ano XXXX e da marca Y é possível checar os certos modelos lançados aquele ano e no que cada um deles pode ser alterado"
        rectangleDivLeft="1212px"
        propLeft="calc(50% - 125px)"
        propLeft1="calc(50% - 149px)"
      />
      <GoogleVisionContainer
        visibility="/undefined16.png"
        googleVisionAPI="Tipos de bicicleta"
        oRecursoEncapsulaModelosA="Existem alguns tipos principais de bicicletas que compõe a grande maioria delas como: Mountain Bike, Speed, Grave. Sabendo disso, algumas bicicletas possuem certas peculiaridades, criando nichos específicos"
        rectangleDivLeft="806px"
        propLeft="calc(50% - 90px)"
        propLeft1="calc(50% - 149px)"
      />
      <GoogleVisionContainer
        visibility="/undefined17.png"
        googleVisionAPI="AI de Similaridade"
        oRecursoEncapsulaModelosA="Certas bicicletas possuem características visuais que conseguem identificar, por exemplo, a largura da roda, a marca no quadro ou o tipo de material. Usando esses e outros pontos é possível desenvolver uma Inteligência Artificial que ajude no processo"
        rectangleDivLeft="1618px"
        propLeft="calc(50% - 94px)"
        propLeft1="calc(50% - 149px)"
      />
    </div>
  );
};

export default Cards;
