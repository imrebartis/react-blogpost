import _ from "lodash";
import { FETCH_POSTS, FETCH_POST } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
    // const post = action.payload.data;
    // const newState = { ...state };
    // newState[post.id] = post;
    // return newState;

    // [action.payload.data.id] is key interpolation
    // (= whatever action.payload.data.id is, make
    // a new key on this value + set
    // its value to action.payload.data )
    return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
    // turning the array of posts (see http://reduxblog.herokuapp.com/)
    // into an object where the keys are the posts id:
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}