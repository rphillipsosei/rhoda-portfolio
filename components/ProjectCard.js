import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from '../styles/Projects.module.css'
import Link from 'next/link';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Image from "next/image"

const data = [
  {
    image: "/tweeter-thumbnail.png",
    gif: "/tweeterdemo.gif",
    title: "Tweeter",
    description:
      "A clone of a particular social media site ;-)",
    technologies: "Javascript, jQuery, AJAX, HTML, CSS",
    github: "https://github.com/rphillipsosei/tweeter",
    height: "400px",
    width: "750px",
    id: "tweeter",
    demo: "SEE DEMO",
    features: "Character tracker, real-time tweet posting, conditional error messaging"
  },
  {
    image: "/moonbeam-thumbnail.png",
    gif: "/moonbeamdemo.gif",
    title: "Moonbeam Trading Company",
    description: "A company website to be deployed soon",
    technologies: "React, CSS, Material UI, Theme UI",
    github: "https://github.com/rphillipsosei/moonbeam-tc/",
    height: "400px",
    width: "220px",
    id: "moonbeam",
    demo: "SEE DEMO",
    features: "Message submissions for email and newsletter sign-up, job application form"

  },
  {
    image: "/tinyapp-thumbnail.png",
    gif: "/tinyappdemo.gif",
    title: "TinyApp",
    description:
      "A URL shortener for everyday websites.",
    technologies: "Express, Node.js, bCrypt, EJS, Bootstrap",
    github: "https://github.com/rphillipsosei/tinyapp",
    height: "400px",
    width: "750px",
    id: "tinyapp",
    demo: "SEE DEMO",
    features: " User authentication, password encryption, cookie management"
  },
  {
    image: "/portfolio-thumbnail.png",
    gif: "/tinyappdemo.gif",
    title: "Portfolio App",
    description: " For you to get to know more about me!",
    technologies: "React, NextJS, Material UI, Framer Motion",
    github: "https://github.com/rphillipsosei/rhoda-portfolio",
    height: "400px",
    width: "750px",
    id: "portfolio",
 
  },
];

export default function ProjectCard() {

for(let i = 0 ; i < data.length; i ++) {
  let buttonID = data[i]
}


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
//let the id of the card be project[index].

  return (
    <div className={styles.projectsbox}>
     <h1>PROJECTS</h1>
     <div className={styles.cardrow}>
   {data.map((project, index) => {
     return (
<Card key="index" className={styles.cardcontainer} sx={{ maxWidth: 300, maxHeight: 450 }}>
          <Typography align="center" gutterBottom variant="h5" component="div" className={styles.projecttitle}>
          {project.title}
        </Typography>
        <CardMedia
        className={styles.democontainer}
        component="img"
        alt="green iguana"
        height="140"
        image={project.image}
      />
      <CardContent>
    
        <Typography variant="body2" color="text.secondary" className={styles.projectdesc}>
          {project.description}
          <br></br>
          <br></br>
          STACK<br></br>
          {project.technologies}
        </Typography>
      </CardContent>
      <CardActions className={styles.projectbuttons}>
        <Link href={project.github}>
        <Button className={styles.projectbtn} size="small"><b>VIEW SOURCE CODE</b></Button></Link>
     
        
        {project.id !== "portfolio"? 
        (<Button onClick={handleOpen} className={styles.projectbtn} size="small"><b>{project.demo}</b></Button>): null}
         <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
           <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" className={styles.modaltitle}>
          {project.title}
          </Typography>
          <Image    src={project.gif}
                    alt={project.title}
                    width={project.width}
                    height={project.height}
                    // objectFit="contain"
                    ></Image>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      </CardActions>
    </Card>)
    })}</div></div>
  )}

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };