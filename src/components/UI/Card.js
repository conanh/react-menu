import React from 'react';

import './Card.css'

const Card = props => {
  const propsId = props.id ? props.id : '';
  return (
    <div id={propsId} className={`card ${props.dark && 'dark'} ${props.className && props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
