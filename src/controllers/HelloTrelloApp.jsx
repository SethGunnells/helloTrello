// Controller for the overall application
import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '../components/List.jsx';
import { fetchLists, createNewCard } from '../actions';
import { getAllLists } from '../reducers';

import '../../styles/index.css';

class HelloTrelloApp extends Component {
  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    this.props.fetchLists();
  }

  createNewCard(listId) {
    this.props.createNewCard({
      title: 'A New Card',
      desciption: 'Blah blah blah blah blah',
      listId
    });
  }

  render() {
    var { lists } = this.props;
    return (<div>
      {
        lists.map(list => {
          let newCard = this.createNewCard.bind(this, list.id);
          return <List cards={list.cards} title={list.title} key={list.id}
                       onClick={newCard} />
        })
      }
    </div>);
  }
}

const mapStateToProps = (state) => ({
  lists: getAllLists(state)
});

HelloTrelloApp = connect(mapStateToProps, {
  fetchLists, createNewCard
})(HelloTrelloApp);

export default HelloTrelloApp;
