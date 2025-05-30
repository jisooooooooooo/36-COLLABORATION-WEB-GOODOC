import { useRef } from 'react';
import { formatTime } from '@/shared/utils/date';
import { useSelectableOption } from '../../hooks/useSelectableOption';
import ChatBubbleBot from './ChatBubbleBot';
import SelectableButton from '../../components/SelectableButton';

interface ChatConsiderationBoxProps {
  onSelect: (value: string) => void;
  disabled?: boolean;
}

const options = ['없음', '임신 가능성', '복약중인 약', '주의할 약', '만성질환', '기타'];

const ChatConsiderationBox: React.FC<ChatConsiderationBoxProps> = ({ onSelect, disabled }) => {
  const timeRef = useRef(formatTime(new Date()));
  const { setSelectedLabel, isSelected } = useSelectableOption('없음');

  const handleSelect = (label: string) => {
    setSelectedLabel(label);
    onSelect(label);
  };

  return (
    <ChatBubbleBot
      message={
        <div className="flex flex-col gap-[1rem]">
          <p className="body-med-14 text-CGray-2 break-keep">
            이 중 제가 고려해야 할 정보가 있을까요? <span className="text-CGray-4">(2/3)</span>
          </p>
          <div className="grid grid-cols-2 gap-[.5rem] p-[.25rem]">
            {options.map(label => (
              <SelectableButton
                key={label}
                label={label}
                isSelected={isSelected(label)}
                onClick={() => !disabled && handleSelect(label)}
              />
            ))}
          </div>
        </div>
      }
      time={timeRef.current}
    />
  );
};

export default ChatConsiderationBox;
