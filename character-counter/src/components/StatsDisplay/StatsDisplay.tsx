import type { StatsDisplayProps } from '../../types';
import '../../App.css';

export const StatsDisplay = ({
  stats,
  showReadingTime = true,
  minWords,
  maxWords,
  targetReadingTime,
}: StatsDisplayProps) => {

  let wordStatus = 'none';

  if (minWords && stats.wordCount < minWords) {
    wordStatus = 'below';
  } else if (maxWords && stats.wordCount > maxWords) {
    wordStatus = 'above';
  } else if (minWords || maxWords) {
    wordStatus = 'within';
  }

  let progress = 0;
  if (maxWords) {
    progress = (stats.wordCount / maxWords) * 100;
    if (progress > 100) {
      progress = 100;
    }
  }

  return (
    <div className="stats-display">
      <h2 className="stats-title">Text Statistics</h2>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Characters</span>
          <span className="stat-value">{stats.characterCount}</span>
        </div>

        <div className={`stat-card ${wordStatus !== 'none' ? `status-${wordStatus}` : ''}`}>
          <span className="stat-label">Words</span>
          <span className="stat-value">{stats.wordCount}</span>

          {(minWords || maxWords) && (
            <span className="stat-goal">
              {minWords && maxWords && `Goal: ${minWords} - ${maxWords} words`}
              {minWords && !maxWords && `Min: ${minWords} words`}
              {!minWords && maxWords && `Max: ${maxWords} words`}
            </span>
          )}
        </div>

        {showReadingTime && (
          <div className="stat-card">
            <span className="stat-label">Reading Time</span>
            <span className="stat-value">
              {stats.readingTime < 1 ? '< 1 min' : `${Math.round(stats.readingTime)} min`}
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
            <span>Word Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

