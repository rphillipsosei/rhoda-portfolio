import styles from "../styles/Projects.module.css";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Image from "next/image";

export default function Projects() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [project, setProject] = useState(null);

  const handleOpen = (project) => {
    setProject(project);
    setOpen(true);
  };

  return (
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
      className={styles.projectscontainer}
      id="projects"
    >
    
         <h1>PROJECTS</h1>
         <div className={styles.projectsbox}>
         
          <div className={styles.cardrow}>
            {data.map((project, index) => {
              return (
                <Card
                  key="index"
                  className={styles.cardcontainer}
                  sx={{ maxWidth: 300, maxHeight: 450, bgcolor: "rgba(58, 57, 57, 0.3)", color: "white"}}
                >
                  <Typography
                    align="center"
                    gutterBottom
                    variant="h5"
                    component="div"
                    className={styles.projecttitle}
                    sx = {{fontFamily: "Darker Grotesque, sans-serif" }}
                  >
                    {project.title}
                  </Typography>
                  <CardMedia
                    className={styles.democontainer}
                    component="img"
                    height="110"
                    image={project.image}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className={styles.projectdesc}
                      sx = {{fontFamily: "Darker Grotesque, sans-serif", color: "white" }}
                    >
                      {project.description}
                     
                      <u>TECHNOLOGIES</u>
                      {project.technologies}
                    </Typography>
                  </CardContent>
                  <CardActions className={styles.projectbuttons}>
                    <Link href={project.github}>
                      <span className={styles.projectbtn} size="small">
                        VIEW SOURCE CODE
                      </span>
                    </Link>

                    {project.id !== "no-demo" ? (
                      <span
                        onClick={() => handleOpen(project)}
                        className={styles.projectbtn}
                        size="small"
                      >
                        {project.demo}
                      </span>
                    ) : null}
                  </CardActions>
                </Card>
              );
            })}
          </div>

          {project && (
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className={styles.popup}
            >
              <Box sx={style}>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  className={styles.modaltitle}
                >
                  {project.title}
                </Typography>
                <Image
                  src={project.gif}
                  alt={project.title}
                  width={project.width}
                  height={project.height}
                  className={styles.modaldemo}
                ></Image>
                <Typography
                  className={styles.modaldesc}
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                >
                  Highlights: {project.features}
                </Typography>
              </Box>
            </Modal>
          )}
        </div>
        <div className={styles.btnrow}>
        <div className={styles.pagebtns}>
          <Link href="/">
            <span className={styles.pagebtn}>
              <a>HOME</a>
            </span>
          </Link> 
            <Link href="/#about">
            <span className={styles.pagebtn}>
              <a>ABOUT ME</a>
            </span>
          </Link>
          <span className={styles.disabledbutton}><a>PROJECTS</a></span>
        
         
        </div>
      </div>

    </motion.div>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "rgba(158, 176, 159, 0.9)",
  border: "2px solid #ffff",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "15px",
  width: "87%",
  height: "80%",
  padding: "0.7rem",
};

const data = [  
  {
    image: "/moonbeam-thumbnail.png",
    gif: "/moonbeamdemo.gif",
    title: "Moonbeam Trading Company",
    description: "First iteration of company website.",
    technologies: "React.js, Styled-Components, FormSubmit, Framer-Motion",
    github: "https://github.com/rphillipsosei/moonbeam-tc/",
    height: "400px",
    width: "750px",
    id: "moonbeam",
    demo: "SEE DEMO",
    features:
      "Direct-to-email contact page submissions via FormSubmit API. Job board and job application submission system to be implemented in next stage.",
  },
  {
    image: "/tweeter-thumbnail.png",
    gif: "/tweeterdemo.gif",
    title: "Tweeter",
    description: "Clone of a particular social media app ;-)",
    technologies: "Javascript (jQuery, AJAX), HTML, CSS",
    github: "https://github.com/rphillipsosei/tweeter",
    height: "400px",
    width: "750px",
    id: "tweeter",
    demo: "SEE DEMO",
    features:
      "Character tracker, real-time tweet posting, conditional error messaging.",
  },

  // {
  //   image: "/tinyapp-thumbnail.png",
  //   gif: "/tinyappdemo.gif",
  //   title: "TinyApp",
  //   description: "URL shortener for everyday websites.",
  //   technologies: "Javascript (Express.js, Node.js), bCrypt, Bootstrap",
  //   github: "https://github.com/rphillipsosei/tinyapp",
  //   height: "400px",
  //   width: "750px",
  //   id: "tinyapp",
  //   demo: "SEE DEMO",
  //   features: " User authentication, password encryption, cookie management.",
  // },
  {
    image: "/portfolio-thumbnail.jpg",
    title: "Portfolio App",
    description: " For you to get to know more about me!",
    technologies: "Next.js, Material UI, Framer Motion",
    github: "https://github.com/rphillipsosei/rhoda-portfolio",
    height: "400px",
    width: "750px",
    id: "no-demo",
  },
  {
    image: "/stitch-thumbnail.png",
    title: "Coming soon - Stitch",
    description: "A marketplace for sewing products and services.",
    technologies: "PostgreSQL, Express.js, React.js, Node.js",
    github: "https://github.com/rphillipsosei/stitch",
    height: "400px",
    width: "750px",
    id: "no-demo",
  },
];
