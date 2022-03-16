import React from 'react'
import './Experience.css'
// import Timeline from './Timeline'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
// import { ReactComponent as graphic } from '../../Assets/Images/timeline/graphic-design.png'
// import { ReactComponent as youtube } from '../../Assets/Images/timeline/youtube.png'
// import { ReactComponent as code } from '../../Assets/Images/timeline/code.png'
// import timelinedata from './timelinedata'
import timelineElements from './timelinedata'

function Experience() {
  return (
    <div className='Timeline'>
      <h1>Timeline</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isCodeIcon = element.icon === 'code'
          let isYoutubeIcon =element.icon ==='youtube'
          let isGraphicIcon =element.icon==='graphic'
          let youtubeIconStyle={background:"#939393 "}
          let graphicIconStyle={background:"#3AEDE6"}
          let codeIconStyle={background:"#AF59FF"}
          let showButton= element.buttonText!==undefined && element.buttonText!==null &&element.buttonText!=="";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName='date'
              iconStyle={isYoutubeIcon ? youtubeIconStyle
                :isGraphicIcon ? graphicIconStyle
                : codeIconStyle
                

              
              }
              icon={isYoutubeIcon ? <youtube/>
              :isCodeIcon ? <code/>
              :<graphic/>
            }
          
            >
              <h3 className='vertical-timeline-element-title'>
                {element.title}
              </h3>
               <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (<a href ="/" className={`button-timeline ${isCodeIcon ? "codeButton" :isGraphicIcon ? 'graphicButton': 'youtubeButton'}`}>{element.buttonText}</a>)}
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>

      {/* <Timeline/> */}
    </div>
  )
}

export default Experience
