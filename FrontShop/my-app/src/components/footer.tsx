import React, { useState } from "react";
import Link from "next/link";
import "@/components/footer.css";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-info">
          <p>Address: Duy Tan University</p>
          <p>Hotline: 0899248730</p>
          <p>Email: tranminhhien06072001@gmail.com</p>
        </div>
      </div>
      <div className="footer-copyright">Copyright © 2023 Example</div>
    </div>
  );
};

export default Footer;
