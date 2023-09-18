const zodiacSigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
const astrologyHouses = ["1st House", "2nd House", "3rd House", "4th House", "5th House", "6th House", "7th House", "8th House", "9th House", "10th House", "11th House", "12th House"];
const planets = ["Sun", "Moon", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Chiron"];

function createRandomCard(deck) {
  const randomIndex = Math.floor(Math.random() * deck.length);
  return deck.splice(randomIndex, 1)[0];
}

function createCardDeck(deckId, deck) {
  const deckElement = document.getElementById(deckId);
  for (let i = 0; i < deck.length; i++) {
    const card = createRandomCard(deck);
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.textContent = "Click to Flip";

    cardElement.addEventListener("click", () => {
      cardElement.textContent = card;
    });

    deckElement.appendChild(cardElement);
  }
}

// Function to select a random item from an array
function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Create decks with one random card from each category
createCardDeck("zodiac-deck", [getRandomItem(zodiacSigns)]);
createCardDeck("house-deck", [getRandomItem(astrologyHouses)]);
createCardDeck("planet-deck", [getRandomItem(planets)]);

