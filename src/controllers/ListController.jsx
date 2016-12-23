import React from 'react';
import { connect } from 'react-redux';

import List from '../components/List.jsx';
import { getCardsForList, getListById, getCardUnderEdit } from '../selectors';
import { editCard } from '../actions';

class ListController extends React.Component {

  render() {
    const { list, cards, editCard, cardUnderEdit } = this.props;
    return <List id={list.id} title={list.title} cards={cards}
                 cardUnderEdit={cardUnderEdit} onCardClick={editCard} />;
  }

}

const mapStateToProps = () => {
  let getCards = getCardsForList();
  return (state, props) => ({
    list: getListById(state, props),
    cards: getCards(state, props),
    cardUnderEdit: getCardUnderEdit(state)
  })
};

ListController = connect(mapStateToProps, {
  editCard
})(ListController);

export default ListController;
