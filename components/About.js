import React from "react";
import styles from "../styles/About.module.css";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Box";


export default function Home() {


  return (
    <div className={styles.aboutcontainer}>
        <div className={styles.aboutbox}>
<Grid container >
  <Grid item lg={7} className={styles.bio}>
  <div className={styles.biotext}><Item>
  <p>
          <br></br>
          <b>
     Thanks for stopping by!
          </b>
          <br></br>
          <br></br>To tell you a bit more about me, I come from a professional background that includes work in
          Social Services, Education, and Customer Service. After many years
          working between these fields, I felt a push for a new challenge, and
          thankfully found it in an area that is growing, can keep me on my toes
          through constant development, and provokes curiosity and creativity.
          <br></br>
          <br></br>
          Being that I am from a largely people-based background, I feel I have
          a lot to offer. As a Junior Dev, I think to how I can write more
          efficient code that peers can build upon and manipulate. I think to
          learning what makes more scalable databases, and apps run as quickly
          and efficiently as possible over servers. That is to say I am always
          thinking about how my work can improve the experiences of others.
          <br></br>
          <br></br>
          To end things off on a less formal note, in my spare time I enjoy
          sewing, a good deadlift, and cat videos 😊
          <br></br>
          <br></br>
        </p>
      </Item></div>
  </Grid>
  <Grid item lg={5} className={styles.skills}>
      <div className={styles.skillstext}><Item>
      <p>
          <h2 align="center">
            <u>SKILLS</u>
          </h2>
          <b>Front End Technologies</b>
          <br></br>
          Javascript (jQuery, AJAX, React, Next.js), HTML, CSS, SCSS/SASS,
          MaterialUI, Bootstrap, React Bootstrap
          <br></br>
          <br></br>
          <b>Back End Technologies</b>
          <br></br>
          Javascript (Node.js, Express.js), Ruby, bCrpyt, PostgreSQL
          <br></br>
          <br></br>
          <b>Auxiliary Technologies</b>
          <br></br>
          Git, Mocha, Chai, Jest, Vercel, Microsoft, Linux
        </p>
          </Item></div>
    
  </Grid>
  </Grid>
  </div>
    </div>
  );
}
