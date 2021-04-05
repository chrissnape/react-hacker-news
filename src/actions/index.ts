import { Dispatch } from 'redux';
import { Post } from '../utils/types';

export const POSTS_GET_REQUEST = 'POSTS_GET_REQUEST';
export const POSTS_GET_SUCCESS = 'POSTS_GET_SUCCESS';
export const POSTS_GET_FAILURE = 'POSTS_GET_FAILURE';
export const getTopPosts = (dispatch: Dispatch) => {
  const error = (err: string) => {
    console.log(err);
    dispatch({ type: POSTS_GET_FAILURE });
  }

  dispatch({ type: POSTS_GET_REQUEST });
  fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then((res: Response) => res.json())
    .then(async (ids: Array<number>) => {
      const slicedIds: Array<number> = ids.slice(0, 10);
      const posts: Array<Post> = [];
      for (const id of slicedIds) {
        await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          .then((response: Response) => response.json())
          .then((post: Post) => posts.push(post))
          .catch((err: string) => {
            error(err);
          });
      }
      dispatch({ type: POSTS_GET_SUCCESS, posts });
    })
    .catch((err: string) => error(err));
};
