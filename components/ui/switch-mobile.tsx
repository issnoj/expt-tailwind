import { useCallback, useState } from 'react';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';

const _updateClassNames = (elements: Element[], breakpoint: string) => {
  const newOriginalClassNames = new Map<Element, string[]>();
  elements.forEach((element) => {
    const originalClasses = element.className.split(' ');
    newOriginalClassNames.set(element, originalClasses);
    const newClasses = originalClasses.filter(
      (className) =>
        !className.startsWith(`${breakpoint}:`) &&
        !className.startsWith(`dark:${breakpoint}:`),
    );
    element.className = newClasses.join(' ');
  });
  return newOriginalClassNames;
};

type Props = {
  id: string;
  className?: string;
  breakpoint?: string;
};

export const SwitchMobile = ({ id, className, breakpoint = 'lg' }: Props) => {
  const [originalClassNames, setOriginalClassNames] = useState(
    new Map<Element, string[]>(),
  );

  const handleClickSwitch = useCallback(
    (value: boolean) => {
      if (value) {
        const elements = document.querySelectorAll(`#${id} *`);

        // モバイル用のクラス名を持つ要素をすべて取得
        const targetElements = Array.from(elements).filter((element) => {
          return element.className
            .split(' ')
            .some(
              (className) =>
                className.startsWith(`${breakpoint}:`) ||
                className.startsWith(`dark:${breakpoint}:`),
            );
        });

        // なければ終了
        if (targetElements.length === 0) {
          return;
        }

        // モバイル用のクラス名を削除し、元のクラス名を状態に持たせる
        const newOriginalClassNames = _updateClassNames(
          targetElements,
          breakpoint,
        );
        setOriginalClassNames(newOriginalClassNames);
      } else {
        // 元のクラス名に戻す
        originalClassNames.forEach((classes, element) => {
          element.className = classes.join(' ');
        });
        setOriginalClassNames(new Map());
      }
    },
    [breakpoint, id, originalClassNames],
  );

  return (
    <Label
      className={cn(
        'inline-flex cursor-pointer items-center gap-2 text-foreground/60 hover:text-foreground',
        originalClassNames.size > 0 && 'text-foreground',
        className,
      )}
    >
      <Switch onCheckedChange={handleClickSwitch} />
      モバイル表示
    </Label>
  );
};
