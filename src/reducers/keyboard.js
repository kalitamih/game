const initialState = {
  audioKey: false,
  mathKey: false,
  translationKey: false,
};

export default function keyboardReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_AUDIO_KEY':
      return {
        ...state,
        ...initialState,
        audioKey: true,
      };

    case 'SET_MATH_KEY':
      return {
        ...state,
        ...initialState,
        mathKey: true,
      };

    case 'SET_TRANSLATION_KEY':
      return {
        ...state,
        ...initialState,
        translationKey: true,
      };

    case 'SET_DEFAULT_KEY':
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
}
