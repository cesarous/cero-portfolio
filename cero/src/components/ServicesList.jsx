import React, { useState } from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import { Outlet, Link } from 'react-router-dom';


const ServiceCard = ({ service }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <section id="services-list">
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow={hover ? '0 4px 8px 0 rgba(94, 23, 235, 0.2), 0 6px 20px 0 rgba(94, 23, 235, 0.19)' : '0 4px 8px 0 #49494b;'}
      transition="box-shadow 0.3s ease-in-out"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {service.link ? (
        <Link to={service.link}>
          {service.image && <Image src={service.image} alt={service.title} />}
          <Box p="6">
            <Text fontWeight="bold" fontSize="xl" mb="2">
              {service.title}
            </Text>
            <Text fontSize="md" color="gray.600">
              {service.description}
            </Text>
          </Box>
        </Link>
      ) : (
        // Render without Link if link property is not present
        <>
          {service.image && <Image src={service.image} alt={service.title} />}
          <Box p="6">
            <Text fontWeight="bold" fontSize="xl" mb="2">
              {service.title}
            </Text>
            <Text fontSize="md" color="gray.600">
              {service.description}
            </Text>
          </Box>
        </>
      )}
    </Box>
  </section>
  );
};

const ServicesList = ({ services }) => {
  return (
    <Box display="flex" align ="center" flexWrap="wrap" justifyContent="center">
      {services.map((service) => (
        <Box key={service.id} m="4">
          <ServiceCard service={service} />
        </Box>
      ))}
    </Box>
  );
};

export default ServicesList;
