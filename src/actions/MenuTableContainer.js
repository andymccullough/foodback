import fetch from 'isomorphic-fetch';

export const addLike = (id) => {
  return {
    type: 'ADD_LIKE',
    id
  }
};

export const addMenu = (title) => {
  return {
    type: 'ADD_MENU',
    title
  }
};

const requestMenus = () => {
  return {
    type: 'REQUEST_MENUS'
  }
};

const receiveMenus = (json) => {
  return {
    type: 'RECEIVE_MENUS',
    menus: json,
    receivedAt: Date.now()
  }
};

export const fetchMenus = () => {
  return dispatch => {
      dispatch(requestMenus());
      return fetch(`http://10.172.15.171:3000/menu`)
        .then(
              response => response.json(),
              error => console.log('An error occured.', error)
        )
        .then(json => dispatch(receiveMenus(json)))
    }
};