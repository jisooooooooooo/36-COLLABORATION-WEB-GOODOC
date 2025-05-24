import { useMutation } from '@tanstack/react-query';
import { postChat } from '@/shared/apis/chat/chatApi';
import type { ChatResponse, ChatRequest } from '@/shared/apis/chat/chatApi';
import { handleApiError } from '@/shared/apis/chat/errorHandler';
import { useState } from 'react';

export const useChatMutation = () => {
  const [chatResult, setChatResult] = useState<ChatResponse | null>(null);

  const mutation = useMutation<ChatResponse, Error, ChatRequest>({
    mutationFn: postChat,
    onSuccess: data => {
      setChatResult(data);
    },
    onError: handleApiError,
  });

  return { mutation, chatResult };
};
