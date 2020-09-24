import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Calculator extends Component {
  state = {
    value1List: [],
    operation: '',
    value2List: [],
    result: '',
    buttonValueList: ['+', '-', '×', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, 'Clear', '=']
  }

  handleClick = (event) => {
    const value = event.target.value;
    const numberReg = /[0-9]/;
    const operationReg = /^[\+\-\×]$/;

    if (this.isValueInitNum(value, numberReg)) {
      this.initResult(value);
    }else if (this.isValueFirstValue(value, numberReg)) {
      this.defineValue1(value);
    } else if (this.isValueOperation(value, operationReg)) {
      this.defineOperation(value);
    }else if (this.isValueSecondValue(value, numberReg)) {
      this.defineValue2(value);
    }else if (this.isValueEqual(value)) {
      this.outputCalculatorResult();
    } else {
      this.handleClear();
    }
  }

  isValueInitNum = (value, numberReg) => {
    return numberReg.test(value) && this.state.value1List.length === 0;
  }

  isValueFirstValue = (value, numberReg) => {
    return numberReg.test(value) && this.state.operation === '';
  }

  isValueSecondValue = (value, numberReg) => {
    return numberReg.test(value) && this.state.operation !== '';
  }

  isValueOperation = (value, operationReg) => {
    return operationReg.test(value) && this.state.operation === '' && this.state.value1List.length !== 0;
  }

  isValueEqual = (value) => {
    return value === '=' && this.state.value2List.length !== 0;
  }

  initResult = (value) => {
    this.setState({
      value1List: this.state.value1List.concat(+value),
      result: value,
    })
  }

  defineValue1 = (value) => {
    this.setState({
      value1List: this.state.value1List.concat(+value),
      result : this.state.result + value
    })
  }

  defineOperation = (value) => {
    this.setState({
      operation: value,
      result : this.state.result + value
    })
  }

  defineValue2 = (value) => {
    this.setState({
      value2List: this.state.value2List.concat(+value),
      result : this.state.result + value
    })
  }

  outputCalculatorResult = () => {
    this.setState({
      value1List: [],
      operation: '',
      value2List: [],
      result : this.calculate()
    })
  }

  handleClear = () => {
    this.setState({
      value1List: [],
      operation: '',
      value2List: [],
      result: ''
    })
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
    return <div className="calculator-page">
      <h1>在线计算机</h1>
      <div className="calculator">
        <p className="result">{this.state.result}</p>
        <div className="calculator-operation">
          {
            this.state.buttonValueList.map(value=> <CalculatorButton 
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