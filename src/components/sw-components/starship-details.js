import React from "react";
import ItemDetails, {Record} from "../item-details/item-details";
import withSwapiService from '../hoc-helpers/with-swapi-service'


const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field='model' label='Модель'/>
      <Record field='length' label='Длина'/>
      <Record field='costInCredits' label='Стоимость'/>
    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage,
  };
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);