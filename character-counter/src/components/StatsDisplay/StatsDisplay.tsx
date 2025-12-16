import type { StatsDisplayProps } from '../../types';
import '../../App.css'

export const StatsDisplay = ({ 
  stats, 
  showReadingTime = true,
  minWords,
  maxWords,
  targetReadingTime 
}: StatsDisplayProps) => {
  
  // Calculate progress percentage for word count
  const getWordProgress = (): number => {
    if (!maxWords) return 0;
    return Math.min((stats.wordCount / maxWords) * 100, 100);
  };
  
  

  // Determine status for word count goals
 const getWordCountStatus = (): 'below' | 'within' | 'above' | 'none' => {
  if (!minWords && !maxWords) {
    return 'none';
  } else if (minWords && stats.wordCount < minWords) {
    return 'below';
  } else if (maxWords && stats.wordCount > maxWords) {
    return 'above';
  } else {
    return 'within';
  }
};


  const wordStatus = getWordCountStatus();
  const progress = getWordProgress();

  return (
    <div className="stats-display">
      <h2 className="stats-title">Text Statistics</h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Characters</span>
          <span className="stat-value">{stats.characterCount.toLocaleString()}</span>
        </div>

        <div className={`stat-card ${wordStatus !== 'none' ? `status-${wordStatus}` : ''}`}>
          <span className="stat-label">Words</span>
          <span className="stat-value">{stats.wordCount.toLocaleString()}</span>
          {(minWords || maxWords) && (
            <span className="stat-goal">
              {minWords && maxWords 
                ? `Goal: ${minWords}-${maxWords} words`
                : minWords 
                ? `Min: ${minWords} words`
                : `Max: ${maxWords} words`
              }
            </span>
          )}
        </div>

        {showReadingTime && (
          <div className={`stat-card ${targetReadingTime && stats.readingTime > targetReadingTime ? 'status-above' : ''}`}>
            <span className="stat-label">Reading Time</span>
            <span className="stat-value">
              {stats.readingTime < 1 
                ? '< 1 min' 
                : `${Math.round(stats.readingTime)} min`
              }
            </span>
            {targetReadingTime && (
              <span className="stat-goal">Target: {targetReadingTime} min</span>
            )}
          </div>
        )}
      </div>

      {maxWords && (
        <div className="progress-container">
          <div className="progress-label">
            <span>Word Count Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="progress-bar">
            <div 
              className={`progress-fill ${wordStatus === 'above' ? 'over-limit' : ''}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
