import ItemDetails, {Record} from "../item-details/item-details";
import React from "react";
import withSwapiService from '../hoc-helpers/with-swapi-service'

const PersonDetails = ({itemId, swapiService}) => {
  const {getPerson, getPersonImage} = swapiService;
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
  );
};

export default withSwapiService(PersonDetails);