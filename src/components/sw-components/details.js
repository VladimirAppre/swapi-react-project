import React from "react";
import SwapiService from "../../services/swapi-services";
import ItemDetails, {Record} from "../item-details/item-details";

const swapiService = new SwapiService();

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage
} = swapiService

const PersonDetails = ({itemId}) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record field='birthYear' label='Gender'/>
      <Record field='height' label='Рост'/>
      <Record field='mass' label='Вес'/>
    </ItemDetails>
  )
};

const PlanetDetails = ({itemId}) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}
    >
      <Record field='population' label='Популяция'/>
      <Record field='rotationPeriod' label='Период вращения'/>
      <Record field='diameter' label='Диаметр'/>
    </ItemDetails>
  )
};

const StarshipDetails = ({itemId}) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImageUrl={getStarshipImage}
    >
      <Record field='model' label='Модель'/>
      <Record field='length' label='Длина'/>
      <Record field='costInCredits' label='Стоимость'/>
    </ItemDetails>
  )
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}