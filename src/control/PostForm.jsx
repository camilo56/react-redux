import React, { Component } from 'react'

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

        const post = {
            title: this.state.title,
            body: this.state.body,
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post)
        })
        .then(info => info.json())
        .then(info => console.log(info))
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

export default PostsFrom