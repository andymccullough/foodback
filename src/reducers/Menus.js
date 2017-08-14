const initialState = [{
   id: '1',
   title: 'Park Avenue',
   likes: 0
}];

const menus = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LIKE': {
        return state.map(menu =>
            (menu.id === action.id) ? Object.assign({}, menu, {likes: menu.likes + 1}) : menu
          )
    }
    default:
      return state
  }
}

export default menus