import React from 'react';
import './GuitarCard.css';

export default function GuitarCard(props) {
  const cardStyle = {
    color: "red",
    fontSize: "48px"
  };
  
  return (
    <div className="guitar-card" onClick={() => props.handleToggle(props.guitar.id)}>
        <h2 style={cardStyle}>{props.guitar.make}</h2>
        <h3>{props.guitar.model}</h3>
        <p>{props.guitar.year}</p>
        <p className="in-stock">In stock: {props.guitar.available ? "Yes" : "No"}</p>
    </div>
  );
}
