import React, { useState, useEffect } from "react";
import "./../styles/home.css";

const WhatsAppButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      const threshold = window.innerHeight * 0.5;
      setShowButton(scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+989335510161";
    const message = encodeURIComponent("Hello from my website!");
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappLink, "_blank");
  };

  return showButton ? (
    <div className="whatsapp-button" onClick={handleWhatsAppClick}>
      <i class="ri-whatsapp-line"></i>
    </div>
  ) : null;
};

export default WhatsAppButton;
