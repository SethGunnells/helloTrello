import * as React from 'react';

export function List(props) {
  const cardElements = props.cards.map((card) =>
    <div className="card" key={card.id}>{card.text}</div>
  );

  return <div className="list">{cardElements}</div>;
}
