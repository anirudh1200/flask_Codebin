import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NavigationIcon from '@material-ui/icons/Navigation';
import Typography from '@material-ui/core/Typography';
import AceEditor from '../editor/AceEditor';
import PropTypes from 'prop-types';

class UploadForm extends Component {

	state = {
		pasteData: '',
		url: '',
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
		const { classes } = this.props;
		let color = 'white';
		let backgroundColor = '#080809';
		return (
			<Fragment>
				<Typography
					variant="h4"
					style={{ width: '100%', margin: '1% 0%', textAlign: 'center', color, fontFamily: "Roboto" }}
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
						InputLabelProps={{
							classes: {
								root: classes.cssLabel,
							},
						}}
						InputProps={{
							classes: {
								input: classes.multilineColor,
								root: classes.cssOutlinedInput,
								underline: classes.underline
							}
						}}
					/>
					<TextField
						id="standard-name"
						label="Url"
						value={this.state.name}
						name="url"
						onChange={this.handleChange}
						margin="none"
						style={{ maxWidth: '36%' }}
						InputLabelProps={{
							classes: {
								root: classes.cssLabel,
								focused: classes.cssFocused,
							},
						}}
						InputProps={{
							classes: {
								input: classes.multilineColor,
								root: classes.cssOutlinedInput,
								focused: classes.cssFocused,
								underline: classes.underline
							}
						}}
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
							<NavigationIcon />
							upload
            			</Button>
					</div>
				</form>
			</Fragment>
		)
	}
}

const styles = theme => ({
	multilineColor: {
		color: 'white',
		borderColor: 'white',
	},
	cssLabel: {
		color: 'white',
		'&$cssFocused': {
			color: 'white',
			borderColor: 'white',
		},
	},
	cssFocused: {},
	cssOutlinedInput: {
		color: 'white',
		'&$cssFocused': {
			borderColor: 'white',
		},
	},
	underline: {
		color: 'white',
		'&:after': {
			borderBottom: '2px solid white',

		},
	}
});

UploadForm.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UploadForm);