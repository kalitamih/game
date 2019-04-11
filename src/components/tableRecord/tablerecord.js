import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import tableRecord from '../../actions/getTableRecord';
import addRowInTable from '../../retrieve/addRowInTable';
import Loader from '../loader';
import homeLink from './homeLink';
import './tablerecord.css';

class TableRecord extends Component {
  componentDidMount() {
    const { login, kill, getTableRecord } = this.props;
    addRowInTable(login, kill)
      .then(() => getTableRecord())
      .catch(err => console.log(err));
  }

  keyHandle = (event) => {
    if (event.key === 'Enter') {
      document.location.href = homeLink;
    }
  };

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
      <Fragment>
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
          <button
            className="btn select newgame"
            type="button"
            onClick={() => {
              document.location.href = { homeLink };
              return null;
            }}
          >
          New Game(Enter)
          </button>
        </div>
        <KeyboardEventHandler
          handleKeys={['Enter']}
          onKeyEvent={(key, e) => this.keyHandle(e)}
        />
      </Fragment>
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
