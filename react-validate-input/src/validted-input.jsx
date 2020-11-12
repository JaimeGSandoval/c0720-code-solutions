import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    let icon = '';
    let text = '';
    const textStyles = '';

    if (this.state.password.length === 0) {
      text = 'Password is Required';
    } else if (this.state.password.length > 0 && this.state.password.length < 8) {
      text = 'Password is too Short';
      icon = 'fas fa-times show red';
    } else {
      icon = 'fas fa-check show green';
      text = '';
    }

    return (
      <div>
        <form>
          <input type="password" placeholder="Enter Password" onChange={this.handleChange} />
          <i className={icon}></i>
          <p className={textStyles}>{text}</p>
        </form>
      </div>
    );
  }
}

export default ValidatedInput;
