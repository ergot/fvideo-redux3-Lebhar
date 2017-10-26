import {AT_POSTS} from "../actions/action-types";

export default function reducerPosts (state=[], action) {
    switch(action.type){
        case AT_POSTS.READ_ALL_POST:
            return action.payload
    }
    return state;
}