import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Link } from 'react-router-dom';

const styles = {
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
}

//@material-ui/core NavBar drawer 
class NavDrawer extends Component {

    state = {
      top: false,
      left: false,
      bottom: false,
      right: false,
    }
  
    toggleDrawer = (side, open) => () => {
      this.setState({
        [side]: open,
      })
    }

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>
                    <ListItem component={Link} to="/login">
                    <ListItemText
                        primary="Login" 
                    />
                    </ListItem>
                    <ListItem component={Link} to="/signup">
                    <ListItemText
                        primary="Signup" 
                    />
                    </ListItem>
                </List>
            </div>
        );

        return(
            <div>
                <IconButton className={classes.menuButton} color="inherit" onClick={this.toggleDrawer('left', true)}><MenuIcon/></IconButton>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

NavDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavDrawer);