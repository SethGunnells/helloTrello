import React from 'react';
import { connect } from 'react-redux';

import List from '../components/List.jsx';
import { getCardsForList, getListById } from '../selectors';

class ListController extends React.Component {

  render() {
    const { list, cards } = this.props;
    return <List id={list.id} title={list.title} cards={cards} />;
  }

}

const mapStateToProps = () => {
  let getCards = getCardsForList();
  return (state, props) => ({
    list: getListById(state, props),
    cards: getCards(state, props)
  })
};

ListController = connect(
  mapStateToProps
)(ListController);

export default ListController;
