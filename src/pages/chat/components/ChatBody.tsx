import { useRef, useState } from 'react';
import { useUserStartTime } from '../hooks/useUserStartTime';
import { useAutoScrollToBottom } from '../hooks/useAutoScrollToBottom';
import Alert from '@shared/assets/svg/chatAlert.svg?react';
import ChatWelcomeBox from '@/pages/chat/components/chatBox/ChatWelcomeBox';
import ChatQuestionBox from './chatBox/ChatQuestionBox';
import ChatUser from './user/ChatUser';
import ChatConsiderationBox from './chatBox/ChatConsiderationBox';
import ChatImageBox from './chatBox/ChatImageBox';
import NextQuestionButton from './NextQuestionButton';

interface ChatBodyProps {
  messages: string[];
}

const NOTICE_MESSAGE = '익명으로 공개하니 안심하세요';

const ChatBody: React.FC<ChatBodyProps> = ({ messages }) => {
  const [chatStep, setChatStep] = useState<'initial' | 'started'>('initial');
  const [showNextQuestion, setShowNextQuestion] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showImageBox, setShowImageBox] = useState(false);
  const [hasUploadedImage, setHasUploadedImage] = useState(false);
  const [imageCount, setImageCount] = useState(0);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { getStartTime, setStartTime } = useUserStartTime();

  const handleStart = () => {
    setStartTime();
    setChatStep('started');
  };

  useAutoScrollToBottom(scrollRef, [
    messages,
    selectedOption,
    hasUploadedImage,
    imageCount,
    showImageBox,
    showNextQuestion,
  ]);

  const handleNextQuestionClick = () => {
    console.log('다음 질문 진행');
  };

  return (
    <section className="bg-CGray-8 min-h-full flex flex-col pt-[3.25rem] gap-[1.5rem]">
      <div className="flex items-center py-[.94rem] pl-[1rem] gap-[.25rem]">
        <Alert className="w-[1rem] h-[1rem]" aria-hidden="true" />
        <p className="title-semi-14 text-Mainblue">{NOTICE_MESSAGE}</p>
      </div>

      <ChatWelcomeBox onStart={handleStart} />

      {chatStep === 'started' && (
        <>
          <ChatUser message="상담 시작하기" time={getStartTime()} />
          <ChatQuestionBox />

          {[...messages].map((msg, idx) => (
            <ChatUser key={idx} message={msg} time={getStartTime()} />
          ))}

          {!showNextQuestion && messages.length > 0 && (
            <NextQuestionButton onClick={() => setShowNextQuestion(true)} />
          )}

          {showNextQuestion && (
            <ChatConsiderationBox
              onSelect={option => {
                if (!selectedOption) {
                  setSelectedOption(option);
                  setTimeout(() => setShowImageBox(true), 500);
                }
              }}
              disabled={!!selectedOption}
            />
          )}

          {selectedOption && <ChatUser message={selectedOption} time={getStartTime()} />}

          {showImageBox && (
            <>
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

          <div ref={scrollRef} />
        </>
      )}
    </section>
  );
};

export default ChatBody;
