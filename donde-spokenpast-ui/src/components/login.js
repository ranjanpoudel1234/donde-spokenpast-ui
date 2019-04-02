import React, { Component } from 'react';
import { Grid, Cell, Card, CardActions} from 'react-mdl';
import TextField from 'material-ui/TextField';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import Snackbar from '@material-ui/core/Snackbar';

import { SubmitButton } from './buttons';

const error = {
    color : 'red',
}

export const docSel = (elem) => document.getElementById(elem);

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            pwd: '',
            hasError: true,
            userRegistration : this.props.history.location.state == undefined ? false : this.props.history.location.state.userRegistration,
        }
    }

    shouldDisableBtn = () => this.setState({hasError: this.state.email === "" || this.state.pwd === ""});  

    checkLogin = (e) => {
        e.preventDefault();
    }

    emailChange = (e) => {
        let emailElem = docSel('emailError');
        let newEmail = e.target.value;
        this.setState({ email: newEmail });
        if (newEmail === '') {
            emailElem.innerHTML = "Please enter your email.";
        } else {
            console.log(e.target.value);
            console.log(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newEmail)));
            if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newEmail))) {
                emailElem.innerHTML = "Please enter valid email.";
            } else {
                emailElem.innerHTML = "";
            }
        }
        this.shouldDisableBtn();
    }

    changePwd = (e) => {
        let pwdElem = docSel('pwdError');
        let newPwd = e.target.value;
        this.setState({ pwd: newPwd });

        if (newPwd === '') {
            pwdElem.innerHTML = "Please enter your password.";
        } else {
            pwdElem.innerHTML = "";
        }
        this.shouldDisableBtn();
    }


    render() {
  
        const responseGoogle = (response) => {
            console.log(response);
        }

        const responseFacebook = (response) => {
            console.log(response);
        }

        return(
                <Grid className="home-grid">
                    <Cell col={12} align='middle'>
                        <Card shadow={5} style={{minWidth:'1000', margin:'auto'}}>
                            <CardActions> 
                                <form onSubmit={this.checkLogin}>
                                    <TextField floatingLabelText={`Email`} onChange={this.emailChange} />
                                    <p style={error} id="emailError"></p>
                                    <TextField  floatingLabelText={`Password`} onChange={this.changePwd}/>
                                    <p style={error} id="pwdError"></p>
                                    <br/>
                                    <SubmitButton id="loginBtn" disabled={this.state.hasError}/>
                                    <br/>
                                    <div className="hyper-link">
                                    <a href='/forgotPW' style={{float:'right', textDecoration: 'none', color: 'Blue'}}>Forget Your Password?</a>
                                    </div>
                                    <br/>
                                    <br/>
                                    <br/>

                            <div style={{alignItems: 'center' }} >                           
                                 <FacebookLogin
                                   appId="352446695358924"
                                   autoLoad={false}
                                   fields="name,email,picture"
                                   callback={this.props.SocialSignUp}
                                   cssClass="btnFacebook"
                                   icon = "true"
                                   textButton = "&nbsp;&nbsp;Sign In with Facebook"                                                                
                                  />
                                <GoogleLogin
                                    clientId="745809376832-8mg46nv4h2b6cokflvj96logvsa0di6t.apps.googleusercontent.com"
                                    onSuccess={this.props.SocialSignUp}
                                    onFailure={this.props.SocialSignUp}
                                    cssClass="btnGoogle"
                                >
                                    <i className="fa fa-google-plus" style={{ marginRight: 
                                    '5px' }}/> 
                                    <span>&nbsp;&nbsp;Sign In with Google</span>                                                               
                                </GoogleLogin>
                            </div>
                             <br/>
                             <br/>
                             <div className="hyper-link">

                            <a href='/signup' style={{textDecoration: 'none', color: 'Blue'}}>Not a member? Sign Up Now</a>
                            </div>
                                </form>
                            </CardActions> 
                        </Card>
                        
                    </Cell>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        open = {this.state.userRegistration}
                        autoHideDuration={3000}
                        message="User successfully registered! Please login using your credentials"
                    >
                    </Snackbar>
                </Grid>
        )
    }
}

