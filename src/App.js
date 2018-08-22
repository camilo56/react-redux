import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Posts from './control/Posts';
import PostsFrom from './control/PostForm';

class App extends Component {
    constructor(){
        super();
        this.state = {post:[]}
    }

    componentDidMount(){
        return fetch('https://jsonplaceholder.typicode.com/posts')
                .then(post => post.json())
                .then(post => this.setState({post}));
    }

    render() {

        const postItems = this.state.post.map(({id, title, body}) => (
                                                    <div key={id}>
                                                        <h3>{title}</h3>
                                                        <p>{body}</p>
                                                    </div>
                                                ));

        return  <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <Posts/>
                    <PostsFrom/>
                    {postItems}
                </div>
    }
}

export default App;
