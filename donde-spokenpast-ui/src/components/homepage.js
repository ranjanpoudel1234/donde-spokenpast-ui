import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
class Homepage extends Component {
    render(){
        return(
            <div style={{width: '100', margin: 'auto'}}>
             <Grid className="home-grid">
             <Cell col={12}>
             <img 
             src="https://cdn0.iconfinder.com/data/icons/digital-marketing-15/64/vector_587_15-512.png"
             alt="spoknpast"
             className="spoknpast-img"
             />
            </Cell>
            </Grid>
            </div>

        )
    }
}

export default Homepage;
