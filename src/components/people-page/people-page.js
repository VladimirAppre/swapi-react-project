import React, {Component} from "react";

import './people-page.css';
import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-services";
import Row from "../row/row";
import ErrorButton from "../error-button/error-button";
import ErrorBoundry from "../error-boundry/error-boundry";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: 3,
    hasError: false
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({name, birthYear}) => (`${name}, (${birthYear})`)}
      />
    );

    const personDetails = (
      <ErrorBoundry>
        <ItemDetails personId={this.state.selectedPerson}/>
      </ErrorBoundry>
    );

    return (
      <Row left={itemList} right={personDetails}/>
    )
  };
};