import { useCallback, useState } from 'react';

export type Message = {
  content: string;
  createdAt: Date;
  files?: string[];
};

export const useChat = () => {
  const [loading, setLoading] = useState(false);

  const append = useCallback((message: Message) => {
    console.log(message);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return {
    append,
    loading,
    setLoading,
  };
};
