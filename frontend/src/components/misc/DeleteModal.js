import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class DeleteModal extends React.Component {
	state = {
		open: true,
		username: '',
		password: '',
		status: ''
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleLogin = () => {
		if (this.validateForm()) {
			let { open, status, ...data } = this.state;
			// Develpoment
			// fetch("http://localhost:5000/auth/login", {
			// Production
			fetch("/auth/login", {
				method: 'POST',
				headers: {
					"Content-Type": "application/json;charset=UTF-8"
				},
				body: JSON.stringify(data)
			})
				.then(res => res.json())
				.then(res => {
					if (res.login) {
						this.handleClose();
					} else {
						this.setState({ status: 'Credentials are incorrect' })
					}
				})
				.catch(console.log);
		}
	}

	validateForm = () => {
		if (!this.state.username) {
			this.setState({ status: '** Please Enter Username !!' });
			return false;
		}
		if (!this.state.password) {
			this.setState({ status: '** Please Enter Password !!' });
			return false;
		}
		return true;
	}

	render() {
		let warning = <span style={{color: 'red', fontSize: '1em', marginLeft: '5%'}}>{this.state.status}</span>
		return (
			<div>
				<Dialog
					open={this.state.open}
					aria-labelledby="form-dialog-title"
				>
					<DialogTitle id="form-dialog-title">Login</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Please login to delete files
            </DialogContentText>
						<TextField
							autoFocus
							margin="dense"
							name="username"
							label="Username"
							type="text"
							onChange={this.handleChange}
							fullWidth
						/>
						<TextField
							margin="dense"
							name="password"
							label="Password"
							type="password"
							onChange={this.handleChange}
							fullWidth
						/>
					</DialogContent>
					{warning}
					<DialogActions>
						<Button onClick={this.handleLogin} color="primary">
							Login
            </Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}