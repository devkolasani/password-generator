import React from "react";
import { motion } from "framer-motion";

// Styles and Assets
import styles from "./PassGen.module.scss";
import Logo from "../assets/icons/logo.png";

const PassGen = () => {
  return (
    <div className={styles.PassGen}>
      <div className={styles.Container}>
        <div className={styles.Logo}>
          <img src={Logo} alt="Logo" />
        </div>
        <div className={styles.PasswordContainer}>
          <div className={styles.Password}>
            <p>2S7m@X4dpZ$7Czk8</p>
          </div>
        </div>
        <motion.div className={styles.OptionsContainer}>
          <motion.div className={styles.OptionsHeader}>
            <p>settings</p>
            <svg fill="none" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M11.0858 7.75739L15.3284 12L11.0858 16.2427L9.67157 14.8285L12.5 12L9.67157 9.1716L11.0858 7.75739Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="currentColor"
                d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z"
              />
            </svg>
          </motion.div>
        </motion.div>
        <div className={styles.Controllers}>
          <div className={styles.Copy}>
            <p>copy</p>
          </div>
          <div className={styles.Generate}>
            <p>generate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassGen;
