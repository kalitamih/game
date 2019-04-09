export default function changeHeroHealth(health) {
  return {
    type: 'SET_HERO_HEALTH',
    payload: health,
  };
}
