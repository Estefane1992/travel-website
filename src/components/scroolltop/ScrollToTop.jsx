import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "../scroolltop/scroolltop.css";

export default function ScrollToTop() {
  const [backToTopButtom, setBackTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackTopButton(true);
      } else {
        setBackTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      {backToTopButtom && (
        <button className="scroll-up" onClick={scrollUp}>
          <img src={logo} alt=""/>
        </button>
      )}
    </div>
  );
}
