import React from 'react';

export default function ListItem(props) {
   
    return (
        <div className="list-item">
            <div>
                {props.id}
            </div>
            <div>
                {props.name}
            </div>
            <div>
                {props.countryId}
            </div>
            <div>
                <button onClick={()=> fetch(`http://localhost:8080/country/delete/${props.id}`, { method: 'DELETE' })}>Delete</button>
            </div>
        </div>
    )
}