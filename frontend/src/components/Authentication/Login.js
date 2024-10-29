// import { FormControl, FormLabel, VStack,Button } from '@chakra-ui/react';
// import { Input,InputGroup,InputRightElement } from '@chakra-ui/input';
// import React, { useState } from 'react';
// import axios from "axios";
// import { useHistory } from "react-router-dom";
// import { useToast } from "@chakra-ui/react";
// // import { ChatState } from "../../Context/ChatProvider";

// const Login = () => {

//   const [show, setShow] = useState(false);
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [loading,setLoading]= useState(false);
//   const toast = useToast();
//   const history = useHistory();
//   // const { setUser } = ChatState();
//   const handleClick = () => setShow(!show);

//   const submitHandler = async ()=>{
//     setLoading(true);
//     if (!email || !password) {
//       toast({
//         title: "Please Fill all the Feilds",
//         status: "warning",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       setLoading(false);
//       return;
//     }

//     try {
//       const config = {
//         headers: {
//           "Content-type": "application/json",
//         },
//       };

//       const { data } = await axios.post(
//         "/api/user/login",
//         { email, password },
//         config
//       );
//       toast({
//         title: "Login Successful",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       // setUser(data);
//       localStorage.setItem("userInfo", JSON.stringify(data));
//       setLoading(false);
//       history.push("/chats");
//     } catch (error) {
//       toast({
//         title: "Error Occured!",
//         description: error.response.data.message,
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       setLoading(false);
//     }
//   };




//   return (
//     <VStack spacing="5px"> 

  
//     {/* Emailis here */}
//     <FormControl id="email" isRequired>
//       <FormLabel>Email</FormLabel>
//         <Input
//         value={email}
//           placeholder="Enter your Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//     </FormControl>


//       {/* Password is here */}
//       <FormControl id="password" isRequired>
//         <FormLabel>Password</FormLabel>
//         <InputGroup>
//           <Input type={show ? "text" : 'password'}
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <InputRightElement width="4.5rem">
//           <Button h="1.75rem" size="sm" onClick={handleClick}>{show ? "Hide" : "Show"} </Button>
//           </InputRightElement>
//         </InputGroup>    
//       </FormControl>

      
//       {/* Sign Up button is here */}
//       <Button 
//         colorScheme='blue'
//         width="100%"
//         borderRadius="10px"
//         style={{marginTop:12}}
//         onClick={submitHandler}
//         isLoading={loading}
//         >
//         Login
//       </Button>

//       <Button 
//         variant="solid"
//         colorScheme='red'
//         width="100%"
//         borderRadius="10px"
//         style={{marginTop:8}}
//         onClick={()=>{
//           setEmail("guest@example.com");
//           setPassword("guest@123");
//         }}
//         >
//         Get Guest User Credentials
//       </Button>

//     </VStack>
//   )
// }

// export default Login

import React, { useState } from "react";
import {FormControl, FormLabel, InputGroup, InputRightElement, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {VStack, Button, Box } from '@chakra-ui/react';
import { Input } from '@chakra-ui/input';

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();
  const handleClick = () => setShow(!show);

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please fill all the fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/chats");
    } catch (error) {
      toast({
        title: "Error Occurred!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <Box
      bg="rgba(255, 255, 255, 0.2)"
      borderRadius="15px"
      boxShadow="lg"
      p="4"
      backdropFilter="blur(10px)"
      width="100%"
      maxW="400px"
      mx="auto"
    >
      <VStack spacing="5px">
        {/* Email Field */}
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            value={email}
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        {/* Password Field */}
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>{show ? "Hide" : "Show"}</Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        {/* Login Button */}
        <Button
          colorScheme='blue'
          width="100%"
          borderRadius="10px"
          mt={4}
          onClick={submitHandler}
          isLoading={loading}
        >
          Login
        </Button>

        {/* Guest Credentials Button
        <Button
          variant="solid"
          colorScheme='red'
          width="100%"
          borderRadius="10px"
          mt={2}
          onClick={() => {
            setEmail("guest@example.com");
            setPassword("guest@123");
          }}
        >
          Get Guest User Credentials
        </Button> */}
      </VStack>
    </Box>
  )
}

export default Login;
