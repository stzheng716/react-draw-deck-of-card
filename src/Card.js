import React, { useState, useEffect } from "react";

/** Simple presentation component for a todo.
 *
 * prop: 
 * -card: { code,image, images, value, suit }
 *
 * DeckOfCards -> Card
 **/

function Card({ card }){

    return(
        <div>
            <img
            src={`${card.image}`}
            />
        </div>
    )
}

export default Card