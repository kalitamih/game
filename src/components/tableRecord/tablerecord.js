import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import tableRecord from '../../actions/getTableRecord';
import addRowInTable from '../../retrieve/addRowInTable';
import Loader from '../loader';
import './tablerecord.css';

class TableRecord extends Component {
  componentDidMount() {
    const { login, kill, getTableRecord } = this.props;
    addRowInTable(login, kill)
      .then(() => getTableRecord())
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.props);
    const { loading, data, error } = this.props;

    if (loading) { return <Loader />; }

    if (error) {
      return (
        <h1 style={{ color: 'red' }}>
          ERROR:
          &nbsp;
          {error}
        </h1>
      );
    }

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
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.login}</td>
                <td>{item.round}</td>
              </tr>
            ))}
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
  getTableRecord: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = store => ({
  login: store.user.login,
  kill: store.kill.kill,
  data: store.records.data,
  loading: store.records.loading,
  error: store.records.error,
});

const mapDispatchToProps = dispatch => ({
  getTableRecord: () => dispatch(tableRecord()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableRecord);
