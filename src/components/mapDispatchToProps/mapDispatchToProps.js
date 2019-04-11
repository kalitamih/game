import cureHero from '../../actions/cureHero';
import cureMonster from '../../actions/cureMonster';
import heroAttack from '../../actions/heroAttack';
import monsterAttack from '../../actions/monsterAttack';
import hurtHero from '../../actions/hurtHero';
import heroDeath from '../../actions/heroDeath';
import monsterDeath from '../../actions/monsterDeath';
import defaultKey from '../../actions/defaultKey';

const mapDispatchToProps = dispatch => ({
  setCureHero: () => dispatch(cureHero()),
  setCureMonster: () => dispatch(cureMonster()),
  setHeroAttack: () => dispatch(heroAttack()),
  setMonsterAttack: () => dispatch(monsterAttack()),
  setHurtHero: () => dispatch(hurtHero()),
  setMonsterDeath: () => dispatch(monsterDeath()),
  setHeroDeath: () => dispatch(heroDeath()),
  setDefaultKey: () => dispatch(defaultKey()),
});

export default mapDispatchToProps;
