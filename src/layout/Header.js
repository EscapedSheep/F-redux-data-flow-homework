import React, { Component } from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { signIn, signOut } from '../action';

class Header extends Component {
  render() {
    const { user, isSignIn } = this.props.user;
    console.log(user, this.props);
    return (
      <header className="header">
        <div className="header-wrapper">
          {isSignIn && (
            <div>
              <img src={user.avatar} alt="头像" />
              <span className="username">{user.name}</span>
              <a className="sign" onClick={this.props.handleSignOut}>
                Sign out
              </a>
            </div>
          )}

          <a className="sign" onClick={this.props.handleSignIn}>
            Sign in
          </a>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = dispatch => ({
  handleSignIn() {
    dispatch(signIn());
  },
  handleSignOut() {
    dispatch(signOut());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
