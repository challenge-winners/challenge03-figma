import { useMemo } from "react";
import styles from "./GoogleVisionContainer.module.css";
const GoogleVisionContainer = ({
  visibility,
  googleVisionAPI,
  oRecursoEncapsulaModelosA,
  rectangleDivLeft,
  propLeft,
  propLeft1,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      left: rectangleDivLeft,
    };
  }, [rectangleDivLeft]);

  const googleVisionAPIStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const oRecursoEncapsulaStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div className={styles.rectangleParent} style={groupDivStyle}>
      <div className={styles.groupChild} />
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <img className={styles.visibilityIcon} alt="" src={visibility} />
      </div>
      <div className={styles.googleVisionApi} style={googleVisionAPIStyle}>
        {googleVisionAPI}
      </div>
      <div className={styles.oRecursoEncapsula} style={oRecursoEncapsulaStyle}>
        {oRecursoEncapsulaModelosA}
      </div>
    </div>
  );
};

export default GoogleVisionContainer;
