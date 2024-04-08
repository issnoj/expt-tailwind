import TextareaAutosize from 'react-textarea-autosize';
import { Button } from '@/components/ui/button';
import {
  Paperclip,
  SendHorizontal,
  Smile,
  LucideLoader,
  X,
} from 'lucide-react';
import { useRef, useState } from 'react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Control, Controller, UseFormTrigger } from 'react-hook-form';
import { StandardChatSampleFormData } from '@/app/chat/standard-chat-sample';
import { cn } from '@/lib/utils';

export type SelectedFile = {
  file: File;
  dataUrl: string;
  loading: boolean;
};

type Emoji = {
  id: string;
  name: string;
  native: string;
  keywords: string[];
  shortcodes: string;
  skin: number;
  aliases: string[];
};

export type InputStandardChatProps = {
  getMessage: () => string;
  setMessage: (value: string) => void;
  onSubmit: () => void;
  disabledInput: boolean;
  disabledButton: boolean;
  control: Control<StandardChatSampleFormData>;
  trigger: UseFormTrigger<StandardChatSampleFormData>;
  onChangeFile: (
    file: File | undefined,
    callback?: (success: boolean) => void,
  ) => void;
};

export const InputStandardChat = ({
  getMessage,
  setMessage,
  onSubmit,
  disabledInput,
  disabledButton,
  control,
  trigger,
  onChangeFile,
}: InputStandardChatProps) => {
  const { theme } = useTheme();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isOpenEmojiPicker, setIsOpenEmojiPicker] = useState(false);
  const [selectedFile, setSelectedFile] = useState<SelectedFile>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.ctrlKey && !e.nativeEvent.isComposing) {
      onSubmit();
      e.preventDefault();
    }
  };

  const handleOpenChangeEmojiPicker = (open: boolean) => {
    setIsOpenEmojiPicker(open);
  };

  const handleEmojiSelect = (emoji: Emoji) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const text = emoji.native;
    const message = getMessage();
    const { selectionStart, selectionEnd } = textarea;
    const newValue =
      message.substring(0, selectionStart) +
      emoji.native +
      message.substring(selectionEnd);
    setMessage(newValue);
    setIsOpenEmojiPicker(false);
    setTimeout(() => {
      textarea.focus();
      textarea.selectionStart = textarea.selectionEnd =
        selectionStart + text.length;
    }, 200);
  };

  const handleChangeFile = async (fileList: FileList | null) => {
    const validationPassed = await trigger('file');
    if (!validationPassed) {
      return;
    }
    if (!fileList || fileList.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    const file = fileList[0];
    setSelectedFile({
      file,
      dataUrl: URL.createObjectURL(file),
      loading: true,
    });
    onChangeFile(file, (success: boolean) => {
      if (!success) {
        handleDeleteFile();
        return;
      }
      setSelectedFile((prev) => {
        if (!prev) return;
        return { ...prev, loading: false };
      });
    });
  };

  const handleDeleteFile = () => {
    setSelectedFile(undefined);
    onChangeFile(undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div
      className={
        'flex flex-col overflow-hidden rounded border bg-background shadow focus-within:border-primary'
      }
    >
      <FormField
        control={control}
        name={'message'}
        render={({ field }) => (
          <FormItem className={'flex flex-col space-y-0'}>
            <FormControl>
              <TextareaAutosize
                autoComplete="off"
                autoCorrect="off"
                className={cn(
                  'max-h-[calc(50vh-56px)] w-full resize-none border-0 bg-transparent p-4 focus:outline-0 focus-visible:outline-0',
                )}
                disabled={disabledInput}
                onKeyDown={handleKeyDown}
                placeholder="Send a message"
                rows={1}
                spellCheck={false}
                {...field}
                ref={textareaRef}
              />
            </FormControl>
            <FormMessage className={'px-4 pb-4'} />
          </FormItem>
        )}
      />
      {selectedFile && (
        <div className={'flex px-4 pb-4'}>
          <div className={'relative'}>
            <div className={'ml-4 mt-4 overflow-hidden rounded border shadow'}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={''}
                className={cn(
                  'h-[150px]',
                  selectedFile.loading && 'opacity-50',
                )}
                src={selectedFile.dataUrl}
              />
            </div>
            {selectedFile.loading && (
              <LucideLoader className={'absolute left-0 top-0 animate-spin'} />
            )}
            {!selectedFile.loading && (
              <Button
                className={'absolute left-0 top-0 size-8 rounded-full'}
                onClick={handleDeleteFile}
                size={'icon'}
                type={'button'}
                variant={'outline'}
              >
                <X size={'1.2rem'} />
              </Button>
            )}
          </div>
        </div>
      )}
      <FormField
        control={control}
        name="file"
        render={() => <FormMessage className={'px-4 pb-4'} />}
      />
      <div className={'flex justify-between bg-secondary p-2'}>
        <div className={'flex gap-1'}>
          <DropdownMenu
            onOpenChange={handleOpenChangeEmojiPicker}
            open={isOpenEmojiPicker}
          >
            <DropdownMenuTrigger asChild>
              <Button
                className={
                  'rounded-full border-0 bg-secondary hover:bg-background focus-visible:ring-offset-0'
                }
                disabled={disabledInput}
                size="icon"
                variant={'outline'}
              >
                <Smile />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className={'border-none bg-transparent shadow-none'}
            >
              <Picker
                data={data}
                onEmojiSelect={handleEmojiSelect}
                theme={theme}
              />
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            className={
              'rounded-full border-0 bg-secondary hover:bg-background focus-visible:ring-offset-0'
            }
            disabled={disabledInput}
            size="icon"
            type={'button'}
            variant={'outline'}
          >
            <label
              className={
                'flex size-full cursor-pointer items-center justify-center'
              }
            >
              <Paperclip />
              <Controller
                control={control}
                name={'file'}
                render={({ field }) => (
                  <input
                    className={'hidden'}
                    disabled={disabledInput}
                    name={'file'}
                    onChange={(e) => {
                      field.onChange(e.target.files);
                      handleChangeFile(e.target.files);
                    }}
                    ref={fileInputRef}
                    type={'file'}
                  />
                )}
              />
            </label>
          </Button>
        </div>
        <Button disabled={disabledButton}>
          <SendHorizontal className={'mr-3'} />
          Send
        </Button>
      </div>
    </div>
  );
};
