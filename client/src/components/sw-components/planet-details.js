import React from "react";
import ItemDetails, {Record} from "../item-details/item-details";
import withSwapiService from '../hoc-helpers/with-swapi-service'

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field='population' label='Популяция'/>
      <Record field='rotationPeriod' label='Период вращения'/>
      <Record field='diameter' label='Диаметр'/>
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  };
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);