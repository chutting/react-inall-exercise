import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Calculator extends Component {
  state = {
    value1List: [],
    operation: '',
    value2List: [],
    result: ''
  }

  handleClick = (event) => {
    const value = event.target.value;
    const numberReg = /[0-9]/;
    const operationReg = /^[\+\-\×]$/;

    if (numberReg.test(value) && this.state.value1List.length === 0) {
      this.setState({
        value1List: this.state.value1List.concat(+value),
        result: value,
      })
    }else if (numberReg.test(value) && this.state.operation === '') {
      this.setState({
        value1List: this.state.value1List.concat(+value),
        result : this.state.result + value
      })
    } else if (operationReg.test(value) && this.state.operation === '') {
      this.setState({
        operation: value,
        result : this.state.result + value
      })
    }else if (numberReg.test(value) && this.state.operation !== '') {
      this.setState({
        value2List: this.state.value2List.concat(+value),
        result : this.state.result + value
      })
    }else if (value === '=' && this.state.value2List.length !== 0) {
      this.setState({
        value1List: [],
        operation: '',
        value2List: [],
        result : this.calculate()
      })
    } else {
      this.setState({
        value1List: [],
        operation: '',
        value2List: [],
        result: ''
      })
    }
  }

  calculate = () => {
    let value1 = 0;

    let value2 = 0;

    this.state.value1List.forEach((number, index) => {
      value1 += number * Math.pow(10, this.state.value1List.length - index - 1);
    })

    this.state.value2List.forEach((number, index) => {
      value2 += number * Math.pow(10, this.state.value2List.length - index - 1);
    })

    if (this.state.operation === '+') {
      return value1 + value2;
    }
    if (this.state.operation === '-') {
      return value1 - value2;
    }
    if (this.state.operation === '×') {
      return value1 * value2;
    }
  }

  render() {
    const buttonValueList = ['+', '-', '×', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, 'Clear', '='];

    return <div className="calculator-page">
      <h1>在线计算机</h1>
      <div className="calculator">
        <p className="result">{this.state.result}</p>
        <div className="calculator-operation">
          {
            buttonValueList.map(value=> <CalculatorButton 
              value = {value} 
              key={`calculator-button-${value}`}
              onClick={this.handleClick}/>)
          }
        </div>
      </div>
      <Link to="/" className="return-home">回到主页</Link>
    </div>
  }
}

class CalculatorButton extends Component {
  render() {
    return <input type="submit" 
    value={this.props.value} 
    className="calculator-button" 
    id={`calculator-button-${this.props.value}`} onClick={(event) => {this.props.onClick(event)}}></input>
  }
}

export default Calculator;