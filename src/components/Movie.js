import React,{ Component } from "react";
import { likeClick } from "../action.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ThumbUpAltRounded from '@material-ui/icons/ThumbUpAltRounded';
import { Button } from "@material-ui/core";
import firebase from "../firebase";
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({likeClick},dispatch)
}
class Movie extends Component{
    constructor(props){
        super(props)
        this.movielist=this.props.location.state;
    }
    like=(item)=>{
        this.props.likeClick(item)
    }
    book=()=>{
        const auth=firebase.auth();
        console.log(auth)
    }
    render(){
        return(
            <div>
               <div style={{display:'inline-flex'}}>
                    <ul style={{width:'250px',fontSize:'13px'}}><img src={this.movielist.image} style={{width:'150px',height:'200px',cursor:'pointer'}} />
                    <p style={{width:'200px',textOverflow:'ellipsis',overflow:'hidden',whiteSpace:'nowrap',cursor:'pointer'}}  >{this.movielist.name}</p>
                    <p style={{alignItems:'center',display:'inline-flex'}}><ThumbUpAltRounded onClick={()=>this.like(this.movielist)} style={{color:'blue'}}></ThumbUpAltRounded><p style={{marginLeft:'11px'}}>{this.movielist.likes}</p></p>
                    <p style={{fontSize:'15px',width:'400px'}}>{this.movielist.description}</p>
                    <Button style={{backgroundColor:'blue',color:'white'}} onClick={this.book}>Book Tickets</Button>
                    </ul>
                </div>
            </div>
        )
    }
}
export default connect(null,mapDispatchToProps)(Movie);