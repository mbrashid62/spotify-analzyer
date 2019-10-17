import React, {
  useState,
  useEffect,
} from 'react';
import DialogueBox from './Generic/DialogueBox';

const SecurityDialogue = ({
  isOpen,
  headerText,
  messageText,
  actionText,
  icon,
  onAction,
  onClose,
}) => {
  const [showDialouge, setShowDialogue] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowDialogue(true), 500);
  }, []);

  return (
      <DialogueBox
        isOpen={showDialouge}
        headerText="Welcome!"
        messageText="You will be asked to login into Spotify. Your data is completely secure."
        actionText="Okay"
        onAction={() => setShowDialogue(false)}
        onClose={() => setShowDialogue(false)}
    />
  );
};

SecurityDialogue.displayName = 'src/components/Common/DialogueBox';

export default SecurityDialogue;