import {FETCH_POSTS, NEW_POSTS} from "./types";

export const fetchPosts = () => dispatch => fetch('https://jsonplaceholder.typicode.com/posts')
                                                .then(posts => posts.json())
                                                .then(posts => dispatch({
                                                    type: FETCH_POSTS,
                                                    payload: posts
                                                }));
