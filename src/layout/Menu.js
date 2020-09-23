import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { menuOptions } from '../utils';
import { connect } from 'react-redux';
import './Menu.scss';

class Menu extends Component {
  render() {
    const { isSignIn } = this.props.user;
    return (
      <nav className="menu">
        <ul>
          <li className="nav-item">
            <Link to="/">首页</Link>
          </li>
          {menuOptions.map(
            ({ name, path }) =>
              isSignIn &&
              name !== '报表' && (
                <li className="nav-item" key={name}>
                  <Link to={path}>{name}</Link>
                </li>
              )
          )}
          {!isSignIn && (
            <li className="nav-item" key={menuOptions[2].name}>
              <Link to={menuOptions[2].path}>{menuOptions[2].name}</Link>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps)(Menu);
