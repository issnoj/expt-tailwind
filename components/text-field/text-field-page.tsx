import { Content } from '@/components/ui/content';
import { Board } from '@/components/ui/board';
import { InputEmailSample } from '@/components/text-field/input-email-sample';
import { InputEmailFixedDomainSample } from '@/components/text-field/input-email-fixed-domain-sample';

export const TextFieldPage = () => {
  return (
    <Content title={'Text Field'}>
      <Board title={'メールアドレス'}>
        <InputEmailSample />
      </Board>
      <Board title={'ドメイン固定メールアドレス'}>
        <InputEmailFixedDomainSample />
      </Board>
    </Content>
  );
};
