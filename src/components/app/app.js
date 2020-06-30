import React, {Component} from "react";

import './app.css';
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ItemDetails from "../item-details/item-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-services";
import ErrorBoundry from "../error-boundry/error-boundry";
import {Record} from "../item-details/item-details";
import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList} from "../sw-components";
import {SwapiServiceProvider} from "../swapi-service-context/swapi-service-context";
import DummySwapiService from '../swapi-service-context/dummy-swapi-service';
import withSwapiService from "../hoc-helpers/with-swapi-service";

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    swapiService: new DummySwapiService(),
    hasError: false
  };

  onServiceChange = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ?
        DummySwapiService : SwapiService;

      console.log('switched, to', Service.name);
      return {
        swapiService: new Service ()
      }
    })
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };


  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true});
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage
    } = this.state.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}
      >
        <Record field='birthYear' label='Gender'/>
        <Record field='height' label='Рост'/>
        <Record field='mass' label='Вес'/>
      </ItemDetails>);

    const starshipDetails = (
      <ItemDetails
        itemId={10}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field='model' label='Модель'/>
        <Record field='length' label='Длина'/>
        <Record field='costInCredits' label='Стоимость'/>
      </ItemDetails>);


    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange}/>
            <PersonDetails itemId={11}/>
            <StarshipDetails itemId={10}/>
            <PlanetDetails itemId={5}/>

            <PersonList/>
            <StarshipList/>
            <PlanetList/>

            {/*<Row*/}
            {/*  left={personDetails}*/}
            {/*  right={starshipDetails}*/}
            {/*/>*/}
            {/*          { planet }
          <div className="row mb2 button-row">
            <button
              className="toggle-planet btn btn-warning btn-lg"
              onClick={this.toggleRandomPlanet}>
              Toggle Random Planet
            </button>
            <ErrorButton />
          </div>
          <PeoplePage />*/}
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>

    );
  };
};
