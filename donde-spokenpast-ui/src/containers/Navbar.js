import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
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
        <AppBar elevation={2} position="fixed">
            <Toolbar>
                <NavDrawer />
                <Typography variant="h6" color="inherit" className={classes.grow}>SpokenPast</Typography>
            </Toolbar>
        </AppBar>
        <List style={{paddingTop: 55}}/>
        </div>
    )
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(NavBar);