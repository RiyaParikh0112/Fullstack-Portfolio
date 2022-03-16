import React from 'react'
import './Achievement.css'
import git_prize from '../../assets/github_prize.png'
import { motion } from 'framer-motion'
import ReactTooltip from 'react-tooltip'

import { AppWrap, MotionWrap } from '../../wrapper'
// import { urlFor, client } from '../../client'

import data from './data'

function Achievement() {
  return (
    <motion.div className='achieve'>
      {/* <h1 className='title'> Achievements</h1> */}

      <motion.div className='achieve__flex'>
        <div className='achieve__box'>
          {data.map((d) => (
            <div className='achieve__box-big'>
              <div className='achieve__box-left'>{d.image}</div>
              <div className='achieve__box-right'>
                <h1>{d.name}</h1>
                {/* <h2>{d.position}</h2> */}
                <h2>{d.type}</h2>
                {d.role}
              </div>
            </div>
          ))}
        </div>
        <div className='achieve__box_left'>
          <img src={git_prize} alt='' />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Achievement
