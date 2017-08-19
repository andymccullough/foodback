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
      case 'ADD_MENU': {
          let result = [
              ...state,
              {
                  id: (Number(state[state.length-1].id) + 1).toString(),
                  title: action.title,
                  likes: 0
              }
          ];
          return result;
      }
    default: return state;

  }
}

export default menus