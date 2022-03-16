import React from 'react'
import timelineData from './data'
// import timelineElements from './timelinedata'

import Timelineitem from './Timelineitem'

const Timeline = () => (
  //   timelineData > 0 && (
  //     <div className='timeline-container'>
  //       {timelineData.map((data, index) => (
  //         <Timelineitem data={data} key={index} />
  //       ))}
  //     </div>
  //   )
  //
  <div className='timeline-container'>
    {timelineData.map((data, index) => (
      <Timelineitem data={data} key={index} />
    ))}
  </div>
)
export default Timeline
