import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './css/ServicesList.css';

const ServiceCard = ({ service }) => {
  return (
    <Box
      className="card"
      maxW="sm"
      borderWidth="1px"
      overflow="hidden"
      transition="max-width 0.3s ease-in-out" // Add transition for max-width
      boxShadow="0 4px 8px 0 #49494b"
      _hover={{ maxW: "2xl", boxShadow:"0 4px 8px 0  rgba(11, 43, 11, 0.2), 0 6px 20px 0 rgb(34, 139, 34, .2)" }} // Expand to full width on hover
    >
      {service.link ? (
        <a href={service.link}>
          {service.image &&
                    <Image
                    src={service.image}
                    alt={service.title}
                    width="100%"
                    transition="transform width 0.3s ease-in-out" // Add transition for transform and width
                  />
}
          <Box p="6">
            <Text className="project-body-header" fontWeight="bold" fontSize="xl" mb="2">
              {service.title}
            </Text>
            <Text className="project-body">
              {service.description}
            </Text>
          </Box>
        </a>
      ) : (
        // Render without Link if link property is not present
        <>
          {service.image && <Image src={service.image} alt={service.title} />}
          <Box p="6">
            <Text className="project-body-header" fontWeight="bold" fontSize="xl" mb="2">
              {service.title}
            </Text>
            <Text className="project-body">
              {service.description}
            </Text>
          </Box>
        </>
      )}
    </Box>
  );
};

const ServicesList = ({ services }) => {
  return (
    <Box display="flex" align="center" flexWrap="wrap" justifyContent="center">
      {services.map((service) => (
        <Box key={service.id} m="4">
          <ServiceCard service={service} />
        </Box>
      ))}
    </Box>
  );
};

export default ServicesList;
