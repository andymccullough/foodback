import React from 'react';

const Menu = (props) => {
    console.log(props)

    return (
    <div>
        <h1>This is a menu!</h1>
        <p>{props.location.query}</p>
    </div>

)};

export default Menu;