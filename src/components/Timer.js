import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Timer extends Component {
  render() {
    return <div className="timer-page">
      <h1>在线倒计时器</h1>
      <div className="timer-content">
        <div className="timer-start">
          <div className="timer-set">
            <p>设置事件</p>
            <input type="text" className="timer-input"></input>
          </div>
          <input type="submit" value="Start" className="timer-start-btn"/>
        </div>
        <div className="timer-show">
          <p>事件</p>
        </div>
      </div>
      <Link to="/" id="return-home">回到主页</Link>
    </div>
  }

}

export default Timer;