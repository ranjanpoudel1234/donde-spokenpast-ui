import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Signup extends Component {
    render(){
        return(
            <div style={{width: '100', margin: 'auto'}}>
             <Grid className="home-grid">
             <Cell col={12}>
             <img 
                src="https://www.marketingtochina.com/wp-content/uploads/2017/09/Marketing-viral.png"
                alt="spoknpast"
                classname="spoknpast-img"
                />

                <div className="banner-text">
                <h1></h1>
                </div>
             </Cell>
             </Grid>
            </div>

        )
    }
}

export default Signup;
