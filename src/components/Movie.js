import React,{ Component } from "react";
import { clickBookTicket } from "../action.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ThumbUpAltRounded from '@material-ui/icons/ThumbUpAltRounded';
import { Button } from "@material-ui/core";
import firebase from "../firebase";
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({clickBookTicket},dispatch)
}
class Movie extends Component{
    constructor(props){
        super(props)
        this.movielist=this.props.location.state;
        this.state={email:'',onclick:false}
    }
    change=(event)=>{
        this.setState({email:event.target.value})
    }
    submit=(email)=>{
        this.props.clickBookTicket(email);
        this.setState({email:''})
    }
    book=()=>{
        this.setState({onclick:true})
    }
    render(){
        return(
            <div>
               <div style={{display:'inline-flex'}}>
                    <ul style={{width:'250px',fontSize:'13px'}}><img src={this.movielist.image} style={{width:'150px',height:'200px',cursor:'pointer'}} />
                    <h3 style={{width:'200px',textOverflow:'ellipsis',overflow:'hidden',whiteSpace:'nowrap',cursor:'pointer',marginBottom:'-10px'}}  >{this.movielist.name}</h3>
                    <p style={{fontSize:'15px',width:'400px'}}>{this.movielist.description}</p>
                    <Button style={{backgroundColor:'blue',color:'white'}} onClick={this.book}>Book Tickets</Button>
                    { this.state.onclick &&
                    <div>
                        <input type='email' style={{width:'200px',height:'30px'}} onChange={this.change} value={this.state.email} />
                        <Button style={{backgroundColor:'blue',color:'white'}} onClick={()=>this.submit(this.state.email)}>Submit</Button>
                    </div>
                    }
                    </ul>
                </div>
            </div>
        )
    }
}
export default connect(null,mapDispatchToProps)(Movie);