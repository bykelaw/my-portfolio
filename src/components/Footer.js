import React from "react";
import {
  FacebookSquare,
  Instagram,
  Twitter,
  LinkedinSquare,
} from "@styled-icons/boxicons-logos";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className={`w-full h-[11.375rem] mt-[9.375rem]`}>
      <div className={`bg-white flex justify-center space-x-[2.1875rem]`}>
        <FacebookSquare className={`footer-social-icons`} />
        <Instagram className={`footer-social-icons`} />
        <Twitter className={`footer-social-icons`} />
        <LinkedinSquare className={`footer-social-icons`} />
      </div>
      <p
        className={`text-dark text-[0.875rem] leading-[1.25rem] text-center mt-[1.625rem]`}
      >
        Copyright &copy; {currentYear} All rights reserved
      </p>
    </div>
  );
}

export default Footer;
