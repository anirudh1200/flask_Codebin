import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import AceEditor from '../editor/AceEditor';

class View extends Component {

	state = {
		url: '',
		editor: '',
		dropdown: ''
	}

	componentDidMount = () => {
		let url = this.props.location.pathname.slice(6);
		this.setState({ url });
		this.getData(url);
	}

	getData = (url) => {
		fetch(`/d/view/${url}`)
			.then(res => res.json())
			.then(res => {
				this.state.editor.setValue(res.pasteData);
				this.state.editor.getSession().setMode(`ace/mode/${res.language}`);
				this.state.dropdown.setState({ language: res.language });
			})
			.catch(console.log);
	}

	getEditor = (editor) => {
		this.setState({ editor })
	}

	handleLanguageChange = language => {
		// Do nothing
	}

	getDropdown = dropdown => {
		this.setState({ dropdown });
	}

	render() {
		return (
			<Fragment>
				<Typography
					variant="h4"
					style={{ width: '100%', margin: '1% 0%', textAlign: 'center', color: grey[800] }}
				>
					{this.state.url}
				</Typography>
				<div style={{ width: '90%', margin: '0% 4%' }}>
					<AceEditor
						name="pasteData"
						getEditor={this.getEditor}
						numberOfLines={40}
						handleLanguageChange={this.handleLanguageChange}
						getDropdown={this.getDropdown}
					/>
				</div>
			</Fragment>
		)
	}
}

export default View