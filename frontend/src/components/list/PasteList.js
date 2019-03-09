import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IndivisualItem from './IndivisualItem';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import grey from '@material-ui/core/colors/grey';

class PasteList extends Component {

	state = {
		pasteList: []
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

	render() {
		let backgroundColor = grey[900];
		let headingStyle = { width: '8%', padding: 'auto', textAlign: 'center' };
		let list = this.state.pasteList.map((paste, i) => {
			return (
				<IndivisualItem
					paste={paste}
					key={i}
					history={this.props.history}
				/>
			)
		});
		return (
			<div style={{ margin: '0% 5%' }}>
				<List style={{width: '100%'}}>
					<ListItem>
						<ListItemText />
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
		)
	}
}

export default PasteList;