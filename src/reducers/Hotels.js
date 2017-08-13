const initialState = [{
   id: '1',
   title: 'Park Avenue',
   likes: 0
}];

const hotels = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LIKE': {
        return state.map(hotel =>
            (hotel.id === action.id) ? Object.assign({}, hotel, {likes: hotel.likes + 1}) : hotel
          )
    }
    default:
      return state
  }
}

export default hotels