import { AnyAction } from 'redux';
import { Story } from '../utils/types';
import {
  TOP_STORIES_GET_REQUEST, 
  TOP_STORIES_GET_SUCCESS,
  TOP_STORIES_GET_FAILURE,
} from '../actions';

type State = {
  stories: Array<Story>,
  topStoriesGetRequest: boolean,
  topStoriesGetSuccess: boolean,
  topStoriesGetFailure: boolean,
};

const initialState: State = {
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

    default:
      return state
  }
};

export default reducer;
