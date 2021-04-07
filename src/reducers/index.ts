import { AnyAction } from 'redux';
import { Story } from '../utils/types';
import {
  TOP_STORIES_GET_REQUEST, 
  TOP_STORIES_GET_SUCCESS,
  TOP_STORIES_GET_FAILURE,
  COMMENTS_FROM_IDS_GET_REQUEST,
  COMMENTS_FROM_IDS_GET_SUCCESS,
  COMMENTS_FROM_IDS_GET_FAILURE,
} from '../actions';

type State = {
  comments: Array<any>,
  commentsFromIdsGetRequest: boolean,
  commentsFromIdsGetSuccess: boolean,
  commentsFromIdsGetFailure: boolean,
  stories: Array<Story>,
  topStoriesGetRequest: boolean,
  topStoriesGetSuccess: boolean,
  topStoriesGetFailure: boolean,
};

const initialState: State = {
  comments: [],
  commentsFromIdsGetRequest: false,
  commentsFromIdsGetSuccess: false,
  commentsFromIdsGetFailure: false,
  stories: [],
  topStoriesGetRequest: false,
  topStoriesGetSuccess: false,
  topStoriesGetFailure: false,
};

const reducer = (state: State = initialState, action: AnyAction) => {
  switch (action.type) {
    case TOP_STORIES_GET_REQUEST:
      return {
        ...state,
        topStoriesGetRequest: true,
      }
    
    case TOP_STORIES_GET_SUCCESS:
      return {
        ...state,
        stories: action.stories,
        topStoriesGetRequest: false,
        topStoriesGetSuccess: true,
      }

    case TOP_STORIES_GET_FAILURE:
      return {
        ...state,
        topStoriesGetRequest: false,
        topStoriesGetFailure: true,
      }

    case COMMENTS_FROM_IDS_GET_REQUEST:
      return {
        ...state,
        commentsFromIdsGetRequest: true,
      }
    
    case COMMENTS_FROM_IDS_GET_SUCCESS:
      return {
        ...state,
        comments : action.comments ,
        commentsFromIdsGetRequest: false,
        commentsFromIdsGetSuccess: true,
      }

    case COMMENTS_FROM_IDS_GET_FAILURE:
      return {
        ...state,
        commentsFromIdsGetRequest: false,
        commentsFromIdsGetFailure: true,
      }

    default:
      return state
  }
};

export default reducer;
