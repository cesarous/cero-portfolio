import React from 'react';
import './App.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import { Outlet, Link } from 'react-router-dom';

const menu_list = [
  {
    id: 1,
    title: 'Home',
    link: '/'
  },
  {
    id: 2,
    title: 'About',
    link: '/about'
  },
  {
    id: 3,
    title: 'Projects',
    link: '/projects'
  },
  {
    id: 4,
    title: 'Qualifications',
    link: '/Qualifications'
  },
  {
    id: 5,
    title: 'Services',
    link: '/services'
  },
];

const MyItem = ({ box }) => {
  return (
    <section id="services-list">
      <Link to={box.link}>
        <MenuItem>{box.title}</MenuItem>
      </Link>
    </section>
  );
};

function App() {
  return (
    <div className="App">
      <Sidebar>
      <Menu iconShape="square">
        {menu_list.map((menu_item) => (
          <MyItem key={menu_item.id} box={menu_item} />
        ))}
      </Menu>

      </Sidebar>
      
      <Outlet />
    </div>
  );
}

export default App;
