import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
const API_URL = "https://deckofcardsapi.com/api";

function DeckOfCards() {
  const [deck, setDeck] = useState({
    id: null,
    isLoading: true,
  });

  const [card, setCard] = useState(null);

  useEffect(function fetchDeckMounted() {
    async function fetchDeck() {
      const response = await axios.get(`${API_URL}/deck/new/`);
      setDeck({
        id: response.data.deck_id,
        isLoading: false,
      });
    }
    fetchDeck();
  }, []);

  if (deck.isLoading) return <i>Loading...</i>;

  async function drawCard() {
    const response = await axios.get(
      `${API_URL}/deck/${deck.id}/draw/?count=1`
    );
    setCard(response.data.cards[0].code);
  }

  function handleClick() {
    //
  }

  return (
    <div>
      <button onClick={handleClick}>GIMME A CARD</button>
      <Card />
    </div>
  );
}

export default DeckOfCards;
export { API_URL };
