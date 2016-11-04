import React from 'react';

/**
 * List component. Contains cards. Purely functional and stylistic.
 */
const List = ({cards, title}) => {
  const cardElements = cards.map((card) =>
    <div className="card" key={card.id}>{card.title}</div>
  );

  return (
    <div className="list">
      <h2 className="list-title">{title}</h2>
      {cardElements}
    </div>
  );
};

export default List;
