import { createBrowserRouter } from 'react-router-dom';
import ChatPage from '@/pages/chat/page/ChatPage';
import QnAList from '@/pages/qna/qnaList/components/QnA/QnAList';
import QnaDetail from '@/pages/qna/qnaDetail/page/QnaDetail';

const router = createBrowserRouter([
  {
    // 메인 페이지로 변경
    path: '/',
    // element: < />,
  },
  {
    // 메뉴 페이지로 변경
    path: '/menu',
    // element: < />,
  },
  {
    path: '/chat',
    element: <ChatPage />,
  },
  {
    path: '/qua',
    element: <QnAList />,
  },
  {
    path: '/qua/:id',
    element: <QnaDetail />,
  },
]);

export default router;
