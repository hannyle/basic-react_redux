const initState = {
    posts: [
        {id: "1", title: "Post A", body: "This is post A"},
        {id: "2", title: "Post B", body: "This is post B"},
        {id: "3", title: "Post C", body: "This is post C"}
    ]
};
const rootReducer = (state = initState, action) => {
    if(action.type === "DELETE_POST"){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id;
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;