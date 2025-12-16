import { useState } from 'react';
import type { TextInputProps } from '../../types';
import '../../App.css';

export const TextInput = ({
  onTextChange,
  placeholder = 'Start typing...',
  initialValue = '',
  maxLength,
}: TextInputProps) => {
  const [text, setText] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);
    onTextChange(value);
  };

  return (
    <div className="text-input-container">
      <textarea
        className="text-input"
        value={text}
        onChange={handleChange}
        placeholder={placeholder}
        maxLength={maxLength}
        rows={10}
      />
    </div>
  );
};
