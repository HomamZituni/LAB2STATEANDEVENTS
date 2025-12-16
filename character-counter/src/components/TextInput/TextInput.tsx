import { useState, useCallback } from 'react';
import type { ChangeEvent } from 'react';
import type { TextInputProps } from '../../types';
import '../../App.css';

//Reusable functional component that allows for Text input, current value managed by useState
export const TextInput = ({ 
  onTextChange, 
  placeholder = "Start typing...", 
  initialValue = "",
  maxLength 
}: TextInputProps) => {
  const [text, setText] = useState<string>(initialValue);

  // Use useCallback to prevent unnecessary re-renders in parent
  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    onTextChange(newText);
  }, [onTextChange]);

  return (
    <div className="text-input-container">
      <textarea
        className="text-input"
        value={text}
        onChange={handleChange}
        placeholder={placeholder}
        maxLength={maxLength}
        rows={10}
        aria-label="Text input area"
      />
    </div>
  );
};