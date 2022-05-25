import Nav from "../components/Nav.js";
import styles from "../styles/Projects.module.css";
import ProjectCard from "../components/ProjectCard"


export default function Projects() {
  return (
    <div className={styles.projectscontainer} id="projects">
<ProjectCard/>
      </div>
  );
}
