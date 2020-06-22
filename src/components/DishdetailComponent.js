import React from 'react';
import{Card, CardImg,CardText,CardBody,CardTitle}from 'reactstrap';

   function  RenderDish({dish}){
        console.log("dsa render Dish "+ dish.id)

        if(dish!=null)
       return (
            <div> 
        

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
    function RenderComments({dish}){
        console.log("dsa render dish " +dish.id)
           
        if (dish != null){
        var comments=dish.comments;
        const com = comments.map(comment => {
            var date=new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'})
                        .format(new Date(Date.parse(comment.date)));
            return (
             <div key={comment.id}>
                <li >
                    <p>{comment.comment}</p>
                    <p>-- {comment.author} ,
                        {date}
                   
                   
                    </p>
                </li>
             </div > 
            )
        });
        return (
            <div >
                <h4> Comments </h4>
                <ul className='list-unstyled'  >
                    {com}
                </ul>

            </div>
        )
        
        } 
  }   
  
    const Dishdetail=(props)=>{
    //    this.updateDish()
        console.log("Dishdetail "+props.dish.id);
       return (
        <div className="container">
          
            <div className="row" >
                <div className="col-12 col-md-5 m-1" >
                    <RenderDish dish={props.dish}/>
                </div> 
                <div className="col-12 col-md-5 m-1" >
                <RenderComments dish={props.dish}/>
                </div> 
            </div>

        </div>
            );
    }            
export default Dishdetail;