import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from '../styles/Projects.module.css'


const data = [
  {
    image: "/tweeter-thumbnail.png",
    title: "Tweeter",
    description:
      "A clone of a particular social media site ;-)",
    technologies: "Javascript, jQuery, AJAX, HTML, CSS",
    github: "https://github.com/rphillipsosei/tweeter",
    height: "400px",
    width: "750px",
    id: "tweeter",
    demo: "SEE DEMO",
  },
  {
    image: "/moonbeam-thumbnail.png",
    title: "Moonbeam Trading Company",
    description: "A company website to be deployed soon",
    technologies: "React, CSS, Material UI, Theme UI",
    github: "https://github.com/rphillipsosei/moonbeam-tc/",
    height: "400px",
    width: "220px",
    id: "moonbeam",
    demo: "SEE DEMO",

  },
  {
    image: "/tinyapp-thumbnail.png",
    title: "TinyApp",
    description:
      "A URL shortener for everyday websites.",
    technologies: "Express, Node.js, bCrypt, EJS, Bootstrap",
    github: "https://github.com/rphillipsosei/tinyapp",
    height: "400px",
    width: "750px",
    id: "tinyapp",
    demo: "SEE DEMO",
  },
  {
    image: "/portfolio-thumbnail.png",
    title: "Profile App",
    description: " For you to get to know more about me!",
    technologies: "React, NextJS, Material UI, Framer Motion",
    github: "https://github.com/rphillipsosei/new-portfolio-app",
    height: "400px",
    width: "750px",
    id: "portfolio",
 
  },
];

export default function ProjectCard() {

  return (
    <div className={styles.projectsbox}>
     <h1>PROJECTS</h1>
     <div className={styles.cardrow}>
   {data.map((project) => {
     return (
<Card className={styles.cardcontainer} sx={{ maxWidth: 300, maxHeight: 450 }}>
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
        <Button className={styles.projectbtn} size="small"><b>VIEW SOURCE CODE</b></Button>
        <Button className={styles.projectbtn} id={project.demo} size="small"><b>{project.demo}</b></Button>
      </CardActions>
    </Card>)
    })}</div></div>
  )}