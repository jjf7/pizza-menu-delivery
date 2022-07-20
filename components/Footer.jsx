import React from "react";
import css from "../styles/Footer.module.css";
import { UilFacebook, UilGithub, UilInstagram } from "@iconscout/react-unicons";
import Image from "next/Image";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <div className={css.container}>
      <span>AL RIGHT RESERVED</span>
      <div className={css.socials}>
        <UilFacebook size={45} />
        <UilGithub size={45} />
        <UilInstagram size={45} />
      </div>

      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
        <span>Fudo</span>
      </div>
    </div>
  );
};

export default Footer;
