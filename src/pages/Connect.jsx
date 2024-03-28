import { Box, Image, Heading, Text } from "@chakra-ui/react";
import { Button } from '@chakra-ui/react'
import ServicesList from '../components/ServicesList.jsx';
import ContactUs from '../components/ContactUs.jsx';
import { Flex } from '@chakra-ui/react';
import { Height } from "@mui/icons-material";
import { Spacer } from "@chakra-ui/react";

const Services = [
  {
    id: 1,
    title: 'Phone Number',
    description: '+1 (773)-396-2850 '
  },
  {
    id: 2,
    title: 'Email',
    description: 'cero@umich.edu'
  },
  {
    id: 3,
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/cerod/',
    description: '/in/cerod'
  },
  {
    id: 4,
    title: 'Github',
    link: 'https://github.com/cesarous/',
    description: 'github.com/cesarous/'
  }
];
const Connect = () => {
  return (
    <>
    <Spacer></Spacer>
    <Box margin = "auto" sx={{height:"100vh" , display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      
      <hr id="connect" style={{visibility:"hidden"}} ></hr>
      <Box sx={{}}>  
          <ServicesList services={Services}/>
          <ContactUs></ContactUs>
      </Box>
      </Box>
    </>
  );
};

export default Connect;
