import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggleOn: false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState(function (state) {
      if (!this.state.toggleOn) {
        return { toggleOn: true };
      } else {
        return { toggleOn: false };
      }
    });
  }

  render() {

    let button = 'button';
    let toggleText = '';
    const btnSwitch = 'btn-switch';
    if (!this.state.toggleOn) {
      button = 'button';
      toggleText = 'OFF';
    } else {
      button += ' on';
      toggleText = 'ON';
    }
    return (
      <div className={'container'}>
        <div className={button} onClick={this.handleToggle}>
          <div className={btnSwitch}></div>
        </div><span>{toggleText}</span>
      </div>
    );
  }
}

export default ToggleSwitch;
