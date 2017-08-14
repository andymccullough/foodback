import React from 'react';

const MenuTable = ({menus, addLike}) => (
    <div className="menu-table">
        {menus.map((menu) => (
            <div className="menu-table-row">
                <span>{menu.title}</span>
                <span>{menu.likes}</span>
                <button onClick={() => addLike(menu.id)}>Like</button>
            </div>
        ))}
        <button>Add</button>
    </div>
);

export default MenuTable;