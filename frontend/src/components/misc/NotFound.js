import React, { Component } from 'react';
import backgroundImage from '../../background.jpg';
import Typography from '@material-ui/core/Typography';

class NotFound extends Component {

	componentDidMount = () => {
		setTimeout(this.redirect, 1500);
	}

	redirect = () => {
		this.props.history.push('/');
	}

	render() {
		return (
			<div style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				height: '91vh',
				position: 'flexible',
				top: '8%',
				bottom: 0,
				left: 0,
				right: 0
			}}>
				<Typography
					align="center"
					variant="h2"
					style={{
						fontFamily: "Major Mono Display",
						fontSize: "4em",
						marginBottom: 15,
						paddingTop: "30vh",
						fontWeight: 'bold'
					}}
				>
					404....not found :(
        </Typography>
			</div>
		)
	}
}

export default NotFound;