import { Box, Image, Heading, Text } from "@chakra-ui/react";
import { Button } from '@chakra-ui/react'
import ServicesList from '../components/ServicesList.jsx';
import { Flex } from '@chakra-ui/react';


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
    <Box margin = "auto">
      <ServicesList services={Services}/>
      </Box>

  );
};

export default Connect;
