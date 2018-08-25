import {FETCH_POSTS, NEW_POSTS} from "./types";

export const fetchPosts = () => dispatch => fetch('https://jsonplaceholder.typicode.com/posts')
                                                .then(posts => posts.json())
                                                .then(posts => dispatch({
                                                    type: FETCH_POSTS,
                                                    payload: posts
                                                }));

export const createPosts = postData => 
                            dispatch => fetch('https://jsonplaceholder.typicode.com/posts', {
                                                    method: 'POST',
                                                    headers: {'Content-Type': 'application/json'},
                                                    body: JSON.stringify(postData)
                                                })
                                                .then(post => post.json())
                                                .then(post => dispatch({
                                                    type: NEW_POSTS,
                                                    payload: post
                                                }))
