import { FC, MouseEventHandler } from 'react';
import './style.css';

type Props = {
  title: string,
  commentsAmount: number,
  score: number,
  dateTime: string,
  author: string,
  onClick: MouseEventHandler,
}

const PostRowComponent: FC<Props> = ({title, commentsAmount, score, dateTime, author, onClick}) => (
  <div className="post-row">
    <div className="post-row__score">
      <div className="post-row__score__amount">
        {score}
      </div>
      <div className="post-row__score__label">
        Points
      </div>
    </div>
    <div className="post-row__block">
      <div className="post-row__block__text">
        <div className="post-row__block__text__title" data-testid="title" onClick={onClick}>
          {title}
        </div>
        <div className="post-row__block__text__sub-title">
          <span>{dateTime}</span> - by <span>{author}</span>
        </div>
      </div>
      <div className="post-row__block__comments">
        <div className="post-row__block__comments__amount">
          {commentsAmount}
        </div>
        <div className="post-row__block__comments__label">
          Comments
        </div>
      </div>
    </div>
  </div>
);

export default PostRowComponent;