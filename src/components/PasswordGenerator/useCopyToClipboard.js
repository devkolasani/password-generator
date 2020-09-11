import { useEffect } from "react";

const useCopyToClipboard = (text) => {
  useEffect(() => {
    const copy = async () => {
      try {
        await navigator.clipboard.writeText(text);
        console.log("Password copied to clipboard");
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    };
    copy();
  });
};

export default useCopyToClipboard;
