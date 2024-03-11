import { Box, Image, Heading, Text } from "@chakra-ui/react";
import { Button } from '@chakra-ui/react'
import ServicesList from '../components/ServicesList.jsx';
import "./css/Projects.css";

const paid_projects = [
  {
    id: 1,
    title: 'Isreal Carpet Cleaning Co.',
    image: 'ICCS_logo.png', 
    link: 'https://www.isrealcarpetcleaning.com/',
    description: 'Created website for local carpet cleaning buissness.'
  },
  {
    id: 2,
    title: 'C-CDA File Viewer',
    link: 'https://github.com/cesarous/ccda_viewer',
    image: 'CCDA.png', 
    description:  "Purely functional reverse engineered parser for CCDA medical files to be read by " +
                  "the legal personnel at Burnes and Libman. "  },
  {
    id: 3,
    title: 'Illinois Deaths in Custody Project',
    link: 'https://ildeathsincustody.org/',
    image: 'IDCP.png', 
    description:  "Helped extract unstructured data from image sources and cleaned it to produce a human-interactable large dataset " +
                  "for use by non-technical Museum Studies Program students and faculty. "
  },

];

const school_projects= [
  {
    id: 1,    
    title: 'Music Visualizer',
    image: 'MusicNote.png', 
    description:  "Current Project - " +
                  "Create a mapping of music to emotions" 
                  +"and emotions to shapes."
  },
  {
    id: 2,
    title: 'Cardiopulmonary Resuscitation Response Timer',
    image: 'UROP.png', 
    description:  "Design and implement an application to ease the " +
                  "burden on data collection required for Cardiovascular Arrests" 
                  +"and other medical emergencies, for use by residents and fellows at the University of Michigan Medical School."
  },
  {
    id: 3,
    title: 'Autonomous Drone Design',
    image: 'drone.jpg',
    description: 'Designed an autonomous drone that navigates a maze using LIDAR sensors  '
  }

];


const Projects = () => {
  return (
    <Box maxWidth="xxl" mx="auto" marginBottom="10%" marginTop="30%" display='inLine' alignItems='center'>
      <h1 className = "project-title"> 
          Freelance Work
      </h1>
        <hr className="header-separator" />

      <Box>
        <ServicesList className = "project-body" services={paid_projects}/>

      </Box>
      <h1 className = "project-title"> 
        Personal Projects
      </h1 >
      <hr className="header-separator" />

      <Box>      
        <ServicesList className = "project-body" services={school_projects}/>

      </Box>
    </Box>
  );
};

export default Projects;
