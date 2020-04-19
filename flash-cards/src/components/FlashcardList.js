import React, { useState } from 'react';
import FlashcardList from './FlashcardList';

export default function FlashcardList() {
    const { flashcards, setFlashcards } = useState(SAMPLE_FLASHCARDS)
    return (
        <FlashcardList flashcards={ flashcards }/>
    )
}

const SAMPLE_FLASHCARDS = [
    {
        id: 1,
        question: "Amazon S3(Simple Storage System",
        answer: "State and cover info or data from anywhere on the internet"
    },
    {
        id: 2,
        question: "Amazon S3(Simple Storage System",
        answer: "State and cover info or data from anywhere on the internet"
    },
    {
        id: 3,
        question: "Amazon S3(Simple Storage System",
        answer: "State and cover info or data from anywhere on the internet"
    }
]
