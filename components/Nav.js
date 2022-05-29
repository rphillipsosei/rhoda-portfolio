import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import styles from "../styles/Home.module.css"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import {useState} from 'react'



export default function Nav() {

  return (
    <div role="presentation"  className={styles.iconcontainer}>
    <Breadcrumbs sx={{color: "white"}} aria-label="breadcrumb" className={styles.navcontents}>
    <Link
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center', color: 
      "white" }}
        color="white"
        href="https://www.linkedin.com/in/rphillipsosei"
      >
        <AiFillLinkedin className={styles.navicon} sx={{ mr: 0.5 }} fontSize="inherit" />
        <b>LINKEDIN</b>
      </Link>
      <Link
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center', color: 
        "white" }}
        color="white"
        href="https://www.github.com/rphillipsosei"
      >
        <AiFillGithub className={styles.navicon} sx={{ mr: 0.5}} fontSize="inherit" />
        <b>GITHUB</b> 
      </Link>
     
    </Breadcrumbs>   
    
  </div>

  );
}
  