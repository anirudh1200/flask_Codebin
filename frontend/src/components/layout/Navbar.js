import React, { useState, Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import ListIcon from '@material-ui/icons/List'
import Info from '../misc/Info';
import { connect } from 'react-redux';

function SimpleAppBar(props) {
  const [count, setCount] = useState('');
  let backgroundColor = '#080809';
  const handleClose = () => setCount('');
  let right = window.innerWidth > 600 ? ['12%', '8%', '4%'] : ['12%', '100%', '2%'];
  let icons = null;
  if (props.login) {
    icons = (
      <Fragment>
        <Link to='/panel' style={{ margin: 0, padding: 0 }}>
          <Fab aria-label="Add" style={{ position: 'absolute', right: right[0], top: '5%', backgroundColor }}>
            <ListIcon style={{ color: 'white' }} />
          </Fab>
        </Link>
        <Fab
          aria-label="Add"
          style={{ position: 'absolute', fontSize: '1.2em', right: right[1], top: '5%', backgroundColor, color: 'white' }}
          onClick={() => setCount(<Info handleClose={handleClose} />)}
        >
          ℹ
        </Fab>
        <Link to='/uploadform' style={{ margin: 0, padding: 0 }}>
          <Fab aria-label="Add" style={{ position: 'absolute', right: right[2], top: '5%', backgroundColor }}>
            <AddIcon style={{ color: 'white' }} />
          </Fab>
        </Link>
      </Fragment >
    )
  } else {
    icons = (
      <Fragment>
        <Link to='/login' style={{ margin: 0, padding: 0 }}>
          <Fab
            aria-label="Add"
            style={{ fontSize: '1em', textTransform: 'none', position: 'absolute', right: right[2], top: '5%', backgroundColor, color: '#eeeeee' }}
          >
            login
        </Fab>
        </Link>
      </Fragment>
    )
  }
  let showCodebin = null;
  if (props.showCodebin) {
    showCodebin = (
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Typography variant="h6" style={{ color: 'white', letterSpacing: '0.1em', fontSize: '1.5em', fontWeight: 'bold', fontFamily: 'Roboto' }}>
          codebin
      </Typography>
      </Link>
    )
  }
  return (
    <div style={{ display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center', height: '7vh' }}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar style={{ display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
          {showCodebin}
          {icons}
        </Toolbar>
      </AppBar>
      {count}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    login: state.login,
    showCodebin: state.showCodebin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: dispatch({ type: 'LOGOUT' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleAppBar);