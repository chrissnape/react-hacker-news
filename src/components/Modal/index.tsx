import { FC, MouseEventHandler } from 'react';
import './style.css';

type Props = {
  children: JSX.Element,
  onClose: MouseEventHandler,
}

const ModalComponent: FC<Props> = ({children, onClose}) => (
  <div className="modal">
    <div className="modal__content">
      <div className="modal__content__close" data-testid="close" onClick={onClose}>
        X
      </div>
      <div className="modal__content__children">
        {children}
      </div>
    </div>
  </div>
);

export default ModalComponent;