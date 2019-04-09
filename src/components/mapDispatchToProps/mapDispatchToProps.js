import menuPage from '../../actions/menuPage';
import cureHero from '../../actions/cureHero';
import cureMonster from '../../actions/cureMonster';
import heroAttack from '../../actions/heroAttack';
import monsterAttack from '../../actions/monsterAttack';
import hurtHero from '../../actions/hurtHero';
import heroDeath from '../../actions/heroDeath';
import monsterDeath from '../../actions/monsterDeath';
import nothingPage from '../../actions/nothingPage';
import defaultKey from '../../actions/defaultKey';

const mapDispatchToProps = dispatch => ({
  setMenuPage: () => dispatch(menuPage()),
  setCureHero: () => dispatch(cureHero()),
  setCureMonster: () => dispatch(cureMonster()),
  setHeroAttack: () => dispatch(heroAttack()),
  setMonsterAttack: () => dispatch(monsterAttack()),
  setHurtHero: () => dispatch(hurtHero()),
  setMonsterDeath: () => dispatch(monsterDeath()),
  setHeroDeath: () => dispatch(heroDeath()),
  setNothingPage: () => dispatch(nothingPage()),
  setDefaultKey: () => dispatch(defaultKey()),
});

export default mapDispatchToProps;
