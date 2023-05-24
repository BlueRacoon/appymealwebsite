import React from "react";

const Spinner: React.FC = () => (
  <div className="loader">
    <style jsx>{`
      .loader {
        position: relative;
        width: 64px;
        height: 64px;
      }
      .loader div {
        box-sizing: border-box;
        position: absolute;
        width: 51px;
        height: 51px;
        margin: 6px;
        border: 6px solid #bf1f2e;
        border-radius: 50%;
        animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #bf1f2e transparent transparent transparent;
      }
      .loader div:nth-child(1) {
        animation-delay: -0.45s;
      }
      .loader div:nth-child(2) {
        animation-delay: -0.3s;
      }
      .loader div:nth-child(3) {
        animation-delay: -0.15s;
      }
      @keyframes loader {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(1turn);
        }
      }
    `}</style>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default Spinner;
