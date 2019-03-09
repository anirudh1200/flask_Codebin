import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import formatDate from '../../utils/date';
import AceEditor from '../editor/AceEditor';

class UploadForm extends Component {

	state = {
		pasteData: '',
		url: '',
		date: formatDate(new Date()),
		status: '',
		language: 'plain_text',
		editor: ''
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit = () => {
		let pasteData = this.state.editor.getValue().replace(/\t/g, "    ");
		this.setState({ pasteData }, this.upload);
	}

	handleLanguageChange = language => {
		this.setState({ language });
	}

	getDropdown = dropdown => {
		// Do Nothing
	}

	upload = () => {
		if (this.validateForm()) {
			let { editor, status, ...data } = this.state;
			// Development
			// fetch("http://localhost:5000/d/upload", {
			// Production
			fetch("/d/upload", {
				method: 'POST',
				headers: {
					"Content-Type": "application/json;charset=UTF-8"
				},
				body: JSON.stringify(data)
			})
				.then(res => res.json())
				.then(res => {
					if (res.success) {
						this.props.displayChip({ type: 'success', displayText: 'Uploaded Successfully !!' });
						this.props.history.push('/');
					} else if (res.status) {
						this.setState({ status: res.status })
					} else {
						this.props.displayChip({ type: 'fail' });
					}
				})
				.catch(err => {
					console.log(err);
					this.props.displayChip({ type: 'fail' });
				});
		}
	}

	getEditor = (editor) => {
		this.setState({ editor });
		editor.setValue('');
	}

	validateForm = () => {
		let url = this.state.url;
		const reservedWords = ['download', 'panel', 'upload', 'pdf', 'delete', 'uploadform'];
		for (let i = 0; i < reservedWords.length; i++) {
			if (url === reservedWords[i]) {
				this.setState({ status: '* Url is a reserved word. Please change it' });
				return false;
			}
		}
		let splChars = "* |,\":<>[]{}`\\';()@&$#%";
		for (let i = 0; i < url.length; i++) {
			if (splChars.indexOf(url[i]) !== -1) {
				this.setState({ status: '* URL cannot contain special characters or spaces' });
				return false;
			}
		}
		if (!this.state.pasteData) {
			this.setState({ status: '* Your Paste cannot be empty!' })
			return false;
		}
		if (!url) {
			this.setState({ status: '* Please Enter URL' })
			return false;
		}
		return true;
	}

	render() {
		return (
			<Fragment>
				<Typography
					variant="h4"
					style={{ width: '100%', margin: '1% 0%', textAlign: 'center', color: grey[800] }}
				>
					Upload Your Paste
        </Typography>
				<form autoComplete="off" style={{ width: '90%', margin: '0% 5%' }}>
					<AceEditor
						initialValue={''}
						name="pasteData"
						getEditor={this.getEditor}
						numberOfLines={34}
						handleLanguageChange={this.handleLanguageChange}
						getDropdown={this.getDropdown}
					/>
					<TextField
						disabled
						id="standard-disabled"
						value="codebinn.herokuapp.com/d/"
						margin="normal"
						style={{ maxWidth: '62%', width: '210px' }}
					/>
					<TextField
						id="standard-name"
						label="Url"
						value={this.state.name}
						name="url"
						onChange={this.handleChange}
						margin="none"
						style={{ maxWidth: '36%' }}
					/>
					<div style={{ marginTop: '2%', textAlign: 'center', marginBottom: '30px' }}>
						<div style={{ color: 'red' }}>{this.state.status}</div>
						<Fab
							variant="extended"
							aria-label="Delete"
							onClick={this.handleSubmit}
							style={{
								color: grey[50],
								backgroundColor: grey[800]
							}}
						>
							<NavigationIcon style={{ color: grey[50] }} />
							Upload
            </Fab>
					</div>
				</form>
			</Fragment>
		)
	}
}

export default UploadForm;