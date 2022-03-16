import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Riya</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">WEB DEVELOPER</p>
          <p className="p-text">DESIGNER</p>
          <p className="p-text">FREELANCER</p>
          <p className="p-text">EXPLORER</p>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Self-driven, quick starter, passionate programmer with a curious mind who enjoys solving a complex and challenging real-world problems.</p>
          
        </div>

        <div className="tag-cmp app__flex">
          <button className='resume-button'>Resume</button>

        </div>
         <div className="tag-cmp app__flex">
         <p> ⚡️ Check out my Blog</p> <a href="https://www.w3schools.com/css/css3_flexbox_container.asp" className='blog' target="_blank"> Here</a>

        </div>

      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profilepic} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.explorer,images.coding,  images.enterpreneur,images.idea].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
