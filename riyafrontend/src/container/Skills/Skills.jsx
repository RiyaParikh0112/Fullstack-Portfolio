// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import ReactTooltip from 'react-tooltip';

// import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../client';
// import './Skills.scss';

// const Skills = () => {
//   const [experiences, setExperiences] = useState([]);
//   const [skills, setSkills] = useState([]);

//   useEffect(() => {
//     const query = '*[_type == "experiences"]';
//     const skillsQuery = '*[_type == "skills"]';

//     client.fetch(query).then((data) => {
//       setExperiences(data);
//     });

//     client.fetch(skillsQuery).then((data) => {
//       setSkills(data);
//     });
//   }, []);

//   return (
//     <>
//       <h2 className="head-text">⚡️ <span>Skills</span> & Tech </h2>

//       <div className="app__skills-container">
//         <motion.div className="app__skills-list">
//           {skills.map((skill) => (
//             <motion.div
//               whileInView={{ opacity: [0, 1] }}
//               transition={{ duration: 0.5 }}
//               className="app__skills-item app__flex"
//               key={skill.name}
//             >
//               <div
//                 className="app__flex"
//                 style={{ backgroundColor: skill.bgColor }}
//               >
//                 <img src={urlFor(skill.icon)} alt={skill.name} />
//               </div>
//               <p className="p-text">{skill.name}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//         {/* <div className="app__skills-exp">
//           {experiences.map((experience) => (
//             <motion.div
//               className="app__skills-exp-item"
//               key={experience.year}
//             >
//               <div className="app__skills-exp-year">
//                 <p className="bold-text">{experience.year}</p>
//               </div>
//               <motion.div className="app__skills-exp-works">
//                 {experience.works.map((work) => (
//                   <>
//                     <motion.div
//                       whileInView={{ opacity: [0, 1] }}
//                       transition={{ duration: 0.5 }}
//                       className="app__skills-exp-work"
//                       data-tip
//                       data-for={work.name}
//                       key={work.name}
//                     >
//                       <h4 className="bold-text">{work.name}</h4>
//                       <p className="p-text">{work.company}</p>
//                     </motion.div>
//                     <ReactTooltip
//                       id={work.name}
//                       effect="solid"
//                       arrowColor="#fff"
//                       className="skills-tooltip"
//                     >
//                       {work.desc}
//                     </ReactTooltip>
//                   </>
//                 ))}
//               </motion.div>
//             </motion.div>
//           ))}
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default AppWrap(
//   MotionWrap(Skills, 'app__skills'),
//   'skills',
//   'app__whitebg',
// );

import React from "react";



import { AppWrap, MotionWrap } from '../../wrapper';

import './Skills.css'
import gif from '../../assets/github.gif'
import html from '../../assets/Skills/html5.svg'
import css from '../../assets/Skills/css3.svg'
import js from '../../assets/Skills/javascript.svg'
import react from '../../assets/Skills/react.svg'
import adobexd from '../../assets/Skills/adobexd.svg'
import figma from '../../assets/Skills/figma.svg'
import Premierepro from '../../assets/Skills/Premiere-pro.svg'
import ae from '../../assets/Skills/ae.svg'
import illustrator from '../../assets/Skills/illustrator.svg'
import  ethereum from '../../assets/Skills/ethereum.svg'
import solidity from '../../assets/Skills/solidity.svg'
import python from '../../assets/Skills/python.svg'
import sql from '../../assets/Skills/sql.png'
import jupyter from '../../assets/Skills/jupyter.png'
import metamask from '../../assets/Skills/metamask.png'
function Skills(){
    return <div className="skills">
        <div className="skills__image">
            <img src={gif} alt="gif" id="gif" />

        </div>
        
        <div className="skills__box">
            <div className="skills__box-title">
                <span className="title">Skills I have</span>
                <p>I love all aspects of technology and want to explore as much as I can!</p>

            </div>
            <div className="skills__box-language">
                <div className="skills__box-language-name">
                      <h2><span>⚡️</span> Frontend Development</h2>

                </div>
                <div className="skills__box-language-icons">
                    <img src={html} alt="html" id="html"/>
                    <img src={css} alt="css"  id="css"/>
                    <img src={js} alt="js" id="js"/>
                    <img src={react} alt="react" id="react"/>
                </div>
            </div>
            <div className="skills__box-language">
                <div className="skills__box-language-name">
                      <h2><span>⚡️</span> Design and UI-UX</h2>

                </div>
                <div className="skills__box-language-icons">
                    <img src={figma} alt="figma" id="figma"/>
                    <img src={adobexd} alt="adobexd" id="adobexd"/>
                    <img src={illustrator} alt="illustrator" id="illustrator"/>
                    <img src={Premierepro} alt="Premierepro" id="premierepro"/>
                    <img src={ae} alt="ae" id="ae"/>
                    </div>
            </div>
            <div className="skills__box-language">
                <div className="skills__box-language-name">
                      <h2><span>⚡️</span> Blockchain</h2>

                </div>
               
                <div className="skills__box-language-icons">
                    <img src={ethereum} alt="ethereum" id="ethereum"/>
                    <img src={solidity} alt="solidity" id="solidity"/>
                    <img src={metamask} alt="metamask" id="metamask"/>
                    
                </div>

            </div>
            <div className="skills__box-language">
                <div className="skills__box-language-name">
                      <h2><span>⚡️</span> Data Science</h2>

                </div>
                < div className="skills__box-language-icons">
                    <img src={python} alt="python" id="python"/>
                    <img src={sql} alt="sql" id="sql"/>
                    <img src={jupyter} alt="jupyter" id="jupyter"/>
                    
            </div>
            
                

                

                   


                
                    
                
    

            </div>
        </div>
    </div>
}

// export default Skills
export default AppWrap(
  MotionWrap(Skills, 'skill__box','skills__image'),
  'skills',
  
);