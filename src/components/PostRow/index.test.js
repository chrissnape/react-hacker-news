import { fireEvent, render, screen } from '@testing-library/react';
import PostRow from './index';

const props = {
  title: 'React Hacker News',
  commentsAmount: 15,
  score: 111,
  dateTime: '1 hour ago',
  author: 'Chris Snape',
  onClick: () => {},
};

test('renders title', () => {
  render(<PostRow {...props} />);
  const title = screen.getByText(props.title);
  expect(title).toBeInTheDocument();
});

test('renders amount of comments', () => {
  render(<PostRow {...props} />);
  const commentsAmount = screen.getByText(props.commentsAmount);
  expect(commentsAmount).toBeInTheDocument();
});

test('renders score', () => {
  render(<PostRow {...props} />);
  const score = screen.getByText(props.score);
  expect(score).toBeInTheDocument();
});

test('renders dateTime', () => {
  render(<PostRow {...props} />);
  const dateTime = screen.getByText(props.dateTime);
  expect(dateTime).toBeInTheDocument();
});

test('renders name of author', () => {
  render(<PostRow {...props} />);
  const author = screen.getByText(props.author);
  expect(author).toBeInTheDocument();
});

test('fires onClick when button pressed', () => {
  render(<PostRow {...props} />);
  fireEvent.click(screen.getByTestId('button'), props.onClick);
});
