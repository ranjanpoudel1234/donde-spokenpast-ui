import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import NavDrawer from '../components/NavDrawer';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
  };


function NavBar(props) {
    const { classes } = props;
    return(
        <div className={classes.root}>
        <AppBar position="static" elevation={2}>
            <Toolbar>
                <NavDrawer />
                <Typography variant="h6" color="inherit" className={classes.grow}>SpokenPast</Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(NavBar);