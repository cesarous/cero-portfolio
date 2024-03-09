import React from 'react';
import './App.css';
import './pages/css/Sidebar.css';
import * as Icons from '@mui/icons-material/'; // Import all icons from Material-UI

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Box, Image, Heading, Text } from "@chakra-ui/react";

import { Outlet, Link } from 'react-router-dom';

const menu_list = [
  {
    id: 1,
    title: 'Home',
    link: '/',
    icon: 'Home'
  },
  {
    id: 2,
    title: 'About',
    link: '/about',
    icon: 'FitnessCenter'
  },
  {
    id: 3,
    title: 'Projects',
    link: '/projects',
    icon: 'Engineering'
  },
  {
    id: 4,
    title: 'Qualifications',
    link: '/qualifications',
    icon: 'School'
  },
  {
    id: 5,
    title: 'Services',
    link: '/services',
    icon: 'Terminal'
  },
  {
    id: 6,
    title: 'Connect',
    link: '/connect',
    icon: 'Phone'
  },
];

const MyItem = ({ box }) => {
  const iconName = box.icon;
  const BoxIcon = Icons[iconName]; // Dynamically get the icon component
  console.log({iconName});
  console.log({Icons});
  //set icons below 
  return (

    <section id="services-list">
      <Link to={box.link}>

        <MenuItem background-color = "white" >{box.title}</MenuItem>
      </Link>
    </section>
  );
};

function App() {
  return (
    <div className="App">
      <div className="center-content">
      <Sidebar className="sidebar">
        <Menu iconShape="square">
        <Image 
        w="auto"
        h="auto"
        align src="favicon.ico"></Image>

          {menu_list.map((menu_item) => (
            <MyItem key={menu_item.id} box={menu_item} />
          ))}
        </Menu>

      </Sidebar>
      <Outlet />

      </div>
    </div>
  );
}

export default App;
