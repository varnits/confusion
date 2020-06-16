import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';
class Dishdetail extends Component{
    constructor(props){
        super(props)
        
    }
//   renderDish(this.props.wassup){

    renderComms(){
        const Comms= this.props.wassup.comments.map(com =>{
            return (
                <div>
                    <div>
                        <h6>{com.comment}</h6>
                    </div>
                    {/* <br></br> */}
                    <div>
                        <h6>-- {com.author},{com.date}</h6>
                    </div>
                    <br></br>
                </div>
            )
        })
        return Comms

    }
    renderDish(){
        return(
            <div>
                <CardTitle>{this.props.wassup.name}</CardTitle>
                <CardText>{this.props.wassup.description}</CardText>
            </div>
        )

    }
    render() {
            return(
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={this.props.wassup.image} alt={this.props.wassup.name} />
                        <CardBody>
                            {this.renderDish()}
                        </CardBody>
                    </Card>
                  </div>
                  <div className="col-12 col-md-5 m-1">
                      <h4>Comments</h4>
                      {/* <h6>{this.props.wassup.comments[0].comment}</h6> */}
                      {this.renderComms()}

                  </div>  
                </div>
                
            );
            
        }

}

export default Dishdetail