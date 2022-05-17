import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import styles from "../styles/Home.module.css"
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';


export default function Navbar() {
  return (
<div className={styles.iconcontainer}>
<Breadcrumbs className={styles.navcontents}aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="/">
  <AiFillLinkedin className={styles.homeicons}/>
  </Link>
  <Link
    underline="hover"
    color="inherit"
    href="/material-ui/getting-started/installation/"
  >
  <AiFillGithub className={styles.homeicons} />
  </Link>
 
</Breadcrumbs>
      </div>

  );
}