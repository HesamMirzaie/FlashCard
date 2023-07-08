import { useState } from 'react';

import { question } from '../db/data';

export default function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handlerClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {question.map((question) => (
        <div
          key={question.id}
          onClick={() => handlerClick(question.id)}
          className={question.id === selectedId ? 'selected' : null}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
