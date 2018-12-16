import React , {Component} from 'react'
import Post from '../../../components/Post/Post'
import axios from 'axios'
import './Posts.css'
import {Route} from 'react-router-dom'
import FullPost from '../FullPost/FullPost'

class Posts extends Component{

    state={
        posts:[],
        postSelectedId:null,
        error:false
    }

    componentDidMount(){
        axios.get('/posts')
            .then(response=>{
                const posts=response.data.slice(0,4)
                const updatedPosts=posts.map(post=>{
                    return {
                        ...post, author:'Max'
                    }
                }
                )
                // console.log(response)
                this.setState({posts:updatedPosts});
            }).catch(error =>{
                this.setState({error:true})
                console.log(error)
            })
           
            
            // console.log(this.props)
    }

    postSelectedHandler(id){
        // console.log(this.props)
        this.props.history.push( this.props.match.url+'/'+id )
    }

    render(){

        let posts=<p style={{textAlign:'center'}}>Something went wrong!</p>
        if (!this.state.error){
            posts = this.state.posts.map(post=>{ 
            return  ( 
                // <Link 
                //     to={'/' + post.id}    >
                    <Post  
                            key={post.id}
                            title={post.title}  
                            author={post.author}
                            clicked={()=>this.postSelectedHandler(post.id)} />
                // </Link>
                    
            )})
        }

        return(
            <div>
                 <section className="Posts">
                   {posts}
                </section>
                <section>
                    <Route  path='/posts/:id' exact component={FullPost} />
                </section>
            </div>
           
        )
    }
}
export default Posts;