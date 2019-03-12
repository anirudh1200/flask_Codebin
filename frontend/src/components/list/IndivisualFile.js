import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import grey from '@material-ui/core/colors/grey';
import ArrowDownward from '@material-ui/icons/ArrowDownward';

class IndivisualFile extends Component {

	state = {
		isHovered: false
	}

	downloadFile = () => {
		let url = this.props.paste.url;
		fetch(`/d/file/${url}`)
			.then(res => res.blob())
			.then(blob => {
				let Url = window.URL.createObjectURL(blob);
				let a = document.createElement('a');
				a.href = Url;
				a.download = url;
				document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
				a.click();
				a.remove();  //afterwards we remove the element again         
			})
			.catch(console.log);
	}

	redirect = (location) => {
		let url = this.props.paste.url;
		this.props.history.push(`/` + location + `/${url}`);
	}

	handleMouseEnter = () => {
		this.setState({ isHovered: true });
	}

	handleMouseLeave = () => {
		this.setState({ isHovered: false });
	}

	render() {
		const { paste } = this.props;
		let listItemStyle;
		this.state.isHovered ? (listItemStyle = { backgroundColor: grey[200], margin: '0.5%' }) : (listItemStyle = { margin: '0.5%' });
		let iconStyle = { width: '32%', margin: 'auto' };
		return (
			<ListItem
				style={listItemStyle}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>
				<ListItemAvatar>
					< Avatar>
						<AssignmentIcon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText
					style={{ letterSpacing: '0.05em' }}
					primary={paste.url}
					secondary={paste.date}
				/>
				<ArrowDownward
					style={iconStyle}
					onClick={this.downloadFile}
				/>
			</ListItem>
		)
	}
}

export default IndivisualFile;