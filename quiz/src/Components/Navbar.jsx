import React from 'react'
import { Box, Flex, Image, Text } from "@chakra-ui/react"
import logo from "../constant/logo.png"
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate()

  return (
    <Box padding="2px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" position="fixed" left={0} right={0} top={0} zIndex={10} bg="white" overflow="hidden">
      <Flex justifyContent="flex-start" px={{ base: "20px", md: "100px" }} alignItems="center" >
        <Image width="100px" height="80px" src={logo} alt="logo" onClick={() => navigate("/")} />
        <Text fontSize="25px" fontWeight="700" color="gray.500">QuizApp</Text>
      </Flex>
    </Box>
  )
}
