import React, { Component } from "react";
import styled from "styled-components";

export const Calculadora = styled.div`
  background-color: aquamarine;
  width: 50%;
  height: 400px;
  margin: 0 auto;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  input {
    width: 80%;
    height: 6.2vh;
    border: none;
    border-radius: 5px;
  }

  button {
    background-color: aquamarine;
    border-radius: 5px;
    display: inline;
    cursor: pointer;
    margin-left: 0 auto;
  }

  h2 {
    background-color: whitesmoke;
    width: 50%;
    height: 40px;
    border-radius: 5px;
  }
`;

export default class App extends Component {
  state = {
    n1: "",
    n2: "",
    result: ""
  };

  input1 = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };

  input2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };

  soma = () => {
    this.setState({
      result: this.state.n1 + this.state.n2
    });
  };

  subtracao = () => {
    this.setState({
      result: this.state.n1 - this.state.n2
    });
  };

  multip = () => {
    this.setState({
      result: this.state.n1 * this.state.n2
    });
  };

  divisao = () => {
    this.setState({
      result: this.state.n1 / this.state.n2
    });
  };

  clear = () => {
    this.setState({
      n1: "",
      n2: "",
      result: ""
    });
  };

  render() {
    return (
      <Calculadora>
        <h1>Calculadora</h1>
        <input onChange={this.input1} type="number" value={this.state.n1} />
        <input onChange={this.input2} type="number" value={this.state.n2} />
        <button onClick={this.soma}>+</button>
        <button onClick={this.subtracao}>-</button>
        <button onClick={this.multip}>*</button>
        <button onClick={this.divisao}>/</button>
        <button onClick={this.clear}>C</button>
        <h2>{this.state.result}</h2>
      </Calculadora>
    );
  }
}
