import { Content } from '@/components/ui/content';
import { Board } from '@/components/ui/board';
import { SimpleChatSample } from '@/components/chat/simple-chat-sample';
import { StandardChatSample } from '@/components/chat/standard-chat-sample';

export const ChatPage = () => {
  return (
    <Content title={'チャット'}>
      <Board
        remark={
          <div>
            <ul>
              <li>・Enter で改行</li>
              <li>・Ctrl + Enter で送信</li>
              <li>・絵文字</li>
              <li>・1つの画像ファイル添付</li>
            </ul>
          </div>
        }
        title={'標準チャット'}
      >
        <StandardChatSample />
      </Board>
      <Board
        remark={
          <div>
            <ul>
              <li>・Enter で送信</li>
              <li>・Shift + Enter で改行</li>
            </ul>
          </div>
        }
        title={'シンプルチャット'}
      >
        <SimpleChatSample />
      </Board>
    </Content>
  );
};
