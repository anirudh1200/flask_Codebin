import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
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
  let backgroundColor = grey[900];
  const handleClose = () => setCount('');
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor }}>
        <Toolbar className={classes.root}>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Typography variant="h6" style={{ color: 'white', letterSpacing: '0.5em', fontSize: '1.5em' }}>
              CODEBIN
            </Typography>
          </Link>
          <Link to='/panel' style={{ margin: 0, padding: 0 }}>
            <Fab aria-label="Add" style={{ position: 'absolute', right: '12%', top: '5%', backgroundColor }}>
              <ListIcon style={{ color: 'white' }} />
            </Fab>
          </Link>
            <Fab
              aria-label="Add"
              style={{ position: 'absolute', fontSize: '1.2em', right: '8%', top: '5%', backgroundColor, color: 'white' }}
              onClick={() => setCount(<Info handleClose={handleClose} />)}
            >
              ℹ
            </Fab>
          <Link to='/uploadform' style={{ margin: 0, padding: 0 }}>
            <Fab aria-label="Add" style={{ position: 'absolute', right: '4%', top: '5%', backgroundColor }}>
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