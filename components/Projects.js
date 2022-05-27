import styles from "../styles/Projects.module.css";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
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
      <div className={styles.projectcontainer}>
        <div className={styles.projectsbox}>
          <h1>PROJECTS</h1>
          <div className={styles.cardrow}>
            {data.map((project, index) => {
              return (
                <Card
                  key="index"
                  className={styles.cardcontainer}
                  sx={{ maxWidth: 300, maxHeight: 450 }}
                >
                  <Typography
                    align="center"
                    gutterBottom
                    variant="h5"
                    component="div"
                    className={styles.projecttitle}
                  >
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
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className={styles.projectdesc}
                    >
                      {project.description}
                     
                      <u>STACK</u>
                      {project.technologies}
                    </Typography>
                  </CardContent>
                  <CardActions className={styles.projectbuttons}>
                    <Link href={project.github}>
                      <Button className={styles.projectbtn} size="small">
                        VIEW SOURCE CODE
                      </Button>
                    </Link>

                    {project.id !== "portfolio" ? (
                      <Button
                        onClick={() => handleOpen(project)}
                        className={styles.projectbtn}
                        size="small"
                      >
                        {project.demo}
                      </Button>
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
        <div className={styles.btnrownav}>
          <div className={styles.projectbtnsnav}>
            <Link href="/">
              <Button className={styles.projectbtnnav}>
                <a> HOME</a>
              </Button>
            </Link>
            <Link href="/#about">
              <Button className={styles.projectbtnnav}>
                <a>ABOUT ME</a>
              </Button>
            </Link>
            <Button className={styles.disabledbutton}>PROJECTS</Button>
          </div>
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
  width: 1000,
  bgcolor: "rgba(73, 80, 121, 0.9)",
  border: "2px solid #ffff",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "15px",
  width: "80%",
  padding: "0.7rem",

};

const data = [
  {
    image: "/tweeter-thumbnail.png",
    gif: "/tweeterdemo.gif",
    title: "Tweeter",
    description: "Clone of a particular social media app ;-)",
    technologies: "Javascript, jQuery, AJAX, HTML, CSS",
    github: "https://github.com/rphillipsosei/tweeter",
    height: "400px",
    width: "750px",
    id: "tweeter",
    demo: "SEE DEMO",
    features:
      "Character tracker, real-time tweet posting, conditional error messaging.",
  },
  {
    image: "/moonbeam-thumbnail.png",
    gif: "/moonbeamdemo.gif",
    title: "Moonbeam Trading Company",
    description: "Company website to be deployed soon.",
    technologies: "React, CSS, Material UI, Theme UI",
    github: "https://github.com/rphillipsosei/moonbeam-tc/",
    height: "400px",
    width: "220px",
    id: "moonbeam",
    demo: "SEE DEMO",
    features:
      "Message submissions for email and newsletter sign-up, job application form.",
  },
  {
    image: "/tinyapp-thumbnail.png",
    gif: "/tinyappdemo.gif",
    title: "TinyApp",
    description: "URL shortener for everyday websites.",
    technologies: "Express, Node.js, bCrypt, EJS, Bootstrap",
    github: "https://github.com/rphillipsosei/tinyapp",
    height: "400px",
    width: "750px",
    id: "tinyapp",
    demo: "SEE DEMO",
    features: " User authentication, password encryption, cookie management.",
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
