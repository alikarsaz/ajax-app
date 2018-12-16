import React, { Component } from 'react';
import axios from 'axios'
import './FullPost.css';
// import {withRouter} from 'react-router-dom'

class FullPost extends Component {

    state={
        data:null
    }

    deletePostHandler=() =>{
        axios.delete('/posts/'+this.props.selectedId)
                    .then(response=>{
                        // console.log(response)
                    });
    }
    
    componentDidMount () {
        console.log(this.props)
        if (this.props.match.params.id){
            
            if (!this.state.data || (this.state.data && this.state.data.id!==this.props.match.params.id)){
                axios.get('/posts/'+this.props.match.params.id)
                    .then(response=>{
                        // console.log(response)
                        this.setState({data:response.data})
                    });
            }
        }
    }

    render () {
        let post = <p style={{textAlign:'center'}} >Please select a Post!</p>;

        if(this.props.match.params.id){            
            post=<p style={{textAlign:'center'}} >Loading ... !</p>

        if (this.state.data){
            post = (
                <div className="FullPost">
                    <h1>{this.state.data.title}</h1>
                    <p>{this.state.data.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
    
            );
        }
    }
        return post;
    }
}

export default FullPost;