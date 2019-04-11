import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { history as historyPropTypes } from 'history-prop-types';
import PropTypes from 'prop-types';
import setLogin from '../../actions/login';
import './login.css';

class Login extends Component {
  state = {
    value: '',
  };

  textInput = React.createRef();

  componentDidMount() {
    this.textInput.current.focus();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    const { setUserLogin, history } = this.props;
    const { value } = this.state;
    event.preventDefault();
    if (value) history.push('/menu');
    setUserLogin(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input type="text" className="form-control" ref={this.textInput} value={value} onChange={this.handleChange} placeholder="Enter login" />
        </div>
        <button type="submit" className="btn btn-danger">Submit</button>
      </form>
    );
  }
}

Login.propTypes = {
  setUserLogin: PropTypes.func.isRequired,
  history: PropTypes.shape(historyPropTypes).isRequired,
};

const mapDispatchToProps = dispatch => ({ setUserLogin: login => dispatch(setLogin(login)) });

export default withRouter(connect(
  null,
  mapDispatchToProps,
)(Login));
