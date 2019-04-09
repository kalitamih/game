const initialState = {
  monster: 100,
  hero: 100,
};

export default function healthReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_HERO_HEALTH':
      return {
        ...state,
        hero: state.hero + action.payload,
      };

    case 'SET_MONSTER_HEALTH':
      return {
        ...state,
        monster: state.monster + action.payload,
      };

    default:
      return state;
  }
}
