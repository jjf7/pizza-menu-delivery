import React from "react";
import Logo from "../assets/Logo.png";
import css from "../styles/Header.module.css";
import Image from "next/Image";
import Link from "next/Link";
import { UilShoppingBag } from "@iconscout/react-unicons";

const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
        <span>Fudo</span>
      </div>

      <ul className={css.menu}>
        <li><Link href="/">Home</Link></li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>

      <div className={css.rightSide}>
        <div className={css.cart}>
          <UilShoppingBag size={35} color="#2E2E2E" />
          <div className={css.badge}>1</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
