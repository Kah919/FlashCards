import React, { useState } from 'react';
import FlashcardList from './components/FlashcardList';
import './app.css';


function App() {
  const [ flashcards, setFlashcards ] = useState(SAMPLE_FLASHCARDS);
  return (
    <FlashcardList flashcards={ flashcards }/>
  );
}

const SAMPLE_FLASHCARDS = [
  {
      id: 1,
      question: "Amazon S3(Simple Storage System",
      answer: "State and cover info or data from anywhere on the internet",
      options: [1, 2, 3 , 4]
  },
  {
      id: 2,
      question: "Amazon S3(Simple Storage System",
      answer: "State and cover info or data from anywhere on the internet",
      options: [1, 2, 3 , 4]
  },
  {
      id: 3,
      question: "Amazon S3(Simple Storage System",
      answer: "State and cover info or data from anywhere on the internet",
      options: [1, 2, 3 , 4]
  }
]

export default App;
