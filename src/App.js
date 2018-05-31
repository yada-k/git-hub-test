import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// App4
import { Sub } from './sub.js'

// Welcome to React
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <App2 />
        <App3 />
        <App4 />
        <App5 />
      </div>
    );
  }
}

// カウントアップ
class App2 extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }
  render(){
    return(
      <div>
        App2:
        <span>{this.state.count}</span>
        <button onClick={this.handleClick.bind(this)}>+</button>
      </div>
    );
  }
}

// いいねカウンター
class App3 extends React.Component {
  constructor() {
    super()
    this.state = {
      like: false,
      count: 100
    }
  }
  handleClick() {
    this.setState({
      count: this.state.count + (this.state.like ? -1 : 1),
      like: !this.state.like
    })
  }
  render(){
    var text;
    if (this.state.like === false){
      text = "+"
    } else {
      text = "-"
    }
    return(
      <div>
        App3:
        <span>{this.state.count}</span>
        <button onClick={this.handleClick.bind(this)}>{text}</button>
      </div>
    )
  }
}

// App4 親と子コンポーネントに分けてファイルも分けてみる
class App4 extends React.Component{
  render(){
    return(
      <div>
        <Sub text="child-1" />
        <Sub text="child-2" />
      </div>
    )
  }
}

// App5 GitHubからリストを取得する
const REQUEST_URL = 'https://api.github.com/users/yada-k/repos'

class App5 extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        data: responseData,
      })
    })
  }

  render(){
    return(
      <ul>
        APIからのデータ取得・表示
        {this.state.data.map((item) => {
          return (
            <li key={item.id}>{item.name}</li>
          )
        })
        }
      </ul>
    )
  }
}

export default App;