import React, { useState, useEffect} from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then((question) => setQuestions(question))
  }, [])

  function handleAddNewQuestion(newQuestion){
    setQuestions([... questions, newQuestion])
  }

  function handleDeleteQuestion(deletedQuestion){
    const newQuestList = questions.filter((question) => question.id !== deletedQuestion.id)
    setQuestions(newQuestList)
  }

  function onUpdatedQuestion(updateQ){
    const updatedQs = questions.map(question=> {
        if(question.id === updateQ.id){
          return updateQ
        }else{
          return question
        }
    })
    //console.log(updateQ)
    setQuestions(updatedQs)

  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
        <QuestionForm handleAddNewQuestion={handleAddNewQuestion}/> 
        : 
        <QuestionList questionList={questions} handleDeleteQuestion={handleDeleteQuestion} onUpdatedQuestion={onUpdatedQuestion}/>}
    </main>
  );
}

export default App;
