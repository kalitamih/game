const initialState = {
  menu: true,
  math: false,
  audio: false,
  translation: false,
  record: false,
  congratilation: false,
};

export default function layoutReducer(state = initialState, action) {
  const falseObject = {
    menu: false,
    math: false,
    audio: false,
    translation: false,
    record: false,
    congratilation: false,
  };

  switch (action.type) {
    case 'SET_MATH_PAGE':
      return {
        ...state,
        ...falseObject,
        math: true,
      };

    case 'SET_MENU_PAGE':
      return {
        ...state,
        ...falseObject,
        menu: true,
      };

    case 'SET_AUDIO_PAGE':
      return {
        ...state,
        ...falseObject,
        audio: true,
      };

    case 'SET_TRANSLATION_PAGE':
      return {
        ...state,
        ...falseObject,
        translation: true,
      };

    case 'SET_RECORD_PAGE':
      return {
        ...state,
        ...falseObject,
        record: true,
      };
    case 'SET_CONGRATILATION_PAGE':
      return {
        ...state,
        ...falseObject,
        congratilation: true,
      };

    case 'SET_NOTHING_PAGE':
      return {
        ...state,
        ...falseObject,
      };

    default:
      return state;
  }
}
