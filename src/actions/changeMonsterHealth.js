export default function changeMonsterHealth(health) {
  return {
    type: 'SET_MONSTER_HEALTH',
    payload: health,
  };
}
