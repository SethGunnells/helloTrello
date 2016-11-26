import React from 'react';
import { Editor, EditorState, ContentState, EditorChangeType } from 'draft-js';

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editor: EditorState.createWithContent(
        ContentState.createFromText(this.props.card.title)
      )
    };

  }

  onChange = (state) => {
    this.setState({ editor: state });
  }

  onBlur = () => {
    var {card, onSave} = this.props;
    onSave(card.id, this.state.editor.getCurrentContent().getPlainText());
  }

  componentWillReceiveProps({card}) {
    if (card) {
      var newEditorState = EditorState.push(
        this.state.editor,
        ContentState.createFromText(card.title)
      );

      this.setState({editor: newEditorState});
    }
  }

  render() {
    return <Editor editorState={this.state.editor} onChange={this.onChange}
      onBlur={this.onBlur} />;
  }
}
