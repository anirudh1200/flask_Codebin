import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Logo from '../../logo.png';
import './auth.css';

class Signin extends Component {

	state = {
		username: '',
		password: '',
		status: ''
	}

	handleInput = e => {
		console.log(this.state);
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit = e => {
		e.preventDefault();
		if (this.validate()) {
			let { status, ...data } = this.state;
			fetch("http://localhost:5000/auth/signin", {
				method: 'POST',
				headers: {
					"Content-Type": "application/json;charset=UTF-8"
				},
				body: JSON.stringify(data)
			})
				.then(res => res.json())
				.then(res => {
					if (res.login) {
						this.props.displayChip({ type: 'success', displayText: 'Signin Successful !!' });
						this.props.history.push('/');
					} else if (res.status) {
						this.setState({ status: res.status })
					} else {
						this.props.displayChip({ type: 'Signin Failed' });
					}
				})
				.catch(err => {
					console.log(err);
					this.props.displayChip({ type: 'Signin Failed' });
				});
		}
	}

	validate = () => {
		let { username, password } = this.state;
		let splChars = "* |,\":<>[]{}`\\';()@&$#%";
		for (let i = 0; i < username.length; i++) {
			if (splChars.indexOf(username[i]) !== -1) {
				this.setState({ status: '* username cannot contain special characters or spaces' });
				return false;
			}
		}
		for (let i = 0; i < username.length; i++) {
			if (splChars.indexOf(username[i]) !== -1) {
				this.setState({ status: '* password cannot contain special characters or spaces' });
				return false;
			}
		}
		if (!username) {
			this.setState({ status: '* username cannot be empty' });
			return false;
		}
		if (!password) {
			this.setState({ status: '* password cannot be empty' });
			return false;
		}
		return true;
	}

	render() {
		return (
			<div style={{ height: '100vh' }}>
				<Grid container spacing={0}>
					<Grid item xs={12} md={6}>
						<div style={{ backgroundColor: '#080809', width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
							<img src={Logo} alt='codebin' />
						</div>
					</Grid>
					<Grid item xs={12} md={6}>
						<div className='box' style={{ backgroundColor: '#eeeeee', fontSize: '1.5em', width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
							<h1>Sign In</h1>
							<input type="text" name="username" placeholder="Username" style={{ fontSize: '1em' }} onChange={this.handleInput} />
							<input type="password" name="password" placeholder="Password" style={{ fontSize: '1em' }} onChange={this.handleInput} />
							<div style={{ color: 'red', fontSize: '0.8em' }}>{this.state.status}</div>
							<input type="submit" value="SignIn" style={{ fontSize: '1em' }} onClick={this.handleSubmit} />
						</div>
					</Grid>
				</Grid>
			</div>
		)
	}
}

export default Signin;