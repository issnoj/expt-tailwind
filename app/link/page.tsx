import { Display } from '@/components/display';
import { Link1 } from '@/app/link/link-1';
import { Link2 } from '@/app/link/link-2';
import { Link3 } from '@/app/link/link-3';
import { Link4 } from '@/app/link/link-4';
import { Link5 } from '@/app/link/link-5';

export default function Page() {
  return (
    <Display>
      <div className={'flex flex-col gap-10'}>
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
        <Link5 />
      </div>
    </Display>
  );
}
