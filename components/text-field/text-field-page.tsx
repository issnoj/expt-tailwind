import { Content } from '@/components/ui/content';
import { Board } from '@/components/ui/board';
import { InputEmailSample } from '@/components/text-field/input-email-sample';
import { InputEmailFixedDomainSample } from '@/components/text-field/input-email-fixed-domain-sample';
import { InputPasswordSample } from '@/components/text-field/input-password-sample';

export const TextFieldPage = () => {
  return (
    <Content title={'Text Field'}>
      <div className={'flex flex-wrap gap-20'}>
        <Board title={'メールアドレス'}>
          <InputEmailSample />
        </Board>
        <Board title={'ドメイン固定メールアドレス'}>
          <InputEmailFixedDomainSample />
        </Board>
      </div>
      <Board className={'max-w-max'} title={'パスワード'}>
        <InputPasswordSample />
      </Board>
    </Content>
  );
};
