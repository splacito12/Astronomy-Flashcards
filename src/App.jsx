import { useState } from "react";
import flashcard from "./flashcard";
import './App.css';

const cards = [
  {question: "Welcome!", answer: "If you are ready to start, press the 'next card' button bellow :D"},
  {question: "What is the largest Planet?", answer: "Jupiter"},
  {question: "What is a nebula?", answer:"A giant cloud of gas and dust in space. The birthplace of stars."},
  {question: "What are stars made of?", answer: "Stars are giant balls of hot gas – mostly hydrogen, with some helium and small amounts of other elements. "},
  {question: "What do astronomers mean by a constellation?", answer:"A constellation is a region in the sky as seen from Earth."},
  {question: "What causes a solar eclipse?" , answer: "The Moon passes directly between Earth and the Sun, casting its shadow onto Earth."}, 
  {question: "How many planets are in our solar system?" , answer: "Eight"}, 
  {question: "What is a galaxy?" , answer: "A massive system of stars, gas, dust, and dark matter all held together by gravity"}, 
  {question: "Which planet has the most moons?" , answer: "Saturn."}, 
  {question: "What is the sun made of?" , answer: "The Sun is made of super-hot, electrically charged gas called plasma."}, 
  {question: "What is the difference between a meteor and a meteorite?" , answer: "A meteor bruns up in the Earth's atmosphere. If it survives, it is a meteorite."}, 
  {question: "What is the name of our galaxy?" , answer: "the Milky Way."}, 
  {question: "How many constellations are there?" , answer: "88"}
];

function App() {
  const [currIndex, setCurrIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const currCard = cards[currIndex];

  function handleNext() {
    // const randIndex = Math.floor(Math.random() * cards.length);
    // setCurrIndex(randIndex);
    // setIsFlipped(false);
    let randIndex;
    do {
      randIndex = Math.floor(Math.random() * cards.length);
    }while (randIndex === currIndex);

    setCurrIndex(randIndex);
    setIsFlipped(false);
  }

  return (
    <div className="app">
      <div className="header">
      <h1>Welcome to my Space Trivia</h1>
      <p>Test your knowledge of our lovely cosmos!</p>
      <p>Total Cards: {cards.length}</p>
      </div>

      <Flashcard
        question={currCard.question}
        answer={currCard.answer}
        isFlipped={isFlipped}
        onFlip={() => setIsFlipped(!isFlipped)}
      />

      <button className="next-btn" onClick={handleNext}>
        Next Card ➤
      </button>
    </div>
  );
}

export default App;