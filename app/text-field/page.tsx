import { Content } from '@/components/layouts/content';
import { Board } from '@/components/layouts/board';
import { InputEmailSample } from '@/app/text-field/input-email-sample';
import { InputEmailFixedDomainSample } from '@/app/text-field/input-email-fixed-domain-sample';
import { InputPasswordSample } from '@/app/text-field/input-password-sample';
import { InputOtpSample } from '@/app/text-field/input-otp-sample';
import { LinedMultilineSample } from '@/app/text-field/lined-multiline-sample';

const Page = async () => {
  return (
    <Content title={'テキスト入力'}>
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
      <Board className={'max-w-max'} title={'ワンタイムパスワード'}>
        <InputOtpSample expireAt={new Date(Date.now() + 1000 * 10)} />
      </Board>
      <Board className={'max-w-max'} title={'罫線付きテキストエリア'}>
        <LinedMultilineSample />
      </Board>
    </Content>
  );
};

export default Page;
