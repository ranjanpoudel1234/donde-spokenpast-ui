import React, { Component } from 'react';
import { Grid, Cell, Card, CardActions} from 'react-mdl';
import TextField from 'material-ui/TextField';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import { SubmitButton } from './buttons';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            pw: ''
        }
    }
render(){
  
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
                                <form onSubmit={e => { this.submitForm(e) }}>
                                    <TextField required floatingLabelText={`Email`} onChange={(e) => this.setState({ pw: e.target.value })} />
                                    <TextField required floatingLabelText={`Password`} onChange={(e) => this.setState({ pw: e.target.value })} />
                                    <br/>
                                    <SubmitButton />
                                    <br/>
                                    <div class="hyper-link">


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
                                   icon={<i className="fa fa-facebook" style={{marginRight:'5px'}}>
                                   </i>}
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
                             <div class="hyper-link">

                            <a href='/signup' style={{textDecoration: 'none', color: 'Blue'}}>Not a member? SignUp Now</a>
                            </div>
                                </form>
                            </CardActions> 
                        </Card>
                        
                    </Cell>
                </Grid>
        )
    }
}

export default Login;
