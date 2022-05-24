import React, { useState } from "react";
import { SliderData } from "./SliderData";
import Image from "next/image";
import styles from "../styles/ImageSlider.module.css";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { motion } from "framer-motion";
import Modal from "@mui/material"
const demo = {
  borderRadius: "10px",
};
const ImageSlider = ({ slides, onClickHandler }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };


  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }




  return (
    <motion.div
      className={styles.projectwrapper}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            delay: 0.1,
          },
        },
      }}
      onClick={() => onClickHandler()}
    
    >
      <Modal className={styles.slider}>
        <div className={styles.imgcontainer}>
          <div styles={slides.prev}>
         <span onClick={prevSlide}className={styles.leftarrow}>
          {current > 0? (
          <BiLeftArrow />): null}
         {current > 0? <span className={styles.prev}>PREV</span>:null}</span>
         </div>

          <div align="center" className={styles.header}>
            <h1>PROJECTS</h1>
          </div>
          <span onClick={nextSlide} className={styles.rightarrow}> 
          {current !== slides.length - 1? <span className={styles.next}>NEXT</span>:null}
          {current !== slides.length - 1? (
          <BiRightArrow   />) : null}
          </span>
          {SliderData.map((slide, index) => {
            return (
              <div
                className={index === current ? styles.slideActive : slide}
                key={index}
              >
                {index === current && (
                  <div className={styles.slidercontent}>
                    <div className={styles.projecttitle}>
                      <i>{slide.title}</i>
                    </div>
                    <motion.div
                      className={styles.projectcontainer}
                    >
                      <Image
                        style={demo}
                        src={slide.image}
                        alt={slide.title}
                        className={styles.image}
                        width={slide.width}
                        height={slide.height}
                        id={slide.id}
                      />
                    </motion.div>
                    <div className={styles.projectdesc}>
                      {slide.description} <br></br>
                      <br></br>
                      <b>TECHNOLOGIES:</b><br></br>
                      {slide.technologies}
                      <p className={styles.viewapp}>
                        <b>
                          <u>
                            <a href={slide.github}>
                              View source code on Github
                            </a>
                          </u>
                        </b>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}{" "}
        </div>
      </Modal>
    </motion.div>
  );
};

export default ImageSlider;
