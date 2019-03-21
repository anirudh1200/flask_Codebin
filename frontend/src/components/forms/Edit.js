import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import NavigationIcon from '@material-ui/icons/Navigation';
import Typography from '@material-ui/core/Typography';
import AceEditor from '../editor/AceEditor';

class Edit extends Component {

	state = {
		pasteData: '',
		url: '',
		language: '',
		dropdown: '',
		editor: ''
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

	handleSubmit = () => {
		let pasteData = this.state.editor.getValue().replace(/\t/g, "    ");
		this.setState({ pasteData }, this.upload);
	}

	handleLanguageChange = language => {
		this.setState({ language });
	}

	upload = () => {
		let { dropdown, editor, ...data } = this.state;
		fetch("/d/edit", {
			method: 'POST',
			headers: {
				"Content-Type": "application/json;charset=UTF-8"
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(res => {
				if (res.success) {
					this.props.displayChip({ type: 'success', displayText: 'File Edited Successfully' });
					this.props.history.push('/');
				} else {
					this.props.displayChip({ type: 'fail' });
				}
			})
			.catch(err => {
				console.log(err);
				this.props.displayChip({ type: 'fail' });
			});
	}

	getEditor = (editor) => {
		this.setState({ editor });
	}

	getDropdown = dropdown => {
		this.setState({ dropdown });
	}

	render() {
		let color = 'white';
		let backgroundColor = '#080809';
		return (
			<div style={{ backgroundColor }}>
				<Typography
					variant="h4"
					style={{ width: '100%', margin: '1% 0%', textAlign: 'center', color, fontFamily: "Roboto" }}
				>
					Update {this.state.url}
				</Typography>
				<form autoComplete="off" style={{ width: '90%', margin: '0% 5%' }}>
					<AceEditor
						initialValue={this.state.pasteData}
						name="pasteData"
						getEditor={this.getEditor}
						numberOfLines={36}
						handleLanguageChange={this.handleLanguageChange}
						getDropdown={this.getDropdown}
					/>
					<div style={{ marginTop: '2%', textAlign: 'center', marginBottom: '30px' }}>
						<div style={{ color: 'red' }}>{this.state.status}</div>
						<Button
							onClick={this.handleSubmit}
							style={{
								color,
								backgroundColor,
								fontFamily: "Roboto",
								textTransform: 'none',
								fontSize: '1.3em',
							}}
						>
							<NavigationIcon style={{ color }} />
							update
            			</Button>
					</div>
				</form>
			</div>
		)
	}
}

export default Edit;