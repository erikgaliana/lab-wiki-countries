import React, { Component } from 'react';

import './App.css';
import { Route, Switch } from 'react-router-dom';
import countries from './countries.json';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

class App extends Component {
  state = {
    countriesArray : countries,
  }

  render() {

    
    return (
    <div className="App">
       
    <div id="root">
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="navbar-brand">WikiCountries
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-5" >
            <div className="list-group">
              
               {/* {console.log(this.state.countriesArray)} */}
               { this.state.countriesArray.map(( oneCountry,index) => {
                     return <CountryList key={index} country={oneCountry} myfancykey={index}/>
              })}

            </div>
          </div>
          <div className="col-7">
              <Switch>
                
                  {/* <Route exact path="/:countryId" component={CountryDetails} /> */}
                  <Route exact path="/:countryId" render={(props) => <CountryDetails {...props} countryArr={this.state.countriesArray}/>}/>
                
                                                

                </Switch>


       
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  );

  }
}

export default App;
