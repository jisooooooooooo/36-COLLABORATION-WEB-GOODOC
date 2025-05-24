import ChatConsiderationBox from '../chatBox/ChatConsiderationBox';
import ChatMedicationBox from '../chatBox/ChatMedicationBox';
import ChatImageBox from '../chatBox/ChatImageBox';
import ChatUser from '../user/ChatUser';
import UserMessageList from '../user/UserMessageList';
import NextQuestionButton from '../NextQuestionButton';

import type { Message } from '@/shared/types/chat';

interface QuestionFlowSectionProps {
  showNextQuestion: boolean;
  selectedOption: string | null;
  selectedOptionTime: string;
  phase: 'none' | 'medication' | 'image';
  medicationMessages: Message[];
  hasUploadedImage: boolean;
  imageCount: number;
  onSelectOption: (option: string) => void;
  onNextPhase: () => void;
  onImageUpload: () => void;
  onImageCountChange: (count: number) => void;
  onFilesChange: (files: File[]) => void;
  onSubmit: () => void;
}

const QuestionFlowSection: React.FC<QuestionFlowSectionProps> = ({
  showNextQuestion,
  selectedOption,
  selectedOptionTime,
  phase,
  medicationMessages,
  hasUploadedImage,
  imageCount,
  onSelectOption,
  onNextPhase,
  onImageUpload,
  onImageCountChange,
  onFilesChange,
  onSubmit,
}) => {
  if (!showNextQuestion) return null;

  return (
    <>
      <ChatConsiderationBox onSelect={onSelectOption} disabled={!!selectedOption} />
      {selectedOption && (
        <>
          <ChatUser message={selectedOption} time={selectedOptionTime} />
          <ChatMedicationBox />
          <UserMessageList messages={medicationMessages} type="med" />
          {phase === 'medication' && medicationMessages.length > 0 && (
            <NextQuestionButton onClick={onNextPhase} />
          )}
          {phase === 'image' && (
            <>
              <ChatImageBox
                onImageUpload={onImageUpload}
                onImageCountChange={onImageCountChange}
                onFilesChange={onFilesChange}
                onImmediateSubmit={onSubmit}
              />
              {hasUploadedImage && imageCount < 3 && <NextQuestionButton onClick={onSubmit} />}
            </>
          )}
        </>
      )}
    </>
  );
};

export default QuestionFlowSection;
