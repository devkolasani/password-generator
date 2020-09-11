import React, { useState } from "react";
import { motion } from "framer-motion";

// Styles and Assets
import styles from "./PassGen.module.scss";
import Logo from "../../assets/icons/logo.png";

const PassGen = () => {
  const [settings, setSettings] = useState({
    isVisible: true,
    useNumbers: true,
    useSymbols: true,
    useUppercase: true,
    useLowercase: true,
    passwordLength: 14,
  });

  const toggleSettingsVisibility = () => {
    let tempSettings = { ...settings };
    tempSettings.isVisible = !tempSettings.isVisible;
    setSettings(tempSettings);
  };

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
        <motion.div className={styles.SettingsContainer}>
          <motion.div
            className={styles.SettingsHeader}
            onClick={toggleSettingsVisibility}
          >
            <p>settings</p>
            <motion.svg
              fill="none"
              viewBox="0 0 24 24"
              initial={{ rotate: 0, originX: "50%", originY: "50%" }}
              animate={{
                rotate: settings.isVisible ? 90 : 0,
                originX: "50%",
                originY: "50%",
              }}
            >
              <path
                fill="currentColor"
                d="M11.0858 7.75739L15.3284 12L11.0858 16.2427L9.67157 14.8285L12.5 12L9.67157 9.1716L11.0858 7.75739Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="currentColor"
                d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z"
              />
            </motion.svg>
          </motion.div>
          <motion.div
            className={styles.Settings}
            initial={{ height: "0vh", display: "none" }}
            animate={{
              height: settings.isVisible ? "22vh" : "0vh",
              display: settings.isVisible ? "flex" : "none",
            }}
          >
            <div className={styles.Setting}>
              <label className={styles.CheckBox}>
                <input type="checkbox" />
                <svg viewBox="0 0 21 21">
                  <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                </svg>
                <span>uppercase</span>
              </label>
            </div>
            <div className={styles.Setting}>
              <label className={styles.CheckBox}>
                <input type="checkbox" />
                <svg viewBox="0 0 21 21">
                  <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                </svg>
                <span>lowercase</span>
              </label>
            </div>
            <div className={styles.Setting}>
              <label className={styles.CheckBox}>
                <input type="checkbox" />
                <svg viewBox="0 0 21 21">
                  <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                </svg>
                <span>numbers</span>
              </label>
            </div>
            <div className={styles.Setting}>
              <label className={styles.CheckBox}>
                <input type="checkbox" />
                <svg viewBox="0 0 21 21">
                  <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                </svg>
                <span>symbols</span>
              </label>
            </div>
            <div className={styles.Setting} id={styles.LengthSetting}>
              <div className={styles.Slider}>
                <span>password length</span>
                <div className={styles.SliderInputContainer}>
                  <div className={styles.SliderChange}>
                    <svg fill="none" viewBox="0 0 24 24">
                      <path d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z" />
                      <path d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
                    </svg>
                  </div>
                  <input type="range" min="12" max="48" />
                  <div className={styles.SliderChange}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        fill="currentColor"
                        d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
                      />
                      <path
                        fill="currentColor"
                        d="M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
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
