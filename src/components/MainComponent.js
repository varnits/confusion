import React , {Component}from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent.js';
import {DISHES} from '../shared/dishes.js';
import {COMMENTS} from '../shared/comments.js';
import {LEADERS} from '../shared/leaders.js';
import {PROMOTIONS} from '../shared/promotions.js';

import Contact from './ContactComponent';
import Footer from"./FooterComponent";

import {Switch,Route, Redirect, BrowserRouter} from 'react-router-dom';
import Dishdetail from './DishdetailComponent.js';

import Header from"./HeaderComponent";;

class  Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
    sk:"kahaan bhai",
    dishes:DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS,
    };
  }
  // onDishSelect(dishID){
  //   this.setState({
  //     selectedDish:dishID
  //   });
  //   console.log("se "+this.state.selectedDish);
  // // if(this.state.selectedDish!=null)
 
  //   //renderDish();
  // }
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
//   <Menu dishes={this.state.dishes}
//   onClick={(dishID)=>this.onDishSelect(dishID)}
// />
// {this.renderDetails()} 
render(){ 
  const HomePage=()=>{
    return (
      <div>
    <Home dish ={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo)=> promo.featured)[0]}
          leader={this.state.leaders.filter((leader)=> leader.featured)[0]}
    />
      </div>
    )
   }
  return (
    <div >
      <BrowserRouter>
      <Header/>
      
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component ={()=> <Menu dishes={this.state.dishes}/> }/>
          <Route exact path='/contactus' component={Contact}  />

          <Redirect to ="/home"/>
        </Switch>
      <Footer/>

      </BrowserRouter> 
      </div>
   
  );
}
}

export default Main;
