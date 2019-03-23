import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IndivisualItem from './IndivisualItem';
import IndivisualFile from './IndivisualFile';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';

class PasteList extends Component {

	state = {
		pasteList: []
	}

	componentDidMount = () => {
		// Development
		// fetch('http://localhost:5000/d/getall')
		// Production
		fetch('/d/getall')
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
		let backgroundColor = '#080809';
		let headingStyle = { width: '8%', padding: 'auto', textAlign: 'center' };
		let list = this.state.pasteList.map((paste, i) => {
			if (paste.uploadType === 'code') {
				return (
					<IndivisualItem
						paste={paste}
						key={i}
						history={this.props.history}
						username={this.props.username}
						displayChip={this.props.displayChip}
						handleDelete={this.handleDelete}
					/>
				)
			} else {
				return (
					<IndivisualFile
						paste={paste}
						key={i}
						history={this.props.history}
						username={this.props.username}
						displayChip={this.props.displayChip}
						handleDelete={this.handleDelete}
					/>
				)
			}
		});
		return (
			<div style={{ backgroundColor: '#fafaff', height: '93vh' }}>
				<div style={{ margin: '0% 5%' }}>
					<List style={{ width: '100%' }}>
						<ListItem>
							<ListItemText />
							<p style={headingStyle}>Delete</p>
							<p style={headingStyle}>Edit</p>
							<p style={headingStyle}>View</p>
							<p style={headingStyle}>.txt</p>
							<p style={headingStyle}>.pdf</p>
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
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		username: state.username
	}
}

export default connect(mapStateToProps)(PasteList);