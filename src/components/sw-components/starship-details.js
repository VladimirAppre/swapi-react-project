import {SwapiServiceConsumer} from "../swapi-service-context/swapi-service-context";
import ItemDetails, {Record} from "../item-details/item-details";
import React from "react";

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
export default StarshipDetails;