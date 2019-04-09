import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const { setUserLogin } = this.props;
    const { value } = this.state;
    event.preventDefault();
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
};

const mapDispatchToProps = dispatch => ({ setUserLogin: login => dispatch(setLogin(login)) });

export default connect(
  null,
  mapDispatchToProps,
)(Login);
