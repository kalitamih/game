import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Mathematics from '../mathematics';
import Audio from '../audio';
import Translation from '../translation';
import TableRecord from '../tableRecord';
import Congratilation from '../congratilation';

const ModalWindow = (props) => {
  const {
    math,
    menu,
    audio,
    translation,
    record,
    congratilation,
  } = props;
  return (
    <div className="menuTask">
      { menu && <Menu /> }
      { math && <Mathematics /> }
      { audio && <Audio /> }
      { translation && <Translation /> }
      { record && <TableRecord />}
      { congratilation && <Congratilation />}
    </div>
  );
};

ModalWindow.propTypes = {
  math: PropTypes.bool.isRequired,
  menu: PropTypes.bool.isRequired,
  audio: PropTypes.bool.isRequired,
  translation: PropTypes.bool.isRequired,
  record: PropTypes.bool.isRequired,
  congratilation: PropTypes.bool.isRequired,
};

const mapStateToProps = store => ({
  math: store.layout.math,
  menu: store.layout.menu,
  audio: store.layout.audio,
  translation: store.layout.translation,
  record: store.layout.record,
  congratilation: store.layout.congratilation,
});


export default connect(
  mapStateToProps,
  null,
)(ModalWindow);
