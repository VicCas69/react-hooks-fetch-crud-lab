import React, { useState } from "react";

function QuestionItem({ question, handleDelete, handleDeleteQuestion, onUpdatedQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const [correctAnsIndex, setCorrectAnsIndex] = useState(correctIndex)

  function handleDelete(){
    fetch(`http://localhost:4000/questions/${id}`,{
      method: "DELETE",
    })
    .then(r => r.json())
    .then(()=>handleDeleteQuestion(question))
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleUpdate(e){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH", 
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({
        "correctIndex": parseInt(e.target.value)
      })
    })
    .then(res => res.json())
    .then(updatedQuestion =>onUpdatedQuestion(updatedQuestion))
    //console.log(e.target.value)
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleUpdate}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
