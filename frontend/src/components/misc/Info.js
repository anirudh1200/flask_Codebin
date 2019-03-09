import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class Info extends React.Component {
  state = {
    open: true,
  };

  handleClose = () => {
    this.props.handleClose();
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={{ top: '15%', left: '10%', height: '60%', width: '80%' }} className={classes.paper}>
            <Typography
              variant="h2"
              align="center"
              style={{
                marginTop: '3%',
                marginBottom: '5%',
                fontFamily: "Major Mono Display",
              }}
            >
              how it works
            </Typography>
            <Typography
              variant="h6"
              align="center"
              style={{
                fontFamily: "Major Mono Display",
                marginBottom: '3%'
              }}
            >
              upload a code snippet
            </Typography>
            <Typography
              variant="h6"
              align="center"
              style={{
                fontFamily: "Major Mono Display",
                marginBottom: '3%'
              }}
            >
              go to codebinn.herokuapp.com/d/(url) to download in txt format
            </Typography>
            <Typography
              variant="h6"
              align="center"
              style={{
                fontFamily: "Major Mono Display",
                marginBottom: '3%'
              }}
            >
              go to codebinn.herokuapp.com/d/pdf/(url) to download in pdf format
            </Typography>
            <Typography
              variant="h6"
              align="center"
              style={{
                fontFamily: "Major Mono Display",
                marginBottom: '3%'
              }}
            >
              go to codebinn.herokuapp.com/d/pdf/size/(url) to download in pdf format with specific font size
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

Info.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(Info);

export default SimpleModalWrapped;