import { AnyAction } from 'redux';
import { POSTS_GET_REQUEST, POSTS_GET_SUCCESS, POSTS_GET_FAILURE } from '../actions';

type State = {
  posts: Array<any>,
  getPostsRequest: boolean,
  getPostsSuccess: boolean,
  getPostsFailure: boolean,
};

const initialState: State = {
  posts: [],
  getPostsRequest: false,
  getPostsSuccess: false,
  getPostsFailure: false,
};

export default (state: State = initialState, action: AnyAction) => {
  switch (action.type) {
    case POSTS_GET_REQUEST:
      return {
        ...state,
        getPostsRequest: true,
      }
    
    case POSTS_GET_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        getPostsRequest: false,
        getPostsSuccess: true,
      }

    case POSTS_GET_FAILURE:
      return {
        ...state,
        getPostsRequest: false,
        getPostsFailure: true,
      }

    default:
      return state
  }
};