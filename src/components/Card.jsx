import React from 'react';
import CardTitleEditor from '../controllers/CardTitleEditor.jsx';

const Card = ({ card, underEdit, onClick }) => {
  var contents;
  if (underEdit)
    contents = <CardTitleEditor />;
  else
    contents = card.title;

  return <div className="card" onClick={onClick} key={card.id}>{contents}</div>;
}

export default Card;
