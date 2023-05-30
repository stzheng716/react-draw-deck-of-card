import React, { useState, useEffect } from "react";
import { API_URL } from "./DeckOfCards";

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