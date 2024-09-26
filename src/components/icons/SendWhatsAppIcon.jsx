import PropTypes from "prop-types";
import { useState } from "react";
import "./sendWhatsAppIcon.css";

export const SendWhatsAppIcon = ({ onClick }) => {
  const [showWhatsAppIcon, setShowWhatsAppIcon] = useState(false);
  const sizeIcon = "28";

  return (
    <button
      className="sendIcon"
      onClick={onClick}
      onMouseEnter={() => setShowWhatsAppIcon(true)}
      onMouseLeave={() => setShowWhatsAppIcon(false)}
    >
      {showWhatsAppIcon ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          width={sizeIcon}
          height={sizeIcon}
          enableBackground="new 0 0 512 512"
          version="1.1"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
        >
          <path
            fill="#91C2A2"
            d="M255.59 7.468C119.6 7.468 8.97 118.1 8.97 254.086c0 47.837 13.58 93.782 39.39 133.658l-37.464 82.524a21.538 21.538 0 0019.612 30.44c1.897 0 3.812-.25 5.695-.768l103.227-28.321c35.636 19.058 75.6 29.09 116.16 29.09 135.986 0 246.62-110.635 246.62-246.623 0-135.987-110.634-246.618-246.62-246.618zm0 450.167c-36.019 0-71.46-9.582-102.49-27.713a21.538 21.538 0 00-16.562-2.172l-67.434 18.501 23.488-51.742a21.536 21.536 0 00-2.146-21.502c-25.124-34.825-38.403-75.944-38.403-118.921 0-112.237 91.31-203.547 203.547-203.547s203.548 91.31 203.548 203.547c0 112.238-91.31 203.55-203.548 203.55z"
          ></path>
          <path
            fill="#91C2A2"
            d="M350.407 291.018c-10.329-6.177-23.769-13.075-35.936-8.096-9.332 3.82-15.293 18.43-21.34 25.893-3.106 3.83-6.81 4.428-11.576 2.51-35.039-13.958-61.891-37.35-81.226-69.58-3.275-5.01-2.688-8.959 1.26-13.603 5.844-6.875 13.176-14.685 14.756-23.956 1.58-9.267-2.766-20.104-6.598-28.355-4.896-10.546-10.37-25.586-20.932-31.55-9.714-5.487-22.503-2.416-31.155 4.63-14.933 12.161-22.137 31.212-21.921 50.1a71.169 71.169 0 001.974 15.897c3.013 12.458 8.77 24.089 15.25 35.15a277.108 277.108 0 0015.923 24.21c18.743 25.461 42.06 47.586 69.057 64.121 13.49 8.262 28.02 15.509 43.065 20.478 16.874 5.575 31.91 11.38 50.13 7.919 19.078-3.623 37.884-15.429 45.456-33.815 2.24-5.44 3.365-11.503 2.11-17.252-2.594-11.885-18.684-18.951-28.297-24.7z"
          ></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={sizeIcon}
          height={sizeIcon}
          fill="none"
          strokeWidth="1.5"
          color="#000"
          viewBox="0 0 24 24"
        >
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M22.152 3.553L11.178 21.004l-1.67-8.596L2 7.898l20.152-4.345zM9.456 12.444l12.696-8.89"
          ></path>
        </svg>
      )}
    </button>
  );
};

SendWhatsAppIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};
