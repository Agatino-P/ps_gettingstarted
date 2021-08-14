//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const testProducts=[
  {name:"pr1"},
  {name:"pr2"},
  {name:"pr3"}
];


function Button(props)
{
  const handleClick=()=>props.onClickFunc(props.increment);
  return (
    <button onClick={handleClick}>
    +{props.increment}
  </button>
  );
}

function Display(props)
{
  return(
    <div>{props.message}</div>
    );
  }
  
  function DisplayButton()
  {
  const [counter, setCounter] = useState(0);
  const incrementCounterFunction = (i)=> setCounter(counter+i);
  return(
    <div>
        <Button onClickFunc={incrementCounterFunction} increment={1}/>
        <Button onClickFunc={incrementCounterFunction} increment={2}/>
        <Button onClickFunc={incrementCounterFunction} increment={5}/>
        <Button onClickFunc={incrementCounterFunction} increment={10}/>
        <Display message={counter}/>
    </div>    
  );
}  

class ProductList extends React.Component{
  render(){
    return(
      <div style={{fontSize:"50"}}>
        <h3 style={{fontSize:"50px"}} >{this.props.title} </h3>
        <ul>
        <li><Product {...testProducts[0]}/></li>
          <li><Product {...testProducts[1]}/></li>
          <li><Product name="2"/></li>
          <li><Product name="3"/></li>
        </ul>
      </div>
    );
  }
}

class Product extends React.Component{
  render()
  {
    return(
      <div>
      Product: {this.props.name}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App" height="200">
      <h1 height="200">
          Edit <code>src/App.js</code> and save to reload.
      </h1>
      <DisplayButton/>
      <ProductList title="List of... products!"/>
       
    </div>
  );
}

export default App;
