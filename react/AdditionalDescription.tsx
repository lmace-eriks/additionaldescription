import React, { useEffect, useRef, useState } from "react";
import { Link, canUseDOM } from "vtex.render-runtime";

// Styles
import styles from "./styles.css";

export interface AdditionalDescriptionProps {
  blockClass: string;
}

const AdditionalDescription: StorefrontFunctionComponent<AdditionalDescriptionProps> = ({ }) => {

  return (
    <div className={styles.container}>
      Additional Description
    </div>
  );
};

AdditionalDescription.schema = {
  title: "AdditionalDescription",
  description: "",
  type: "object",
  properties: {

  }
};

export default AdditionalDescription;
