import React, { useState, useRef } from 'react';
import './style.css';

export default function Accordion(props) {
  const [height, setHeight] = useState('0px');
  const [arrow, setArrow] = useState('accrdion_button');
  let content = useRef(null);

  function toggleContent() {
    setHeight(height === '0px' ? `${content.current.scrollHeight}px` : '0px');
    setArrow(
      height === '0px'
        ? 'accrdion_button accrdion_button_down'
        : 'accrdion_button'
    );
  }

  return (
    <div className="accordionSection">
      <button onClick={toggleContent} className={arrow}>
        <p>{props.title}</p>
      </button>
      <div ref={content} style={{ maxHeight: `${height}` }} className="content">
        {props.content}
      </div>
    </div>
  );
}
