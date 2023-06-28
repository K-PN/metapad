import React from 'react';

function RoadmapContent(props) {
  return (
    <div className='roadmap-item'>
      <h5 className={props.title ? 'roadmap-title' : 'roadmap-no-title'}>
        {props.title}
      </h5>
      <p>
        <em>{props.date}</em>
      </p>
      <ul>
        {props.content.map((value, index) => (
          <li key={index}> ‣ {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default RoadmapContent;
