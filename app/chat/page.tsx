import { Content } from '@/components/ui/content';
import { StandardChatSample } from '@/app/chat/standard-chat-sample';
import { SimpleChatSample } from '@/app/chat/simple-chat-sample';
import { Sample } from '@/components/sample';

const Page = async () => {
  return (
    <Content title={'チャット'}>
      <Sample>
        <StandardChatSample />
      </Sample>
      <Sample>
        <SimpleChatSample />
      </Sample>
    </Content>
  );
};

export default Page;
