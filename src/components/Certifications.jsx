import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';

import { styles } from "../styles";
import { certificates } from "../constants";
import { SectionWrapper } from "./hoc";
import { textVariant } from "../utils/motion";

const CertificationsCard = ({certificates}) => (
  <VerticalTimelineElement
    contentStyle = {{background: '#1d1836', color: '#fff'}}
    contentArrowStyle = {{borderRight: '7px solid  #232631'}}
    date = {certificates.date}
    iconStyle = {{background: certificates.iconBg }}
    icon = {
      <div className = "flex justify-center items-center w-full h-full">
        <img
          src = {certificates.icon}
          alt = {certificates.issuing_organization}
          className = "w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
   <div>
  <h3 className="text-white text-[24px] font-bold">
    <a 
      href={certificates.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:underline"
    >
      {certificates.title}
    </a>
  </h3>
  <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
    {certificates.issuing_organization}
  </p>
</div>


    <ul className = "mt-5 list-disc ml-5 space-y-2">
      {certificates.points.map((point, index) => (
        <li
          key = {`certificates-point-${index}`}
          className = "text-white-100 text-[14px] p-1 tracking-wider"
        >
          {point}
        </li>
      ))}

    </ul>

 </VerticalTimelineElement>
)

const Certifications = () => {
  return (
    <>
    <motion.div variants = {textVariant()}>
      <h2 className = {styles.sectionHeadText}>Certifications</h2>
    </motion.div>

    <div className = "mt-20 flex flex-col">
        <VerticalTimeline>
          {certificates.map((certificates, index) => (
            <CertificationsCard key = {index} certificates = {certificates}>

            </CertificationsCard>
          ))}
        </VerticalTimeline>

    </div>
    </>
  )
}

export default SectionWrapper(Certifications, "")