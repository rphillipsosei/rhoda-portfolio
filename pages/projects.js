import Nav from "../components/Nav.js"
import styles from "../styles/Projects.module.css"
import { Grid } from "@mui/material"
import Image from "next/image"
import ProjectData from "../components/ProjectData.js"


export default function Projects() {
  return (
<div className={styles.container}>
    <Nav/>
    <div className={styles.projectscontents}>
<div className={styles.projectsbox}>

{/* <div className={styles.democontainer}>
<Image
                src="/tweeterdemo.gif"
                alt="Tweeter"
                id="tweeter"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              ></Image>
              </div> */}

              <div>

              </div>
</div>
        </div>
</div>
  )
}

 