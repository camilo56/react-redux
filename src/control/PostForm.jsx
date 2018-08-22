import React, { Component } from 'react'

class PostsFrom extends Component {
    constructor(){
        super();
        this.state = {title: '', bosy: ''}

    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render () {
        return  <div>
                    <h1>Add Post</h1>
                    <from>
                        <div>
                            <label>Title: </label><br/>
                            <input type="text" name="title" 
                            onChange={this.onChange}
                            value={this.state.title}/>
                        </div>
                        <div>
                            <label>Body: </label><br/>
                            <textarea name="body"/>
                        </div>
                        <button type="submit">Submit</button>
                    </from>
                </div>
    }
}

export default PostsFrom