import {SwapiServiceConsumer} from "../swapi-service-context/swapi-service-context";
import ItemDetails, {Record} from "../item-details/item-details";
import React from "react";

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

export default PlanetDetails;