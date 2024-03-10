import React, { useState, useEffect } from 'react';

const Trivia = ({ data, questionNumber,setQuestionNumber,setStop }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className,setClassName]=useState("answer");

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  console.log(question);

const delay =(duration , callback)=>{
   setTimeout(()=>{
    callback();
   },duration);
}


 const handleclick =(a) =>{
   setSelectedAnswer(a);
   setClassName("answer active");
   delay(3000,()=>
   setClassName(a.correct ?"answer correct" : "answer wrong")
   );
   delay(6000,()=>{
    if(a.correct){
       setQuestionNumber((prev)=> prev+1);
    }else{
      setStop(true);
    }
   })
 }

  return (
    <div className='trivia'>
      <div className='questions'>{question?.question}</div>
      <div className='answers'>
        {
        question?.answers?.map((a) => 
        (<div className={ selectedAnswer === a? className:'answer'}onClick={()=>handleclick(a)} key={a.id}>{a.text}</div>
        ))}
      </div>
    </div>
  );
};

export default Trivia;
