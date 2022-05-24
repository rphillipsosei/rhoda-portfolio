import Nav from "../components/Nav.js";
import styles from "../styles/Projects.module.css";
import { Grid } from "@mui/material";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ProjectCard from "../components/ProjectCard"


export default function Projects() {
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.projectscontents}>
       
         
{<ProjectCard/>}

       
      </div>
    </div>
  );
}

const projectData = [
  {
    image: "/tweeterdemo.gif",
    title: "Tweeter",
    description:
      "A single-paged clone of a certain popular social media site ;-)",
    technologies: "Javascript, jQuery, AJAX, HTML, CSS",
    github: "https://github.com/rphillipsosei/tweeter",
    height: "400px",
    width: "750px",
    id: "0",
  },
  {
    image: "/moonbeamdemo.gif",
    title: "Moonbeam Trading Company",
    description: "A company website to be deployed soon",
    technologies: "React, CSS, Material UI, Theme UI",
    github: "https://github.com/rphillipsosei/moonbeam-tc/",
    height: "400px",
    width: "220px",
    id: "1",
    
  },
  {
    image: "/tinyappdemo.gif",
    title: "TinyApp",
    description:
      "An app where users can create, edit, and store shortened links for everyday websites.",
    technologies: "Express, Node.js, bCrypt, EJS, Bootstrap",
    github: "https://github.com/rphillipsosei/tinyapp",
    height: "400px",
    width: "750px",
    id: "2",
  },
  {
    image: "/portfolio.png",
    title: "Profile App",
    description: "This very app. For you to get to know more about me!",
    technologies: "React, NextJS, Bootstrap, Framer Motion",
    github: "https://github.com/rphillipsosei/new-portfolio-app",
    height: "400px",
    width: "750px",
    id: "3",
  },
];

