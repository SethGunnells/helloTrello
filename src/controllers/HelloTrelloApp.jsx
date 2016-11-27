// Controller for the overall application
import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '../components/List.jsx';
import { fetchLists, editCard } from '../actions';
import { getAllLists, getCardUnderEdit } from '../reducers';

import '../../styles/index.css';

class HelloTrelloApp extends Component {
  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    this.props.fetchLists();
  }

  render() {
    var { lists, cardUnderEdit } = this.props;
    return (<div>
      {
        lists.map(list =>
          <List cards={list.cards} title={list.title} key={list.id}
                onCardClick={this.props.editCard} cardUnderEdit={cardUnderEdit} />
        )
      }
    </div>);
  }
}

const mapStateToProps = (state) => ({
  lists: getAllLists(state),
  cardUnderEdit: getCardUnderEdit(state)
});

HelloTrelloApp = connect(mapStateToProps, {
  fetchLists, editCard
})(HelloTrelloApp);

export default HelloTrelloApp;
