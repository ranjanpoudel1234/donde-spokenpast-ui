import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import NavDrawer from '../components/NavDrawer';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing.unit * 2,
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit * 3,
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
  });


function NavBar(props) {
    const { classes } = props;
    return(
        <div className={classes.root}>
        <AppBar elevation={2} position="fixed">
            <Toolbar>
                <NavDrawer />
                <Typography variant="h6" color="inherit" className={classes.grow}>SpokenPast</Typography>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon/>
                  </div>
                  <InputBase
                    placeholder="Search..."
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                </div>
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