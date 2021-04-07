import { fireEvent, render, screen } from '@testing-library/react';
import Modal from './index';

const props = {
  onClick: () => {},
};

test('fires onClick when button pressed', () => {
  render(<Modal {...props} />);
  fireEvent.click(screen.getByTestId('close'), props.onClick);
});
