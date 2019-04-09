const initialState = {
  heroIdle: true,
  monsterIdle: true,
  heroAttack: false,
  monsterAttack: false,
  heroHurt: false,
  monsterHurt: false,
  heroDeath: false,
  monsterDeath: false,
};

export default function figthReducer(state = initialState, action) {
  const falseState = {
    heroIdle: false,
    monsterIdle: false,
    heroAttack: false,
    monsterAttack: false,
    heroHurt: false,
    monsterHurt: false,
    heroDeath: false,
    monsterDeath: false,
  };

  switch (action.type) {
    case 'SET_FIGHT_DEFAULT':
      return {
        ...state,
        ...falseState,
        heroIdle: true,
        monsterIdle: true,
      };

    case 'SET_ATTACK_HERO':
      return {
        ...state,
        ...falseState,
        monsterIdle: true,
        heroAttack: true,
      };

    case 'SET_ATTACK_MONSTER':
      return {
        ...state,
        ...falseState,
        heroIdle: true,
        monsterAttack: true,
      };

    case 'SET_HURT_HERO':
      return {
        ...state,
        ...falseState,
        heroHurt: true,
        monsterIdle: true,
      };

    case 'SET_HURT_MONSTER':
      return {
        ...state,
        ...falseState,
        heroIdle: true,
        monsterHurt: true,
      };

    case 'SET_HERO_DEATH':
      return {
        ...state,
        ...falseState,
        heroDeath: true,
        monsterIdle: true,
      };

    case 'SET_MONSTER_DEATH':
      return {
        ...state,
        ...falseState,
        heroIdle: true,
        monsterDeath: true,
      };

    default:
      return state;
  }
}
