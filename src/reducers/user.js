const initialState = {
  login: '',
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOGIN':
      return {
        ...state,
        login: action.payload,
      };

    default:
      return state;
  }
}
