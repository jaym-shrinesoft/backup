import React from 'react';
import ListItem from "./ListItem"

export default function CountryList(props) {
  const counteries = props.counteries;
    return (
        <div>
            <h2 className="text-center">Country List</h2>
            <div className="country-item">
               

                {counteries.map(country =>
                <ListItem key={country.id} id={country.id} name={country.name} countryId={country.countryId}/> )}
            </div>
        </div>
    )
}
