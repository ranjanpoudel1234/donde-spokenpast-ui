import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import NavDrawer from './NavDrawer';
import Toolbar from '@material-ui/core/Toolbar';




const NavBar = () => {
  
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <NavDrawer />
                SpokenPast
            </Toolbar>
        </AppBar>
        </div>
    )
}


export default NavBar;