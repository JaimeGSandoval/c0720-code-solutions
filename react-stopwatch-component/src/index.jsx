import React from 'react';
import ReactDOM from 'react-dom';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isRunning: false, count: 0 };
    this.stateControl = this.stateControl.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.incrementor = this.incrementor.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.icon = 'fa fa-play-circle';
  }

  incrementor() {
    this.setState({ count: this.state.count + 1 });
  }

  start() {
    this.intervalId = setInterval(this.incrementor, 1000);
  }

  stop() {
    return clearInterval(this.intervalId);
  }

  stateControl() {
    this.setState(function (state) {

      if (!this.state.isRunning) {
        this.icon = 'fa fa-pause-circle';
        this.start();
        return { isRunning: true };
      } else if (this.state.isRunning) {
        this.icon = 'fa fa-play-circle';
        this.stop();
        return { isRunning: false };
      }
    });
  }

  resetTimer() {
    if (!this.state.isRunning && this.state.count !== 0) {
      return this.setState({ count: 0 });
    }
  }

  render() {

    return (
      <div className="container">
        <div className="watch-face" onClick={this.resetTimer} >
          <div className="time-digit">{this.state.count}</div>
        </div>
        <i className={this.icon} onClick={this.stateControl}></i>
      </div>
    );
  }
}

ReactDOM.render(<StopWatch />, document.getElementById('root'));
