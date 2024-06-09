import { Box, Image, Heading, Text } from "@chakra-ui/react";
import { Button } from '@chakra-ui/react'
import ServicesList from '../components/ServicesList.jsx';
import "./css/Projects.css";
import { boxStyles } from './css/Exterior_box.js';


const next_arena= [

]
const paid_projects = [
  {
    id: 0,
    title: 'NextArena',
    image: 'nextarena.jpg', 
    link: 'https://nextarena.gg',
    description: 'Play games. Make money. \n Engage in esports tournaments for prizes.'
  },
  {
    id: 1,
    title: 'Isreal Carpet Cleaning Co.',
    image: 'ICCS_logo.png', 
    link: 'https://cesarous.github.io/ICCS/',
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
                  "burden on data collection required for cardiovascular arrests" 
                  +"and other medical emergencies, for use by residents and fellows at the University of Michigan Medical School."
  },
  {
    id: 3,
    title: 'Autonomous Drone Design',
    image: 'drone.jpg',
    description: 'Designed an autonomous drone that navigates a maze using LIDAR sensors  '
  }

];

const fun_projects= [
  {
    id: 1,    
    title: 'Poetics of Decryption',
    image: 'read_image.png', 
    description:  "Decrypted the message in an exhibition titled \"Poetics of Encryption\"" + 
    " by remapping in polar cordinants (using openCV) revealing the message \"A lie told often enough becomes the truth.\" " +
    "after reading the hex in the exterior black circle with OCR software and translating - more trouble than just typing."
  },
  

];


const Projects = () => {
  return (
    <Box maxWidth="xxl" mx="auto"  display='inLine' alignItems='center' marginBottom='10% !important' sx={boxStyles}>
      <h1 id = "projects" className = "project-title"> 
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

      <h1 className = "project-title"> 
        For Fun 
      </h1 >
      <hr className="header-separator" />

      <Box>      
        <ServicesList className = "project-body" style={{maxWidth:"100%"}} services={fun_projects}/>
      </Box>
    </Box>
  );
};

export default Projects;
