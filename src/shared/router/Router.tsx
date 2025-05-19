import { createBrowserRouter } from 'react-router-dom';
import ChatPage from '@/pages/chat/page/ChatPage';
import QnaDetail from '@/pages/qna/qnaDetail/page/QnaDetail';
import QnALayout from '@/pages/qna/page/QnALayout';
import QnAMy from '@/pages/qna/qnaMy/page/QnAMy';
import QnAHome from '@/pages/qna/qnaList/page/QnAHome';

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
    path: '/qna',
    element: <QnALayout />,
    children: [
      {
        index: true, // 기본 하위 라우트
        element: <QnAHome />,
      },
      {
        path: ':id',
        element: <QnaDetail />,
      },
      {
        path: 'my',
        element: <QnAMy />,
      },
    ],
  },
]);

export default router;
