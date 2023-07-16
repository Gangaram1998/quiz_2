import { Box, Button, Grid, GridItem, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Text } from "@chakra-ui/react"


export const QuestionComp = ({ data: { q, word, options: { a, b, c, d }, ans }, index, setIndex, length }) => {
    const [answer, setAnswer] = useState("")
    const toast = useToast()

    const handleSubmit = () => {
        if (answer === "") {
            return toast({
                title: "Oppps...",
                status: "warning",
                description: "please select one option from below options",
                duration: 5000,
                isClosable: true,
                position: "top",
                fontSize: "30px"
            })
        }

        if (ans === answer) {
            return toast({
                title: "Hoorayyy... Congratulations!",
                status: "success",
                description: "your selected answer is correct!",
                duration: 5000,
                isClosable: true,
                position: "top",
                fontSize: "30px"
            })
        }
        return toast({
            title: "Sorry! better luck next time",
            status: "error",
            description: "your selected answer is incorrect!",
            duration: 5000,
            isClosable: true,
            position: "top",
            fontSize: "30px"
        })
    }


    return (
        <Box >
            <Text fontSize={"25px"} fontWeight={"600"} color={"red.600"}>Question: {index + 1}</Text>
            <Box padding={"20px"} borderRadius={"40px"} width={{ base: "95%", md: "80%" }} mx="auto" mt="30px" textAlign={"center"} bg="orange.400" color={"white"}>
                <Text fontSize={"24px"} fontWeight={"600"}>{q}</Text>
                <Text fontSize={"18px"} fontWeight={"400"} fontStyle={"italic"}>Word: {word}</Text>
            </Box>
            <Grid templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)", xl: "repeat(4,1fr)" }} width={{ base: "95%", md: "80%" }} mx="auto" mt="50px" textAlign={"center"} gap={10} fontSize={"20px"}>
                <GridItem padding={"40px 20px"} borderRadius={"5px"} border={answer === "a" ? "5px solid orange" : "1px solid gray"} marginTop={answer === "a" ? "-20px" : "0px"} textAlign={"center"}
                    _hover={{
                        border: "2px solid orange",
                        transform: "translateY(-20px)"
                    }}
                    onClick={() => setAnswer("a")}
                >
                    <Box display={"flex"} justifyContent={"center"} gap={"10px"} >
                        <Box border={answer === "a" ? "1px solid orange" : "1px solid gray"} bg={answer === "a" ? "orange" : "none"} width={"20px"} height={"20px"} borderRadius={"50%"} ></Box><Text>{a.word}</Text>
                    </Box>
                </GridItem>
                <GridItem
                    _hover={{
                        border: "2px solid orange",
                        transform: "translateY(-20px)"
                    }}
                    onClick={() => setAnswer("b")}
                    padding={"40px 20px"} borderRadius={"5px"} border={answer === "b" ? "5px solid orange" : "1px solid gray"} marginTop={answer === "b" ? "-20px" : "0px"} textAlign={"center"}>
                    <Box display={"flex"} justifyContent={"center"} gap={"10px"}>
                        <Box border={answer === "b" ? "1px solid orange" : "1px solid gray"} bg={answer === "b" ? "orange" : "none"} width={"20px"} height={"20px"} borderRadius={"50%"} ></Box><Text>{b.word}</Text>
                    </Box>

                </GridItem>
                <GridItem

                    onClick={() => setAnswer("c")}
                    _hover={{
                        border: "2px solid orange",
                        transform: "translateY(-20px)"
                    }}
                    border={answer === "c" ? "5px solid orange" : "1px solid gray"} marginTop={answer === "c" ? "-20px" : "0px"}
                    padding={"40px 20px"} borderRadius={"5px"} textAlign={"center"}>
                    <Box display={"flex"} justifyContent={"center"} gap={"10px"}>
                        <Box border={answer === "c" ? "1px solid orange" : "1px solid gray"} bg={answer === "c" ? "orange" : "none"} width={"20px"} height={"20px"} borderRadius={"50%"} ></Box><Text>{c.word}</Text>
                    </Box>
                </GridItem>
                <GridItem
                    _hover={{
                        border: "2px solid orange",
                        transform: "translateY(-20px)"
                    }}
                    onClick={() => setAnswer("d")}
                    border={answer === "d" ? "5px solid orange" : "1px solid gray"} marginTop={answer === "d" ? "-20px" : "0px"}
                    padding={"40px 20px"} borderRadius={"5px"} textAlign={"center"}>
                    <Box display={"flex"} justifyContent={"center"} gap={"10px"}>
                        <Box border={answer === "d" ? "1px solid orange" : "1px solid gray"} bg={answer === "d" ? "orange" : "none"} width={"20px"} height={"20px"} borderRadius={"50%"} ></Box><Text>{d.word}</Text>
                    </Box>
                </GridItem>
            </Grid>
            <Box>
                <Button marginTop={"20px"} bg="white" border={"1px solid orange"} mt="50px" color={"orange"} _hover={{ bg: "orange", color: "white" }} onClick={()=>setAnswer("")} padding={"10px 30px"} mr="10px">Reset</Button>
                <Button marginTop={"20px"} bg="white" border={"1px solid orange"} mt="50px" color={"orange"} _hover={{ bg: "orange", color: "white" }} onClick={handleSubmit}>submit Answer</Button>
            </Box>
            <Box justifyContent={"space-around"} display={"flex"} marginTop={"50px"} mx="auto" width={{ base: "95%", md: "80%" }}>
                <Button bg="white" border={"1px solid blue"} color={"blue"} padding={"10px 20px"} _hover={{ bg: "blue", color: "white" }} onClick={() => { setIndex(index - 1); setAnswer("") }} isDisabled={index <= 0}>Previous</Button>
                <Button bg="white" border={"1px solid blue"} color={"blue"} padding={"10px 30px"} _hover={{ bg: "blue", color: "white" }} onClick={() => { setIndex(index + 1); setAnswer("") }} isDisabled={index >= length - 1}>Next</Button>
            </Box>
        </Box>
    )
}
