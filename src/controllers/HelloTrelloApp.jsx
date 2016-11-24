// Controller for the overall application
import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '../components/List.jsx';
import { fetchLists } from '../actions';
import { getAllLists } from '../reducers';

import '../../styles/index.css';

class HelloTrelloApp extends Component {
  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    this.props.fetchLists();
  }

  render() {
    var { lists } = this.props;
    return (<div>
      {lists.map(list =>
        <List cards={list.cards} title={list.title} key={list.id} />)
      }
    </div>);
  }
}

const mapStateToProps = (state) => ({
  lists: getAllLists(state)
});

HelloTrelloApp = connect(mapStateToProps, {
  fetchLists
})(HelloTrelloApp);

export default HelloTrelloApp;
