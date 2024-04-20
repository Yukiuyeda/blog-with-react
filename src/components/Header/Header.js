import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <Link to="/">Blog</Link>
        <Link to="/contactform">お問い合わせ</Link>
    </header>
  )
}

export default Header;