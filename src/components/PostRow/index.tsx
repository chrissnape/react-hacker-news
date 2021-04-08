import { FC, Fragment, useState } from 'react';
import CommentRowBlock from '../CommentRowBlock';
import './style.css';

type Props = {
  title: string,
  score: number,
  dateTime: string,
  author: string,
  kids: Array<number>,
  url: string,
}

const PostRowComponent: FC<Props> = ({title, score, dateTime, author, kids, url}) => {
  const [isOpen, setIsOpen] = useState<boolean>();
  return (
    <Fragment>
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
            <h3
              className="post-row__block__text__title"
              data-testid="title"
              onClick={() => {
                if (kids && kids.length > 0) {
                  setIsOpen(!isOpen);
                }
              }}
            >
              {title}
            </h3>
            <div className="post-row__block__text__sub-title">
              <span>{dateTime}</span> - by <span>{author}</span>
            </div>
          </div>
          <div className="post-row__block__comments">
            <div className="post-row__block__comments__amount">
              {kids ? kids.length : 0}
            </div>
            <div className="post-row__block__comments__label">
              Comments
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <Fragment>
          <div className="post-row__content">
            <div className="post-row__url">
              <a href={url} target="_blank">{url}</a>
            </div>
            <CommentRowBlock ids={kids.slice(0, 3)}/>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default PostRowComponent;
