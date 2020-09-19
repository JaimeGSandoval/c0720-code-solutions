import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShown: false };
    this.handleClick = this.handleClick.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  handleClick(event) {
    this.setState(function (state) {
      if (!this.state.isShown) {
        return { isShown: true };
      } else {
        return { isShown: false };
      }
    });
  }

  hideMenu() {
    this.setState(function () {
      return { isShown: false };
    });
  }

  render() {
    let modalStyles = 'modal-overlay';
    let cssClass = 'side-menu';
    if (!this.state.isShown) {
      cssClass = 'side-menu';
    } else {
      modalStyles += ' show-modal';
      cssClass += ' show';
    }
    return (
      <>
        <div className={modalStyles} onClick={this.hideMenu}></div>
        <i className="fas fa-bars mobile-menu-icon" onClick={this.handleClick}></i>
        <div className={cssClass}>
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
