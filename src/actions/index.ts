import { Dispatch } from 'redux';
import { Story } from '../utils/types';

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
