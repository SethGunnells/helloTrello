import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './List.jsx';
import { fetchLists } from './actions';

import '../styles/index.css';

class HelloTrelloApp extends Component {
  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    var { fetchLists } = this.props;
    fetchLists();
  }

  render() {
    var { lists } = this.props;
    return (<div>
      {lists.map(list => <List cards={list.cards} key={list.id} />)}
    </div>);
  }
}

const mapStateToProps = (state) => { return { lists: state }; };

HelloTrelloApp = connect(mapStateToProps, {
  fetchLists
})(HelloTrelloApp);

export default HelloTrelloApp;
