import React, { Component } from 'react';
import { Grid, Cell, Card, CardActions} from 'react-mdl';
import TextField from 'material-ui/TextField';
import { SubmitButton } from '../components/buttons';

class ForgotPW extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: ''
        }
    }
    render(){
        return(
            <Grid className="home-grid">
            <Cell col={12} align='middle'>
               <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
               <CardActions>
                            <form onSubmit={e => { this.submitForm(e) }}>
                            <TextField required floatingLabelText={`Email`} onChange={(e) => this.setState({ pw: e.target.value })} />
                            <div class="space">
                            <SubmitButton />
                            </div>
                            </form>
                </CardActions> 
                </Card>
            </Cell>
            </Grid>
       )
    }
}

export default ForgotPW;
