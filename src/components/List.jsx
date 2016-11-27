// List component. Contains cards.
import React from 'react';
import Card from './Card.jsx';

const List = ({cards, title, onCardClick, cardUnderEdit}) => {
  const cardElements = cards.map((card) => {
    const click = onCardClick.bind(this, card.id);
    const underEdit = cardUnderEdit && cardUnderEdit.id === card.id;
    return <Card key={card.id} card={card} onClick={click} underEdit={underEdit} />
  });

  return (
    <div className="list">
      <h2 className="list-title">{title}</h2>
      {cardElements}
    </div>
  );
};

export default List;
