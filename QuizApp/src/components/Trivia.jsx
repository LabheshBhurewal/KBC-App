import React, { useState, useEffect } from 'react';
import useSound from "use-sound";
import play from "../assets/play.mp3"
import correct from "../assets/correct.mp3"
import wrong from "../assets/wrong.mp3"
import wait from "../assets/wait.mp3"


const Trivia = ({ data, questionNumber,setQuestionNumber,setStop }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className,setClassName]=useState("answer");
  const [letsplay]=useSound(play)
  const [correctAnswer]=useSound(correct)
  const [wrongAnswer]=useSound(wrong)
  const [waitforAnswer]=useSound(wait)

  useEffect(() =>{
    letsplay();
  },[letsplay]);

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
   delay(5000,()=>{
    if(a.correct){
      correctAnswer()
      delay(2000,()=>{
       setQuestionNumber((prev)=> prev+1);
       letsplay()
      }) 
    }else{
      wrongAnswer()
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
