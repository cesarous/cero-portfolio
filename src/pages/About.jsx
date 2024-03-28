import { Box, Image, Heading, Text } from "@chakra-ui/react";
import { Button } from '@chakra-ui/react'
import ServicesList from '../components/ServicesList.jsx';
import { boxStyles, aboutboxStyles } from './css/Exterior_box.js';


const About = () => {
      return(
        <Box maxWidth="xxl" mx="auto" display='inLine' alignItems='left' sx={aboutboxStyles}>
          <h1 id="about" className = "project-title"> 
              About Me 
          </h1>
          <hr className="header-separator" />
          <div style = {{textAlign:'left', marginLeft:'5%'}}>
            <div alignItems='left'> 
              <Image>
            
              </Image>
              <body className = "project-body-header" style = {{textAlign:'left'}}> 
                  Education:   
              </body>
              <div style = {{textAlign:'left', marginLeft:'3%'}}>
                {[
                  "Computer Science Engineering grad from the University of Michigan",
                ].map((text, index) => (
                  <Box key={index} className="project-body-header" style={{ textAlign: "left" }}>
                    {text}
                  </Box>
                ))}
              </div>
              <body className = "project-body-header" style = {{textAlign:'left'}}> 
                  Work history:   
              </body>
              <div style = {{textAlign:'left', marginLeft:'3%'}}>
                {[
                  "UI/UX engineering lead for a gaming startup (stay tuned)",
                  "I worked on distributed systems at MIT LL",
                  "Worked on the security engine for and helped validate the meteorlake CPU at Intel Corporation",
                  "Have worked with data analysis at UIC and UMICH",
                  "Excellent communication skills - several speaking awards won",
                  "Fluent in Spanish"
                ].map((text, index) => (
                  <Box key={index} className="project-body-header" style={{ textAlign: "left" }}>
                    {text}
                  </Box>
                ))}
              </div>
              
              <body className = "project-body-header" style = {{textAlign:'left'}}> 
                  Fun Stuff:   
              </body>
              <div style={{ textAlign: 'left', marginLeft: '3%' }}>
                  {[
                    "I love lifting weights",
                    "Music aficionado (who isn't?)",
                    "Youtube philosophy junkie",
                    "Big art enthusiast",
                    "Always looking for new projects",

                  ].map((text, index) => (
                    <body key={index} className="project-body-header" style={{ textAlign: 'left' }}>
                      {text}
                    </body>
                  ))}
                </div>
            </div>
          </div>
      </Box>
    );
  };
  
  export default About;