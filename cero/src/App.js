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
    title: 'History',
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
  // icon= {BoxIcon && <BoxIcon />}
  return (

    <section id="services-list">
      <Link to={box.link}>

        <MenuItem  className='custom-menu-item' > {BoxIcon && <BoxIcon />}   {BoxIcon && <br />} {box.title}</MenuItem>
        <hr className="menu-separator" />
      </Link>
    </section>
  );
};

function App() {
  return (
    <div className="App">
      <div className="center-content">
      <Sidebar className="sidebar">
        <div height= "100vh"></div>
      <Image 
        marginTop="25%"
        marginBottom="40px"
        w="auto"
        h="auto"
        align src="favicon.ico"></Image>
        <Menu iconShape="square">
       

          {menu_list.map((menu_item) => (
            <MyItem  marginBottom ="10px" key={menu_item.id} box={menu_item} />
          ))}
        </Menu>

      </Sidebar>
      <Outlet />

      </div>
    </div>
  );
}

export default App;
