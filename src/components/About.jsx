import React from 'react'
import {Tilt} from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from  '../utils/motion';
import { SectionWrapper } from './hoc';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt 
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1.05}
      transitionSpeed={450}
      className ="xs:w-[250px] w-full">
      <motion.div
        variants = {fadeIn("right", "spring", 0.5 * index, 0.75)}
        // initial = "hidden"
        // animate = "show"
        className = "w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          
          className = "bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt = {title} className = "w-16 h-16 object-contain"/>
          <h3 className = "text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>

      </motion.div>
      
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants = {textVariant()}>
        <p className = {styles.sectionSubText}>Introduction</p>
        <h2 className = {styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p  
        variants = {fadeIn("", "", 0.1, 1)}
        className = "mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      > 
        I'm a skilled Machine Learning Engineer having in depth knowledge
        of various Machine Learning and Deep Learning architectures, I have
        proficiency in Python, Java, R along with Tensorflow and other Deep Learning
        libraries. I am also a keen researcher having publictions in IEEE Xplore 
        and other IEEE conferences. Let's work together to bring our ideas to life!

      </motion.p>

      <div className = "mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key = {service.title} index={index} title={service.title} icon={service.icon}/>
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")