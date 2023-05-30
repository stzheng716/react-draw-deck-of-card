import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
const API_URL = "https://deckofcardsapi.com/api";

/** Simple presentation component for a todo.
 *
 * state:
 * - deck: { id,isLoading}
 * - drawnCards: [card, card...]
 *
 * App -> DeckOfCards -> Card
 **/

function DeckOfCards() {
  const [deck, setDeck] = useState({
    id: null,
    isLoading: true
  });

  const [drawnCards, setCard] = useState([]);

  useEffect(function fetchDeckMounted() {
    async function fetchDeck() {
      const response = await axios.get(`${API_URL}/deck/new/`);
      setDeck({
        id: response.data.deck_id,
        isLoading: false,
      });
    }
    fetchDeck();
  }, [ ]);


  async function drawCard() {
    const response = await axios.get(
      `${API_URL}/deck/${deck.id}/draw/?count=1`
    );
    const newCard = response.data.cards[0]
    setCard(cards => [...cards, newCard]);
    if(response.data.remaining === 0) alert("Error: no cards remaining")
  }

  function handleClick() {
    drawCard()
  }

  if (deck.isLoading) return <i>Loading...</i>;

  return (
    <div>
      <button onClick={handleClick}>GIMME A CARD</button>
      {drawnCards.map(card => <Card key={card.code} card={card}/>)}
    </div>
  );
}

export default DeckOfCards;
