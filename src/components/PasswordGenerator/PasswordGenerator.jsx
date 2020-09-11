import React, { useState } from "react";

// Custom Hook
import useCopyToClipboard from "./useCopyToClipboard";
import useGeneratePassword from "./usePasswordGenerator";

// Styles and Assets
import Logo from "../../assets/icons/logo.png";
import styles from "./PasswordGenerator.module.scss";

const PasswordGenerator = () => {
  // React Hooks
  const [password, setPassword] = useState("password");
  const [settings] = useState({
    isVisible: true,
    useNumbers: true,
    useSymbols: true,
    useUppercase: true,
    useLowercase: true,
    passwordLength: 14,
  });
  // Custom Hooks
  const generatePassword = useGeneratePassword(settings);

  // onClick Handlers
  const handleGenerate = () => {
    setPassword(generatePassword);
  };

  // JSX
  return (
    <div className={styles.PasswordGeneratorContainer}>
      <div className={styles.PasswordGenerator}>
        <div className={styles.Logo}>
          <img src={Logo} alt="Logo" />
        </div>
        <div className={styles.Display}>
          <p>{password}</p>
        </div>
        <div className={styles.Controls}>
          <div className={styles.CopyControl}>
            <div className={styles.Copy} onClick={useCopyToClipboard(password)}>
              <p>copy</p>
            </div>
          </div>
          <div className={styles.GenerateControl}>
            <div className={styles.Generate} onClick={handleGenerate}>
              <p>generate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
