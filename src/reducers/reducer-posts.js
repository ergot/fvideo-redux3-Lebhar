import {AT_POSTS} from "../actions/action-types";

export default function reducerPosts (state=[], action) {
    switch(action.type){
        case AT_POSTS.READ_ALL_POST:
            return action.payload

        case AT_POSTS.DELETE:
            return state.filter((post)=> {

                if(post.id == action.payload) {
                    return false
                } else {
                    return true;
                }
            })
    }
    return state;
}