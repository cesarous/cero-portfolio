import { Box, Image, Heading, Text } from "@chakra-ui/react";
import { Button } from '@chakra-ui/react'
import { useNavigate  } from 'react-router-dom';

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

    <Box maxWidth="xxl" mx="auto" marginBottom="40px" display='flex' alignItems='center'  >
  
      <Box maxWidth="lg" mx="auto">
        <Heading as="h2" size="lg" mt={4}>
            Cesar Rodriguez
          </Heading>
          <Text mt={2} marginBottom = "20px">
            freelance software engineer  
          </Text>
          <div> <Button onClick={handleResumeClick} > Resume </Button>            <Button onClick={handleHireClick} > Hire Me </Button></div>
          
      </Box>
      <Box maxWidth="md" mx="auto" marginLeft="50px" >
        <Image
              borderRadius='full'
              boxSize='100px'
              src="Headshot.JPG" 
              alt="The Face"
              w="50%"
              h="auto"
              objectFit="cover"
            />
       
      </Box>

    </Box>

  );
};

export default Home;
