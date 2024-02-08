import { DetectBreakpoint } from '@/app/detect-breakpoint/detect-breakpoint';
import { Display } from '@/components/display';

export default function Page() {
  return (
    <Display direction={'row'}>
      <DetectBreakpoint />
    </Display>
  );
}
