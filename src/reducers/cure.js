const initialState = {
  cureHero: false,
  cureMonster: false,
};

export default function cureReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_HERO_CURE':
      return { ...state, cureHero: true };

    case 'SET_MONSTER_CURE':
      return { ...state, cureMonster: true };

    case 'SET_DEFAULT_CURE':
      return { ...state, cureHero: false, cureMonster: false };

    default:
      return state;
  }
}
