// List component. Contains cards.
import React from 'react';
import Card from './Card.jsx';
import AddNewCardButton from '../controllers/AddNewCardButton.jsx';

const List = ({list, onCardClick, cardUnderEdit}) => {
  const cardElements = list.cards.map((card) => {
    const click = onCardClick.bind(this, card.id);
    const underEdit = cardUnderEdit && cardUnderEdit.id === card.id;
    return <Card key={card.id} card={card} onClick={click} underEdit={underEdit} />
  });

  return (
    <div className="list">
      <h2 className="list-title">{list.title}</h2>
      {cardElements}
      <AddNewCardButton listId={list.id} />
    </div>
  );
};

export default List;
