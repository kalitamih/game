import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import retrieveRecordTable from '../../retrieve/retrieve';
import topTen from '../../retrieve/topTen';
import addRowInTable from '../../retrieve/addRowInTable';
import './tablerecord.css';

class TableRecord extends Component {
  state = {
    record: [],
  }

  componentDidMount() {
    const { login, kill } = this.props;
    addRowInTable(login, kill)
      .then(() => retrieveRecordTable())
      .then(data => topTen(data))
      .then(data => this.setState({ record: data }))
      .catch(err => console.log(err));
  }

  render() {
    const { record } = this.state;
    const recordTable = record.map(item => (
      <tr key={item.id}>
        <td>{item.login}</td>
        <td>{item.round}</td>
      </tr>
    ));
    return (
      <div className="tablerecord">
        <table className="record">
          <thead>
            <tr>
              <th>Login</th>
              <th>Top 20 results</th>
            </tr>
          </thead>
          <tbody>
            {recordTable}
          </tbody>
        </table>
        <button className="btn select newgame" type="button" onClick={() => window.location.reload()}>New Game(F5)</button>
      </div>
    );
  }
}

TableRecord.propTypes = {
  login: PropTypes.string.isRequired,
  kill: PropTypes.number.isRequired,
};

const mapStateToProps = store => ({
  login: store.user.login,
  kill: store.kill.kill,
});


export default connect(
  mapStateToProps,
  null,
)(TableRecord);
