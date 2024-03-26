import { Box, Image, Heading, Text } from "@chakra-ui/react";
import { Button } from '@chakra-ui/react'
import ServicesList from '../components/ServicesList.jsx';
import { boxStyles } from './css/Exterior_box.js';

const school_projects= [
  {
    id: 1,    
    title: 'Music Visualizer',
    image: 'MusicNote.png', 
    description:  "Current Project - " +
                  "Create a mapping of music to emotions" 
                  +"and emotions to shapes."
  }
];



const About = () => {
      return(
        <Box maxWidth="xxl" mx="auto"  display='inLine' alignItems='center' sx={boxStyles}>
          <h1 className = "project-title"> 
              About Me 
          </h1>
          <hr className="header-separator" />

        <Box>
          <ServicesList className = "services-list" services={school_projects}/>

        </Box>
        
      </Box>
    );
  };
  
  export default About;