import React from 'react';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClicks = this.handleClicks.bind(this);
  }

  handleClicks() {
    this.setState(function (state) {
      return { clicks: state.clicks + 1 };
    });
  }

  render() {
    let className = '';
    if (this.state.clicks >= 3 && this.state.clicks < 6) {
      className += 'dark-purple';
    } else if (this.state.clicks >= 6 && this.state.clicks < 9) {
      className += 'blue-violet';
    } else if (this.state.clicks >= 9 && this.state.clicks < 12) {
      className += 'firebrick';
    } else if (this.state.clicks >= 12 && this.state.clicks < 15) {
      className += 'tan';
    } else if (this.state.clicks >= 15 && this.state.clicks < 18) {
      className += 'yellow';
    } else {
      className += 'white';
    }

    return <button className={className} onClick={this.handleClicks} > Hot Button</button >;
  }
}

export default CustomButton;
