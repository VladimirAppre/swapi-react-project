import React from "react";
import ItemDetails, {Record} from "../item-details/item-details";
import {SwapiServiceConsumer} from "../swapi-service-context/swapi-service-context";

const PersonDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({getPerson, getPersonImage}) => {
          return (
            <ItemDetails
              itemId={itemId}
              getData={getPerson}
              getImageUrl={getPersonImage}
            >
              <Record field='birthYear' label='Год'/>
              <Record field='height' label='Рост'/>
              <Record field='mass' label='Вес'/>
            </ItemDetails>
          )
        }
      }
    </SwapiServiceConsumer>
  )
};

const PlanetDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({getPlanet, getPlanetImage}) => {
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
        }
      }
    </SwapiServiceConsumer>
  )
};

const StarshipDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({getStarship, getStarshipImage}) => {
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
        }
      }
    </SwapiServiceConsumer>
  )
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}