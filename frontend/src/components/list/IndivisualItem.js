import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import grey from '@material-ui/core/colors/grey';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import CodeIcon from '@material-ui/icons/Code';
import VisibilityIcon from '@material-ui/icons/Visibility';

class IndivisualItem extends Component {

	state = {
		isHovered: false
	}

	downloadFile = (type) => {
		// An option
		// window.location = `/${url}`;
		// Second approach
		let url = this.props.paste.url;
		if (type === '.txt') {
			fetch(`/d/${url}`)
				.then(res => res.blob())
				.then(blob => {
					let Url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');
					a.href = Url;
					a.download = url + type;
					document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
					a.click();
					a.remove();  //afterwards we remove the element again         
				})
				.catch(console.log);
		} else {
			fetch(`/d/pdf/${url}`)
				.then(res => res.blob())
				.then(blob => {
					let Url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');
					a.href = Url;
					a.download = url + type;
					document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
					a.click();
					a.remove();  //afterwards we remove the element again         
				})
				.catch(console.log);
		}
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
		let iconStyle = { width: '8%', margin: 'auto' };
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
				<CodeIcon
					style={iconStyle}
					onClick={() => this.redirect('edit')}
				/>
				<VisibilityIcon
					style={iconStyle}
					onClick={() => this.redirect('view')}
				/>
				<ArrowDownward
					style={iconStyle}
					onClick={() => this.downloadFile('.txt')}
				/>
				<ArrowDownward
					style={iconStyle}
					onClick={() => this.downloadFile('.pdf')}
				/>
			</ListItem>
		)
	}
}

export default IndivisualItem;