import ItemDetails, {Record} from "../item-details/item-details";
import React from "react";
import withSwapiService from '../hoc-helpers/with-swapi-service'

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field='birthYear' label='Год'/>
      <Record field='height' label='Рост'/>
      <Record field='mass' label='Вес'/>
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
}

export default withSwapiService(mapMethodsToProps)(PersonDetails);