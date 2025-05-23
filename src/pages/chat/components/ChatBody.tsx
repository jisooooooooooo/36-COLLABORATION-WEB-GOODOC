import { useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { useUserStartTime } from '../hooks/useUserStartTime';
import { useAutoScrollToBottom } from '../hooks/useAutoScrollToBottom';
import { useChatMessageManager } from '../hooks/useChatMessageManager';

import { NOTICE_MESSAGE, START_MESSAGE } from '@shared/constants/chatMessages';
import { postChat } from '@/shared/apis/chat/chatApi';
import { handleApiError } from '@/shared/apis/chat/errorHandler';

import ChatWelcomeBox from '@/pages/chat/components/chatBox/ChatWelcomeBox';
import ChatQuestionBox from './chatBox/ChatQuestionBox';
import QuestionFlowSection from './chatFlow/QuestionFlowSection';
import ChatResultSection from './chatFlow/ChatResultSection';
import UserMessageList from './user/UserMessageList';
import ChatUser from './user/ChatUser';
import NextQuestionButton from './NextQuestionButton';
import Alert from '@shared/assets/svg/chatAlert.svg?react';

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
  const [phase, setPhase] = useState<'none' | 'medication' | 'image'>('none');
  const [hasUploadedImage, setHasUploadedImage] = useState(false);
  const [imageCount, setImageCount] = useState(0);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [chatResult, setChatResult] = useState<ChatResponse | null>(null);
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { getStartTime, setStartTime, getCurrentTime } = useUserStartTime();
  const { initialMessages, medicationMessages } = useChatMessageManager(messages, phase);
  useAutoScrollToBottom(scrollRef, [
    initialMessages,
    medicationMessages,
    selectedOption,
    hasUploadedImage,
    imageCount,
    showNextQuestion,
    phase,
    chatResult,
    isLoadingAnswer,
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

  const handleNextPhase = () => {
    if (phase === 'medication') {
      setPhase('image');
    }
  };

  const handleSubmit = () => {
    if (!selectedOption || (initialMessages.length === 0 && medicationMessages.length === 0))
      return;
    mutation.mutate({
      question: [...initialMessages, ...medicationMessages].map(m => m.text).join('\n'),
      detail: selectedOption,
      files: imageFiles,
    });
  };

  const handleSelectOption = (option: string) => {
    if (!selectedOption) {
      setSelectedOption(option);
      setSelectedOptionTime(getCurrentTime());
      setPhase('medication');
    }
  };

  const renderChatFlow = () => (
    <>
      <ChatUser message={START_MESSAGE} time={getStartTime()} />
      <ChatQuestionBox />
      <UserMessageList messages={initialMessages} type="init" />
      {!showNextQuestion && initialMessages.length > 0 && (
        <NextQuestionButton onClick={() => setShowNextQuestion(true)} />
      )}
      <QuestionFlowSection
        showNextQuestion={showNextQuestion}
        selectedOption={selectedOption}
        selectedOptionTime={selectedOptionTime}
        phase={phase}
        medicationMessages={medicationMessages}
        hasUploadedImage={hasUploadedImage}
        imageCount={imageCount}
        onSelectOption={handleSelectOption}
        onNextPhase={handleNextPhase}
        onImageUpload={() => setHasUploadedImage(true)}
        onImageCountChange={setImageCount}
        onFilesChange={setImageFiles}
        onSubmit={handleSubmit}
      />
      <ChatResultSection isLoading={isLoadingAnswer} chatResult={chatResult} />

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
