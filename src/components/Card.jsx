import React from 'react';
import { Editor, EditorState, ContentState } from 'draft-js';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createWithContent(ContentState.createFromText(props.title)) };
    this.onChange = (editorState) => this.setState({editorState});
  }

  render() {
    return <Editor editorState={this.state.editorState} onChange={this.onChange} />;
  }
}
