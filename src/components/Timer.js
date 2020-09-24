import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Timer extends Component {

  state = {
    currentTime: 0,
    status: 'Start'
  }

  handleStart = () => {
    if (this.state.currentTime === 0) {
      this.setState({
        status: 'End'
      })
    } else {
      this.setState({
        status: `${this.state.currentTime} Seconds`
      });

      let timer = setInterval(() => {
        this.setState({
          currentTime: this.state.currentTime - 1,
          status: `${this.state.currentTime - 1} Seconds`
        })
  
        if (this.state.currentTime === 0) {
          clearInterval(timer);
          this.setState({
            status: 'End'
          })
        }
      }, 1000);
    }
  }

  handleInit = (event) => {
    const numberReg = /^[0-9]*$/;
    if (numberReg.test(event.target.value)) {
      this.setState({
        currentTime: Number(event.target.value)
      })
    }
  }

  render() {
    return <div className="timer-page">
      <h1>在线倒计时器</h1>
      <div className="timer-content">
        <div className="timer-start">
          <div className="timer-set">
            <p>设置时间</p>
            <input type="text" 
              className="timer-input" 
              placeholder = "0" 
              onChange={this.handleInit}
              disabled={this.state.status !== 'Start' && this.state.status !== 'End'}></input>
          </div>
          <input type="submit" 
            value="Start" 
            className="timer-start-btn" 
            onClick={this.handleStart}
            disabled={this.state.status !== 'Start' && this.state.status !== 'End'}/>
        </div>
        <div className="timer-show">
          <p>{this.state.status}</p>
        </div>
      </div>
      <Link to="/" className="return-home">回到主页</Link>
    </div>
  }

}

export default Timer;