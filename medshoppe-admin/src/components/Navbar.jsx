import { Box, Button, Flex, Input,  Text } from "@chakra-ui/react";
import {Link} from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai'
import {FcSearch} from 'react-icons/fc'
import { useState } from "react";
function Navbar({onOpen,handleQ}){
   const [value,setValue] = useState('')
   const click1 = ()=>{
     let size = window.innerWidth
     if(size <= 1000){
      onOpen();
     }
     }
     const handleClick2 = ()=>{
         handleQ(value)
     }

    return <Box w='100%' bg='#006600' p='10px 20px' position='sticky' top='0' zIndex='10'>
         <Flex w='100%' justifyContent='space-between' gap='10px' alignItems='center'>
         <AiOutlineMenu color='white' onClick={click1} fontSize='34px' />
         <Flex w={['240px','300px','400px','400px']}>
         <Input value={value} onChange={(e)=>setValue(e.target.value)} bg='white' borderRadius= '5px 0px 0px 5px' type='text' />
          <Button bg='white' _hover={{bg:'white'}} borderRadius= '0px 5px 5px 0px'>
          <FcSearch onClick={handleClick2} fontSize='30px'/>
         </Button>
         </Flex>
         <Flex display={['none','flex','flex','flex']} alignItems='center' gap='20px'>
            <Box color='white'>
            <Text>Faizan Alam</Text>
             <Text mt='-5px'>Admin</Text>
            </Box>
            <Flex fontSize='20px' borderRadius='50%' w='50px' h='50px' alignItems='center' bg='orange' color='white' justifyContent='center'>
                <Link>FA</Link>
            </Flex>
         </Flex>
      </Flex>

    </Box>
}


export default Navbar;