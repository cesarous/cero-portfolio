import React, { useRef, useState } from 'react';
import { Box, Image, Heading, Text } from "@chakra-ui/react";
import { Button } from '@chakra-ui/react'
import { useNavigate  } from 'react-router-dom';
import useHover from '../hooks/hover'; // Import the custom hook
import './css/Home.css'; // Import the CSS file
import About from './About';
import Projects from './Projects';
import Connect from './Connect.jsx';
import { Spacer } from '@chakra-ui/react'; 
import { boxStyles } from './css/Exterior_box.js';

const Home = () => {
  const navigate = useNavigate ();

  const handleResumeClick = () => {
    // Define the path to your PDF file
    const pdfPath = '/resume_CR.pdf';

    // Open the PDF file in a new tab or window
    window.open(pdfPath, '_blank');
  };
  
  const handleHireClick = () => {
    //navigate('/connect');
  };

  return (
    <>

    <Box className='home_box' mx="auto" sx={boxStyles}>
      <Box  marginBottom='5% !important' sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        <Box style={{ flex: "1" }}>
          <Image  className='image_class'
                    id="start"    
                    boxSize='300px'
                    src="babel_COPY.JPG" 
                    alt="library"
                    h="auto"
                    marginTop="0% !important"
                    objectFit="cover"
                  />
          </Box>
          <Box  width = "40%" maxWidth="xxl" mx="auto" display='flex' alignItems='center' style={{ flex: "1" }} >
          
            <Box maxWidth="lg" mx="auto">
            
              <h1 className='home-h1'>
                  Cesar Rodriguez
                </h1>
                <body className='home-body'>
                  software engineer  
                </body>
                <div> 
                <Button className="button-with-hover" onClick={handleResumeClick} > Resume </Button>            
                <a href="#connect"> <Button className="button-with-hover" onClick={handleHireClick}> 
                  Hire Me </Button></a>
                </div>
                
            </Box>
            
            <Box maxWidth="md" mx="auto" marginLeft="5%" >
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
          <Box >
            <Image  className='image_class_bot'
                    boxSize='20%'
                    src="babel_bottom.JPG" 
                    alt="library"
                    h="auto"
                    marginBottom="0% !important"
                    objectFit="cover"
                  />
          </Box>
      </Box>

      <Spacer></Spacer>
      <About  marginBottom='7% !important' ></About>
      <Spacer></Spacer>
      <Projects> </Projects>
      <Spacer sx={{marginTop:"5%", height:"0.5vh"}}></Spacer>
      <Connect ></Connect>
    </Box>
    </>
    
  );
};

export default Home;
