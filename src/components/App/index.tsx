import { Component } from 'react';
import moment from 'moment';
import { Story } from '../../utils/types';
import PostRow from '../PostRow';
import './style.css';

type Props = {
  comments: Array<any>,
  commentsFromIdsGetRequest: boolean,
  commentsFromIdsGetSuccess: boolean,
  commentsFromIdsGetFailure: boolean,
  getCommentsFromIds: Function,
  getTopStories: Function,
  stories: Array<Story>,
  topStoriesGetRequest: boolean,
  topStoriesGetSuccess: boolean,
  topStoriesGetFailure: boolean,
}

export default class AppComponent extends Component<Props> {
  componentDidMount() {
    this.props.getTopStories();
  }

  getStoryContent = () => {
    const { stories, getCommentsFromIds, topStoriesGetSuccess, topStoriesGetFailure } = this.props;
    if (topStoriesGetSuccess) {
      return (
        stories.map((story: Story) => {
          const { by, id, kids, time, title, score } = story;
          return (
            <div className="stories__post-row" key={id}>
              <PostRow
                title={title}
                commentsAmount={kids ? kids.length : 0}
                score={score}
                dateTime={moment.unix(time).fromNow()}
                author={by}
                onClick={() => {
                  getCommentsFromIds(kids.slice(0, 3));
                }}
              />
            </div>
          );
        })
      );
    }
    if (topStoriesGetFailure) {
      return (
        <span>Failed to fetch top stories</span>
      );
    }
    return (
      <span>Loading...</span>
    );
  }

  render() {
    return (
      <div className="page">
        <div className="stories">
          {this.getStoryContent()}
        </div>
      </div>
    );
  }
};
