import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardActions} from 'react-mdl';
import TextField from 'material-ui/TextField';
import { SubmitButton } from './buttons';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            usernm: '',
            pw: ''
        }
    }
    submitForm = (e) => {
        e.preventDefault() //this stops the page from redireting when you hit submit
        alert(`Email: ${this.state.email} - PW: ${this.state.pw} - usernm: ${this.state.usernm}` )
    }

    render(){
        return(
            <Grid className="home-grid">
            <Cell col={12} align='middle'>
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardActions> 
                            <form onSubmit={e => { this.submitForm(e) }}>
                            <TextField required floatingLabelText={`Email`} onChange={(e) => this.setState({ pw: e.target.value })} />
                            <TextField required floatingLabelText={`Username`} onChange={(e) => this.setState({ pw: e.target.value })} />
                            <TextField required floatingLabelText={`Password`} onChange={(e) => this.setState({ pw: e.target.value })} />
                            <SubmitButton />
                            </form>
                    </CardActions> 
                </Card>
            </Cell>
            </Grid>
       )
    }
}

export default Signup;
