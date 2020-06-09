import React , {Component}from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent.js';
class  App extends Component{
render(){ 
  return (
    <div >
    <Navbar dark color ="primary">
      <div className="container">
        <NavbarBrand href ="/">Ristorante con fusion</NavbarBrand>
      </div>
      </Navbar>
      <Menu/>
    </div>
  );
}
}

export default App;
