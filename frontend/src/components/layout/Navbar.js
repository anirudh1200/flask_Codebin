import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import ListIcon from '@material-ui/icons/List'
import Info from '../misc/Info';

const styles = {
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

function SimpleAppBar(props) {
  const [count, setCount] = useState('');
  const { classes } = props;
  let backgroundColor = '#080809';
  const handleClose = () => setCount('');
  let right = window.innerWidth > 600 ? ['12%', '8%', '4%'] : ['16%', '100%', '5%'];
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar className={classes.root}>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Typography variant="h6" style={{ color: 'white', letterSpacing: '0.1em', fontSize: '1.5em', fontWeight: 'bold', fontFamily: 'Roboto' }}>
              codebin
            </Typography>
          </Link>
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
        </Toolbar>
      </AppBar>
      {count}
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);