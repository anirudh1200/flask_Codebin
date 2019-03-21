import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import PasteList from './components/list/PasteList';
import UploadForm from './components/forms/Upload';
import Home from './components/layout/Home';
import NotFound from './components/misc/NotFound';
import View from './components/forms/View';
import Edit from './components/forms/Edit';
import DeletePanel from './components/list/DeletePanel';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import Avatar from '@material-ui/core/Avatar';
import grey from '@material-ui/core/colors/grey';
import Login from './components/auth/Login';
import Signin from './components/auth/Signin';

class App extends Component {

  state = {
    chip: ''
  }

  createChip = ({ type, displayText }) => {
    if (type === 'success') {
      return <Chip
        style={{ fontSize: '1.1em', color: grey[50], backgroundColor: grey[800] }}
        label={displayText}
        avatar={<Avatar style={{ color: grey[50], backgroundColor: grey[800] }}><DoneIcon /></Avatar>}
      />
    }
    return <Chip
      style={{ fontSize: '1.1em', color: grey[50], backgroundColor: grey[800] }}
      label="An Error Occured"
      avatar={<Avatar style={{ color: grey[50], backgroundColor: grey[800] }}><ClearIcon /></Avatar>}
    />
  }

  displayChip = type => {
    let chip = this.createChip(type);
    this.setState({ chip });
    setTimeout(() => {
      this.setState({ chip: '' })
    }, 2000);
  }

  render() {
    let backgroundColor = '#080809';
    return (
      <div className="App" style={{ backgroundColor, height: '100vh'}}>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/view' component={View} />
          <Route exact path='/error' component={NotFound} />
          <Route exact path='/panel' component={PasteList} />
          <Route
            exact path='/login'
            render={(routeProps) => (<Login {...routeProps} displayChip={this.displayChip} />)}
          />
                    <Route
            exact path='/signin'
            render={(routeProps) => (<Signin {...routeProps} displayChip={this.displayChip} />)}
          />
          <Route
            exact path='/uploadform'
            render={(routeProps) => (<UploadForm {...routeProps} displayChip={this.displayChip} />)}
          />
          <Route
            path='/edit'
            render={(routeProps) => (<Edit {...routeProps} displayChip={this.displayChip} />)}
          />
          <Route
            path='/delete'
            render={(routeProps) => (<DeletePanel {...routeProps} displayChip={this.displayChip} />)}
            displayChip={this.displayChip}
          />
        </Switch>
        <span style={{ width: '100%', position: 'fixed', bottom: '5%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {this.state.chip}
        </span>
      </div>
    );
  }
}

export default App;
