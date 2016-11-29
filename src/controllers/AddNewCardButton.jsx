import React from 'react';
import { connect } from 'react-redux';

import { Card } from '../models';
import { createNewCard } from '../actions';

export class AddNewCardButton extends React.Component {

  createNewCard = () => {
    var { createNewCard, listId } = this.props;
    createNewCard(new Card({
      title: 'New Card',
      listId: listId
    }));
  }

  render() {
    return (
      <button className="add-card-button" onClick={this.createNewCard}>
        Add a Card
      </button>
    );
  }

}

export default connect(null, {
  createNewCard
})(AddNewCardButton);
