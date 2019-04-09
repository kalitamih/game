import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MonsterAttack from '../animation/monster/monsterAttack';
import MonsterIdle from '../animation/monster/monsterIdle';
import MonsterHurt from '../animation/monster/monsterHurt';
import MonsterDeath from '../animation/monster/monsterDeath';
import Explosition from '../animation/explosition';
import Cure from '../animation/cure';
import './monster.css';

const Monster = (props) => {
  const {
    monsterIdle,
    monsterHurt,
    monsterAttack,
    monsterDeath,
    cureMonster,
  } = props;
  return (
    <Fragment>
      { monsterIdle && <MonsterIdle /> }
      { monsterAttack && <MonsterAttack /> }
      { monsterHurt && <MonsterHurt /> }
      { monsterDeath && <MonsterDeath /> }
      <div className="monsterExplosition">
        {monsterHurt && <Explosition />}
        { cureMonster && <Cure /> }
      </div>
    </Fragment>
  );
};

Monster.propTypes = {
  monsterIdle: PropTypes.bool.isRequired,
  monsterHurt: PropTypes.bool.isRequired,
  monsterAttack: PropTypes.bool.isRequired,
  monsterDeath: PropTypes.bool.isRequired,
  cureMonster: PropTypes.bool.isRequired,
};

const mapStateToProps = store => ({
  monsterIdle: store.figth.monsterIdle,
  monsterHurt: store.figth.monsterHurt,
  monsterAttack: store.figth.monsterAttack,
  monsterDeath: store.figth.monsterDeath,
  cureMonster: store.cure.cureMonster,
});

export default connect(
  mapStateToProps,
  null,
)(Monster);
