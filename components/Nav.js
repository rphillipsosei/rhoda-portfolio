// import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdAlternateEmail} from "react-icons/md"
import styles from "../styles/Home.module.css"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useState} from 'react'
import TextField from '@mui/material/TextField';


function handleClick(event) {
  event.preventDefault();
}

export default function Nav() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div role="presentation" onClick={handleClick} className={styles.iconcontainer}>
    <Breadcrumbs sx={{color: "white"}} aria-label="breadcrumb" className={styles.navcontents}>
    <Link
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center', color: 
      "white" }}
        color="inherit"
        href="www.linkedin.com/in/rphillipsosei"
      >
        <AiFillLinkedin className={styles.navicon} sx={{ mr: 0.5 }} fontSize="inherit" />
        LINKEDIN
      </Link>
      <Link
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center', color: 
        "white" }}
        color="inherit"
        href="www.github.com/rphillipsosei"
      >
        <AiFillGithub className={styles.navicon} sx={{ mr: 0.5}} fontSize="inherit" />
         GITHUB
      </Link>
      {/* <Link
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center' }}
        color="inherit"
        href="mailto:rhodaphillipsosei.com"
        onClick={handleOpen}
      >
        <MdAlternateEmail className={styles.navicon} sx={{ mr: 0.5}} fontSize="inherit" />
         EMAIL
      </Link> */}
  
    </Breadcrumbs>   
     {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className={styles.modaltitle}>Send me an email</h1> 
          
        <TextField color="secondary" className={styles.formfield} id="outlined-basic" label="Name" variant="outlined" />
        <TextField color="secondary" className={styles.formfield} id="outlined-basic" label="Email" variant="outlined" />
        <TextField color="secondary" className={styles.formfield} multiline rows={3} id="outlined-basic" label="Message" variant="outlined" />
        
        </Box>
      </Modal> */}
  </div>

  );
}
  

// const style = {
// justifyContent: "center",
//   display: "flex",
//   flexDirection: "column",
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: "60%",
//   bgcolor: "rgba(255, 255, 255, 0.9)",
//   border: '2px solid salmon',
//   borderRadius: "10px",
//   boxShadow: 24,
//   p: 4,
//   height: "500px",
// };
