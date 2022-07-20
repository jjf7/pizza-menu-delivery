import React from "react";
import css from "../styles/Hero.module.css";
import Cherry from "../assets/Cherry.png";
import Image from "next/Image";
import HeroImage from "../assets/HeroImage.png";
import { UilPhone } from "@iconscout/react-unicons";
import Pizza1 from "../assets/p1.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className={css.container}>
      <div className={css.leftSide}>
        <div className={css.cherryDiv}>
          <span>More Than Faster</span>
          <Image src={Cherry} alt="" width={40} height={25} />
        </div>

        <div className={css.heroText}>
          <span>Be The Fastest</span>
          <span>In Delivering</span>
          <span>
            Your <span style={{ color: "var(--themeRed)" }}>Pizza</span>
          </span>
        </div>

        <div className={css.miniText}>
          <span>
            Our Mision is to filling your tummy with delecius food and with fast
            and free delivery
          </span>
        </div>

        <button className={`btn ${css.btn}`}>Get Started</button>
      </div>

      <div className={css.rightSide}>
        <div className={css.imageContainer}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image src={HeroImage} alt="" layout="intrinsic" />
          </motion.div>
        </div>

        <div className={css.ContactUs}>
          <span>Contact Us</span>
          <div>
            <UilPhone color="white" />
          </div>
        </div>

        <div className={css.Pizza}>
          <div>
            <Image src={Pizza1} alt="" layout="intrinsic" objectFit="cover" />
          </div>
          <div className={css.details}>
            <span>Italian Pizza</span>
            <span>
              <span style={{ color: "var(--themeRed)" }}>$</span> 17
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
