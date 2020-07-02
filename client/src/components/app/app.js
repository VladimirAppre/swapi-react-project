import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-services";
import ErrorBoundry from "../error-boundry/error-boundry";
import {SwapiServiceProvider} from "../swapi-service-context/swapi-service-context";
import {LoginPage, PeoplePage, PlanetsPage, SecretPage, StarshipsPage} from "../pages";

import './app.css';
import StarshipDetails from "../sw-components/starship-details";
import NotFound from "../not-found/not-found";

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    swapiService: new SwapiService(),
    hasError: false,
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true});
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator/>
    }
    ;

    const {isLoggedIn} = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange}/>
              <RandomPlanet/>
              <Switch>
                <Route path='/'
                       render={() => <h2>Добро пожаловать в SWAPI REACT!</h2>}
                       exact/>
                <Route path='/people/:id?' component={PeoplePage}/>
                <Route path='/planets' exact component={PlanetsPage}/>
                <Route path='/planets/id' exact component={PlanetsPage}/>
                <Route path='/starships' exact component={StarshipsPage}/>
                <Route path='/starships/:id'
                       render={({match, location, history}) => {
                         const {id} = match.params;
                         return <StarshipDetails itemId={id}/>
                       }}/>

                <Route path='/login' render={() => (
                  <LoginPage
                    isLoggedIn={isLoggedIn}
                    onLogin={this.onLogin}
                  />
                )}/>

                <Route path='/secret' render={() => (
                  <SecretPage isLoggedIn={isLoggedIn}/>
                )}/>

                <Route component={NotFound}/>
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  };
};
