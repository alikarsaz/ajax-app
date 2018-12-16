import React, { Component } from 'react';
import {Route , NavLink, Switch, Redirect}  from 'react-router-dom'
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost'

class Blog extends Component {

    state={
        posts:[],
        postSelectedId:null,
        error:false
    }

   

   

    render () {      

        return (
            <div className='Blog'>
                <header >
                    <nav>
                        <ul>
                            <li><NavLink exact to='/posts' >Posts</NavLink></li>
                            <li>
                                <NavLink to={{
                                pathname:'/newPost',
                                hash:'#submit',
                                search:'?quick-submit=true'
                                }} >New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route  path='/newPost' exact component={NewPost} />
                    <Route  path='/posts'  component={Posts} />
                    <Redirect from=  '/' to ='/posts' />
                </Switch>
                
            </div>
        );
    }
}

export default Blog;