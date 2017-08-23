import React from 'react';
import MenuTableAddEntry from './MenuTableAddEntry';

const MenuTable = ({menus, addLike, addMenu}) => (
    <div className="menu-table">
        {menus.menus.map((menu) => (
            <div className="menu-table-row">
                <span>{menu.title}</span>
                <span>{menu.likes}</span>
                <button onClick={() => addLike(menu.id)}>Like</button>
            </div>
        ))}
        <MenuTableAddEntry addMenu={addMenu}/>
    </div>
);

export default MenuTable;