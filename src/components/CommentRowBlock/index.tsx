import { Component } from 'react';
import moment from 'moment';
import { CommentType } from '../../utils/types';
import CommentRow from '../CommentRow';
import './style.css';

type Props = {
  ids: Array<number>,
}

type State = {
  comments: Array<CommentType>,
  getRequest: boolean,
  getSuccess: boolean,
  getFailure: boolean,
}

export default class CommentsRowBlockComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      comments: [],
      getRequest: false,
      getSuccess: false,
      getFailure: false,
    };
  }

  async componentDidMount() {
    this.setState({ getRequest: true });
    const comments: Array<CommentType> = [];
    for (const id of this.props.ids) {
      await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then((res: Response) => res.json())
        .then((comment: CommentType) => comments.push(comment))
        .catch((err: string) => {
          console.log(err);
          this.setState({ getRequest: false, getFailure: true });
        });
    }
    this.setState({ getRequest: false, getSuccess: true, comments });
  }

  renderComments = () => {
    const { getSuccess, getFailure } = this.state;
    if (getSuccess) {
      return (
        this.state.comments.map((comment: CommentType): JSX.Element => {
          const { by, kids, time, text } = comment;
          return (
            <div className="comment-row-block__comment-row">
              <CommentRow
                text={text}
                dateTime={moment.unix(time).fromNow()}
                author={by}
                kids={kids}
              />
            </div>
            
          );
        })
      );
    }
    if (getFailure) {
      <span>Failed to fetch comments</span>
    }
    return (
      <span>Fetching comments...</span>
    )
  }

  render = () =>this.renderComments();
};
