// List component. Contains cards.
import React from 'react';

const List = ({cards, title}) => {
  const cardElements = cards.map((card) =>
    <div className="card" key={card.id}>{card.title}</div>
  );

  return (
    <div className="list">
      <h2 className="list-title">{title}</h2>
      {cardElements}
      <button className="add-card-button">
        Add a Card
      </button>
    </div>
  );
};

export default List;
