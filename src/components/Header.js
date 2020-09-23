import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
  render() {
    return <section className='header'>
      <div className="header-links">
        <Link to="/" className="header-link">Home</Link>
        <Link to="/calculator" className="header-link">在线计算机</Link>
        <Link to="/timer" className="header-link">在线倒计时器</Link>
      </div>
    </section>
  }
}

export default Header;