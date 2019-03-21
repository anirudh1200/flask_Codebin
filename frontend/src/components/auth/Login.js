import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Logo from '../../logo.png';
import './auth.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Login extends Component {

	state = {
		username: '',
		password: '',
		status: ''
	}

	handleInput = e => {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit = e => {
		e.preventDefault();
		if (this.validate()) {
			let { status, ...data } = this.state;
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
						this.props.login(this.state.username);
						this.props.displayChip({ type: 'success', displayText: 'Login Successful !!' });
						this.props.history.push('/');
					} else {
						this.setState({ status: '* credentials are incorrect' })
						this.props.displayChip({ type: 'login failed' });
					}
				})
				.catch(err => {
					console.log(err);
					this.props.displayChip({ type: 'fail' });
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
			<div>
				<Grid container spacing={0}>
					<Grid item xs={12} md={6}>
						<div style={{ backgroundColor: '#080809', width: '100%', height: '93vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
							<img src={Logo} alt='codebin' />
						</div>
					</Grid>
					<Grid item xs={12} md={6}>
						<div className='box' style={{ backgroundColor: '#eeeeee', fontSize: '1.5em', width: '100%', height: '93vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
							<h1>Login</h1>
							<input type="text" name="username" placeholder="Username" style={{ fontSize: '1em' }} onChange={this.handleInput} />
							<input type="password" name="password" placeholder="Password" style={{ fontSize: '1em' }} onChange={this.handleInput} />
							<div style={{ color: 'red', fontSize: '0.8em' }}>{this.state.status}</div>
							<input type="submit" value="Login" style={{ fontSize: '1em' }} onClick={this.handleSubmit} />
							<p style={{ fontSize: '0.75em' }}>Not a user?
								<Link to='/signin' style={{ margin: 0, padding: 0, color: '#090910', marginLeft: '8px' }}>
									<u>Signin</u>
								</Link>
							</p>
						</div>
					</Grid>
				</Grid>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		login: (username) => dispatch({ type: 'LOGIN', username })
	}
}

export default connect(null, mapDispatchToProps)(Login);