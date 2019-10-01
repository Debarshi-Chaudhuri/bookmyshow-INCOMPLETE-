import React,{ Component } from "react";
import { genreClick,likeClick } from "../action.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ThumbUpAltRounded from '@material-ui/icons/ThumbUpAltRounded';
const mapStateToProps=(store)=>{
    return({
        movies:store.movies,
        bclick:store.bclick
    })
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({genreClick,likeClick},dispatch)
}
class Homepage extends Component{
    constructor(props){
        super(props)
    }
    click=(event)=>{
        console.log(event.target.name)
        this.props.genreClick(event.target.name);
    }
    like=(item)=>{
        this.props.likeClick(item)
    }
    movie=(item)=>{
        this.props.history.push(`/${item.name}`,item)
    }
    render(){
        return(
            <div>
                <h3>Categories</h3>
                <div style={{display:'inline-flex'}}>
                    <button name='comedy' style={{backgroundColor:'blue',color:'white'}} onClick={this.click}>Comedy</button>
                    <button name='thriller' style={{backgroundColor:'blue',color:'white'}} onClick={this.click}>Thriller</button>
                    <button name='documentary' style={{backgroundColor:'blue',color:'white'}} onClick={this.click}>Documentary</button>
                </div>
                {
                    this.props.bclick &&
                    <div>{
                        this.props.movies.map((item)=>{
                            return (<div style={{display:'inline-flex'}}>
                                <ul style={{width:'250px',fontSize:'13px'}}><img src={item.image} style={{width:'150px',height:'200px',cursor:'pointer'}} onClick={()=>this.movie(item)} />
                                <p style={{width:'200px',textOverflow:'ellipsis',overflow:'hidden',whiteSpace:'nowrap',cursor:'pointer',marginBottom:'-10px'}} onClick={()=>this.movie(item)} >{item.name}</p>
                                <p style={{alignItems:'center',display:'inline-flex'}}><ThumbUpAltRounded onClick={()=>this.like(item)} style={{color:'blue',cursor:'pointer'}}></ThumbUpAltRounded><p style={{marginLeft:'11px'}}>{item.likes}</p></p>
                                </ul>
                            </div>)
                        })
                    }</div>
                }
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Homepage);