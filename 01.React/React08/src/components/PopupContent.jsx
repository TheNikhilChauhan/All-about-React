import { createPortal } from "react-dom";

const PopupContent = ({ copied }) => {
  if (!copied) return null;
  return createPortal(
    <section>
      {copied && (
        <div
          style={{
            position: "absolute",
            bottom: "4rem",
            left: "50%",
          }}
        >
          Copied to Clipboard
        </div>
      )}
    </section>,
    document.querySelector("#popup-content")
  );
};

export default PopupContent;
