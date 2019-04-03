import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Drawer from 'material-ui/Drawer'
import Dialog from 'material-ui/Dialog'
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'
import { ButtonBase } from '@material-ui/core';

const styles = {
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
}

//submit button for forms 
export const SubmitButton = (props) => <RaisedButton primary={true} disabled={props.disabled} fullWidth='true' type='submit' label='Submit' />

//toggles a drawer
//pass drawer a component to display
export class DrawerButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }
    render() {
        return (
            <div>
                <FlatButton secondary={true} label={this.props.label} onClick={e => this.setState({ open: !this.state.open })} />
                <Drawer openSecondary={this.props.secondary} 
                        docked={false} 
                        open={this.state.open} 
                        onRequestChange={e => this.setState({ open: !this.state.open })}>
                    <div>{this.props.display}</div>
                </Drawer>
            </div>
        )
    }
}

//@material-ui/core NavBar drawer 
export class NavDrawer extends Component {

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
                    {['Login', 'Register'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
            </div>
        );

        return(
            <div>
                <IconButton onClick={this.toggleDrawer('left', true)}><MenuIcon/></IconButton>
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


//toggles a modal (popup)
//passes modal a component to display
export class ModalButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }
    render() {
        return (
            <div>
                <FlatButton secondary={true} label={this.props.label} onClick={e => this.setState({ open: !this.state.open })} />
                <Dialog
                    actions={<RaisedButton label='Close' onClick={e => this.setState({open: !this.state.open})}/>}
                    open={this.state.open}
                    onRequestClose={e => this.setState({open: !this.state.open})}>
                    <div>{this.props.display}</div>
                </Dialog>
            </div>
        )
    }
}

NavDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavDrawer);