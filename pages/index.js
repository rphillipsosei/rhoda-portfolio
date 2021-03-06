import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Box";
import Projects from "../components/Projects";
import Link from "next/link";
import About from "../components/About";


export default function Home() {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              delay: 0.7,
            },
          },
        }}
        className={styles.container}
      >
        <Head>
          <title>Rhoda-Phillips-Osei | Web Developer</title>
          <meta name="Rhoda Phillips-Osei - Web Developer" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav />
        <div className={styles.homecontents}>
          <div className={styles.divcombiner}>
            <Grid className={styles.leftsidehome}>
              <Item>
                <div className={styles.textcontrol}>
                  <div>
                    <h1>Hi!</h1>
                    My name is <b>Rhoda Phillips-Osei</b>, and I am a
                    <b> Junior Full Stack Developer</b> with an extensive <b>people-based </b>
                     background, from
                    <b> Toronto, Canada.</b>
                    <br></br>
                    <br></br>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item className={styles.rightsidehome}>
              <Item>
                <div className={styles.rightcontents}>
                  <div className={styles.imgcontainer}>
                    <Image
                      src="/rhoda.webp"
                      alt="Rhoda Phillips-Osei"
                      className={styles.homeimg}
                      width="100%"
                      height="100%"
                      layout="responsive"
                      objectFit="contain"
                    ></Image>
                  </div>
                </div>
              </Item>
            </Grid>
          </div>
          <div className={styles.btnrow}>
            <div className={styles.homebtns}>
              <Link href="/#about">
                <span  className={styles.homebtn}>
                  <a>ABOUT ME</a>
                </span>
              </Link>
              <Link href="/#projects">
                <span className={styles.homebtn}>
                  <a>PROJECTS</a>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
      <About />
      <Projects />
    </div>
  );
}


