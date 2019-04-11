import React from 'react';
import { withRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from '../menu';
import Mathematics from '../mathematics';
import Audio from '../audio';
import Translation from '../translation';
import TableRecord from '../tableRecord';
import Congratilation from '../congratilation';

const ModalWindow = () => (
  <div className="menuTask">
    <Route path="/nothing" render={() => null} />
    <Route path="/math" render={() => <Mathematics />} />
    <Route path="/audio" render={() => <Audio />} />
    <Route path="/menu" render={() => <Menu />} />
    <Route path="/translation" render={() => <Translation />} />
    <Route path="/records" render={() => <TableRecord />} />
    <Route path="/congratilation" render={() => <Congratilation />} />
  </div>
);

export default withRouter(ModalWindow);
