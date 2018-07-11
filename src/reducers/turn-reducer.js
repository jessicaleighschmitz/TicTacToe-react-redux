export default (state = true, action) => {
  let newState;
  switch (action.type) {
  case 'TURN':
    const { xIsNext } = action;
    newState = Object.assign({}, state, {
      xIsNext: xIsNext
    });
    return newState;
  default:
    return state;
  }
};
