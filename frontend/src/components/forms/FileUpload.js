import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FileUpload extends Component {
	state = {
		open: true
	};

	handleClose = () => {
		this.setState({ open: false });
		this.props.history.push('/');
	};

	render() {
		let warning = <span style={{ color: 'red', fontSize: '1em', marginLeft: '5%' }}>{this.state.status}</span>
		return (
			<div>
				<Dialog
					open={this.state.open}
					aria-labelledby="form-dialog-title"
				>
					<DialogTitle id="form-dialog-title">Upload File</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Choose and file and submit
            			</DialogContentText>
						<form action="http://codebinnn.herokuapp.com/d/uploadfile/" method="POST"
							encType="multipart/form-data">
							<input type="file" name="file" />
							<input type="submit" id="submitBtn" style={{ display: 'none' }} />
						</form>
					</DialogContent>
					{warning}
					<DialogActions>
						<Button
							onClick={() => {
								let submitBtn = document.getElementById('submitBtn');
								submitBtn.click();
							}}
							color="primary"
						>
							Submit
            			</Button>
						<Button onClick={this.handleClose} color="primary">
							Cancel
            			</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}