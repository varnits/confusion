import React , {Component}from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import { render } from '@testing-library/react';
import Menu from './components/MenuComponent.js';
import Dishdetails from './components/DishdetailComponent.js';

import {DISHES} from './shared/dishes.js';

class  App extends Component{
  constructor(props) {
    super(props);
    this.state = {
    sk:"kahaan bhai",
    dishes:DISHES
    };
  }
render(){ 
  return (
    <div >
    <Navbar dark color ="primary">
      <div className="container">
        <NavbarBrand href ="/">Ristorante con fusion</NavbarBrand>
      </div>
      </Navbar>
      
      <div>

      { this.state.sj}
      </div>
      <Menu dishes={this.state.dishes} />
    </div>
  );
}
}

export default App;
