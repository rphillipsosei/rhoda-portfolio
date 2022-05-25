import Nav from "./Nav.js";
import styles from "../styles/Projects.module.css";
import ProjectCard from "./ProjectCard"


export default function Projects() {
  return (
    <div className={styles.projectscontainer} id="projects">
<ProjectCard/>
      </div>
  );
}
