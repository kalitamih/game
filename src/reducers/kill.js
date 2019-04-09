const initialState = {
  kill: 0,
};

export default function killReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_KILL_MONSTER':
      return {
        ...state,
        kill: state.kill + 1,
      };

    default:
      return state;
  }
}
