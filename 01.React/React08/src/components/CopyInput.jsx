import { useState } from "react";
import PopupContent from "./PopupContent";

const CopyInput = () => {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(input).then(() => {
      setCopied(true);
      setInput("");
      setTimeout(() => {
        setCopied(false);
      }, 4000);
    });
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleCopy}>Copy</button>

      <PopupContent copied={copied} />
    </div>
  );
};

export default CopyInput;
