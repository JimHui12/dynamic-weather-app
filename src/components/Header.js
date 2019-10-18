import React from 'react';
import logo from './assets/logo.png';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <img src={logo} className="header__logo" alt="header logo"/>
                <h1 className="header__title">Weather Channel</h1>
            </header>
        );
    }
}
