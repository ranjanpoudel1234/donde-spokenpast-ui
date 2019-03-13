import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
class Homepage extends Component {
    render(){
        return(
            <div style={{width: '100', margin: 'auto'}}>
             <Grid className="home-grid">
             <Cell col={12}>
             <div className="banner-text">
                <h1></h1>
                
                </div>
             </Cell>
             </Grid>
            </div>

        )
    }
}

export default Homepage;
