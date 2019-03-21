import React, { Component, Fragment } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import grey from '@material-ui/core/colors/grey';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import CodeIcon from '@material-ui/icons/Code';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';

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
		this.state.isHovered ? (listItemStyle = { backgroundColor: grey[200], margin: '0.5%' }) : (listItemStyle = { margin: '0.5%' });
		let iconStyle = { width: '8%', margin: 'auto' };
		let editAndDelete = null;
		if (paste.username === this.props.username) {
			editAndDelete = (
				<Fragment>
					<DeleteIcon
						style={iconStyle}
						onClick={this.handleDelete}
					/>
					<CodeIcon
						style={iconStyle}
						onClick={() => this.redirect('edit')}
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
						<CodeIcon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText
					style={{ letterSpacing: '0.05em' }}
					primary={paste.url}
					secondary={paste.date}
				/>
				{editAndDelete}
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