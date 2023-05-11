import {motion} from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react";
import Skill from './Skill'
import "swiper/css";
import pandas from "../images/pandas.svg"
import aws from "../images/aws-svgrepo-com.svg"
import springboot from '../projects-images-videos/images/spring-boot-svgrepo-com.svg'

function Skills() {
  return (
    <motion.div className="h-screen flex flex-col relative text-center md:text-left
    xl:flex-row max-w-[2000px] xl:px-10 justify-center items-center xl:space-y-0 mx-auto">
      <h3 className="absolute top-24 pl-2 uppercase tracking-[20px]">Skills</h3>
      <h2 className="absolute top-36">Swipe/Drag images to the left to see more &rarr; </h2>
      <div className="flex justify-center w-[100%]">
        <Swiper 
        className="mySwiper max-w-[1100px] min-h-[700px] top-10 absolute xl:top-36">
          <SwiperSlide>
            <div className="grid-cols-2 relative px-2 grid md:grid-cols-4 md:top-30 xl:top-10 top-40 gap-8 max-w-fit mx-auto">
              <Skill directionLeft={true} name="Java" url="https://www.svgrepo.com/show/452234/java.svg"/>
              <Skill directionLeft={true} name="Java Spring Boot" url={springboot}/>
              <Skill directionLeft={true} name="Python" url="https://www.svgrepo.com/show/452091/python.svg"/>
              <Skill directionLeft={true} name="PostgreSQL" url="https://www.svgrepo.com/show/354200/postgresql.svg"/>
              <Skill directionLeft={true} name="MongoDB" url="https://www.svgrepo.com/show/331488/mongodb.svg"/>
              <Skill directionLeft={true} name="JavaScript" url="https://www.svgrepo.com/show/349419/javascript.svg"/>
              <Skill directionLeft={true} name="HTML" url="https://www.svgrepo.com/show/373669/html.svg"/>
              <Skill directionLeft={true} name="CSS" url="https://www.svgrepo.com/show/373535/css.svg"/>
              <Skill name="React" url="https://www.svgrepo.com/show/354259/react.svg"/>
              <Skill name="Node.js" url="https://www.svgrepo.com/show/373929/node.svg"/>
              <Skill name="Git" url="https://www.svgrepo.com/show/353782/git-icon.svg"/> 
              <Skill name="AWS" url={aws}/> 
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-32">
            <div className="grid-cols-2 relative px-2 grid md:grid-cols-4 md:top-30 xl:top-10 top-40 gap-8 max-w-fit mx-auto">
              <Skill name="GitHub" url="https://www.svgrepo.com/show/512317/github-142.svg"/> 
              <Skill directionLeft={true} name="Pandas" url={pandas}/> 
              <Skill directionLeft={true} name="Scikit-learn" url="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/390px-Scikit_learn_logo_small.svg.png?20180808062052"/> 
              <Skill directionLeft={true} name="Tailwind CSS" url="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg"/> 
              <Skill name="Justinmind" url="https://www.svgrepo.com/show/354987/figma.svg"/> 
              <Skill name="Docker" url="https://www.svgrepo.com/show/373553/docker.svg"/> 
              <Skill name="Databricks" url="https://www.svgrepo.com/show/330261/databricks.svg"/> 
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.div>
  )
}

export default Skills