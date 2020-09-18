import React, { Component } from 'react';
import logo from './logo.svg';
// import './reset.css';
import './App.css';
import data from './data'
import Header from './Components/Header';
import Card from './Components/Card';
import Menu from './Components/Menu';


class App extends Component{
  constructor(){
    super();

    this.state = {
      data: data,
      currentId: 1
    }
  }

  next = ()=>{
    if(this.state.currentId < this.state.data.length){
      this.setState({currentId: this.state.currentId + 1});
    }
  }

  back = ()=>{
    if(this.state.currentId > 1){
      this.setState({currentId: this.state.currentId - 1});
    }
  }


  
  render(){
    console.log(data)
    return(
      <div className='app'>
        <Header />
        <div className='width-watch'>
          <div className='blank'></div>
          <div className='app-flexbox'>
            <Card id={this.state.currentId} count={this.state.data.length} info={this.state.data[this.state.currentId-1]} />
            <Menu next={this.next} back={this.back} id={this.state.currentId} length={this.state.data.length}/>
          </div>
          <div className='blank'></div>
        </div>
      </div>
    );
  }
}

export default App;
