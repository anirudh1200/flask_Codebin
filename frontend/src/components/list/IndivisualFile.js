import React, { Component, Fragment } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import DeleteIcon from '@material-ui/icons/Delete';

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

	handleDelete = () => {
		let url = this.props.paste.url;
		// development
		// fetch(`http://localhost:5000/d/delete/`, {
		// production
		fetch(`/d/delete/`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json;charset=UTF-8"
			},
			body: JSON.stringify({ login: 'true', url })
		})
			.then(res => res.json())
			.then(res => {
				if (res.success) {
					this.props.displayChip({ type: 'success', displayText: 'Deleted Successfully !!' });
					this.props.handleDelete(url);
				} else {
					this.props.displayChip({ type: 'fail' });
				}
			})
			.catch(err => {
				console.log(err);
				this.props.displayChip({ type: 'fail' });
			});
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
		this.state.isHovered ? (listItemStyle = { backgroundColor: '#eeeeee', margin: '0.5%' }) : (listItemStyle = { margin: '0.5%' });
		let editAndDelete = null;
		if (paste.username === this.props.username) {
			editAndDelete = (
				<Fragment>
					<DeleteIcon
						style={{ width: '8%', margin: 'auto' }}
						onClick={this.handleDelete}
					/>
				</Fragment>
			)
		}
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
				{editAndDelete}
				<ArrowDownward
					style={{ width: '32%', margin: 'auto' }}
					onClick={this.downloadFile}
				/>
			</ListItem>
		)
	}
}

export default IndivisualFile;