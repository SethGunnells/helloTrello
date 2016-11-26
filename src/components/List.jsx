// List component. Contains cards.
import React from 'react';
import Card from './Card.jsx';

const List = ({cards, title, onAddNewCard, onCardSave}) => {
  const cardElements = cards.map((card) =>
    <div className="card" key={card.id}>
      <Card card={card} onSave={onCardSave} />
    </div>
  );

  return (
    <div className="list">
      <h2 className="list-title">{title}</h2>
      {cardElements}
      <button className="add-card-button" onClick={onAddNewCard}>
        Add a Card
      </button>
    </div>
  );
};

export default List;
