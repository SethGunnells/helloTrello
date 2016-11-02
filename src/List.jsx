import React from 'react';

/**
 * List component. Contains cards. Purely functional and stylistic.
 */
const List = ({cards}) => {
  const cardElements = cards.map((card) =>
    <div className="card" key={card.id}>{card.title}</div>
  );

  return <div className="list">{cardElements}</div>;
};

export default List;
