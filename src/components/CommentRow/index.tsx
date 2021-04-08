import { FC, Fragment, useState } from 'react';
import CommentRowBlock from '../CommentRowBlock';
import './style.css';

type Props = {
  text: string,
  dateTime: string,
  author: string,
  kids: Array<number>,
}

const CommentRowComponent: FC<Props> = ({text, dateTime, author, kids}) => {
  const [isOpen, setIsOpen] = useState<boolean>();
  return (
    <Fragment>
      <div className="comment-row">
        <div className="comment-row__text">
          <div className="comment-row__text__sub-title">
            <span>{dateTime}</span> - by <span>{author}</span>
          </div>
          <div className="comment-row__text__html">
            <div dangerouslySetInnerHTML={{__html: text}} />
          </div>
          {(kids && kids.length > 0) && (
            <div
              className="comment-row__text__continue"
              data-testid="text"
              onClick={() => setIsOpen(!isOpen)}
            >
              {!isOpen ? 'Read comments' : 'Close'}
            </div>
          )}
        </div>
        <div className="comment-row__comments">
          <div className="comment-row__comments__amount">
            {kids ? kids.length : 0}
          </div>
          <div className="comment-row__comments__label">
            Comments
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="comment-row-block">
          <CommentRowBlock ids={kids.slice(0, 3)}/></div>
        )
      }
    </Fragment>
  );
}

export default CommentRowComponent;
