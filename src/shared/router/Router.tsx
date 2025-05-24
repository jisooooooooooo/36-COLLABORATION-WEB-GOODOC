import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@/pages/main/page/MainPage';
import MenuPage from '@/pages/menu/page/MenuPage';
import ChatPage from '@/pages/chat/page/ChatPage';
import QnADetail from '@/pages/qna/qnaDetail/page/QnaDetail';
import QnALayout from '@/pages/qna/page/QnALayout';
import QnAMy from '@/pages/qna/qnaMy/page/QnAMy';
import QnAHome from '@/pages/qna/qnaList/page/QnAHome';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/menu',
    element: <MenuPage />,
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
        element: <QnADetail />,
      },
      {
        path: 'my',
        element: <QnAMy />,
      },
    ],
  },
]);

export default router;
