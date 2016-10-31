import * as React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {
  render() {
    const cardElements = this.props.cards.map((card) =>
      <div className="card" key={card.id}>{card.title}</div>
    );

    return <div className="list">{cardElements}</div>;
  };
}

function mapStateToProps(state) {
  return { cards: state };
}

List = connect(mapStateToProps)(List);

export default List;
