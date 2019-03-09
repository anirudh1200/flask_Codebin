import React, { Component, Fragment } from 'react';
import { findDOMNode } from 'react-dom';
import Dropdown from './Dropdown';

class AceEditor extends Component {

  state = {
    editorText: 'Loading...',
    editor: ''
  }

  componentDidMount() {
    let ace = window.ace;
    const node = findDOMNode(this.refs.root);
    const editor = ace.edit(node);
    this.setState({ editor });
    editor.setTheme("ace/theme/dark");
    editor.getSession().setMode(`ace/mode/plain_text`);
    editor.setShowPrintMargin(false);
    editor.setOptions({ minLines: this.props.numberOfLines });
    editor.setOptions({ maxLines: this.props.numberOfLines });
    editor.setOption('fontSize', 18);
    editor.setValue(this.state.editorText, -1);
    this.props.getEditor(editor);
  }

  changeLanguage = language => {
    switch (language) {
      case 'c':
      case 'cpp':
        language = 'c_cpp';
        break;
      case 'c#':
        language = 'csharp';
        break;
      case 'f#':
        language = 'fsharp';
        break;
      case 'plaintext':
        language = 'plain_text';
        break;
      default: break;
    }
    this.state.editor.getSession().setMode(`ace/mode/${language}`);
    this.props.handleLanguageChange(language);
  }

  render() {
    const style = { fontSize: '14px !important', border: '1px solid lightgray' };
    return (
      <Fragment>
        <Dropdown
          style={{ marginLeft: '30%' }}
          changeLanguage={this.changeLanguage}
          getDropdown={this.props.getDropdown}
        />
        <div ref="root" style={style}>
          {this.props.code}
        </div>
      </Fragment>
    );
  }
}

export default AceEditor;