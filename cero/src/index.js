import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Qualifications from './components/Qualifications';
import Services from './components/Services';
import Connect from './components/Connect';

library.add(fab, fas, far);

createRoot(document.getElementById('root')).render(
  
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="qualifications" element={<Qualifications />} />
          <Route path="services" element={<Services />} />
          <Route path="connect" element={<Connect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);


