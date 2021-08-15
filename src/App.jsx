//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from "axios";


 const testProducts=[
  {name:"pr1"},
  {name:"pr22"},
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
      <div>
        <h3 style={{fontSize:"50px"}} >{this.props.title} </h3>
        <ul>
          {this.props.products.map(pr=><li key={pr.name}><Product name={pr.name}/></li>)}
            {/* alternativa: <li><Product {...pr}/></li> */}
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

/* using ref
class Form extends React.Component{
  productInput=React.createRef();
  //ref is "Reacts way" of id

  render()
  {
    return(
      <form action="" onSubmit={this.handleSubmit}>
        <input 
          ref={this.productInput} 
          type="text" 
          placeholder="which product"
          required
        /> 
        <button>Details</button>
      </form>
    );
  }

    handleSubmit=(event)=>{
      event.preventDefault(); //to avoid page refresh
      console.log(this.productInput.current.value);
  }
}
*/
class Form extends React.Component{
  state={productInput: 'a'}
  render()
  {
    return(
      <form action="" onSubmit={this.handleSubmit}>
        <input 
          value={this.state.productInput} 
          onChange={event=>this.setState( {productInput: event.target.value})}
          type="text" 
          placeholder="which product"
          required
        /> 
        <button>Details</button>
      </form>
    );
  }

    handleSubmit=(event)=>{
      event.preventDefault(); //to avoid page refresh
      console.log(this.state.productInput);
  
      axios.get('https://localhost:5001/product')
        .then(res => this.props.productsChangeCB(res.data));
    }
}

class App extends React.Component{
  /*
    constructor(props){
    super(props)
    this.state={products:testProducts}
  */
  state={products:testProducts};

  logProducts = (ps) =>{
    ps.map(p=>console.log(p));
    this.setState({products: ps});
  } 

  render()
  {
  return (
    <div className="App" height="200">
      <h1 height="200">
          Edit <code>src/App.js</code> and save to reload.
      </h1>
      <DisplayButton/>
      <ProductList title="List of... products!" products={this.state.products}/>
       <Form productsChangeCB={this.logProducts}/>
    </div>
  );
  }
}

export default App;
