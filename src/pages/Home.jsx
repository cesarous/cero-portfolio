import React, { useRef, useState } from 'react';
import { Box, Image, Heading, Text } from "@chakra-ui/react";
import { Button } from '@chakra-ui/react'
import { useNavigate  } from 'react-router-dom';
import useHover from '../hooks/hover'; // Import the custom hook
import './css/Home.css'; // Import the CSS file

const Home = () => {
  const navigate = useNavigate ();

  const handleResumeClick = () => {
    // Define the path to your PDF file
    const pdfPath = '/resume_CR.pdf';

    // Open the PDF file in a new tab or window
    window.open(pdfPath, '_blank');
  };
  
  const handleHireClick = () => {
    navigate('/connect');
  };

  return (
    <div>
    <Box className='home_box' mx="auto">
      <Image  className='image_class'   
                boxSize='300px'
                src="babel_COPY.JPG" 
                alt="library"
                h="auto"
                marginTop="0px"
                objectFit="cover"
              />

      <Box  marginTop = "10vw" width = "40vw" maxWidth="xxl" mx="auto" marginBottom="40px" display='flex' alignItems='center'  >
      
        <Box maxWidth="lg" mx="auto">
        
          <h1 className='home-h1'>
              Cesar Rodriguez
            </h1>
            <body className='home-body'>
              software engineer  
            </body>
            <div> 
            <Button className="button-with-hover" onClick={handleResumeClick} > Resume </Button>            
            <Button className="button-with-hover" onClick={handleHireClick}>
              Hire Me </Button>
            </div>
            
        </Box>
        <Box maxWidth="md" mx="auto" marginLeft="50px" >
          <Image
                borderRadius='full'
                boxSize='100px'
                src="Headshot.JPG" 
                alt="The Face of the Company"
                w="50%"
                h="auto"
                objectFit="cover"
              />
        </Box>

      </Box>
    </Box>
    </div>
  );
};

export default Home;
