import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questionList, handleDeleteQuestion, onUpdatedQuestion }) {


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList.map((question)=>{
        return <QuestionItem question={question} handleDeleteQuestion={handleDeleteQuestion} onUpdatedQuestion={onUpdatedQuestion} />
      })}</ul>
    </section>
  );
}

export default QuestionList;

/*
"questions": [
  {
    "id": 3,
    "prompt": "Which event handler will run when a user is finished filling out a form?",
    "answers": [
      "onSubmit",
      "onClick",
      "onChange",
      "onForm"
    ],
    "correctIndex": 0
  },
  {
    "id": 4,
    "prompt": "______ is a tool that transpiles JSX into valid JavaScript.",
    "answers": [
      "React",
      "Babel",
      "Webpack",
      "ES6"
    ],
    "correctIndex": 1
  },
  {
    "id": 5,
    "prompt": "What syntax makes it possible to unpack values from arrays, or properties from objects, into distinct variables?",
    "answers": [
      "spread",
      "key-value",
      "coalescing",
      "destructuring"
    ],
    "correctIndex": 3
  },
  {
    "id": 6,
    "prompt": "Returning different elements from a component depending on the state of your application is known as _____ rendering.",
    "answers": [
      "voodoo",
      "conditional",
      "reactive",
      "controlled"
    ],
    "correctIndex": 1
  }
]
} */
