
import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Data from './components/covid-19.js'
import './App.css'



class App extends Component {

  state = {
    covidInfoArray: []
  }

  addInfo = (covidInfo) => {
    this.setState(prevState => ({
      covidInfoArray:[...prevState.covidInfoArray, covidInfo]
    }))
  }
  render() {

    
    
    return (

      <Router>
      
        <Switch>
            <Data  covidInfoArray={this.state.covidInfoArray.data}/>
        </Switch>
       
      </Router>
    );
  }
}

export default App