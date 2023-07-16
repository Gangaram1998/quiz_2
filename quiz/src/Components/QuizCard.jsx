import React from 'react'
import { Box, Text, Button } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'

export const QuizCard = ({index,desc,level}) => {
    const navigate = useNavigate()
    return (
        <Box padding="20px" textAlign="center" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            _hover={{
                transform:"translateY(-30px)",
                border:"3px solid orange",
                transitionDelay:"0.2s ease-in-out"
            }}
            display="flex"
            flexDirection="column"
            gap={4}
            borderRadius="10px"
            border={"1px solid orange"}
        >
            <Text>Quiz : {index}</Text>
            <Text mx="auto" fontSize="20px" fontWeight="600" width="60%">{desc}</Text>
            <Text fontSize="18px" fontWeight="400">level: {level}</Text>
            <Button px="20px"  border="1px solid orange" bg="white" color="orange"
                _hover={{
                    bg: "orange",
                    color: "white"
                }}
                onClick={()=>navigate(`/pack_${index}`)}
            >start</Button>
        </Box>
    )
}
