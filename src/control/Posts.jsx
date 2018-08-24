import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchPosts} from './../actions/postActions';

class Posts extends Component {

    componentDidMount(){
        this.props.fetchPosts();
    }

    render () {
        return (
            <div>
                <h1>Post</h1>
                {console.log(this.props)}
                {this.props.posts.map(({id, title, body}) => <div key={id}>
                                                                <h3>{title}</h3>
                                                                <p>{body}</p>
                                                            </div>)}
            </div>
        )
    }
}

const mapStateToPRops = state => ({
    posts: state.posts.items
});

export default connect(mapStateToPRops, {fetchPosts})(Posts);