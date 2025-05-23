import { useRef, useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useUserStartTime } from '../hooks/useUserStartTime';
import { useAutoScrollToBottom } from '../hooks/useAutoScrollToBottom';
import { NOTICE_MESSAGE, START_MESSAGE } from '@shared/constants/chatMessages';
import { postChat } from '@/shared/apis/chat/chatApi';
import { handleApiError } from '@/shared/apis/chat/errorHandler';

import Alert from '@shared/assets/svg/chatAlert.svg?react';
import ChatWelcomeBox from '@/pages/chat/components/chatBox/ChatWelcomeBox';
import ChatQuestionBox from './chatBox/ChatQuestionBox';
import ChatConsiderationBox from './chatBox/ChatConsiderationBox';
import ChatImageBox from './chatBox/ChatImageBox';
import ChatUser from './user/ChatUser';
import NextQuestionButton from './NextQuestionButton';
import ChatAnswerBox from './chatBox/ChatAnswerBox';
import ChatSummaryBox from './chatBox/ChatSummaryBox';
import ChatLoadingBox from './chatBox/ChatLoadingBox';

interface Message {
  text: string;
  timestamp: string;
}

interface ChatResponse {
  answer: string;
  summary: string;
  department: string;
}

interface ChatBodyProps {
  messages: string[];
}

const ChatBody: React.FC<ChatBodyProps> = ({ messages }) => {
  const [chatStep, setChatStep] = useState<'initial' | 'started'>('initial');
  const [showNextQuestion, setShowNextQuestion] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedOptionTime, setSelectedOptionTime] = useState<string>('');
  const [hasUploadedImage, setHasUploadedImage] = useState(false);
  const [imageCount, setImageCount] = useState(0);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [formattedMessages, setFormattedMessages] = useState<Message[]>([]);
  const [chatResult, setChatResult] = useState<ChatResponse | null>(null);
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false);
  const prevMessagesLengthRef = useRef<number>(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { getStartTime, setStartTime, getCurrentTime } = useUserStartTime();

  useAutoScrollToBottom(scrollRef, [
    formattedMessages,
    selectedOption,
    hasUploadedImage,
    imageCount,
    showNextQuestion,
    chatResult,
  ]);

  const mutation = useMutation({
    mutationFn: postChat,
    onMutate: () => {
      setIsLoadingAnswer(true);
      setChatResult(null);
    },
    onSuccess: data => {
      setChatResult(data);
      setIsLoadingAnswer(false);
    },
    onError: error => {
      handleApiError(error);
      setIsLoadingAnswer(false);
    },
  });

  const handleStart = () => {
    setStartTime();
    setChatStep('started');
  };

  const handleNextQuestionClick = () => {
    if (!selectedOption || formattedMessages.length === 0) {
      return;
    }
    mutation.mutate({
      question: formattedMessages.map(m => m.text).join('\n'),
      detail: selectedOption,
      files: imageFiles,
    });
  };

  const handleSelectOption = (option: string) => {
    if (!selectedOption) {
      setSelectedOption(option);
      setSelectedOptionTime(getCurrentTime());
    }
  };

  useEffect(() => {
    if (messages.length > prevMessagesLengthRef.current) {
      const newMessages = messages.slice(prevMessagesLengthRef.current);
      const newFormattedMessages = newMessages.map(msg => ({
        text: msg,
        timestamp: getCurrentTime(),
      }));

      setFormattedMessages(prev => [...prev, ...newFormattedMessages]);
      prevMessagesLengthRef.current = messages.length;
    }
  }, [messages, getCurrentTime]);

  const renderMessages = () =>
    formattedMessages.map((msg, idx) => (
      <ChatUser key={`${msg.text}-${idx}`} message={msg.text} time={msg.timestamp} />
    ));

  const renderQuestionFlow = () => {
    if (!showNextQuestion) return null;

    return (
      <>
        <ChatConsiderationBox onSelect={handleSelectOption} disabled={!!selectedOption} />
        {selectedOption && (
          <>
            <ChatUser message={selectedOption} time={selectedOptionTime} />
            <ChatImageBox
              onImageUpload={() => setHasUploadedImage(true)}
              onImageCountChange={count => setImageCount(count)}
              onFilesChange={setImageFiles}
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

      {!showNextQuestion && formattedMessages.length > 0 && (
        <NextQuestionButton onClick={() => setShowNextQuestion(true)} />
      )}

      {renderQuestionFlow()}

      {isLoadingAnswer && <ChatLoadingBox />}

      {!isLoadingAnswer && chatResult && (
        <>
          <ChatAnswerBox answer={chatResult.answer} />
          <ChatSummaryBox summary={chatResult.summary} department={chatResult.department} />
        </>
      )}

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
