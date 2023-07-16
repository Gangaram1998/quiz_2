import React, { useEffect, useState } from 'react'
import {Grid} from "@chakra-ui/react"
import { QuizCard } from '../Components/QuizCard'

export const Quiz = () => {

    const [data,setData] = useState([])

    useEffect(()=>{
        fetch(`https://api.essaychecker.ai/quiz/packs/`)
        .then((res)=>{
            return res.json()
        })
        .then((res)=>Object.values(res.data))
        .then((res)=>setData(res))
        .catch((err)=>console.log(err))
    },[])
    console.log(data)

  return (
    <Grid  width="80%" mx="auto" py="50px" templateColumns={{base:"repeat(1, 1fr)",md:"repeat(2, 1fr)",xl:"repeat(3, 1fr)"}} gap={10}>
        {
            data.length>0 && data.map((el,i)=>{
                return <QuizCard key={i} index={i+1} desc={el.desc} level={el.level} />
            })
        }
    </Grid>
  )
}
