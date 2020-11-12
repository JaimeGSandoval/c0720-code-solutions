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
    let xClass = 'fas fa-times';
    let checkClass = 'fas fa-check';
    let requiredTextClass = '';
    let shortTextClass = ' hide';

    if (this.state.password.length !== 0) {
      requiredTextClass = 'hide';
    }

    if (this.state.password.length > 0 && this.state.password.length < 8) {
      shortTextClass = 'show';
      xClass += ' show red';
    }

    if (this.state.password.length >= 8) {
      checkClass += ' show green';
    }

    return (
      <div>
        <form>
          <input type="password" placeholder="Enter Password" onChange={this.handleChange} />
          <i className={xClass}></i>
          <i className={checkClass}></i>
          <p className={requiredTextClass}>Password is required</p>
          <p className={shortTextClass}>Password is too short.</p>
        </form>
      </div>
    );
  }
}

export default ValidatedInput;
