const initialState = {
  data: [],
  loading: true,
  error: '',
};

export default function recordsReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_RECORDS_LOADING':
      return {
        ...state,
        loading: true,
        error: '',
      };

    case 'LOAD_RECORDS_SUCCESS':
      return {
        ...state,
        data: action.data,
        loading: false,
      };

    case 'LOAD_RECORDS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
