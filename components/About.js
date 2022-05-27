import React from "react";
import styles from "../styles/About.module.css";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Box";
import Link from "next/link";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div className={styles.aboutcontainer} id="about">
      <div className={styles.aboutbox}>
        <div className={styles.abouttitle}>
          <h1>ABOUT ME</h1>
        </div>
        <Grid container className={styles.aboutgrid}>
          <Grid item lg={7.6} md={6}className={styles.bio}>
            <div className={styles.biotext}>
              <Item>
                <div>
                  <br></br>
                  <b>Thanks for stopping by!</b>
                  <br></br>
                  <br></br>I come from a
                  professional background that includes work in Social Services,
                  Education, and Customer Service. After many years working
                  between these fields, I felt a push for a new challenge, and
                  thankfully found it in an area that is growing, can keep me on
                  my toes through constant development, and provokes curiosity
                  and creativity.
                  <br></br>
                  <br></br>
                  Being that I am from a largely people-based background, I feel
                  I have a lot to offer. As a Junior Dev, I think to how I can
                  write more efficient code that peers can build upon and
                  manipulate. I think to learning what makes more scalable
                  databases, and apps run as quickly and efficiently as possible. This is to say that I am always thinking about how my
                  work can improve and simplify the experiences of others.
                  <br></br>
                  <br></br>
                  To end things off on a less formal note, in my spare time I
                  enjoy sewing, a good deadlift, and cat videos 😊
                  <br></br>
                  <br></br>
                </div>
              </Item>
            </div>
          </Grid>
          <Grid item lg={4} md={3}className={styles.skills}>
            <div className={styles.skillstext}>
              <Item>
                <div>
                  <h3 align="center">SKILLS</h3>
                  <u>Front End Technologies</u>
                  <br></br>
                  Javascript (jQuery, AJAX, React, Next.js), HTML, CSS,
                  SCSS/SASS, MaterialUI, Bootstrap, React Bootstrap
                  <br></br>
                  <br></br>
                  <u>Back End Technologies</u>
                  <br></br>
                  Javascript (Node.js, Express.js), Ruby, bCrpyt, PostgreSQL
                  <br></br>
                  <br></br>
                  <u>Auxiliary Technologies</u>
                  <br></br>
                  Git, Mocha, Chai, Jest, Vercel, Microsoft, Linux
                </div>
              </Item>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={styles.btnrow}>
        <div className={styles.aboutbtns}>
          <Link href="/">
            <Button className={styles.aboutbtn}>
              <a>HOME</a>
            </Button>
          </Link> 
          <Button className={styles.disabledbutton}>ABOUT ME</Button>
          <Link href="/#projects">
            <Button className={styles.aboutbtn}>
              <a>PROJECTS</a>
            </Button>
          </Link>
         
        </div>
      </div>
      <div></div>
    </div>
  );
}
