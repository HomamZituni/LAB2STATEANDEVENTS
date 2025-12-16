import { useState } from 'react';
import { TextInput } from '../TextInput/TextInput';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';
import type { CharacterCounterProps, TextStats } from '../../types';
import '../../App.css';

export const CharacterCounter = ({
  minWords,
  maxWords,
  targetReadingTime,
}: CharacterCounterProps) => {
  const [text, setText] = useState('');

  const characterCount = text.length;

  let wordCount = 0;
  if (text.trim() !== '') {
    wordCount = text.trim().split(' ').length;
  }

  const WORDS_PER_MINUTE = 200;
  const readingTime = wordCount / WORDS_PER_MINUTE;

  const stats: TextStats = {
    characterCount,
    wordCount,
    readingTime,
  };

  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  return (
    <div className="character-counter">
      <header className="counter-header">
        <h1>Character Counter</h1>
        <p>Track your writing progress in real-time</p>
      </header>

      <div className="counter-content">
        <TextInput
          onTextChange={handleTextChange}
          placeholder="Start typing your content here..."
          initialValue=""
        />

        <StatsDisplay
          stats={stats}
          minWords={minWords}
          maxWords={maxWords}
          targetReadingTime={targetReadingTime}
        />
      </div>
    </div>
  );
};
