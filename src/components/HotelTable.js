import React from 'react';

const HotelTable = ({hotels, addLike}) => (
    <div className="menu-table">
        {hotels.map((hotel) => (
            <div className="menu-table-row">
                <span>{hotel.title}</span>
                <span>{hotel.likes}</span>
                <button onClick={() => addLike(hotel.id)}>Like</button>
            </div>
        ))}
        <button>Add</button>
    </div>
);

export default HotelTable;