const initialState = {menus: [{}]};

const menus = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LIKE': {
        return Object.assign({}, state, {
            menus: state.menus.map(menu =>
                (menu.id === action.id) ? Object.assign({}, menu, {likes: menu.likes + 1}) : menu
            )
        });
    }
    case 'ADD_MENU': {
      return Object.assign({}, state, {
          menus: [
              ...state.menus,
              {
                  id: (Number(state.menus[state.menus.length-1].id) + 1).toString(),
                  title: action.title,
                  likes: 0
              }
          ]
      });
    }
    case 'REQUEST_MENUS': {
      return Object.assign({}, state, {
          isFetching: true
      });
    }
    case 'RECEIVE_MENUS': {
      return Object.assign({}, state, {
          isFetching: false,
          menus: action.menus,
          lastUpdated: action.receivedAt
      });
    }

    default: return state;

  }
}

export default menus