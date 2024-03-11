import { useSelector } from "react-redux"
import { Store } from "../redux/store"
import { Box, Container, Input, Text, Select, Button, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from "react";
export const Quiz=()=>{
    const data=useSelector(Store=>Store.data)
   
    return(
    <Box w="100%">
        <h1>Quiz</h1>
      
    </Box>
  );
}


