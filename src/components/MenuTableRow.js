import React from 'react';
import MenuTableAddEntry from './MenuTableAddEntry';
import { Link } from 'react-router-dom';

const MenuTableRow = ({menu, addLike}) => (
    <div className="menu-table-row">
        <span>{menu.title}</span>
        <span>{menu.likes}</span>
        <button onClick={() => addLike(menu.id)}>Like</button>
        <Link to={`/menu/${menu.id}`}>View</Link>
    </div>
);

export default MenuTableRow;