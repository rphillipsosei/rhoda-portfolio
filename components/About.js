import React from "react";
import styles from "../styles/About.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.aboutcontainer} id="about">
      <div className={styles.aboutbox}>
        <div className={styles.biotext}>
          <b>Thanks for stopping by!</b>
          <br></br>I come from a professional background that includes work in
          Social Services, Education, and Customer Service. After many years
          working between these fields, I felt a push for a new challenge, and
          thankfully found it in an area that is growing, can keep me on my toes
          through constant development, and provokes curiosity and creativity.
          <br></br>
          <br></br>
          As a Junior Dev from a largely people-based background, I think to how
          I can write more efficient code that peers can build upon and
          manipulate. I think to learning what makes more scalable databases,
          and apps run as quickly and efficiently as possible. This is to say
          that I am always thinking about improving and simplifying the
          experiences of others.
          <br></br>
          <br></br>
          On a less formal note, in my spare time I enjoy sewing, a good
          deadlift, and funny cat videos!
          <br></br>
          <br></br>
        </div>

        <div className={styles.skillstext}>
          <h3 align="center">SKILLS</h3>
          <u>Front End Technologies:</u>
          <i>
            Javascript (jQuery, AJAX, React.js, Next.js), HTML, CSS, SCSS/SASS,
            MaterialUI, Bootstrap, React Bootstrap, Tailwind CSS, Styled Components
          </i>

          <br></br>
          <u>Back End Technologies:</u>
          <i>Javascript (Node.js, Express.js), Ruby, bCrpyt, PostgreSQL</i>

          <br></br>
          <u>Auxiliary Technologies:</u>
          <i>Figma, Git, Mocha, Chai, Jest, Vercel, Linux</i>
        </div>
      </div>
      <div className={styles.btnrow}>
        <div className={styles.aboutbtns}>
          <Link href="/">
            <span className={styles.aboutbtn}>
              <a>HOME</a>
            </span>
          </Link>

          <span className={styles.disabledbutton}>
            <a>ABOUT ME</a>
          </span>
          <Link href="/#projects">
            <span className={styles.aboutbtn}>
              <a>PROJECTS</a>
            </span>
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
}
