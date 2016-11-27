import React from 'react';
import {
  Editor, EditorState, ContentState, EditorChangeType, SelectionState
} from 'draft-js';
import { connect } from 'react-redux';
import { getCardUnderEdit } from '../reducers';
import { saveCard, cancelCardEdit } from '../actions';

class CardTitleEditor extends React.Component {
  constructor(props) {
    super(props);

    var editor = EditorState.createWithContent(
      ContentState.createFromText(this.props.card.title)
    );
    editor = EditorState.moveSelectionToEnd(editor);
    var selection = editor.getSelection().merge({
      anchorOffset: 0
    });
    editor = EditorState.acceptSelection(editor, selection);

    this.state = {
      editor,
      card: this.props.card
    };
  }

  onChange = (state) => {
    this.setState({
      editor: state,
      card: this.state.card.set('title', state.getCurrentContent().getPlainText())
    });
  }

  onBlur = () => {
    var {saveCard, cancelCardEdit} = this.props;
    
    if (this.props.card.equals(this.state.card)) cancelCardEdit();
    else saveCard(this.state.card);
  }

  componentDidMount() {
    this.refs.editor.focus();
  }

  render() {
    return <Editor editorState={this.state.editor} onChange={this.onChange}
      onBlur={this.onBlur} ref="editor" />;
  }
}

const mapStateToProps = (state) => ({
  card: getCardUnderEdit(state)
});

CardTitleEditor = connect(mapStateToProps, {
  saveCard, cancelCardEdit
})(CardTitleEditor);

export default CardTitleEditor;
