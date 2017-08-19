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