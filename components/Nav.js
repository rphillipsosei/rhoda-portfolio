// import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
// import Link from "next/link";
import styles from "../styles/Home.module.css"
// import Typography from '@mui/material/Typography';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
// import HomeIcon from '@mui/icons-material/Home';
// import WhatshotIcon from '@mui/icons-material/Whatshot';
// import GrainIcon from '@mui/icons-material/Grain';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Nav() {
  return (
    <div role="presentation" onClick={handleClick} className={styles.iconcontainer}>
    <Breadcrumbs aria-label="breadcrumb" className={styles.navcontents}>
    <Link
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center' }}
        color="inherit"
        href="www.linkedin.com/in/rphillipsosei"
      >
        <AiFillLinkedin className={styles.navicon} sx={{ mr: 0.5 }} fontSize="inherit" />
        LINKEDIN
      </Link>
      <Link
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center' }}
        color="inherit"
        href="www.github.com/rphillipsosei"
      >
        <AiFillGithub className={styles.navicon} sx={{ mr: 0.5}} fontSize="inherit" />
         GITHUB
      </Link>
  
    </Breadcrumbs>
  </div>

  );
}
  
