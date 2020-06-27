import React , {Component}from 'react';
import Menu from './MenuComponent.js';
import {DISHES} from '../shared/dishes.js';
import Footer from"./FooterComponent";

import Dishdetail from './DishdetailComponent.js';
import Header from"./HeaderComponent";;

class  Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
    sk:"kahaan bhai",
    dishes:DISHES,
    selectedDish:null  
    };
  }
  onDishSelect(dishID){
    this.setState({
      selectedDish:dishID
    });
    console.log("se "+this.state.selectedDish);
  // if(this.state.selectedDish!=null)
 
    //renderDish();
  }
  renderDetails(){
    
    var dish =this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0];
    if(dish==null)
      return (<div></div>);
    console.log("dish id  in renderDetails "+dish.id);
    return (
      <div>
         <Dishdetail 
         dish ={dish}
           />
        </div>
    );
  }
  
render(){ 
  return (
    <div >
      <Header/>
      <Menu dishes={this.state.dishes}
                onClick={(dishID)=>this.onDishSelect(dishID)}
      />
          {this.renderDetails()} 
      <Footer/>
      </div>
   
  );
}
}

export default Main;
