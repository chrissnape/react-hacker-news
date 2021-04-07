import { Dispatch } from 'redux';
import { Comment, Story } from '../utils/types';

export const COMMENTS_FROM_IDS_GET_REQUEST = 'COMMENTS_FROM_IDS_GET_REQUEST';
export const COMMENTS_FROM_IDS_GET_SUCCESS = 'COMMENTS_FROM_IDS_GET_SUCCESS';
export const COMMENTS_FROM_IDS_GET_FAILURE = 'COMMENTS_FROM_IDS_GET_FAILURE';
export const getCommentsFromIds = async (dispatch: Dispatch, ids: Array<number>) => {
  dispatch({ type: COMMENTS_FROM_IDS_GET_REQUEST });
  const comments: Array<Comment> = [];
  for (const id of ids) {
    await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then((res: Response) => res.json())
      .then((comment: Comment) => comments.push(comment))
      .catch((err: string) => {
        console.log(err);
        dispatch({ type: COMMENTS_FROM_IDS_GET_FAILURE });
      });
  }
  dispatch({ type: COMMENTS_FROM_IDS_GET_SUCCESS, comments });
};

export const TOP_STORIES_GET_REQUEST = 'TOP_STORIES_GET_REQUEST';
export const TOP_STORIES_GET_SUCCESS = 'TOP_STORIES_GET_SUCCESS';
export const TOP_STORIES_GET_FAILURE = 'TOP_STORIES_GET_FAILURE';
export const getTopStories = (dispatch: Dispatch) => {
  const error = (err: string) => {
    console.log(err);
    dispatch({ type: TOP_STORIES_GET_FAILURE });
  }

  dispatch({ type: TOP_STORIES_GET_REQUEST });
  fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then((res: Response) => res.json())
    .then(async (ids: Array<number>) => {
      const slicedIds: Array<number> = ids.slice(0, 10);
      const stories: Array<Story> = [];
      for (const id of slicedIds) {
        await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          .then((response: Response) => response.json())
          .then((post: Story) => stories.push(post))
          .catch((err: string) => error(err));
      }
      dispatch({ type: TOP_STORIES_GET_SUCCESS, stories });
    })
    .catch((err: string) => error(err));
};
