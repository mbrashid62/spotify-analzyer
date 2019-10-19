import React, {
  useState,
  useEffect,
} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';
import '../../styles/DialogueBox.scss';

const DialogueBox = ({
  isOpen,
  headerText,
  messageText,
  actionText,
  icon,
  onAction,
  onClose,
}) => {
  const [IconPassed, setIconPassed] = useState();
  const [el, setEl] = useState();
  useEffect(() => {
    if (icon) {
      setIconPassed(icon);
    }
    setTimeout(() => setEl(document.getElementById('root')), 250);
  }, [icon]);
  if (el) {
    return ReactDOM.createPortal(
      <div className={cn('dialogue-box-container', isOpen ? 'open' : 'closed')}>
        <div className="hide-icon-wrapper" onClick={onClose} data-testid="hide-icon-wrapper">
          <span className="hide-icon" />
        </div>
        {IconPassed && (
          <Suspense fallback={<i />}>
            <div className="svg-wrapper" data-testid="svg-wrapper">
              <IconPassed />
            </div>
          </Suspense>
        )}
        <p className="heading">{headerText}</p>
        <p className="subheading">{messageText}</p>
        <div className="action-section">
          <p onClick={onAction}>{actionText}</p>
        </div>
      </div>,
      el,
    );
  }

  return null;
};

DialogueBox.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  headerText: PropTypes.string,
  messageText: PropTypes.string,
  actionText: PropTypes.string,
  icon: PropTypes.object,
  onAction: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

DialogueBox.displayName = 'src/components/Common/DialogueBox';

export default DialogueBox;