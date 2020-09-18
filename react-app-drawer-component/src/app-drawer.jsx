import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShown: false };
    this.cssClass = 'side-menu';
    this.handleClick = this.handleClick.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  handleClick(event) {
    this.setState(function (state) {
      if (!this.state.isShown) {
        this.cssClass += ' show';
        document.body.addEventListener('click', this.hideMenu);
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
        return { isShown: true };
      } else {
        document.body.style.backgroundColor = 'white';
        return { isShown: false };
      }
    });
  }

  hideMenu() {
    this.setState(function () {
      this.cssClass = 'side-menu';
      document.body.style.backgroundColor = 'white';
      return { isShown: false };
    });
  }

  render() {
    return (
      <>
        <i className="fas fa-bars mobile-menu-icon" onClick={this.handleClick}></i>
        <div className={this.cssClass}>
          <p className="menu-title">Menu</p>
          <a href="#" className="link" onClick={this.hideMenu}>About</a>
          <a href="#" className="link" onClick={this.hideMenu}>Get Started</a>
          <a href="#" className="link" onClick={this.hideMenu}>Sign In</a>
        </div>
      </>
    );

  }
}

export default AppDrawer;
