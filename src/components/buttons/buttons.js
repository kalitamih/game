import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const Buttons = (props) => {
  const { attack, cure, menu } = props;
  return (
  <Fragment>
    <button type="submit" className="send btn select" onClick={attack}>Attack(Enter)</button>
    <button type="submit" className="send btn select" onClick={cure}>Cure(Ctrl)</button>
    <button type="submit" className="send btn select" onClick={menu}>Back(Esc)</button>
  </Fragment>
  );
};

Buttons.propTypes = {
  attack: PropTypes.func.isRequired,
  cure: PropTypes.func.isRequired,
  menu: PropTypes.func.isRequired,
};

export default Buttons;
