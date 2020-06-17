import React, { Component } from 'react';
import{Card, CardImg,CardImgOverlay,CardText,CardBody,CardTitle}from 'reactstrap';
class Dishdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            dish:this.props.dish
            
        };
    }
    renderDish(dish){
       
          return (
            <div > 
        

            <Card>
               <CardImg width='100%' object src={dish.image} alt={dish.name} />
                <CardBody>
                       <CardTitle>{dish.name} 
                        </CardTitle>
                        <CardText>{dish.description}</CardText>
                   </CardBody>          
                   
            </Card>
            </div> 
          );
        
    }   
    renderComments(comments){

        if (comments == null) {
            return (<div></div>)
        }
        const com = comments.map(comment => {
       
            return (
             <div >
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}
                   
                   
                    </p>
                </li>
             </div > 
            )
        });
        return (
            <div >
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {com}
                </ul>

            </div>
        )
        
      
  }   
    render() {
       
       return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1" >
                    {this.renderDish(this.state.dish)}
                </div> 
                <div className="col-12 col-md-5 m-1" >
                    {this.renderComments(this.state.dish.comments)}
                </div> 
            </div>

        </div>
            );
    }     
}        
export default Dishdetail;