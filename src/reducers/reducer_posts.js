import _ from "lodash";
import { FETCH_POSTS } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
    // turning the array of posts (see http://reduxblog.herokuapp.com/)
    // into an object where the keys are the posts id:
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}