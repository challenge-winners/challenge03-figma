import { useMemo } from "react";
import styles from "./TypeDeafultVariantPrimary.module.css";
const TypeDeafultVariantPrimary = ({
  buttonText,
  typeDeafultVariantPrimaryPosition,
  typeDeafultVariantPrimaryTop,
  typeDeafultVariantPrimaryLeft,
  typeDeafultVariantPrimaryCursor,
  typeDeafultVariantPrimaryBackgroundColor,
  typeDeafultVariantPrimaryBorder,
  onCTAButtonContainer2Click,
}) => {
  const typeDeafultVariantPrimaryStyle = useMemo(() => {
    return {
      position: typeDeafultVariantPrimaryPosition,
      top: typeDeafultVariantPrimaryTop,
      left: typeDeafultVariantPrimaryLeft,
      cursor: typeDeafultVariantPrimaryCursor,
      backgroundColor: typeDeafultVariantPrimaryBackgroundColor,
      border: typeDeafultVariantPrimaryBorder,
    };
  }, [
    typeDeafultVariantPrimaryPosition,
    typeDeafultVariantPrimaryTop,
    typeDeafultVariantPrimaryLeft,
    typeDeafultVariantPrimaryCursor,
    typeDeafultVariantPrimaryBackgroundColor,
    typeDeafultVariantPrimaryBorder,
  ]);

  return (
    <div
      className={styles.typedeafultVariantprimary}
      style={typeDeafultVariantPrimaryStyle}
      onClick={onCTAButtonContainer2Click}
    >
      <b className={styles.button}>{buttonText}</b>
    </div>
  );
};

export default TypeDeafultVariantPrimary;
