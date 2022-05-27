import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Box";
import Button from "@mui/material/Button";
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
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav />
        <div className={styles.homecontents}>
          <Grid container spacing={2} className={styles.textimage}>
       <div className={styles.divcombiner}>
            <Grid lg={3.5} md={4.5} className={styles.leftsidehome}>
              <Item>
                <div className={styles.leftcontents} id="left-contents">
                
                  <div className={styles.textcontrol}>
                    <div>
                      <h1>Hi!</h1>
                      <b>My name is <b>Rhoda Phillips-Osei</b>, and I am a
                      <b> Junior Full Stack Developer</b> with an extensive{" "}
                      <b>people-based</b> background, living in
                      <b> Toronto, Canada.</b> </b><br></br>
                      <br></br>
                      
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item lg={3.5} md={4.5} className={styles.rightsidehome}>
              <Item>
                <div className={styles.rightcontents}>
                  <div class={styles.imgcontainer}>
                    <Image
                      src="/01.webp"
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
          </Grid>
          <div className={styles.btnrow}>
                        <div className={styles.homebtns}>
                         <Link href="/#about">
                            <Button className={styles.homebtn}>
                              <a>ABOUT ME</a>
                            </Button>
                          </Link>
                          <Link href="/#projects">
                            <Button className={styles.homebtn}>
                              <a>PROJECTS</a>
                            </Button>
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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  height: "800px",
  bgcolor: "background.paper",
  border: "2px solid #ffff",
  borderRadius: "10px",
  boxShadow: 23,
  p: 4,
};

