import React from 'react';
import MenuTableAddEntry from './MenuTableAddEntry';
import MenuTableRow from './MenuTableRow';
import { Link } from 'react-router-dom';

const MenuTable = ({menus, addLike, addMenu}) => (
    <div className="menu-table">
        {menus.menus.map((menu) => (
            <MenuTableRow key={menu.id} menu={menu} addLike={addLike}/>
        ))}
        <MenuTableAddEntry addMenu={addMenu}/>
    </div>
);

export default MenuTable;