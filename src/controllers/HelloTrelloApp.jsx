// Controller for the overall application
import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListController from './ListController.jsx';
import { fetchLists } from '../actions';
import { getAllListIds } from '../selectors';

import '../../styles/index.css';

class HelloTrelloApp extends Component {
  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    this.props.fetchLists();
  }

  render() {
    var { listIds } = this.props;
    return (<div>
      { listIds.map(id => <ListController id={id} key={id} />) }
    </div>);
  }
}

const mapStateToProps = (state) => ({
  listIds: getAllListIds(state)
});

HelloTrelloApp = connect(mapStateToProps, {
  fetchLists
})(HelloTrelloApp);

export default HelloTrelloApp;
