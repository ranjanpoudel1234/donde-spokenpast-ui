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
                                    <GoogleLogin
                                        clientId="745809376832-8mg46nv4h2b6cokflvj96logvsa0di6t.apps.googleusercontent.com"
                                        buttonText="GOOGLE"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                    />
                                    <FacebookLogin
                                        appId="352446695358924"
                                        fields="name,email,picture"
                                        callback={responseFacebook}
                                    />
                                    <br/>
                                    <SubmitButton />
                                </form>
                            </CardActions> 
                        </Card>
                        <a href='/forgotPW' style={{textDecoration: 'none', color: 'Blue'}}>Reset Password</a>
                    </Cell>
                </Grid>
        )
    }
}

export default Login;
