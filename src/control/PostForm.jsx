import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPosts } from './../actions/postActions'

class PostsFrom extends Component {
    constructor(){
        super();
        this.state = {title: '', bosy: ''}

    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault();

        this.props.createPosts({ title: this.state.title,
                                body: this.state.body})
    }

    render () {
        return  <div>
                    <h1>Add Post</h1>
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <label>Title: </label><br/>
                            <input type="text" name="title" 
                            onChange={this.onChange}
                            value={this.state.title}/>
                        </div>
                        <div>
                            <label>Body: </label><br/>
                            <textarea name="body" onChange={this.onChange}
                            value={this.state.body}/>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
    }
}

export default connect(null, { createPosts })(PostsFrom);