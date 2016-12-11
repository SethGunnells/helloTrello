// List component. Contains cards.
import React from 'react';
import Card from './Card.jsx';
import AddNewCardButton from '../controllers/AddNewCardButton.jsx';

const List = ({id, title, cards, onCardClick}) => {
  const cardElements = cards.map((card) => {
    const click = () => onCardClick(card.id);
    // const underEdit = cardUnderEdit && cardUnderEdit.id === card.id;
    return <Card key={card.id} card={card} onClick={click} />
  });

  return (
    <div className="list">
      <h2 className="list-title">{title}</h2>
      {cardElements}
      <AddNewCardButton listId={id} />
    </div>
  );
};

export default List;
