import React from 'react';
import './home.less';
import calculatorImg from '../images/calculator.png';
import timerImg from '../images/timer.png';
import {Link} from "react-router-dom";

const Home = () => {
  return (<div className="home">
    <div className="home-title">
      <p>在线实用工具</p>
    </div>
    <div className="home-nav">
      <div className="home-nav-item">
        <img src={calculatorImg} alt="calculator" />
        <Link to="/calculator" className="home-nav-item-link">计算器</Link>
      </div>
      <div className="home-nav-item">
        <img src={timerImg} alt="timer" />
        <Link to="/timer" className="home-nav-item-link">倒计时器</Link>
      </div>
    </div>
  </div>);
};

export default Home;