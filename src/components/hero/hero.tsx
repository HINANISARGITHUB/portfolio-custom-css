import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import  styles from '@/components/hero/hero.module.css';


const Hero = () => {
  return (
    <section className={styles.herosection}>
      <div className={styles.herocontainer}>
        {/* Text Content */}
        <div className={styles.textcontent}>
          <h1 className={styles.herotitle}>I am Hina Nisar</h1>
          <h2 className={styles.herosubtitle}>
            <span className={styles.highlight}>Front-end</span> Developer
          </h2>
          <p className={styles.herodescription}>
            I will create something that will exceed your expectations, driven
            by a passion for creating seamless and dynamic user experiences.
            From pixel-perfect designs to responsive, interactive elements, I
            aim to bring ideas to life through clean and efficient code.
          </p>
          <button className={styles.herobutton}>
            HIRE ME
         <FontAwesomeIcon icon={faArrowRight} className={styles.arrow} />
          </button>
        </div>

        {/* Image Content */}
        <div className={styles.imagecontainer}>
        <Image
            src="/girl3.png"
            width={660}
            height={480}
            alt="woman"
            priority={true}
            className={styles.heroimage}
          />
      </div>
      </div>
    </section>
  );
};

export default Hero;
