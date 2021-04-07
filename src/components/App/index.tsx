import { Component } from 'react';
import moment from 'moment';
import { CommentType, Story } from '../../utils/types';
import PostRow from '../PostRow';
import './style.css';

type Props = {
  comments: Array<CommentType>,
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

type State = {
  openStoryId: number,
}

export default class AppComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      openStoryId: 0,
    };
  }
  
  componentDidMount() {
    this.props.getTopStories();
  }

  getStoryContent = () => {
    const { stories, getCommentsFromIds, topStoriesGetSuccess, topStoriesGetFailure } = this.props;
    if (topStoriesGetSuccess) {
      return (
        stories.map((story: Story): JSX.Element => {
          const { by, id, kids, time, title, score } = story;
          return (
            <div className="stories__post-row" key={id}>
              <PostRow
                title={title}
                score={score}
                dateTime={moment.unix(time).fromNow()}
                author={by}
                kids={kids}
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
