import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

//控制台
let div = document.createElement("div");
div.style = "border:1px solid red;padding:10px;margin-top:20px;";
document.body.appendChild(div);
window.console.log = content => {
  div.innerHTML += content + "<br/>";
};

class Parent extends React.Component {
  killSon() {
    this.setState({
      hasChild: false
    });
  }
  callSon() {
    this.setState({
      word: "son"
    });
  }
  constructor() {
    super();
    this.state = {
      hasChild: true
    };
  }
  render() {
    return (
      <div className="parent">
        我是爸爸
        <button onClick={() => this.callSon()}>call son</button>
        <button onClick={() => this.killSon()}>kill son</button>
        {this.state.hasChild ? <App word={this.state.word} /> : null}
      </div>
    );
  }
}
class App extends React.Component {
  add() {
    this.setState({
      number: this.state.number + 1
    });
    console.log("点击了 button");
  }
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }
  render() {
    console.log("调用render-更新update");
    return (
      <div className="app">
        我是儿子
        <br />
        爸爸对儿子说：{this.props.word}
        <br />
        {this.state.number}
        <button onClick={() => this.add()}>+1</button>
      </div>
    );
  }
  componentWillMount() {
    console.log("调用componentWillMount-App将装载");
  }
  componentWillUpdate() {
    console.log("调用componentWilUpdate-App将更新");
  }
  componentDidMount() {
    console.log("调用componentDidMount-App已装载");
  }
  componentDidUpdate() {
    console.log("调用componentDidUpdate-App已经更新");
  }
  componentWillUnmount() {
    console.log("调用componentWillUnmount,App将要卸载");
  }
  componentWillReceiveProps() {
    console.log("调用componentWillReceiveProps,父组件更新render，props改变");
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Parent />, rootElement);
