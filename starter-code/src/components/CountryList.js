import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountryList extends Component {


    render () {  
    return (
        
           <Link to={`/${this.props.myfancykey}`}>
        <p>
        <strong>{this.props.country.name.common}</strong>
        </p>
        </Link> 
    //    { this.props.myfancykey }
        

        
      
       
     

    )

    }
}

export default CountryList;  