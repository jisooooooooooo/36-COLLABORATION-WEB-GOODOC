import { useRef, useState } from 'react';
import { useUserStartTime } from '../hooks/useUserStartTime';
import { useAutoScrollToBottom } from '../hooks/useAutoScrollToBottom';
import { NOTICE_MESSAGE, START_MESSAGE } from '@shared/constants/chatMessages';
import Alert from '@shared/assets/svg/chatAlert.svg?react';
import ChatWelcomeBox from '@/pages/chat/components/chatBox/ChatWelcomeBox';
import ChatQuestionBox from './chatBox/ChatQuestionBox';
import ChatConsiderationBox from './chatBox/ChatConsiderationBox';
import ChatImageBox from './chatBox/ChatImageBox';
import ChatUser from './user/ChatUser';
import NextQuestionButton from './NextQuestionButton';

interface ChatBodyProps {
  messages: string[];
}

const ChatBody: React.FC<ChatBodyProps> = ({ messages }) => {
  const [chatStep, setChatStep] = useState<'initial' | 'started'>('initial');
  const [showNextQuestion, setShowNextQuestion] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasUploadedImage, setHasUploadedImage] = useState(false);
  const [imageCount, setImageCount] = useState(0);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { getStartTime, setStartTime } = useUserStartTime();

  useAutoScrollToBottom(scrollRef, [
    messages,
    selectedOption,
    hasUploadedImage,
    imageCount,
    showNextQuestion,
  ]);

  const handleStart = () => {
    setStartTime();
    setChatStep('started');
  };

  const handleNextQuestionClick = () => {
    console.log('다음 질문 진행');
  };

  const handleSelectOption = (option: string) => {
    if (!selectedOption) {
      setSelectedOption(option);
    }
  };

  const renderMessages = () =>
    messages.map((msg, idx) => (
      <ChatUser key={`${msg}-${idx}`} message={msg} time={getStartTime()} />
    ));

  const renderQuestionFlow = () => {
    if (!showNextQuestion) return null;

    return (
      <>
        <ChatConsiderationBox onSelect={handleSelectOption} disabled={!!selectedOption} />
        {selectedOption && (
          <>
            <ChatUser message={selectedOption} time={getStartTime()} />
            <ChatImageBox
              onImageUpload={() => setHasUploadedImage(true)}
              onImageCountChange={count => {
                setImageCount(count);
                if (count === 3) console.log('이미지 3장 업로드 완료!');
              }}
            />
            {hasUploadedImage && imageCount < 3 && (
              <NextQuestionButton onClick={handleNextQuestionClick} />
            )}
          </>
        )}
      </>
    );
  };

  const renderChatFlow = () => (
    <>
      <ChatUser message={START_MESSAGE} time={getStartTime()} />
      <ChatQuestionBox />
      {renderMessages()}
      {!showNextQuestion && messages.length > 0 && (
        <NextQuestionButton onClick={() => setShowNextQuestion(true)} />
      )}
      {renderQuestionFlow()}
      <div ref={scrollRef} />
    </>
  );

  return (
    <section className="bg-CGray-8 min-h-full flex flex-col pt-[3.25rem] gap-[1.5rem]">
      <div className="flex items-center py-[.94rem] pl-[1rem] gap-[.25rem]">
        <Alert className="w-[1rem] h-[1rem]" aria-hidden="true" />
        <p className="title-semi-14 text-Mainblue">{NOTICE_MESSAGE}</p>
      </div>

      <ChatWelcomeBox onStart={handleStart} />
      {chatStep === 'started' && renderChatFlow()}
    </section>
  );
};

export default ChatBody;
