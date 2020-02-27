import React from 'react';
import logo from './logo.svg';
import './App.css';
import Count from "./components/Count/Count";
import Buttons from "./components/buttons/Buttons";
import Input from "./components/Input/Input";

// function App(props) {
//   console.log(props);
//   props.myFunc();
//   return (
//     <div className="App">
//       <h1>{props.myProps}</h1>
//     </div>
//   );
// }

class App extends React.Component {
  //
  // props.myFunc();
  constructor (props) {
    super(props);
    console.log('constructor');
    console.log(props);
    this.state = {
      count: 0
    };
    // this.handler = this.handler.bind(this)
  }

  // state = {
  //   count: 1
  // };                  //same to constructor

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('prevProps');
    console.log(prevProps);
    console.log('prevState');
    console.log(prevState);
  }

  handler = (num) => {
    let newNum = this.state.count + num;
    this.setState({count: (newNum > 0) ? newNum : 0})
  };

  render() {
    const {myProps} = this.props;
    const {count} = this.state;
    console.log('render');
    return (
        <div className="App">
          <h1>{myProps}</h1>
          <Count count={count}/>
          <Buttons handler={this.handler}/>
          <Input inptHandler={this.handler}/>
        </div>
    );
  }

}

export default App;
