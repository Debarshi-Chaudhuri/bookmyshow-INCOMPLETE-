import React,{ Component } from "react";
import { genreClick } from "../action.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
const mapStateToProps=(store)=>{
    return({
        movies:store.movies,
        bclick:store.bclick
    })
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({genreClick},dispatch)
}
class Homepage extends Component{
    click=(event)=>{
        console.log(event.target.name)
        this.props.genreClick(event.target.name);
        console.log(this.props.movies)
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
                    this.props.bclick ?
                    <div>{
                        this.props.movies.map((item)=>{
                            console.log(item)
                            return (<p>{item.description}</p>)
                        })
                    }</div>:<p>O</p>
                }
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Homepage);