import React, { useState } from 'react';
import Flashcard from './Flashcard';

export default ({ flashcards }) => {
    console.log(flashcards)
    return (
        <div className="card-grid">
            { flashcards.map(flashcard => {
                return <Flashcard flashcard={ flashcard } key={ flashcard.id } />
            })}
        </div>
    )
}


