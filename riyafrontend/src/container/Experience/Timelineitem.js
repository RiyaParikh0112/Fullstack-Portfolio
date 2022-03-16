import React from 'react'

const Timelineitem = ({ data }) => (
  <div className='timeine-item'>
    <div className='timeline-item-content'>
      <span className='tag' style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.time}</time>
      <p>{data.text}</p>
      {data.link && (
        <a href={data.link.url} target='_blank' rel='noopener norefferrer'>
          {data.link.text}
        </a>
      )}

      <span className='circle'></span>
    </div>
  </div>
)
export default Timelineitem
