import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from '../styles/Projects.module.css'


const data = [
  {
    image: "/tweeterdemo.gif",
    title: "Tweeter",
    description:
      "A single-paged clone of a certain popular social media site ;-)",
    technologies: "Javascript, jQuery, AJAX, HTML, CSS",
    github: "https://github.com/rphillipsosei/tweeter",
    height: "400px",
    width: "750px",
    id: "tweeter",
  },
  {
    image: "/moonbeamdemo.gif",
    title: "Moonbeam Trading Company",
    description: "A company website to be deployed soon",
    technologies: "React, CSS, Material UI, Theme UI",
    github: "https://github.com/rphillipsosei/moonbeam-tc/",
    height: "400px",
    width: "220px",
    id: "moonbeam",
    
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
    id: "tinyapp",
  },
  {
    image: "/portfolio.png",
    title: "Profile App",
    description: "This very app. For you to get to know more about me!",
    technologies: "React, NextJS, Bootstrap, Framer Motion",
    github: "https://github.com/rphillipsosei/new-portfolio-app",
    height: "400px",
    width: "750px",
    id: "portfolio",
  },
];

export default function ProjectCard() {

  return (
    <div className={styles.projectsbox}>
   {data.map((project) => {
<Card className={styles.cardcontainer} sx={{ maxWidth: 345, maxHeight: 450 }}>
          <Typography align="center" gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={project.image}
      />
      <CardContent>
    
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">VIEW SOURCE CODE</Button>
        <Button size="small">SEE DEMO</Button>
      </CardActions>
    </Card>
    })}</div>
  )}