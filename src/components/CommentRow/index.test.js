import { render, screen } from '@testing-library/react';
import CommentRow from './index';

const props = {
  text: 'React Hacker Comment',
  commentsAmount: 3,
  dateTime: '1 hour ago',
  author: 'Chris Snape',
  kids: [123],
};

test('renders text', () => {
  render(<CommentRow {...props} />);
  const text = screen.getByText(props.text);
  expect(text).toBeInTheDocument();
});

test('renders amount of comments', () => {
  render(<CommentRow {...props} />);
  const commentsAmount = screen.getByText(props.kids.length);
  expect(commentsAmount).toBeInTheDocument();
});

test('renders dateTime', () => {
  render(<CommentRow {...props} />);
  const dateTime = screen.getByText(props.dateTime);
  expect(dateTime).toBeInTheDocument();
});

test('renders name of author', () => {
  render(<CommentRow {...props} />);
  const author = screen.getByText(props.author);
  expect(author).toBeInTheDocument();
});
