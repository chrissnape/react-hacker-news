import React, { Component } from 'react';
import moment from 'moment';
import { Post } from '../../utils/types';
import PostRow from '../PostRow';
import './style.css';

type Props = {
  posts: Array<any>,
  getPostsRequest: boolean,
  getPostsSuccess: boolean,
  getPostsFailure: boolean,
  getTopPosts: Function,
}

export default class AppComponent extends Component<Props> {
  componentDidMount() {
    this.props.getTopPosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <div className="posts">
        {posts.map((post: Post) => {
          const { title, descendants, score, time, by } = post;
          return (
            <div className="posts__post-row">
              <PostRow
                title={title}
                commentsAmount={descendants}
                score={score}
                dateTime={moment.unix(time).fromNow()}
                author={by}
                onClick={() => { console.log('hello') }}
              />
            </div>
          );
        })}
      </div>
    );
  }
};

