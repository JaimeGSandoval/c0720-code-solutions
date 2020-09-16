import React from 'react';
import ReactDom from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const clicked = this.state.isClicked;
    if (clicked) {
      return <button>Thanks</button>;
    }
    return <button onClick={this.handleClick}>Click me!</button>;
  }
}

ReactDom.render(<CustomButton />, document.getElementById('root'));
