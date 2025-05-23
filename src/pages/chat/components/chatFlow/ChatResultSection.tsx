import ChatAnswerBox from '../chatBox/ChatAnswerBox';
import ChatSummaryBox from '../chatBox/ChatSummaryBox';
import ChatLoadingBox from '../chatBox/ChatLoadingBox';

interface ChatResultSectionProps {
  isLoading: boolean;
  chatResult: {
    answer: string;
    summary: string;
    department: string;
  } | null;
}

const ChatResultSection: React.FC<ChatResultSectionProps> = ({ isLoading, chatResult }) => {
  if (isLoading) return <ChatLoadingBox />;

  if (!chatResult) return null;

  return (
    <>
      <ChatAnswerBox answer={chatResult.answer} />
      <ChatSummaryBox summary={chatResult.summary} department={chatResult.department} />
    </>
  );
};

export default ChatResultSection;
