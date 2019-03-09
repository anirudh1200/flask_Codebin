import React, { Component, Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteItem from './DeleteItem';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import grey from '@material-ui/core/colors/grey';
import DeleteModal from '../misc/DeleteModal';

class DeletePanel extends Component {

	state = {
		pasteList: [],
		chip: ''
	}

	componentDidMount = () => {
		// Development
		// fetch('http://localhost:5000/d/download')
		// Production
		fetch('/d/download')
			.then(res => res.json())
			.then(res => this.setState({
				pasteList: res
			}));
	}

	redirectToUpload = () => {
		this.props.history.push('/uploadform');
	}
	handleDelete = (url) => {
		let newPasteList = this.state.pasteList.filter(paste => {
			return paste.url !== url
		});
		this.setState({ pasteList: newPasteList });
	}

	render() {
		let backgroundColor = grey[900];
		let headingStyle = { width: '20%', padding: 'auto', textAlign: 'center' };
		let list = this.state.pasteList.map((paste, i) => {
			return (
				<DeleteItem
					paste={paste}
					key={i}
					handleDelete={this.handleDelete}
					displayChip={this.props.displayChip}
				/>
			)
		});
		return (
			<Fragment>
				<DeleteModal />
				<div style={{ margin: '0% 5%' }}>
					<List style={{ width: '100%' }}>
						<ListItem>
							<ListItemText />
							<p style={headingStyle}>Delete</p>
						</ListItem>
						{list}
					</List>
					<Fab
						aria-label="Add"
						style={{ position: 'fixed', bottom: '10%', right: '5%', backgroundColor, color: 'white' }}
						onClick={this.redirectToUpload}
					>
						<AddIcon fontSize="large" />
					</Fab>
				</div>
			</Fragment>
		)
	}
}

export default DeletePanel;