import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { QuestionComp } from '../Components/QuestionComp'

export const SingleQuiz = () => {
  const [question,setQusestion]=useState([])
  const [index,setIndex]=useState(0)
  const {id}=useParams()

  useEffect(()=>{
    fetch(`https://api.essaychecker.ai/quiz/packs/?id=${id}`)
    .then((res)=>res.json())
    .then((res)=>setQusestion(Object.values(res.data)))
    .catch((err)=>console.log(err))
  },[])

  console.log(question)

  return (
    <Box>
        {question.length>0 && <QuestionComp data={question[index]} index={index} setIndex={setIndex} length={question.length}/>}
    </Box>
  )
}
