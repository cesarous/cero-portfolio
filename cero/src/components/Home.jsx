import { Box, Image, Heading, Text } from "@chakra-ui/react";
import { Button } from '@chakra-ui/react'

const Home = () => {
  return (

    <Box maxWidth="xl" mx="auto" marginTop="250px" marginBottom="40px" display='flex' alignItems='center' >
      
      <Box maxWidth="md" mx="auto">
        <Heading as="h2" size="lg" mt={4}>
            Cesar Rodriguez
          </Heading>
          <Text mt={2}>
            freelance software engineer  
          </Text>
      </Box>
      <Box maxWidth="md" mx="auto" >
        <Image
              margin-left = "100 px"
              borderRadius='full'
              boxSize='50px'
              src="Headshot.JPG" 
              alt="Image description"
              w="50%"
              h="auto"
              objectFit="cover"
            />
       
      </Box>

    </Box>

  );
};

export default Home;
